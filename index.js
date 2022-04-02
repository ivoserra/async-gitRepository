import time from './time.js'

document.querySelector('.submit').addEventListener('click', async() => {

    const search = document.querySelector('.text').value
 

    console.log(search)
    const url = `https://api.github.com/users/${search.toLowerCase()}/repos`


const response = await fetch(url)
const users = await response.json()

console.log(users)
users.forEach(post => {
    
  
   const postDate = new Date(post.created_at).getTime()
   const li = document.createElement('li')
   
   li.innerHTML=
    `
    <section class="active">
        <section class="titles">
            <h2>${post.name}</h2>
            <a href="${post.svn_url}">Repository: ${post.description}</a>
            <a href="${post.homepage}"> Published: ${post.homepage}</a>
        </section>
        <div class="date">
            <img src="${post.owner.avatar_url}">
            <p>${time(postDate)} </p>  
        </div>
    </section>
    `
    document.querySelector('.repositories').append(li)

})
   
})


 