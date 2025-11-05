function calc(){
    //variaveis globais:
    const entrada = document.querySelector('#entrada') 
    const valor = entrada.value
    const parInicial = document.querySelector('#blcinci')
    const elPai = document.querySelector('#respPai')

    //limpar o divPai
    elPai.innerHTML = ""

    //Oculta a apresentação e erro se houver
    if(parInicial){
        parInicial.style.display = 'none'
    }

   
   //verificação e validação:
    if(isNaN(valor)  || valor<-99 || valor>99 || valor == ""){
        console.error = `Erro: O valor ${valor} está fora do intervalo permitido de (-99 a 99)`
        parInicial.style.display = 'line-block'
        
        //alerta de erro
        const erroBlk = document.createElement('div')

        //Por classe no erroBlk
        erroBlk.classList.add('blcError')

        //Por texto dentro de erroMsg
        erroBlk.textContent = `Erro: O valor ${valor} está fora do intervalo permitido de (-99 a 99)`

        //Testa se o elemento pai existe e aninhando os elementos nele:
        if(elPai){
            elPai.style.display = "flex"
            elPai.append(erroBlk)
        }
        return
    }

   //Fazer a divPai aparecer
   elPai.style.display = "flex"

   //loop de 1 a 10
    for(i=1; i<=10; i++){
        let novoValor = valor*i

        //cria uma nova div
        let novaDiv = document.createElement('div')
        novaDiv.classList.add('respFilho')

        //cria um paragrafo
        let novoParagrafo = document.createElement('p')
        novoParagrafo.textContent = `${valor} x ${i} = ${novoValor}`

        //Por o novoParagrafo dentro da novaDiv
        novaDiv.append(novoParagrafo)

        //Por a novaDiv dentro da divPai
        elPai.append(novaDiv)
    }
}