
window.addEventListener('load', function(){
    const button = document.getElementById('button')
    const response  = document.getElementById('response')
    let choices = ['Chipotle', 'Qudoba', 'El Agave', 'Casa Mia', 'Tacos 4 Life']
    let index = Math.floor(Math.random()*5)

    button.addEventListener('click', function(event){
        response.innerHTML = choices[index]

    })
})