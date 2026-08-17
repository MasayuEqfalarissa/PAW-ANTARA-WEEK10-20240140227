const express = require('express');
const router = express.Router();
const validateChatInput = require('../middlewares/validateChatInput.middleware');
const chatController = require("../controllers/chat.controller");

// endpoint public, user gak perlu login buat nanya ke CS bot
router.post("/", validateChatInput, chatController.handleChat);

router.get("/history", chatController.getChatHistory);

module.exports = router;
