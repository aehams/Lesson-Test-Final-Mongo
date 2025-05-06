const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // إذا كنت تستخدم .env

const app = express();

// ✅ فعل CORS
app.use(cors({
    origin: 'http://localhost:5173', // السماح للفرونت إند
    credentials: true
  }));
  
// Body parser
app.use(express.json());

// routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Connect to MongoDB Compass (local)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB (Compass)');
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.error('❌ MongoDB connection failed:', err));
