const express = require("express");
const users = express.Router();
const cors = require("cors");

const User = require("../models/User");
users.use(cors());

const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const multipartMiddleware = multipart({
  uploadDir: './uploads'
});


users.use(bodyParser.json());
users.use(bodyParser.urlencoded({
  extended: true
}));

users.post('/upload', multipartMiddleware, (req, res, next) => {
  res.json({
    'message': 'Archivo subido correctamente.'
  });
});


users.post('/formulario', (req, res) => {
  const today = new Date();
  const userData = {
    Nombre: req.body.nombre,
    Apellido: req.body.apellido,
    Tipo_Doc_id: req.body.docType,
    docIdent: req.body.docIdent,
    Email: req.body.email,
    Celular: req.body.celular,
    FechaNacimiento: req.body.fechaNacimiento,
    created: today
  }
  console.log("entro")
  User.create(userData)
    .then(user => {
      console.log("user", user)
      res.json({ user: user })
    })
    .catch(err => {
      res.send('error: ' + err)
    })
});

users.get('/formulario/:id', (req, res) => {
  console.log("hola mundo", req.params.id)
  if (req.params.id) {
    User.findByPk(req.params.id).then(user => {
      console.log("user", user)
      res.json({ user: user })
    })
      .catch(err => {
        res.send('error: ' + err)
      })
  } else {
    res.send('error: ' + 'el id no es valido')
  }
});

users.delete('/formulario/:id', (req, res) => {
  if (req.params.id) {
    User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (user) {
      if (user === 1) {
        res.json({ user: "user deleted" })
      }
    }, function (err) {
      console.log(err);
    });
  }
})


module.exports = users;
