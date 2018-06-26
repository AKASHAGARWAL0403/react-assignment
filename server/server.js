const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, error => {
    error
        ? console.error(error)
        : console.info(`-------> Server running! Listening on port ${PORT}.`);
});
