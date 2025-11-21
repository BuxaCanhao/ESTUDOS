function btinicio(){
    const valInicio = document.querySelector('#valinicio')
    const result = document.querySelector('main')
    const valInput = document.querySelector('.inputval')
    
    valInput.style = ''
    
    if(valInicio.value>10 || valInicio.value<1){
        //troca a cor do txt do input
        valInicio.style.color = 'red'
        valInicio.style.fontWeight = 'bold'

        //gera a mensagem de alerta
    }else{
        //gera o resultado
    }
}