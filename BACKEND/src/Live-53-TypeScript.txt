import express, { Request, Response } from "express" // TypeScript
import cors from 'cors'

const app = express()
app.use(cors())

enum States{
    "MG" = "Minas Gerais",
    "SP" = "São Paulo",
    "RJ" = "Rio de Janeiro",
    "GO" = "Goiás",
    "SC" = "Santa Catarina",
    "PR" = "Paraná",
    "AM" = "Amazonas"

}

interface IAddress{
    street: String;
    number: number;
    state: States;
}

interface IProducts {
    id: number;
    name: string;
    price: number;
    description?: string; // ? -> Siginica que não é obrigatório colocar.
    address: IAddress;

}

let produts: IProducts[] = []

app.get('/produtos', (req: Request, res: Response) => {

    const newProduct: IProducts = {
        id: Math.random(),
        name: "Batedeira",
        price: 300,
        description: "Batedeira, muito boa, boa mesmo!",
        address: {
            street: "Rua dos Bobos",
            number: 20,
            state: States.SC
        }
    }

    produts.push(newProduct)

    return res.json(produts)
})

app.listen(3000, () => {
    console.log('servidor Rodando')
})


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

/*
01 - npm init -y
02 - npm install express
03 - npm install typescript --save-dev
04 - node src/index.js
05 - npx tsc --init
06 - npx tsc  // GERAR JAVASCRIPT -> index.js
// obs: npx tsc -> Atualizar a alteração no ts pro js (CTRL + C pra parar o Servidor)
// node src/index.js -> executar o servidor
07 - npm i ts-node-dev --save-dev -> (atualizar sem parar o servidor)
08 - ts-node-dev --respawn --transpile-only server.ts -> (colar no dev scripts no json)
09 - npm i --save-dev @types/express (instalar)
10 - npm i cors -> (Comunicar com o Front end)
11 - npm i --save-dev @types/cors 
12 - http://vitejs.dev/guide/ Site Front End
13 - npm create vite@latest (instalar pra conectar com o vitejs)
14 - npm install (no frontend)
15 - npm i axios (no frontend)


const express = require('express') // JavaScript
                                   // import express from "express" -> TypeScript
const app = express()

app.get('/produtos', (req, res) => {
    return res.send('Meus Produtos')
})

app.listen(3000, () => {
    console.log('servidor Rodando')
})
*/