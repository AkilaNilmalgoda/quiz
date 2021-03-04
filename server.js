const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect database
connectDB();

//Init Middleware
app.use(express.json({extended: false}))

app.get('/', (req, res) => res.json({msg : 'Hello'}));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/sessions', require('./routes/sessions'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));  