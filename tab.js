function tabuada() {
    let num = document.getElementById('numero')
    let tab = document.getElementById('seltab')
    let tab2 = document.getElementById('seltab2')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        
        tab.innerHTML = '' //esse comando limpa a tabuada velha antes de começar uma nova
       /* 
       PODE FAZER DE DOIS JEITOS, COM WHILE OU FOR
       let c = 1
       while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
        */
       for (let c = 1;c<=10;c++){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
       }
        
        tab2.innerHTML = ''
        /*
        let d = 11
        while (d <= 20) {
            let item2 = document.createElement('option')
            item2.text = `${n} x ${d} = ${n*d}`
            tab2.appendChild(item2)
            d++
        }
        */
       for (let d=11;d<=20;d++){
            let item2 = document.createElement('option')
            item2.text = `${n} x ${d} = ${n*d}`
            tab2.appendChild(item2)
       }
    }
}
