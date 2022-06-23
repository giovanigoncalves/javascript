function contar() {
    let ini = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let text = window.document.getElementById('form')
    
    

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        text.innerHTML = 'Impossível contar!'
        window.alert('Faltam valores. Verifique os dados.')
    } else {

        if (passo <= 0) {
            window.alert('[ERRO] Valor Inválido! Insira um número maior que zero.')
        } else {
            ini = Number(ini.value)
            fim = Number(fim.value)
            passo = Number(passo.value)
            
            text.innerHTML = 'Contando...<br>'

            if (passo <= 0) {
                window.alert('Passo inválido. O passo deve ser maior que zero. Considerando Passo = 1. ')
                passo = 1
            }

            if (ini > fim) { 
                let c = ini
                while (c >= fim) {
                    text.innerHTML += ` ${c} \u{1F449}`
                    c -= passo    
                }
            } else {
                let c = ini
                while (c <= fim) {
                    text.innerHTML += ` ${c} \u{1F449}` 
                    c += passo   
                }
            text.innerHTML += ` \u{1F3C1}`    
            }
        }   
    }
}
