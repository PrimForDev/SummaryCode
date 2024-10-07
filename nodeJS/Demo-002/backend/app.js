const express = require('express')
const Quote = require('inspirational-quotes')

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Qrigin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})
app.get('/', (req, res) => {
    res.send(Quote.getQuote());  // Assuming `getQuote()` is a valid method in your `Quote` module
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
