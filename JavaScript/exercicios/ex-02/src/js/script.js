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
        var idade = ano - Number(fano.value)
        var fsex = document.querySelectorAll('input[name="radsex"]')
        var genero = ''
        if(fsex[0].checked){
            genero = 'um homem'
        }else if(fsex[1].checked){
            genero = 'uma mulher'
        }
        res.innerHTML = `Então você é <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
    }
}