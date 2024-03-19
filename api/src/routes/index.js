const express = require("express");
const router = express.Router();
const axios = require("axios");
const CDN_URL = process.env.CDN_URL || "http://localhost:3000/upload";
const DB_URL = process.env.DB_URL || "http://localhost:3600";

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/", async (req, res) => {
  try {
    const cars = (await axios.get(DB_URL)).data;
    res.json(cars);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

router.post("/add", upload.single("imagen"), async (req, res) => {
  try {
    const { placa, color, hora } = req.body;
    const formData = new FormData();
    formData.append(
      "imagen",
      new File([req.file.buffer], req.file.originalname)
    );
    const pathImage = (
      await axios.post(CDN_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
    ).data.fileUrl;
    const body = { placa, color, hora, pathImage };
    await axios.post(DB_URL + "/add", body);
    res.sendStatus(200);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

router.delete("/:placa", async (req, res) => {
  try {
    const { placa } = req.params;
    await axios.delete(DB_URL + "/" + placa);
    res.sendStatus(200);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

module.exports = router;