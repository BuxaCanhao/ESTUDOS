function btinicio(){
    const valInicio = document.querySelector('#valinicio')
    const result = document.querySelector('#result')
    
    result.innerHTML = (`o valor é ${valInicio.value}`)
    result.style.display = 'block'
}