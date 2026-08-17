## Kontrak API
##  POST /api/chat
* **URL:** `http://localhost:3000/api/chat`
* **Method:** `POST`
* **Request Body:**
  ```json
  {
    "message": "kaos polos harganya berapa?",
    "allow_history": true,
    "session_id": "user_123"
  }
* **response:** 
    {
    "code": 200,
    "success": true,
    "message": "Respon bot berhasil didapatkan",
    "data": {
    "reply": "Halo! Selamat datang di Toko Kita. \n\nUntuk  Kaos Polos Cotton Combed, harganya adalah Rp75.000. Stok saat ini masih tersedia sebanyak 50 pcs. Bahannya dari cotton combed 30s yang adem dan sangat cocok buat dipakai sehari-hari. \n\nAda produk lain dari toko kami yang ingin kamu tanyakan?",
        "history_saved": true
    }
    }   


## GET /api/chat
* **URL:** `http://localhost:3000/api/chat/history?session_id=user_123`
* **Method:** `GET`
* **Request Body:**
  ```json
  "code": 200,
    "success": true,
    "message": "Berhasil mengambil riwayat percakapan",
    "data": 
        {
            "id": 1,
            "session_id": "user_123",
            "sender": "user",
            "message": "kaos polos harganya berapa?",
            "allow_history": true,
            "createdAt": "2026-08-17T13:51:51.474Z",
            "updatedAt": "2026-08-17T13:51:51.474Z"
        },
        {
            "id": 2,
            "session_id": "user_123",
            "sender": "bot",
            "message": "Halo! Untuk **Kaos Polos Cotton Combed**, harganya adalah Rp75.000. Kaos ini berbahan cotton combed 30s yang adem dan sangat nyaman untuk digunakan sehari-hari. Stoknya saat ini masih tersedia 50 pcs. Apakah ada yang ingin ditanyakan lagi atau ada produk lain yang ingin dilihat? 😊",
            "allow_history": true,
            "createdAt": "2026-08-17T13:51:51.584Z",
            "updatedAt": "2026-08-17T13:51:51.584Z"
        }