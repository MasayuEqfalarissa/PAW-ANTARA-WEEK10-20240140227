const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Chat = sequelize.define(
  "Chat",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    session_id: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Penanda sesi percakapan/user",
    },
    sender: {
      type: DataTypes.ENUM("user", "bot"),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    allow_history: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      comment: "Persetujuan simpan riwayat dari user",
    },
  },
  {
    tableName: "chats",
    timestamps: true,
  }
);

module.exports = Chat;