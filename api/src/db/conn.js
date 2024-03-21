const mongoose = require('mongoose');

async function connectDB() {
    try {
        // Establecer conexión a la base de datos MongoDB
        await mongoose.connect('mongodb+srv://a123:a123@clusterrojasd.2ukbh5v.mongodb.net/?retryWrites=true&w=majority&appName=ClusterRojasD', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión a la base de datos exitosa.');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
        process.exit(1); // Salir de la aplicación con código de error
    }
}

module.exports = connectDB;
