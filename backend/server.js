const express=require('express');
require('dotenv').config()
const workoutRoutes=require('./routes/workouts')
const mongoose=require('mongoose')

//express app
const app=express();


//middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path,req.method);
    next();
})

//Routes
app.use('/api/workouts',workoutRoutes)
workoutRoutes.get('/')

//Connect to database
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true})
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('Connected to DB and listening on port '+process.env.PORT);
    })
})

.catch((error)=>{
    console.log(error);
})

