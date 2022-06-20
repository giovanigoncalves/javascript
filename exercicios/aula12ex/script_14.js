function day() { 
    // Texto para a hora atual
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()

    var hourText = window.document.getElementById('hour')
    hourText.innerText += `Agora são ${hora}:${minutos} h.`

    // Configurações do estilo e imagem
    var img = window.document.getElementById('img')

    if (hora < 5) {
        document.body.style.background = '#383838'
        img.src = 'imagens/madrugada1.jpg'       
    } else if (hora <= 6) {
        document.body.style.background = '#f09f09'
        img.src = 'imagens/amanhecer.png' 
    }  else if (hora <= 16) {
        document.body.style.background = '#FFF429'
        img.src = 'imagens/dia.png'
    }  else if (hora <= 18) {
        document.body.style.background = '#C95A0B'
        img.src = 'imagens/entardecer.png' 
    } else {
        document.body.style.background = '#3A3B3A'
        img.src = 'imagens/noite.png'
    }
}