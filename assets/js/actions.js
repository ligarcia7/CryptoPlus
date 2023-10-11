let endpoint = "https://api.binance.com/api/v3/ticker/price"

fetch(endpoint)
.then(response => response.json())
.then(data => mostrarData(data))
.catch(e=> console.log(e))

const mostrarData= (data)=>{
    console.log(data);
    const filtro = data.filter(d=> d.symbol === 'BTCUSDT' || d.symbol === 'ETHUSDT' || d.symbol === 'BNBUSDT' || d.symbol === 'XRPUSDT' || d.symbol === 'SOLUSDT' || d.symbol === 'ADAUSDT' || d.symbol === 'DOGEUSDT' || d.symbol === 'TRXUSDT' || d.symbol === 'GASUSDT' || d.symbol === 'MATICUSDT' || d.symbol === 'DOTUSDT' || d.symbol === 'LTCUSDT')
    console.log(filtro);
    let symbol = ''
    for (let i = 0; i < filtro.length; i++) {
        symbol =`<div id="ETHUSDT" class="price-container"><h3 >${filtro[i].symbol}</h3><p>Price:</p> <p> ${parseFloat(filtro[i].price).toFixed(2)}</p>`
        console.log(symbol);   
        document.getElementById('main').innerHTML += symbol
    }
    // let BTCUSDT = `<h4>Symbol:</h4><h3> ${filtro[0].symbol}</h3> <br> <p>Price:</p> <p> ${parseFloat(filtro[0].price).toFixed(2)}</p>`
    // let ETHUSDT = `<h4>Symbol:</h4><h3> ${filtro[1].symbol}</h3> <br> <p>Price:</p> <p> ${parseFloat(filtro[1].price).toFixed(2)}</p>`
    // let LTCUSDT = `<h4>Symbol:</h4><h3> ${filtro[2].symbol}</h3> <br> <p>Price:</p> <p> ${parseFloat(filtro[2].price).toFixed(2)}</p>`
    
    // document.getElementById('BTCUSDT').innerHTML = BTCUSDT
    // document.getElementById('ETHUSDT').innerHTML = ETHUSDT
    // document.getElementById('LTCUSDT').innerHTML = LTCUSDT
}