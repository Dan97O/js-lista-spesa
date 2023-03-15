/* Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while */

/* lista della spesa */
const shoppingList = ['pane', 'pasta', 'acqua', 'formaggio', 'farina', 'frutta', 'verdura', 'carne'];

/* seleziono ul nel doc html */
const ulElement = document.querySelector('.ul_list');

/* creo variabile */
let i = 0;

/* ciclo while per scorrere la lista */
while (i < shoppingList.length){

    /* creo variabile list */
    const list = shoppingList[i];

    /* creo li e visializzo la lista con ${list} */
    const listEl = `<li> ${list} </li>`;

    /* inserisco li nel doc html */
    ulElement.insertAdjacentHTML("beforeend", listEl);

    /* incremento */
    i++;
}





