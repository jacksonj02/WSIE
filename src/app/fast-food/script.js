

window.addEventListener('load', function(){
    const button = document.getElementById('button')
    const response  = document.getElementById('response')
    let choices = ['McDonalds', 'Wendys', 'Freddys', 'Chick-fil-A', 'WhiteCastle']
    let index = Math.floor(Math.random()*5)

    button.addEventListener('click', function(event){
        response.innerHTML = choices[index]

    })
})