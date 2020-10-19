const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//port assigned
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

//Route 
let taskRouter = require('./routes/task_routes')
app.use('/tasks', taskRouter)

app.listen(port, ()=>{
    console.log('Spun up at port:', port);
})