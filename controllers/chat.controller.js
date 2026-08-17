const { Chat } = require("../models");
const geminiService = require("../services/gemini.service");
const sendResponse = require("../utils/response");

// POST /api/chat -> Kirim pertanyaan ke bot & simpan riwayat jika diizinkan
async function handleChat(req, res) {
  try {
    const { message, allow_history = false, session_id = "default_session" } = req.body;

    if (!message) {
      return sendResponse(res, {
        code: 400,
        success: false,
        message: "Pesan tidak boleh kosong",
      });
    }

    // Panggil fungsi askGemini dari service dosen
    const botReply = await geminiService.askGemini(message);

    // Simpan riwayat HANYA jika user menyetujui (allow_history === true)
    if (allow_history) {
      await Chat.create({
        session_id,
        sender: "user",
        message,
        allow_history,
      });

      await Chat.create({
        session_id,
        sender: "bot",
        message: botReply,
        allow_history,
      });
    }

    return sendResponse(res, {
      message: "Respon bot berhasil didapatkan",
      data: {
        reply: botReply,
        history_saved: allow_history,
      },
    });
  } catch (err) {
    return sendResponse(res, {
      code: 500,
      success: false,
      message: err.message,
    });
  }
}

// GET /api/chat/history -> Ambil daftar riwayat percakapan
async function getChatHistory(req, res) {
  try {
    const { session_id = "default_session" } = req.query;

    const history = await Chat.findAll({
      where: { session_id, allow_history: true },
      order: [["createdAt", "ASC"]],
    });

    return sendResponse(res, {
      message: "Berhasil mengambil riwayat percakapan",
      data: history,
    });
  } catch (err) {
    return sendResponse(res, {
      code: 500,
      success: false,
      message: err.message,
    });
  }
}

module.exports = {
  handleChat,
  getChatHistory,
};