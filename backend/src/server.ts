import connectToDatabase from './models/db';
import app from './app';

const PORT = process.env.PORT || 3001;

const main = async () => {
  await connectToDatabase();
  app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
}; 

main();