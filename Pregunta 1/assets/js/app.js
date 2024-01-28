const street = document.getElementById('street')
let marco = true

street.addEventListener('click', function () {
    if(marco == true){
        street.style.border ='2px solid red'
        marco = false
    }else{
        street.style.border = 'none'
        marco = true
    }
})