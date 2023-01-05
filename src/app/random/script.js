window.addEventListener('load', function(){
    const button = document.getElementById('button')
    const response  = document.getElementById('response')
    let choices = ["McDonald's", "Wendy's", "Freddy's", "Arby's", "Pizza Hut", "Dominos", "Subway","Chinese Food", "Pasta","Chipotle","MOD Pizza"]
    let index = Math.floor(Math.random()*11)

    button.addEventListener('click', function(event){
        response.innerHTML = choices[index]

    })
})