import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URL) return console.log('MONGODB_URL not fount');
  if (isConnected) return console.log('already connectes to MongoDB');

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
