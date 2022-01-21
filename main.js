let km= parseInt(prompt("Quanti chilometri devi percorrere?"));
let età= parseInt(prompt("Quanti anni hai ?"));


let prezzo_km_tot= `${km}`*0.21;

if (età > 18 && età < 65)
    {
    document.getElementById("demo").innerHTML = `Biglietto da pagare:${prezzo_km_tot.toFixed(2)} €`;
}

else if (età >= 65)
    {
    let sconto40= `${prezzo_km_tot}`-(`${prezzo_km_tot}`/100*40)
    document.getElementById("demo2").innerHTML = `Essendo un over65 hai uno sconto del 40%`;
    document.getElementById("demo").innerHTML = `Biglietto da pagare: ${sconto40.toFixed(2)} €`; 
}

else if (età < 18)
    {
    let sconto20= `${prezzo_km_tot}`-(`${prezzo_km_tot}`/100*20) 
    document.getElementById("demo2").innerHTML = `Essendo un minorenne hai uno sconto del 20%`;
    document.getElementById("demo").innerHTML = `Biglietto da pagare: ${sconto20.toFixed(2)} €`;  
}


