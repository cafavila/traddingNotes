import fs from 'fs'
import csv from 'csv-parser'
import mongoose from 'mongoose'
import Data from './models/trades.js'
import dotenv from 'dotenv'
import toTrades from './middleware/toTrades.js'
dotenv.config()

// Conéctate a MongoDB
const mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

const results = [];

// Lee el archivo CSV y convierte a JSON
fs.createReadStream(process.env.FILE_UPLOAD)
  .pipe(csv({separator: ';'}))
  .on('data', (data) => results.push(data))  // Guarda cada fila como objeto en el array 'results'
  .on('end', () => {
//    console.log('CSV procesado:', results);
    const newTrades = new toTrades(results).toTrackRecord()
    // Insertar los datos en MongoDB
    Data.insertMany(newTrades)
      .then(() => {
        console.log('Datos insertados en MongoDB');
        mongoose.connection.close(); // Cierra la conexión
      })
      .catch((err) => {
        console.error('Error al insertar datos en MongoDB:', err);
      });
  });
