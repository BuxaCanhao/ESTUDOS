function resetar(){
    var  fano = document.getElementById('txtano')
    if(fano.value != 2000){
        fano.value = '2000'
    }
}

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')

    if (fano.value.length ==0 || Number(fano.value)>ano || Number(fano.value)<1870){
        window.alert('Verifique os dados e tente novamente')
    }else{
        
    }
}