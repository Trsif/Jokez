let url = ""
// let pararm = 
    // const params = new UrlParams(window.location.search)
const  getRandom10 = async () =>{
    url = 'https://official-joke-api.appspot.com/random_ten'
    const response = await axios.get(url)
    const data = response.data
    // console.log(data)
    for(let i of data){
        // console.log(i)
        displayData10(i)
    }
}

const  getRandom = async () =>{
    url = 'https://official-joke-api.appspot.com/jokes/random'
    const response = await axios.get(url)
    const data = response.data
    onJoke(data);
}
const  SearchRandom10 = async () =>{
    url = 'https://official-joke-api.appspot.com/jokes/${}/ten'
    const response = await axios.get(url)
    const data = response.data
    // console.log(data)
    for(let i of data){
        // console.log(i)
        displayData10(i)
    }
}


getRandom10();
const displayData10 = (data) =>{
    const jokes = document.querySelector("#randomJoke")
    const lines = document.createElement("p")
    const punchLine = document.createElement("p");
    const showP = document.createElement("button")
    const jokeContanier = document.createElement('div')
    const tenJokes = document.createTextNode(data.setup)
    const punchLines = document.createTextNode(data.punchline)
    
    lines.id=data.id;
    punchLine.className = "punchLine"
    punchLine.id =data.id
    punchLine.style="visibility: hidden;  display: none;"
    lines.appendChild(tenJokes)
    punchLine.appendChild(punchLines)

    jokeContanier.appendChild(lines);
    jokeContanier.appendChild(punchLine)
    showP.innerHTML ="Punch"
    jokeContanier.appendChild(showP)
    jokes.appendChild(jokeContanier)

}
const onJoke =(data) =>{
    const ptag = document.querySelector("#oneJoke")
    ptag.innerHTML = data.setup;
}

