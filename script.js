let sliderEle = document.querySelector('#slider')
let btn = document.querySelector('#btn')
let sizePassword = document.querySelector('#valor')
let passWord = document.querySelector('#password')
let container = document.querySelector('#hide')

let charset = "absdefghijklmnopqrstuvxyzwABCDEFGHIJLMNOPQRSTUVXYZWK@!"
let novaSenha = ""

sizePassword.innerHTML = sliderEle.value

slider.oninput  = function(){
    sizePassword.innerHTML = this.value
} 

function genaratePassword(){

    let pass = ""
    for( let i = 0, n = charset.length; i < sliderEle.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    container.classList.remove("hide")
    passWord.innerHTML = pass
    novaSenha = pass

}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha)
    alert("Senha copiada com sucesso!")
}