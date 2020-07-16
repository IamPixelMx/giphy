[![Framework](https://img.shields.io/badge/Framework-React.js-important?style=plastic)](https://create-react-app.dev/docs)
[![server](https://img.shields.io/badge/server-express-yellow?style=plastic)](https://expressjs.com/)
[![styled with Bootstrap](https://img.shields.io/badge/styled-Bootstrap-blue?style=plastic)](https://reactstrap.github.io/)
[![formatter with prettier](https://img.shields.io/badge/formatter-prettier-blueviolet?style=plastic)](https://github.com/prettier/prettier)
[![styled guide](https://img.shields.io/badge/style_guide-Airbnb-violet?style=plastic)](https://github.com/airbnb/javascript)
[![deploy](https://img.shields.io/:deploy-Heroku-pink.svg?style=plastic)](https://devcenter.heroku.com/categories/reference)

---

<br />
<p align="center">
  <a href="https://gipphy.herokuapp.com">
    <img src="public/logo.png" alt="Logo" width="255">
  </a>
<br />
<br />
  <p align="center">
Giphy la herramienta donde puedes encontrar los mejores y más espectaculares GIFs! Para expresarte y compartir a través de tus redes sociales.   <br />
    <a href="https://github.com/eriika19/giphy/tree/master/src"><strong>Explorar proyecto »</strong></a>
    <br />
    <br />
    <a href="https://gipphy.herokuapp.com">Ir a Sitio</a>
    ·
    <a href="https://github.com/eriika19/giphy/issues">Reportar Problema</a>
    ·
  </p>
  <br />
</p>
 
 <h3 align="center"> React, Redux-Saga, Bootstrap, GiphyFetch, Express, Eslint, Lint-staged, Heroku</h3>
 
 <br />

---

# Contenido

- [Acerca del Proyecto](#acerca-del-proyecto)
  - [Herramientas](#_herramientas_)
  - [Próximos alcances](#próximos-alcances)
- [Correr proyecto localmente](#correr-proyecto-localmente)
- [Contacto](#contacto)

 <br />

## Acerca del proyecto 🚀

Esta aplicación se desarrollo como app web que permite buscar y visulaizar los mejores GIFs de
manera fácil y rápida.

Implementa solicitudes fetch por la cuál se consume la API de Giphy y, es totalmente responsiva.

 <br />

### _*Herramientas*_ 🛠️

- [React](https://create-react-app.dev/docs)
- [Redux-Saga](https://github.com/bmealhouse/next-redux-saga)
- [GiphyFetch](https://github.com/Giphy/giphy-js/blob/master/packages/fetch-api/README.md)
- [Express](https://expressjs.com/)
- [Bootstrap](https://reactstrap.github.io/)
- [Hooks](https://es.reactjs.org/docs/hooks-intro.html)
- [Git](https://git-scm.com/)
- [Eslint](https://eslint.org/)
- [Lint-staged](https://openbase.io/js/lint-staged)
- [Husky](https://github.com/typicode/husky)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Prettier](https://github.com/prettier/prettier)
- [Airbnb Style Guide](https://github.com/airbnb/javascript)

### Próximos alcances

- [ ] Agregar templates de campos de búsqueda para una búsqueda express.
- [ ] Añadir tests en todos los componentes.

## Correr proyecto localmente

Este proyecto se puede correr en un equipo local, clonando este repositori e instalando localmente
las dependencias requeridas.

### Clonar

Introducir el siguiente comando para clonar este repositorio:

```
$ git clone https://github.com/eriika19/giphy.git
```

### Instalar dependencias

Una vez clonado se debe ir al directorio raíz del proyecto y ejecutar el siguiente comando para
instalar todas las dependencias listadas en el `package.json`:

```
$ yarn
```

### Variables de ambiente

Se deben definir la API_KEY en las variables de ambiente, ya que este repositorio no las incluye. Es
posible correr `cp .env.example .env` para definir las propias variables de ambiente en archivo
`.env`.

Ejemplo:

```shell
REACT_APP_GIPHY_API_KEY=************
```

### Correr proyecto

- Para correr Giphy en un ambiente de desarrollo ejecutar:

```
$ yarn dev
```

- Para correr Giphy en un ambiente de producción ejecutar:

```
$ yarn build
```

```
$ yarn start
```

Una vez que el proyecto este corriendo estará listo en `http://localhost:3000/`

### Ejecutar tests

Para ejecutar los tests correr los siguientes comandos:

```
$ yarn test
```

```
$ yarn test:coverage
```

### Prettier and Eslint

Prettier y Eslint se ejecutarán automáticamente al realizar un _commit_ a través de la configuración
de `lint-sataged` y `husky`. Sin embargo, también pueden ser ejecutados independentemente con los
siguientes comandos:

**Prettier**

```
$ yarn prettier
```

**Eslint**

```
$ yarn lint
```

### Comentarios

Cualquier duda o comentario no dudes en abrir un issue. 😊

---

> ## _Contacto_

Creado con ❤️ por [Itzel Enciso](https://github.com/eriika19)

Sitio Web - [itzelenciso.com](https://itzelenciso.com/)

LinkedIn - [@itzelenciso](https://www.linkedin.com/in/itzelenciso/)

Correo Gmail -
[enciso.iq@gmail.com](<mailto:enciso.iq@gmail.com?subject=Reclutamiento&body=¡Buen día! el motivo de contacto es:>)

¡Gracias por visitar!
