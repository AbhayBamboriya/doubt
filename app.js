const express=require('express')
const app=express();
const authRouter=require('./router/authRoute')
// parsing the data converting data to json
app.use(express.json()) 
app.use('/api/auth/signup',authRouter)


app.use('/s',(req,res)=>{
    res.status(200).json({data:'JWTauth server-updated.'});
})


module.exports=app;