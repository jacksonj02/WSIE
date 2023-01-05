window.addEventListener('load', function(){
    const button = document.getElementById('button')
    const response  = document.getElementById('response')
    let choices = ['Nearest Chinese Food', 'Pizza Hut', 'Fire House Subs', 'Your Favorite Chinese Food', 'Jimmy Johns']
    let index = Math.floor(Math.random()*5)

    button.addEventListener('click', function(event){
        response.innerHTML = choices[index]

    })
})