const https = require('https');

const userId = 10;
const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

//let name 
//let phone
let city
let catchPhrase

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        const user = JSON.parse(data);
        const address = user.address
        const company = user.company
        
        city = address.city
        catchPhrase = company.catchPhrase
        console.log(`Ciudad: ${city}`)
        console.log(`Eslogan: ${catchPhrase}`)
    });
}).on('error', (err) => {
    console.log(`Error: ${err.message}`);
});




