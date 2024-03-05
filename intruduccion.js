/*
React:

Es una biblioteca de JavaScript, para construir interfaces de ususarios.

Pertenece a Meta.

React es una biblioteca universal, que se puede ejecutar tanto en  el clietne como en el 
servidor, nuestra aplicacion se pudee reutilizar escribiendo el codigo una sola vez. Podemos
tener el seervidor y al cliente juntos. 

-Declarativo: Te ayuda a crear interfaces de forma sencilla. Diseña vistas
simples para cada estado de la aplicacion, y react se encarga de actualizar y renderizar de manera eficiente
los componentes correctos cuando los datos cambien.

-Basado en componentes, crea componentes encapsulados que manejen su propio estado, y convirtiendolos
en interfaces de ususarios complejas.

Como la logica de los componentes esta escrita en JavaScript y no en plnatillas, puedes pasar datos de forma
sencilla a traves de tu aplicacion y mantener el estado fuera del DOM.

*/

import React from "https://esm.sh/rect@18.2.0";
import ReactDOM from "https://es.sh/react-dom@18.2.0/client"

const appDomElement = document.getElementById('app');

const root = ReactDOM.createRoot(appDomElement);

const button = React.createElement('button', {"data-id":123},'1');
const button2 = React.createElement('button', {"data-id":456},'2');
const button3 = React.createElement('button', {"data-id":789},'3');

//En react solo se renderiza 1 solo elemento a la vez.
//Por eso envolvemos toda la aplicacion en u solo elemento.

const app = React.createElement(React.Fragment, null, [button, button2, button3]); 

//Para estos casos react utiliza los React.Fragment, que se encargan de envolver los elementos y renderizarlos.



/*
JSX es una extension de ECMA Script basada en XML, que nois permite crea de forma declarativa nuestros elementos

Describimos la interfaa que queremos crear.

*/

<React.Fragment>
<button data-id="123">Me gusta</button>
<button data-id="456">Me gusta</button>
<button data-id="456">Me gusta</button>

</React.Fragment>

root.render(app);


/*
Babel, es un transpilador de codigo, donde escribimos JS y lo transforma.

Con JSX podemos añadir expresiones, colocando la constantes entre llaves

Utilizaremos un empaquetador de aplicaciones web, VITE, es compatible con Reat.

*/

/*
Para comenzar un proyecto, debemos iniciar con

1) npm i -y
2) npm install vite@latest
3) npm create 
4) cd 00-carpeta
5) npm install
6)npm run dev 

*/


