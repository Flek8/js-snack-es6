let biciclette = [
    {
        nome : 'Wilier 0 SLR',
        peso : 6.5,
    },
    {
        nome : 'Cannondale SuperSix',
        peso : 8,
    },
    {
        nome : 'Trek Emonda 2020',
        peso : 6.8,
    },
    {
        nome : 'Trek Emonda SLR',
        peso : 4.7,
    },
    {
        nome : 'SAVA Phantom',
        peso : 8.1,
    }
];

let biciPiuLeggera = pesoMinore(biciclette);

document.getElementById('target').innerHTML = 'La bici più leggera è : ' + biciPiuLeggera;

function pesoMinore(oggetti) {
        let pesi = []
        let pesoMinore
        let biciLeggera
    for (let i = 0; i < biciclette.length; i++) {
        let {peso} = biciclette[i];
        pesi.push(peso)
    } 
    for (let i = 1; i < pesi.length; i++) {
        if (pesi[i] < pesi[i - 1]) {
            pesoMinore = pesi[i];
        } else {
            pesoMinore = pesi[i - 1];
        }
        
    }
    for (let i = 0; i < biciclette.length; i++) {
        if (biciclette[i].peso == pesoMinore) {
            biciLeggera = biciclette[i].nome
        }
    }
    return biciLeggera
}