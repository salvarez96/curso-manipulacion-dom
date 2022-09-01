//Clase 4: 

function clase4 (){
    function docGetElementById(item){
        return document.getElementById(item);
    }

    function docGetElementsByClassName(item){
        return document.getElementsByClassName(item);
    }

    function docGetElementsByTagName(item){
        return document.getElementsByTagName(item);
    }

    function docQuerySelector(item){
        return document.querySelector(item);
    }

    function docQuerySelectorAll(item){
        return document.querySelectorAll(item);
    }

    //This makes it hard to pinpoint the exact locations of the logs
    // function log(item){
    //     return console.log(item);
    // }

    console.log("Using id");
    console.log(docGetElementById('emptySpan'));

    console.log("Using class");
    console.log(docGetElementsByClassName('text-content'));

    console.log("Using tag");
    console.log(docGetElementsByTagName('p'));

    console.log("Query selector an id");
    console.log(docQuerySelector('#textSpan'));

    console.log("Query selector a class");
    console.log(docQuerySelector('.text-content'));

    console.log("Query selector all");
    console.log(docQuerySelectorAll('.text-content'));
    }

// clase4();

//Clase 5

function clase5(){
    const randomClassItems = docQuerySelectorAll('.text-content');
    console.log(randomClassItems);

    const arrayOfRandomClassItems = Array.from(randomClassItems);
    console.log(arrayOfRandomClassItems);
}

// clase5();

//Clase 6

function clase6 () {
    //trayendo el contenedor section donde se encuentra el título del documento
    const titleContainer = document.querySelector('section.main-content--title');
    //creando un elemento h3
    const h3 = document.createElement('h3');
    //agregando el h3 al contenedor titleContainer
    titleContainer.appendChild(h3);
    //creando texto para agregar al h3
    const texto = document.createTextNode('Buenas buenas');
    //agregando texto al h3
    h3.appendChild(texto);

    //agregando elementos con append
    titleContainer.append('Buenas tardes', document.createElement('div'));

    //agregando elementos con insertBefore entre el h1 y el h3
    const h2 = document.createElement('h2');
    titleContainer.insertBefore(h2, h3);

    //utilizando insertAdjacentElement
    const mainTitle = document.querySelector('h1');

    const anotherTitle = document.createElement('span');

    //colocando el título antes de la etiqueta h1
    mainTitle.insertAdjacentElement('beforebegin', anotherTitle);
    //colocando el título después de la etiqueta h1
    mainTitle.insertAdjacentElement('afterend', anotherTitle);
    //colocando el título justo antes de la etiqueta de cierre de h1
    mainTitle.insertAdjacentElement('beforeend', anotherTitle);
    //colocando el título justo después de la etiqueta de apertura de h1
    mainTitle.insertAdjacentElement('afterbegin', anotherTitle);
}

clase6();