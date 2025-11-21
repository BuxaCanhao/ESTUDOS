function btinicio(){
    //valores de entrada
    const valInicio = document.querySelector('#valinicio')
    const valPulo = document.querySelector('#valpulo')
    const valSalto = +valPulo.value//O + na frente é para converter em número
    const valorEnt = +valInicio.value//O + na frente é para converter em número
    
    //valores para ferrificação
    const result = document.querySelector('#bxmsg')
    const valInput = document.querySelector('.inputval')
    
    //reseta o style e o html
    valInput.style =''
    result.innerHTML =''
    
    //verificação de validade do 1º valor
    if(valorEnt>10 || valorEnt<1){
        //gera a mensagem de alerta
        let divMsgAler = document.createElement('div')
        divMsgAler.id = 'msgAlert'
        result.append(divMsgAler)

        //troca a cor do txt do input
        valInicio.style.color = 'red'
        valInicio.style.fontWeight = 'bold'
        
        if(valorEnt == ''){
                divMsgAler.innerHTML = `No 1º valor só pode inserir número de 1 a 10`
            }else if(valorEnt>10){
                divMsgAler.innerHTML = `O 1º valor de ${valorEnt}, está acima de 10<br>Só pode inserir número de 1 a 10`
            }else if(valorEnt<1){
                divMsgAler.innerHTML = `O 1º valor de ${valorEnt}, está abaixo de 1<br>Só pode inserir número de 1 a 10`
            }
        }
    //verificação de validade do 2º valor
    if(valSalto>10 || valSalto<1){
        //gera a mensagem de alerta
        let divMsgAler = document.createElement('div')
        divMsgAler.id = 'msgAlert'
        result.append(divMsgAler)

        //troca a cor do txt do input
        valPulo.style.color = 'red'
        valPulo.style.fontWeight = 'bold'
        
        if(valSalto == ''){
                divMsgAler.innerHTML = `No 2º valor só pode inserir número de 1 a 10`
            }else if(valSalto>10){
                divMsgAler.innerHTML = `O 2º valor de ${valSalto}, está acima de 10<br>Só pode inserir número de 1 a 10`
            }else if(valSalto<1){
                divMsgAler.innerHTML = `O 2º valor de ${valorEnt}, está abaixo de 1<br>Só pode inserir número de 1 a 10`
            }
        }
}