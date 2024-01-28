const button = document.querySelector('.acceder')
const respuesta = document.querySelector('#respuesta')

button.addEventListener('click', function(){
    let n1 = document.querySelector('#option1').value
    let n2 = document.querySelector('#option2').value
    let n3 = document.querySelector('#option3').value

    let cantidad = n1 + n2 + n3

    if(cantidad == '911'){
        respuesta.innerHTML = "Password 1 correcto"
    }else if(cantidad == '714'){
        respuesta.innerHTML = "Password 2 correcto"
    }else{
        respuesta.innerHTML = "Password Incorrecto"
    }
})