function tabuada() {
    var n = window.document.getElementById('num')

    if (n.value.length == 0) {
        window.alert('Por favor, digite um número.')
    } else {
        let tab = window.document.getElementById('tab')
        let num = Number(n.value)
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option') //Cria um elemento option
            item.text = `${num} x ${c} = ${num*c}` // add um texto à option "item"
            item.value = `tab${c}` // add um valor à option "item"
            tab.appendChild(item) // add o option "item" ao final do select "tab"
        }
    }
}