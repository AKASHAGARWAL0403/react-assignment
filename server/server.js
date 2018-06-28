const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const data = require("./../react-ui/src/data.json")

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.get('/data', function(req, res) {
    res.send(data)
});

app.listen(PORT, error => {
    error
        ? console.error(error)
        : console.info(`-------> Server running! Listening on port ${PORT}.`);
});
