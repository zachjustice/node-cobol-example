// Dependencies
const express = require('express');
const Cobol = require("cobol");
const app = express();
const port = 3000;

// Execute some COBOL snippets
const cobol_func = (req, res) => {
    return Cobol(
        '   IDENTIFICATION DIVISION.\n' +
        '   PROGRAM-ID. HELLO.\n' +
        '   ENVIRONMENT DIVISION.\n' +
        '   DATA DIVISION.\n' +
        '   PROCEDURE DIVISION.\n' +
        '   PROGRAM-BEGIN.\n' +
        '   DISPLAY "Hello world - from cobol".\n' +
        '   PROGRAM-DONE.\n' +
        '   STOP RUN.\n', 
        {
            compileargs:{
                free: true
            }
        }, (error, data) => {
            if (error) {
                res.status(500).json({ error })
            } else {
                res.json({ data })
            }
        }
    );
}

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/cobol', cobol_func);

app.listen(port, () => console.log(`Example app listening on port ${port}`));

