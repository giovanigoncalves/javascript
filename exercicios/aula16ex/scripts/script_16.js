let n = window.document.getElementById('num')
var sel = window.document.getElementById('selnum')
var res = window.document.getElementById('res')
var l = []

function isNum(n) {
    if (Number(n) < 1 || Number(n) > 100) {
        return false
    } else {
        return true
    }   
}

function isList(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return false
    } else {
        return true
    }
}

function adicionar() {
    if (!isNum(n.value) || isList(n.value, l)) {
        window.alert('Valor inválido ou já adicionado. Verifique os valores.')
    } else {
        l.push(Number(n.value))
        let item = document.createElement('option')
        item.text = `Valor ${n.value} adicionado.`
        sel.appendChild(item)
        res.innerHTML = ''
    }
    n.value = ''
    n.focus() 
}



function finalizar() {
    if (l.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let tot = l.length
        let maior = l[0]
        let menor = l[0]
        let sum = 0

        for (let i in l) {
            if (l[i] > maior) {
                maior = l[i]
            }
            if (l[i] < menor) {
                menor = l[i]
            }
            sum += l[i]
        }

        let media = sum/tot

        res.innerHTML = ''
        res.innerHTML += `<p>Foram adicionados ${l.length} números.</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores foi ${sum}</p>`
        res.innerHTML += `<p>A média dos valores foi de ${media}</p>`
    }
}

function limpar() {
    if (l.length == 0) {
        window.alert('Não há nada o que limpar. Adicione valores primeiro.')
    } else {
        l = []
        res.innerHTML = ''
        var options = document.querySelectorAll('#selnum option')
        options.forEach(o => o.remove())
        n.focus()
    }
    
}