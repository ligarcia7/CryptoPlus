let endpoint = "https://api.binance.com/api/v3/ticker/price"

fetch(endpoint)
.then(response => response.json())
.then(data => mostrarData(data))
.catch(e=> console.log(e))

const mostrarData= (data)=>{
    console.log(data);
    const filtro = data.filter(d=> d.symbol === 'BTCUSDT' || d.symbol === 'ETHBTC' || d.symbol === 'LTCBTC')
    // console.log(filtro);
    // let symbol = ''
    // for (let i = 0; i < filtro.length; i++) {
    //     symbol =`<h3>${filtro[i].symbol}</h3><p>${filtro[i].price}</p>`
    //     console.log(symbol);   
    // }
    let BTCUSDT = `<h4>Symbol:</h4><h3> ${filtro[0].symbol}</h3> <br> <p>Price:</p> <p> ${filtro[0].price}</p>`
    let ETHBTC = `<h4>Symbol:</h4><h3> ${filtro[1].symbol}</h3> <br> <p>Price:</p> <p> ${filtro[1].price}</p>`
    let LTCBTC = `<h4>Symbol:</h4><h3> ${filtro[2].symbol}</h3> <br> <p>Price:</p> <p> ${filtro[2].price}</p>`
    
    document.getElementById('BTCUSDT').innerHTML = BTCUSDT
    document.getElementById('ETHBTC').innerHTML = ETHBTC
    document.getElementById('LTCBTC').innerHTML = LTCBTC
}