var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors());

app.listen(8090, function(){
	"use strict";
    console.log('El servidor esta corriendo');
    });

    app.post('/v1/create/post', function(req, res){
        "use strict";
		var name = req.body.name;
        var image = req.body.image;
        var description = req.body.description;
        var fecha = req.body.fecha;
        var emoji = req.body.emoji;
            var result = {
            succes: true,
            message: '',
            name: name,
            image: image,
            description: description,
            fecha: fecha,
            emoji: emoji
    
    
        };
    res.send(result);
    });
    app.post('/v1/create/commentary', function(req, res){
       "use strict";
		var nombre = req.query.nombre;
        var texto = req.query.texto;
        var emoji = req.query.emoji;
        var fecha = req.query.fecha;
        var result = {
            succes: true,
            message: '',
            nombre: nombre,
            texto:texto,
            emoji: emoji,
            fecha:fecha
    
    
        };
    res.send(result);
    
    });

    app.put('/v1/post/Like', function(req, res){
			"use strict";
        var id = req.body.id;
        var like = req.body.like;
        var limit = req.body.limit;

        var result = {
            succes: true,
            id: id,
            like: like,
            limit: limit

        };
        res.send(result);

    });

    app.get('/v1/post/obtain', function(req, res){
		"use strict";
        var idUser = req.body.idUser;
        var result = {
            succes: true,
            idUser: idUser
        };
        res.send(result);
    });
    app.delete('/v1/post/delete', function(req, res){
			"use strict";
        var id = req.query.id;
        var result = {
            id: id
        };
        res.send(result);
    });