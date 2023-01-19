import mongoose from 'mongoose';

const MONGO_DB_URL = process.env.MONGO_URI || 'mongodb://localhost:27017/App';

mongoose.set('strictQuery', false);

const connectToDatabase = async (mongoDatabaseURI = MONGO_DB_URL) => {
  try {
    await mongoose.connect(mongoDatabaseURI);
    await mongoose.connection.db.dropCollection('users');
    await mongoose.connection.db.createCollection('users');
  } catch (error) {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  }
};

export default connectToDatabase;
