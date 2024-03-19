const express = require('express');
const app = express();
let data = [];
const port= process.env.PORT || 3600

app.use(express.json());

app.get('/', (req, res) => {
    res.send(data);
    
});

app.post('/add', (req, res) => {
    const { placa, color, hora, pathImage } = req.body;
    data.push({ placa, color, hora, pathImage});
    res.sendStatus(200);
});


app.delete('/:placa', (req, res) => {
    const { placa } = req.params;
    data = data.filter(x => x.placa !== placa);
    res.sendStatus(200);
});

app.listen(port, () =>  {
    console.log('Server on port ', port);
});