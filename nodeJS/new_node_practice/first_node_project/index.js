const axios = require('axios');
// axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=7008d40")
//     .then((response) => {
//         console.log(response.data);  // Access the data part of the response
//     })
// changing to async await
async function fetch(){
    const response = await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=7008d40");
    console.log(response.data);
    
}
fetch();