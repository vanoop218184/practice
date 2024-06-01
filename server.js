import  express  from "express";
const app=express();

import bodyParser from "body-parser"
app.use(bodyParser.json());
const PORT=process.env.PORT ||3000;
app.listen(PORT,()=>{
  console.log('listening at port 3000');
})