import dotenv from 'dotenv';
import "./db";
import app from './app';

dotenv.config();

import "./models/User";

const PORT = process.env.PORTED || 4000;

const handleListening = () => {
    console.log(`Listening on http://localholst:${PORT}`);
};

app.listen(PORT, handleListening);