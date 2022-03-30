// Oppgave 1
const helloWrld = () => {
    console.log("Hello World!");
}

helloWrld();

// Oppgave 2
const enParameter = _ => {
    console.log(_);
}

enParameter("underscore");

// Oppgave 3
const treParametere = (param1, param2, param3) => {
    console.log(param1 + " " + param2 + " " + param3);
}

treParametere("Parameter 1", "Parameter 2", "Parameter 3");

// Oppgave 4
const restOperator = (...rest) => {
   if(rest > 5){ 
       console.log(rest [2]);
    }else{
        console.log("Det er for mange!");
    }
}

restOperator("Sofa", "Seng", "Stol", "Hengekøye", "Strand", "Gyngestol", "Krakk", "Benk", "Pute")

// Oppgave 5
// Funksjoner skrevet med pilfunksjon blir ikke "hoistet" i koden. Det betyr at man ikke kan skrive dem nederst i koden slik man
// gjør med funksjoner definert med kodeordet "function". Man kan bruke pilfunksjoner som argumenter i funksjoner, som ofte kan 
// være en fordel.


// Oppgave 1
// Løsningen bruker pilsyntax og skriver utnevnte utskrift. 2/2
// Løsningen har ingen mulighet for å bruke argumenter, 1/1
// Eller signaliserer at det ikke skal brukes argumenter. 1/1
// - Det er et funksjonskall som demonstrerer at funksjonen virker 1/1

// Oppgave 2
// Løsningen bruker pilsyntax 1/1
// Løsningen har en parameter 1/1
// Du har vist at du kan bruke “den fancy” måten å lage en parameter 1/1
// Det er et funksjonskall som demonstrerer at funksjonen virker 1/1

// Oppgave 3
// Løsningen bruker pilsyntax 1/1
// Løsningen har tre paramtere 1/1
// Alle tre parameterne blir skrevet ut. 1/1
// Det er et funksjonskall som demonstrerer at funksjonen virker 1/1

// Oppgave 4
// Løsningen bruker pilsyntax og skriver utsom påkrevet 1/1
// Utskrift med løkke 1/2

// Oppgave 5
// Besvarelsen nevner nøkkelordet this og setterdet i sammenheng 
// med funksjoner som er definert med nøkkelordet ‘function’ 2/2