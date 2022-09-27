//declara onclick con funcion para obtener API y toma info de input para completar la URL
document.getElementById('git_profile').onclick = get_user
text_field = document.getElementById('user_name')

//Uso de promise para acceder a respuetsa con datos en JSON
function get_user() {
    fetch(`https://api.github.com/users/${text_field.value}`)
    .then(response => response.json() )
    .then(user_github => {
        console.log(user_github)
        //Declaro variables con info de la respuesta de JSON
        let picture_url = user_github.avatar_url
        let name = user_github.name
        let followers = user_github.followers
        //Crea container nuevo cada vez borrando info previa
        if (document.getElementById('main')){
            document.getElementById('main').remove()
        }
        //Crea etiquetas en HTML con la informacion
        const main = document.createElement('div')
        main.id = 'main'
        document.body.appendChild(main)

        const title = document.createElement('h1')
        title.innerText = `${name} has: ${followers} followers!`
        main.appendChild(title)

        const picture = new Image()
        picture.src = picture_url
        main.appendChild(picture)
    })
    .catch(err => console.log(err))
}