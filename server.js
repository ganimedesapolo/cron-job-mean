const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')
const cors = require('cors');
const path = require('path')

dotenv.config({path: './config/config.env'})

connectDB();


const tasks = require('./routes/tasks');

const app = express();

app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'));
   }

app.use('/api/v1/tasks', tasks)

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/dist/angular-crash'))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'dist/angular-crash', 'index.html')));
}



app.get('/', (req, res) => res.send('holaa'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
