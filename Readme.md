

-> Para agregar nuevos estados.
// POST -> localhost:8090/v1/create/post
parametros:
{
            name: name,
            image: image,
            description: description,
            fecha: fecha,
            emoji: emoji

}
 -> Agregar comentarios.
// POST -> localhost:8090/v1/create/comment
parametros:
{
            nombre: nombre,
            texto:texto,
            emoji: emoji,
            fecha:fecha

}
-> Para darle me gusta a algun video u imagen.
//PUT -> localhost:809/v1/post/Like
parametros:
 {
             id: id,
            like: like,
            limit: limit
}
--> Para mirar los estados, imagenes, videos, etc.
Get-> localhost:8090/v1/post/obtener

parametros: {
    idUser: idUser
}

--> Para eliminar los estados.
DELETE -> localhost:8090/v1/post/delete
parametros:{
    id:id
}