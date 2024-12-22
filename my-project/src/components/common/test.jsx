 import React from 'react'

 export default function test() {
    const testenv = ()=>{
        console.log("Hello world")

const url = 'https://university-college-list-and-rankings.p.rapidapi.com/api/universities?countryCode=gh';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '422075557fmsh62ab36dab8e718ep1195f3jsn6228864ac59c',
        'x-rapidapi-host': 'university-college-list-and-rankings.p.rapidapi.com'
    }
};
async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
fetchData();
    }
    

// Call the async function

   return (
     <div>
       <button onClick={testenv} type="button">send</button>
     </div>
   )
 }
 