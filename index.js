// Mapa para manejar las rutas y ue hacer en esas rutas (mostrar el contenido)
function handleRoute(route) {
  //Recibe una ruta en el ROUTE
  console.log("Ruta recibida:", route);

  //Contenedor
  const contenedorEl = document.querySelector(".container");

  // MAPA DE RUTAS
  const routes = [
    {
      path: /\/sit1/,
      handler: () => {
        contenedorEl.textContent = "Sit 1";
        // console.log("handler de sit 1");
      },
    },
    {
      path: /\/sit2/,
      handler: () => {
        contenedorEl.textContent = "Sit 2";
        // console.log("handler de sit 2");
      },
    },
    {
      path: /\/search\/./,
      handler: () => {
        contenedorEl.textContent = "Buscador";
        // console.log("handler de sit 2");
      },
    },
  ];

  //
  for (const element of routes) {
    // .test --> es un metodo de la REGULAR EXPRESION
    if (element.path.test(route)) {
      console.log("Ruta encontrada:", element);
      element.handler();
    }
  }
}

function goTo(path) {
  // El path, va a recibir como dato "/sit1" o "/sit2"

  // PushState --> cambia la url sin resfrescar la pagina / Cambia el state(url simbolica)
  history.pushState({}, "", path);

  handleRoute(path);
}

// Esta funcion, auto invocada reemplazaria nuestro "MAIN"
(function () {
  const sit1ButtonEl = document.querySelector(".sit-1");
  const sit2ButtonEl = document.querySelector(".sit-2");
  const sit3ButtonEl = document.querySelector(".sit-3");

  sit1ButtonEl.addEventListener("click", () => {
    goTo("/sit1");
  });

  sit2ButtonEl.addEventListener("click", () => {
    goTo("/sit2");
  });

  sit3ButtonEl.addEventListener("click", () => {
    goTo("/search/termo");
  });

  // Para escuchar cada vez ue se resfresca la pag, mostrar X contenido de la URL, sino no muestra al resfrescar
  window.addEventListener("load", () => {
    handleRoute(location.pathname);
  });
})();

//  live-server --entry-file=index.html  --> es un parametro de live-server ue indica ue cualuier url vaya por defecta al index.html principal
