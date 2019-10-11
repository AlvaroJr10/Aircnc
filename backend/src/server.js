const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');
    
const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-6qpx6.mongodb.net/Omnistack09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);


app.listen(3333);

