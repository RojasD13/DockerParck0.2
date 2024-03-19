const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/');
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
        req.filename = uniqueName;
    }
});

const upload = multer({ storage });

app.post('/upload', upload.single('imagen'), (req, res) => {
    const fileUrl = `http://localhost:${port}/static/${req.filename}`;
    res.status(200).json({fileUrl});
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});