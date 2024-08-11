import morgan from 'morgan';    
import cors from 'cors';
import express from 'express';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import {options} from './sawggerOptions';
const specs = swaggerJSDoc(options);

import studentsRoutes from './routes/Students';



const app = express();


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(studentsRoutes)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

export default app;