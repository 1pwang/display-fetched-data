
async function fetchData(){
    try{
        const response =  await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: {'Content-Type': 'Application-json'},
        })

        .then((response)=> response.json())

        .then((data) => {
            displayData(data)
        })

    } 
    catch(e){
        console.log(e)
}}

function displayData(data) {
    const dataShow = data
    let dataDiv = document.querySelector("#text");

    const userId5 = dataShow.filter((u) => u.userId === 5)

        userId5.map((values)=> {
        
            dataDiv = `<h3>Title: ${values.title}</h3>`
            dataDiv += `<p>userId: ${values.userId}</p>`
            dataDiv += `<p>id: ${values.id}</p>`
            dataDiv += `<p>text: ${values.body}</p>`
           
            document.getElementById('dataDiv').innerHTML += dataDiv
        })
  }
  
  fetchData()
