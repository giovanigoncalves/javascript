function verificar() {
    var res = window.document.getElementById('resultado')
    var ano = window.document.getElementById('idade')
    var sexo = window.document.getElementById('masc')
    var img = window.document.getElementById('img')

    if (ano.value.length == 0 || Number(ano.value) > new Date().getFullYear()) {
        window.alert('[ERRO] Valor inválido. Por favor, verifique os dados e tente novamente.')
    } else {
        var idade = new Date().getFullYear() - Number(ano.value)
        if (idade <= 2) {
            if (sexo.checked) {
                res.style.textAlign = 'center'
                res.innerHTML = `<p id="new_text">Detectamos um Bebê com ${idade} anos</p>`
                img.innerHTML = '<img src="imagens2/baby_homem.png" alt="bebe homem">'
            } else { 
                res.style.textAlign = 'center'
                res.innerHTML = `<p id="new_text">Detectamos uma Bebê com ${idade} anos</p>`
                img.innerHTML = '<img src="imagens2/baby_mulher.png" alt="bebe mulher">'
            }
        } else if (idade <= 12) {
            if (sexo.checked) {
                res.style.textAlign = 'center'
                res.innerHTML = `<p id="new_text">Detectamos uma Criança com ${idade} anos</p>`
                img.innerHTML = '<img src="imagens2/crianca_homem.png" alt="criança homem">'
            } else { 
                res.style.textAlign = 'center'
                res.innerHTML = `<p id="new_text">Detectamos uma Criança com ${idade} anos</p>`
                img.innerHTML = '<img src="imagens2/crianca_mulher.png" alt="criança mulher">'
            }
        } else if (idade <= 18) {
            if (sexo.checked) {
                res.style.textAlign = 'center'
                res.innerHTML = `<p id="new_text">Detectamos um Adolescente com ${idade} anos</p>`
                img.innerHTML = '<img src="imagens2/adolescente_homem.png" alt="adolescente homem">'
            } else { 
                res.style.textAlign = 'center'
                res.innerHTML = `<p id="new_text">Detectamos uma Adolescente com ${idade} anos</p>`
                img.innerHTML = '<img src="imagens2/adolescente_mulher.png" alt="adolescente homem">'
            }
        } else if (idade <= 60) {
            if (sexo.checked) {
                res.style.textAlign = 'center'
                res.innerHTML = `<p id="new_text">Detectamos um Adulto com ${idade} anos</p>`
                img.innerHTML = '<img src="imagens2/homem.png" alt="adulto">'
            } else { 
                res.style.textAlign = 'center'
                res.innerHTML = `<p id="new_text">Detectamos um Adulto com ${idade} anos</p>`
                img.innerHTML = '<img src="imagens2/mulher.png" alt="adulto">'
            }
        } else if (idade <= 110) {
            if (sexo.checked) {
                res.style.textAlign = 'center'
                res.innerHTML = `<p id="new_text">Detectamos um Velho com ${idade} anos</p>`
                img.innerHTML = '<img src="imagens2/velho.png" alt="velho">'
            } else { 
                res.innerHTML = `<p id="new_text">Detectamos uma Velha com ${idade} anos</p>`
                img.innerHTML = '<img src="imagens2/velha.png" alt="velha">'
            }
        } else {
            res.style.textAlign = 'center'
            res.innerHTML = `<p id="new_text">Detectamos que depois de ${idade} anos, esse já morreu</p>`
            img.innerHTML = '<img src="imagens2/esqueleto.png" alt="esqueleto">'
        }

        }
}