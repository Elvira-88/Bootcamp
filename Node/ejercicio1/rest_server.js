const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.json({message: "Apartado 3"});
});

app.put("/:id", (req, res) => {
    let id = req.params.id;
    res.json({message: `Apartado 4: ${id}`});
});

app.delete("/", (req, res) => {
    res.json({message: "Apartado 5"});
});

app.post("/", (req, res) => {
    let body = req.body;

    if(body.user) {
        res.status(200).json(
            {
                message: `Apartado 6: ${body.user}`, 
            })
    } else {
        res.status(400).json(
            {
                message: "El nombre es requerido", 
            })
    }
  ;
});

app.listen(3000);

