const https = require('https');
const url = `https://api.breakingbadquotes.xyz/v1/quotes/10`;

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        const quotes = JSON.parse(data);
        console.log(quotes)
        
    });
}).on('error', (err) => {
    console.log(`Error: ${err.message}`);
});



