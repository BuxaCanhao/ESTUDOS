function btinicio(){
    const valInicio = document.querySelector('#valinicio')
    const valorEnt = +valInicio.value //O mais na frente passa para numero
    const result = document.querySelector('#bxmsg')
    const valInput = document.querySelector('.inputval')
    
    valInput.style =''
    result.innerHTML =''
    
    //verificação de validade de entrada
    if(valorEnt>10 || valorEnt<1){
        //gera a mensagem de alerta
        let divMsgAler = document.createElement('div')
        divMsgAler.id = 'msgAlert'
        result.append(divMsgAler)

        //troca a cor do txt do input
        valInicio.style.color = 'red'
        valInicio.style.fontWeight = 'bold'
        
        if(valorEnt == ''){
                divMsgAler.innerHTML = `Só pode inserir número de 1 a 10`
            }else if(valorEnt>10){
                divMsgAler.innerHTML = `Esse valor de ${valorEnt}, está acima de 10<br>Só pode inserir número de 1 a 10`
            }else if(valorEnt<1){
                divMsgAler.innerHTML = `Esse valor de ${valorEnt}, está abaixo de 1<br>Só pode inserir número de 1 a 10`
            }

        }
}