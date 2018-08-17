const express = require('express');
const app = express();
app.use(express.static(`${__dirname}/dist`));
app.get('/',(requestAnimationFrame,res)=>{
  res.status(200).send("OK");
}).listen(4200,(req,res)=>{
  console.log('Server Started @4200');
})
