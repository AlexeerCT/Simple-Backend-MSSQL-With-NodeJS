import app from './app'
import { getConnection } from './database'
import {config as dotenv} from 'dotenv';
dotenv();

getConnection();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server: ' + process.env.DB_SERVER);
  console.log('User: ' + process.env.DB_USER);
  console.log('Database: ' + process.env.DB_NAME);
  
  // console.log(process.env.DB_PASSWORD);
  console.log(`App running on port ${PORT}`);
});