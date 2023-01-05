
window.addEventListener('load', function(){
    const button = document.getElementById('button')
    const response  = document.getElementById('response')
    let choices = ['Insomnia Cookies', 'Crumbl Cookies', 'Dairy Queen', 'Krispy Kreme', 'Cold Stone Creamery']
    let index = Math.floor(Math.random()*5)

    button.addEventListener('click', function(event){
        response.innerHTML = choices[index]

    })
})