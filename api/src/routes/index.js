const express = require("express");
const router = express.Router();
const axios = require("axios");
const FormData = require('form-data');
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });
const Vehiculo = require('../schemas/VehiculoSchema')
const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
const Registry = client.Registry;
const register = new Registry();

collectDefaultMetrics();

router.get('/metrics', async (_req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (err) {
    res.status(500).end(err);
  }
});

router.get("/", async (req, res) => {
  try {
    Vehiculo.find().then(vehiculos => { res.status(200).json(vehiculos) })
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

router.post("/add", upload.single("imagen"), async (req, res) => {
  try {
    const { file } = req;
    const { placa, color, hora } = req.body;
    var form = new FormData();
    form.append('image', file.buffer, { filename: file.originalname });

    const options = {
      method: 'POST',
      url: 'https://api.imgbb.com/1/upload',
      params: { key: 'f910c979d4694de054e4f35ac1b5d27f' },
      headers: { 'content-type': 'multipart/form-data' },
      data: form
    };

    axios.request(options).then((response) => {
      const { data: result } = response;
      const fileUrl = result.data.image.url;
      const v1 = new Vehiculo({ placa, color, hora, pathImage: fileUrl });
      v1.save().then(v => {
        res.status(200).json(v);
      });
    }).catch((error) => {
      console.log(error)
      res.status(500).send(error);
    });

  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
});

router.delete("/:placa", async (req, res) => {
  try {
    const { placa } = req.params;
    Vehiculo.findOneAndDelete({ placa }).then(() => {
    res.sendStatus(200);
    });
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

module.exports = router;