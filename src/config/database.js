import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_URI;

mongoose.set('strictQuery', true);
mongoose.connect(uri)
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.error('Erro ao conectar MongoDB:', err));
