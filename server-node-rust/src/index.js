const express = require("express");
//função soma pares 0 .. 10000 em Rust
var { soma_pares } = require("../native");

const app = express();

function somaParesJavascript() {
  let somaPares = 0;
  for (var i = 0; i <= 10000; i++) {
    if (i % 2 === 0) {
      somaPares += i;
    }
  }
  return somaPares;
}

app.get("/soma", (request, response) => {
  console.time("tempo de execução");
  response.json({ soma: soma_pares() });
  console.timeEnd("tempo de execução"); //vinte e cinco milhões e cinco mil
});

app.listen(3333, () => {
  console.log("🚀 servidor rodando");
});
