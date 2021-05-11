// tipos C = clubs, H hearth , J jack, S de spades 
// A,2,3,4,5,6,7,8,9,10,J,Q,K


let puntosJugador = 0;
let puntosNpc = 0;
let deck = [];

const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A','J','Q','K'];

const crearDeck = () => {

    for(i =2 ; i<=10 ; i++){
        for(let tipo of tipos){
            deck.push(i+tipo);
        }
    }

    for(let tipo of tipos){
        for(let especial of especiales){
            deck.push(especial+tipo)
        }
    }

    deck = _.shuffle(deck);
  
}

const pedirCarta = () =>{
    if(deck.length === 0){
        throw 'No hay cartas en el deck'
    }
    
 let carta=deck.pop();
    return carta;
}


const valorCarta = (carta) =>{
    const valor = carta.substring(0, carta.length-1);

    return  ( isNaN(valor))   ? 
                ( valor  === "A") ? 11 : 10 
            : valor * 1; 
}


crearDeck();


