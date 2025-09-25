

function carregar(){
    var agora = new Date()
    var hora = 15 //agora.getHours()
    var img = document.querySelector('#img') 
    var txt1 = document.querySelector('#txt1')
    var txt2 = document.querySelector('#txt2')

    if(hora <= 1 && agora.getMinutes() <= 1){
        txt2.innerHTML = `Agora é 0${hora} hora e ${agora.getMinutes()} minuto`
    }else if(hora <= 1 && agora.getMinutes() > 1){
        txt2.innerHTML = `Agora é 0${hora} horas e ${agora.getMinutes()} minutos`
    }else if(hora >1 && hora <10){
        txt2.innerHTML = `Agora são 0${hora} hora e ${agora.getMinutes()} minutos`
    }else{
        txt2.innerHTML = `Agora são ${hora} hora e ${agora.getMinutes()} minutos`
    }

    if(hora <12){
        //manhã
        img.src = 'img/imgmanha.jpg'
        txt1.innerHTML = 'Tenha uma <strong>boa manhã!</strong>'
        document.body.style.backgroundImage = 'linear-gradient(-180deg, #99AABF, #F2DEA2)'
    }else if(hora >=12 && hora <18){
        //tarde
        img.src = 'img/imgtarde.jpg'
        txt1.innerHTML = 'Tenha uma <strong>boa tarde!</strong>'
        document.body.style.backgroundImage = 'linear-gradient(-180deg, #30698C, #D9D4BA, #F2C48D)'
        document.querySelector('#logo').style.textShadow = '1px 1px 2px rgb(37, 65, 65)'
    }else{
        //noite
        img.src = 'img/imgnoite.jpg'
        txt1.innerHTML = 'Tenha uma <strong>boa noite!</strong>'
        document.body.style.backgroundImage = 'linear-gradient(-180deg, #1A2E40 , #426A8C, #88AABF)'
    }
}