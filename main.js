const axios = require('axios')
const fs = require('fs')
const XLSX = require('xlsx')
const xlsx = require('xlsx')


require.extensions['.txt'] = function (module, filename) {// função para ler o arquivo txt
    module.exports = fs.readFileSync(filename, 'utf8');
};
var words = require("./BASE.txt"); // guarda todos os cpf e cnpjs em um array "words"

var contador = 0// contador de posições CPF
var contador2 = 0//contador de posiçoes CNPJ
var tamanho = 1 // contador de tamanho para parar o loop CPF/CNPJ
var num = [] // ARRAY para armazenar cpf
var numCnpj = [] // ARRAY para armazenar cnpj
var pos = 0 // variavel para acessar o vetor com todos os dados cpf
var pos2 = 0 // variavel para acessar o vetor com todos os dados cnpj
var contadorCPF = 0 //contador para contar o n° de cpfs
var contadorCNPJ = 0 //contador para contar o n° de cnpjs
var contadorSpace = 0


var resultadocpf = [] // array para guardar cpf com DV
var resultadocnpj = [] // array para guardar cnpj com DV

function validaCPF(numCPF) {  // função para calcular o DV - CPF
    // console.log(numCPF)
    var a, b, c, d, e, f, g, h, i, j, k
    var resto1, resto2


    var numCPF2 = [] // array para guardar todos os numeros depois do calculo
    var i = 0;


    a = parseInt(numCPF[0], 10)// trasnformando de "strings" para "int"
    numCPF2.push(a)
    b = parseInt(numCPF[1], 10)
    numCPF2.push(b)
    c = parseInt(numCPF[2], 10)
    numCPF2.push(c)
    d = parseInt(numCPF[3], 10)
    numCPF2.push(d)
    e = parseInt(numCPF[4], 10)
    numCPF2.push(e)
    f = parseInt(numCPF[5], 10)
    numCPF2.push(f)
    g = parseInt(numCPF[6], 10)
    numCPF2.push(g)
    h = parseInt(numCPF[7], 10)
    numCPF2.push(h)
    i = parseInt(numCPF[8], 10)
    numCPF2.push(i)

    // calculo
    resto1 = ((a * 1) + (b * 2) + (c * 3) + (d * 4) + (e * 5) + (f * 6) + (g * 7) + (h * 8) + (i * 9)) % 11
    numCPF2.push(resto1)

    resto2 = ((a * 0) + (b * 1) + (c * 2) + (d * 3) + (e * 4) + (f * 5) + (g * 6) + (h * 7) + (i * 8) + (resto1 * 9)) % 11

    numCPF2.push(resto2)


    var aux = (numCPF2.join("")); // função para agrupar todos as posicoes do vetor
    // console.log(aux)

    resultadocpf.push(aux) //guardando no array de CPFs


    // limpando os arrays
    numCPF2.pop(), numCPF2.pop(), numCPF2.pop(), numCPF2.pop(), numCPF2.pop(), numCPF2.pop()
    numCPF2.pop(), numCPF2.pop(), numCPF2.pop(), numCPF2.pop(), numCPF2.pop()

    num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop()
   

}
function validaCNPJ(numCNPJ) { // função para calcular o DV - CNPJ
   
    var a1, b1, c1, d1, e1, f1, g1, h1, i1, j1, k1, l1
    var resto1_cnpj, resto2_cnpj
    var numCNPJ2 = []// array para guardar todos os numeros depois do calculo
   

    a1 = parseInt(numCNPJ[0], 10)// trasnformando de "strings" para "int"
    numCNPJ2.push(a1)
    b1 = parseInt(numCNPJ[1], 10)
    numCNPJ2.push(b1)
    c1 = parseInt(numCNPJ[2], 10)
    numCNPJ2.push(c1)
    d1 = parseInt(numCNPJ[3], 10)
    numCNPJ2.push(d1)
    e1 = parseInt(numCNPJ[4], 10)
    numCNPJ2.push(e1)
    f1 = parseInt(numCNPJ[5], 10)
    numCNPJ2.push(f1)
    g1 = parseInt(numCNPJ[6], 10)
    numCNPJ2.push(g1)
    h1 = parseInt(numCNPJ[7], 10)
    numCNPJ2.push(h1)
    i1 = parseInt(numCNPJ[8], 10)
    numCNPJ2.push(i1)
    j1 = parseInt(numCNPJ[9], 10)
    numCNPJ2.push(j1)
    k1 = parseInt(numCNPJ[10], 10)
    numCNPJ2.push(k1)
    l1 = parseInt(numCNPJ[11], 10)
    numCNPJ2.push(l1)

    // calculo
    resto1_cnpj = ((a1 * 6) + (b1 * 7) + (c1 * 8) + (d1 * 9) + (e1 * 2) +
        (f1 * 3) + (g1 * 4) + (h1 * 5) + (i1 * 6) + (j1 * 7) + (k1 * 8) + (l1 * 9)) % 11
    numCNPJ2.push(resto1_cnpj)

    resto2_cnpj = ((a1 * 5) + (b1 * 6) + (c1 * 7) + (d1 * 8) + (e1 * 9) +
        (f1 * 2) + (g1 * 3) + (h1 * 4) + (i1 * 5) + (j1 * 6) + (k1 * 7) + (l1 * 8) + (resto1_cnpj * 9)) % 11

    numCNPJ2.push(resto2_cnpj)



    var aux2 = (numCNPJ2.join(""));  // função para agrupar todos as posicoes do vetor
    // console.log(aux)

    resultadocnpj.push(aux2) //guardando no array de CNPJs

    // limpando os arrays
    numCNPJ2.pop(), numCNPJ2.pop(), numCNPJ2.pop(), numCNPJ2.pop(), numCNPJ2.pop(), numCNPJ2.pop(),
        numCNPJ2.pop(), numCNPJ2.pop(), numCNPJ2.pop(), numCNPJ2.pop(), numCNPJ2.pop(), numCNPJ2.pop(),
        numCNPJ2.pop(), numCNPJ2.pop()

    numCnpj.pop(), numCnpj.pop(), numCnpj.pop(), numCnpj.pop(), numCnpj.pop(), numCnpj.pop(),
        numCnpj.pop(), numCnpj.pop(), numCnpj.pop(), numCnpj.pop(), numCnpj.pop(), numCnpj.pop()

    //console.log(resultadocnpj)

}

function AcionaCNPJ() { // função para acionar a leitura e a captção de cnpjs

    while (tamanho != words.length) {//loop

        tamanho++ // contador para parar o loop quando chegar no fim do arquivo



        if (words[pos2] == "0" || words[pos2] == "1" //para diferenciar entre "strings" de numero e espaços vazios
            || words[pos2] == "2" || words[pos2] == "3"
            || words[pos2] == "4" || words[pos2] == "5"
            || words[pos2] == "6" || words[pos2] == "7"
            || words[pos2] == "8" || words[pos2] == "9") {

            if (contador2 < 12) { //verifica se o "dado" lida é CNPJ

                numCnpj.push(words[pos2]) //guarda em um array para uso posterior

                if (numCnpj.length == 12) {//aciona a função para o calculo DV         
                   
                    validaCNPJ(numCnpj) // chama a função para caclular o DV
                    contadorCNPJ++ // conta a qtd de CNPJs
                    contador2 = -1 //seta o contador 
                }

            }
            contador2++

        } else if (words[pos] == " ") { // caso nao encontre uma "string" = numeros

            //limpa os arrays
            numCnpj.pop(), numCnpj.pop(), numCnpj.pop(), numCnpj.pop(), numCnpj.pop(), numCnpj.pop(),
                numCnpj.pop(), numCnpj.pop(), numCnpj.pop(), numCnpj.pop(), numCnpj.pop(), numCnpj.pop()
            contador2 = -1
        }

        pos2++;

    }
}
function AcionaCPF() {// função para acionar a leitura e a captção de cpfs

    while (tamanho != words.length) {

        tamanho++// contador para parar o loop quando chegar no fim do arquivo

        if (words[pos] == "0" || words[pos] == "1" //para diferenciar entre "strings" de numero e espaços vazios
            || words[pos] == "2" || words[pos] == "3"
            || words[pos] == "4" || words[pos] == "5"
            || words[pos] == "6" || words[pos] == "7"
            || words[pos] == "8" || words[pos] == "9") {

               

            if (contador < 8 && contadorSpace == 3) {//verifica se o "dado" lida é CPF
             //   console.log("entrou")
                num.push(words[pos])//guarda em um array para uso posterior
                
              //console.log(num.length)
                if (num.length == 9 ) {//aciona a função para o calculo DV         
                   // console.log(contadorSpace)
                    validaCPF(num) // chama a função para caclular o DV
                    contadorCPF++ // conta a qtd de CPFs
                    contador = -1 // seta o contador
                    contadorSpace = 0
                    num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop()
                }

            }else{
                num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop()
            }
            contador++


        } else if (words[pos] == " ") { // caso nao encontre uma "string" = numeros
        //limpa os arrays
            contadorSpace++
            num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop(), num.pop()
            contador = -1
        }
        pos++;
    }
}
function salvarCPF(resultadocpf2) { // salvar CPFs com DV em um arquivo .txt
    let imprime = resultadocpf2.toString()
    fs.appendFileSync('CPF', imprime)
    console.log("---------------------------------")
    console.log("[Salvo]")
}
function salvarCNPJ(resultadocnpj2) { // salvar CNPJs com DV em um arquivo .txt
    let imprime2 = resultadocnpj2.toString()
    fs.appendFileSync('CNPJS', imprime2)
    console.log("---------------------------------")
    console.log("[Salvo]")
}
function thread1() { // função para simular Thread CNPJ
    var start = new Date().getTime(); // contar o tempo de execução
    tamanho = 1 
    AcionaCNPJ() // chama a função para leitura de CNPJ
    
    salvarCNPJ(resultadocnpj)//chama a função para salvar em um arquivo
    console.log("---------------------------------")
    console.log("Numero de CNPJ:" + " " + contadorCNPJ) //imprime no console

    var end = new Date().getTime();// contar o tempo de execução
    var time = end - start;// contar o tempo de execução
    console.log('Execution timeCNPJ: ' + time);//milissegundos
}
function thread2() { // função para simular Thread CPF
    var start2 = new Date().getTime();// contar o tempo de execução
    tamanho = 1
    AcionaCPF()// chama a função para leitura de CPF
    //console.log(resultadocpf)
    salvarCPF(resultadocpf)//chama a função para salvar em um arquivo
    console.log("---------------------------------")
    console.log("Numero de CPF:" + " " + contadorCPF)//imprime no console

    var end2 = new Date().getTime();// contar o tempo de execução
    var time2 = end2 - start2;// contar o tempo de execução
    console.log('Execution timeCPF: ' + time2);//milissegundos
}

thread1()
thread2()