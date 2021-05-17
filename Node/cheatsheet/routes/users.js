const ramda = require("ramda");
const bcrypt = require("bcrypt");

const express = require("express");

const router = express.Router();

const User = require("../models/user");
const verifyToken = require("../middlewares/auth");

const middleware1 = (req, res, next) => {
    console.log("Hola desde el middleware 1");
    next();
}

const middleware2 = (req, res, next) => {
    console.log("Hola desde el middleware 2");
    next();
}

router.get("/", verifyToken, async (req, res) => {
    console.log("Hola desde dentro del get");

    // Similar al find de Mongo. Si el filtro está vacío,
    // me devuelve todos los documentos.
    const PAGE_SIZE = 2;
    const page = req.query.page || 1;

    const count = await User.count();

    User.find({active: true})
    .skip((page - 1) * PAGE_SIZE) // Número de documentos que saltará
    .limit(PAGE_SIZE) // Número de documentos que devolverá
    .exec((error, users) => {
        if(error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(200).json({ok: true, page, pageSize: PAGE_SIZE, count, users});
        }
    })
});

router.get("/:id", (req, res) => {
    let id = req.params.id;
    res.json({message: `Petición GET con parámetro: ${id}`});
});

router.post("/", (req, res) => {
    let body = req.body;

    const user = new User({
        username: body.username,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10)
    });

    user.save((error, savedUser) => {
        if(error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(201).json({ok: true, savedUser});
        }
    });

    // if(body.username) {
    //     res.status(200).json({ message: `Recibido username: ${body.username}`})
    // } else {
    //     res.status(400).json(
    //         {
    //             message: "El username es obligatorio", 
    //         })
    // }
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = ramda.pick(["username", "email"], req.body);

    // User.findByIdAndUpdate(
    //     id,
    //     body,
    //     {new: true, runValidators: true, context: 'query'},  // options
    //     (error, updateUser) => {
    //         if(error) {
    //             res.status(400).json({ok: false, error});
    //         } else {
    //             res.status(200).json({ok: true, updateUser});
    //         }
    //     }
    // );

    User.findByIdAndUpdate(
        id,
        {active: false},
        {new: true, runValidators: true, context: 'query'},  // options
        (error, updateUser) => {
            if(error) {
                res.status(400).json({ok: false, error});
            } else if (!updateUser) {
                res.status(400).json({ok: false, error: "User not found"});
            } else {
                res.status(200).json({ok: true, updateUser});
            }
        }
    )
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    User.findByIdAndRemove(id, (error, removedUser) => {
        if(error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(200).json({ok: true, updateUser});
        }
    })
})

module.exports = router;