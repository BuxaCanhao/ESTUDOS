

function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var img = document.querySelector('#img') 
    var txt1 = document.querySelector('#txt1')
    var txt2 = document.querySelector('#txt2')
    
    //Se a hora e minutos forem menor ou igual a 1
    if(hora <= 1 && agora.getMinutes() <= 1){
        txt2.innerHTML = `Agora é 0${hora} hora e ${agora.getMinutes()} minuto`

    //Se a hora for menor ou igual a 1 e o minuto for maior que 1
    }else if(hora <= 1 && agora.getMinutes() > 1){
        txt2.innerHTML = `Agora é 0${hora} horas e ${agora.getMinutes()} minutos`
    
    //Se a hora for maior que 1 e menor que 10
    }else if(hora >1 && hora <10){
        txt2.innerHTML = `Agora são 0${hora} hora e ${agora.getMinutes()} minutos`
    
    //Se a nenhuma das opções acima forem verdadeiras
    }else{
        txt2.innerHTML = `Agora são ${hora} hora e ${agora.getMinutes()} minutos`
    }

    //manhã
    if(hora <12){
        img.src = 'img/imgmanha.jpg'//altera a imagem
        txt1.innerHTML = 'Tenha uma <strong>boa manhã!</strong>'//altera o texto mantendo a fromatação do HTML
        document.body.style.backgroundImage = 'linear-gradient(-180deg, #99AABF, #F2DEA2)'//altera o gradiente do fundo
    //tarde
    }else if(hora >=12 && hora <18){
        img.src = 'img/imgtarde.jpg'
        txt1.innerHTML = 'Tenha uma <strong>boa tarde!</strong>'
        document.body.style.backgroundImage = 'linear-gradient(-180deg, #30698C, #D9D4BA, #F2C48D)'
        document.querySelector('#logo').style.textShadow = '1px 1px 2px rgb(37, 65, 65)'//adiciona uma sombra na logo
    //noite
    }else{
        img.src = 'img/imgnoite.jpg'
        txt1.innerHTML = 'Tenha uma <strong>boa noite!</strong>'
        document.body.style.backgroundImage = 'linear-gradient(-180deg, #1A2E40 , #426A8C, #88AABF)'
    }
}