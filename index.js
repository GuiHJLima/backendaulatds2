const express = require('express');

const app = express();
const port = 4000;

app.get(express.json());

//inicializar o servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});