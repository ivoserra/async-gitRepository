 
 // i still need to do the exercises with the then catch, still have not finished its just a sketch to see how it works
 // with the current exercise
 import time from './time.js'
 
 
 //const URL = `https://api.github.com/users/${search.toLowercase()}/repos`

 //const search = document.querySelector('.text').value

document.querySelector('.submit').addEventListener('click', submit)

document.getElementById('text').addEventListener('keydown', submit)


function submit(event){
    
    console.log(event)
    if(event.type === 'keydown'){
      if (event.key != 'Enter'){
        return
      } else {
        event.preventDefault()
      }
    }
    const search = document.querySelector('.text').value
    console.log(search)
    const URL = `https://api.github.com/users/${search.toLowerCase()}/repos`
    // console.log(search)
    fetch(URL).then(ifResolved, ifRejected)
}
  
// fetch(URL).then(ifResolved, ifRejected)

function ifResolved(response) { console.log({response})
    response.json().then(treatData)
}

function treatData(data) {
    console.log(data)
    data.forEach(repo=>{
        const repoDate = new Date(repo.created_at).getTime()
        const li = document.createElement('li')
        
        li.innerHTML=
         `
         <section class="active">
             <section class="titles">
                 <h2>${repo.name}</h2>
                 <a href="${repo.svn_url}">Repository: ${repo.description}</a>
                 <a href="${repo.homepage}"> Published: ${repo.homepage}</a>
             </section>
             <div class="date">
                 <img src="${repo.owner.avatar_url}">
                 <p>${time(repoDate)} </p>  
             </div>
         </section>
         `
         document.querySelector('.repositories').append(li)
        console.log()
    })
}

function ifRejected() {
    alert('User not found')

}