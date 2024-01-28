const pedir = document.querySelector('#button')
const respuesta = document.querySelector('p')

pedir.addEventListener('click', function (){
    let n1 = Number (document.querySelector('#quantity1').value)
    let n2 = Number (document.querySelector('#quantity2').value)
    let n3 = Number (document.querySelector('#quantity3').value)
    let cantidad = n1 + n2 + n3

    if (cantidad <= 10 ){
        respuesta.innerHTML = cantidad
    }else{
        respuesta.innerHTML = "Tienes muchos stickers"
    }
})