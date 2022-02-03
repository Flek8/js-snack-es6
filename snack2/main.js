let squadre = [
    {
        nome : 'Inter',
        golFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Milan',
        golFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Juve',
        golFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Atalanta',
        golFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Roma',
        golFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Lazio',
        golFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Napoli',
        golFatti : 0,
        falliSubiti : 0
    }
]



const gol = []
const falli = []

for (let i = 0; i < squadre.length; i++) {
    let {golFatti, falliSubiti} = squadre;
    golFatti = numeroCasuale(10, 50);
    falliSubiti = numeroCasuale(20, 100);
    gol.push(golFatti);
    falli.push(falliSubiti);
}
let squadreFinali = [
]
for (let i = 0; i < squadre.length; i++) {
    
    let nome2 = squadre[i].nome;
    let falli2 = falli[i];
    
    squadreFinali[i] = {
        nome : `${nome2}`,
        falliSubiti : `${falli2}`
    }
    
}

console.log(squadreFinali);
function numeroCasuale(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
} 