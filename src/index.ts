import * as express from 'express';
import * as bodyParser from 'body-parser'; 

class ServicesController  {
    app: express.Application;
    constructor (){
        this.app = express();
        const port:  string | number = 3000;
        this.app.use(bodyParser.json());

        this.app.listen(port, () => {
            console.log(`Listening at http://localhost:${port}/`);
        });
    }
}
class PessoaController extends ServicesController  {
    fullName: string;

   constructor (){
       super();
       this.app.use('/welcome', (req , resp)=>{
           resp.send("Ola");
       });
       
       this.app.post('/', (req,resp, body)=>{
        console.log(imprimiPessoa(req.body));
           resp.send("Top");
       });
   }
}
interface Pessoa {
    name: string;
    idade: number;
}

function imprimiPessoa(pessoa: Pessoa) {
    return "Hello, " + pessoa.name + " " + pessoa.idade;
}



new PessoaController();