
const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const app = express();
const Morgan = require('morgan');

//Configuraciones 
app.set('port', process.env.PORT || 3000)


//Dependencias de middleware 
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


//rutas

//Solicita jwt

app.post('/DevOps/login', (req, res) => {
    let user = {
        id: 1,
        nombre: "danny"
    }

    jwt.sign({ user }, 'secretKey', { expiresIn: '1m' }, (err, token) => {
        res.json({ token })
    })

})

//Metodo post 

app.post('/DevOps', verifyToken, validateKey, (req, res) => {

    jwt.verify(req.token, 'secretKey', (error, authData) => {
        if (error) {
            //console.log(error)
            res.sendStatus(403);
        } else {
            console.log(req.body)

            let validacion = {
                message: "This is a test",
                to: "Juan Perez",
                from: "Rita Asturia",
                timeToLifeSec: 45
            }

            respuesta = {
                message: "Hello Juan Perez your message will be send"
            }
            res.status(200).json({respuesta})
        }
    });


})

function validateKey(req, res, next){
    //tomar parametro de header
    console.log(JSON.stringify(req.headers.id))
    let host = req.headers.origin;
    let api_key = req.headers.id//('x-api-key'); //version 3 using a header
    let api_key_host = "2f5ae96c-b558-4c7b-a590-a501ae1c3f6c";
    if (api_key == api_key_host) {
          console.log("Validacion APIKey OK");
          next();
        }  
     else {
      //log y responder como error
      console.log("Validacion APIKey NOK");
      res.status(403).send({ error: { code: 403, message: 'No permitido!' } });
    }
  };
  

//Authorization: Bearer <token>
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {


        const bearerToken = bearerHeader.split(" ")[1];
        console.log("aqui token bearer")
        console.log(bearerToken)
        req.token = bearerToken;

        console.log("aqui token")
        console.log(req.token)

        next();
    } else {

        res.sendStatus(403);
    }
}



app.get('/DevOps', (req, res) => {
    respuesta = {
        message: "ERROR"
    }
    res.status(400).json(respuesta)
})

app.put('/DevOps', (req, res) => {
    respuesta = {
        message: "ERROR"
    }
    res.status(400).json(respuesta)
})

app.delete('/DevOps', (req, res) => {
    respuesta = {
        message: "ERROR"
    }
    res.status(400).json(respuesta)
})

app.patch('/DevOps', (req, res) => {
    respuesta = {
        message: "ERROR"
    }
    res.status(400).json(respuesta)
})


//Inicia el servidor
app.listen(3000, () => {
    console.log("ejecutando en puerto 3000")
})
