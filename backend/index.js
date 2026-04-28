const express = require('express');
const app = express();
const cors = require ('cors');

app.use(cors());
app.get('/', (req, res) =>{
    res.json({message :"Mon API fonctionne!"});
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("serveur lancé");
})