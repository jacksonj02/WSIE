
window.addEventListener('load', function(){
    const button = document.getElementById('button')
    const response  = document.getElementById('response')
    let choices = ["Ruth's Chris", "Capital Grille", "Bonefish Grill", "Morton's Steakhouse", "Maggiano's Little Italy"]
    let index = Math.floor(Math.random()*5)

    button.addEventListener('click', function(event){
        response.innerHTML = choices[index]

    })
})