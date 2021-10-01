function tabuada() {
    let num = document.getElementById('numero')
    let tab = document.getElementById('seltab')
    let tab2 = document.getElementById('seltab2')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //esse comando limpa a tabuada velha antes de começar uma nova
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
        let d = 11
        tab2.innerHTML = ''
        while (d <= 20) {
            let item2 = document.createElement('option')
            item2.text = `${n} x ${d} = ${n*d}`
            tab2.appendChild(item2)
            d++
        }
    }
}
