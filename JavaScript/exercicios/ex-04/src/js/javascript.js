function btinicio(){
    const valInicio = document.querySelector('#valinicio')
    const result = document.querySelector('#bxmsg')
    const valInput = document.querySelector('.inputval')
    
    valInput.style =''
    result.innerHTML =''
    
    //verificação de validade de entrada
    if(valInicio.value>10 || valInicio.value<1){
        //gera a mensagem de alerta
        let divMsgAler = document.createElement('div')
        divMsgAler.id = 'msgAlert'
        result.append(divMsgAler)

        //troca a cor do txt do input
        valInicio.style.color = 'red'
        valInicio.style.fontWeight = 'bold'
        
        if(valInicio.value == ''){
                divMsgAler.innerHTML = `Só pode inserir número de 1 a 10`
            }else if(valInicio.value>10){
                divMsgAler.innerHTML = `Esse valor de ${valInicio.value}, está acima de 10<br>Só pode inserir número de 1 a 10`
            }else if(valInicio.value<1){
                divMsgAler.innerHTML = `Esse valor de ${valInicio.value}, está abaixo de 1<br>Só pode inserir número de 1 a 10`
            }
            
        }
}