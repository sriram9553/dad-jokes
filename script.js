const jokeEle = document.getElementById('joke')
const jokebtn = document.getElementById('jokebtn')

jokebtn.addEventListener('click',generateJoke)
// USED async/await//
generateJoke()
async function generateJoke(){
    const config = {
        headers : {
            Accept : 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com',config)
     const data = await res.json()
     jokeEle.innerHTML = data.joke
    
}