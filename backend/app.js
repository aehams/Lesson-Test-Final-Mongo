const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // استيراد مكتبة CORS
const { logger, morganMiddleware } = require('./utils/logger');

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(morganMiddleware);
app.use(cors());  // إضافة CORS لجميع الطلبات من أي مصدر

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => logger.info('✅ MongoDB'))
  .catch(err => logger.error('❌ MongoDB', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => logger.info(`🚀 PORT ${PORT}`));
