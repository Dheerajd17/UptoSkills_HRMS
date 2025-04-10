import connectDB from './mongodb.js';

async function testConnection() {
  try {
    const conn = await connectDB();
    console.log('MongoDB connected successfully!');
    process.exit(0);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

testConnection();