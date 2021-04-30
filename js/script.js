
// 1. chiedi all'utente il cognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var listCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var cognomeUtente = prompt("Inserisci il cognome:");
var k=0;
if(cognomeUtente == ""){
    alert("Errore non hai inserito nessun cognome");
}else{
    listCognomi.push(cognomeUtente);
    
/*Introduzione di una funzione per ordinare gli elementi case:insensitive, all'inserimento di un cognome con iniziale minuscola viene ordinato nel modo corretto*/
function mySorter(a, b){
    var vA = a.toLowerCase();
    var vB = b.toLowerCase();
    if(vA < vB) return -1;
    if(vA > vB) return 1;
    return 0;
}
listCognomi.sort(mySorter);
/*caso:sensitive utilizzo della sola funzione javascript .sort() che ordina nel modo corretto solo se tutte maiuscole o minuscole*/
//listCognomi.sort();
var listaOrdinata = document.getElementById("lista_ordinata");
for(var i=0; i < listCognomi.length; i++){
    console.log(listCognomi[i]);
    listaOrdinata.innerHTML += "<li>" +listCognomi[i] + "</li>";
    if(cognomeUtente == listCognomi[i]){
        k=i+1;
    }
}
if(k!=0){
    document.getElementById("messaggio").innerHTML = "Il cognome "+ "<span>"+ cognomeUtente+ "</span>"+" si trova in posizione "+"<span>"+ k + "</span>";
console.log("Il cognome "+ "<span>"+ cognomeUtente+ "</span>"+" si trova in posizione "+"<span>"+ k + "</span>");
}

}




