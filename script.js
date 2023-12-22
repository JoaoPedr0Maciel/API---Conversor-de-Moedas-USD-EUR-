const input = document.getElementById('num')
const btn = document.getElementById('button')
const selected = document.getElementById('selected')
const optDollar = document.getElementById('dollar')
const optEuro = document.getElementById('euro')
const result = document.getElementById('res')

btn.addEventListener('click', async () => {
    try {
        const api = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(res => res.json())
        const doll = parseFloat(api.USDBRL.high);
        const eur = parseFloat(api.EURBRL.high);

        if (input.value.length > 0) {
            if (selected.value === optDollar.value) {
                const dollarConverte = input.value / doll
                result.innerHTML = `$${dollarConverte.toFixed(2)}`
            } else {
                const euroConverte = input.value / eur
                result.innerHTML = `€${euroConverte.toFixed(2)}`
            }
        } else {
            result.innerHTML = "Insira um valor válido!"
        }

    } catch (err) {
        result.innerHTML = { error: err }
    }
})

