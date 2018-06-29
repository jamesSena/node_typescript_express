"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
class ServicesController {
    constructor() {
        this.app = express();
        const port = 3000;
        this.app.use(bodyParser.json());
        this.app.listen(port, () => {
            console.log(`Listening at http://localhost:${port}/`);
        });
    }
}
class PessoaController extends ServicesController {
    constructor() {
        super();
        this.app.use('/welcome', (req, resp) => {
            resp.send("Ola");
        });
        this.app.post('/', (req, resp, body) => {
            console.log(imprimiPessoa(req.body));
            resp.send("Top");
        });
    }
}
function imprimiPessoa(pessoa) {
    return "Hello, " + pessoa.name + " " + pessoa.idade;
}
new PessoaController();
