[![Framework](https://img.shields.io/badge/Framework-React.js-important?style=plastic)](https://create-react-app.dev/docs)
[![styled with Bootstrap](https://img.shields.io/badge/styled-Bootstrap-blue?style=plastic)](https://emotion.sh/)
[![formatter with prettier and eslint](https://img.shields.io/badge/formatter-prettier&eslint-blueviolet?style=plastic)](https://github.com/eslint/eslint)
[![styled guide](https://img.shields.io/badge/style_guide-Airbnb-violet?style=plastic)](https://github.com/airbnb/javascript)
[![deploy](https://img.shields.io/:deploy-Heroku-pink.svg?style=plastic)](http://badges.isc-license.org)

---

<br />
<p align="center">
  <a href="">
    <img src="public/tauros.png" alt="Logo" width="155">
  </a>

  <h3 align="center">Giphy</h3>

  <p align="center">
Giphy la herramienta que te donde puedes encontrar los mejores y espectaculares GIFs con que expresar y compartir en todas tus redes.   <br />
    <a href="https://github.com/eriika19/giphy/tree/master/components"><strong>Explorar proyecto »</strong></a>
    <br />
    <br />
    <a href="https://giphy.vercel.app">Ir a Sitio</a>
    ·
    <a href="https://github.com/eriika19/giphy/issues">Reportar Problema</a>
    ·
  </p>
  <br />
</p>
 
 <h3 align="center"> React, Redux-Saga, Bootstrap, Axios, Eslint, Lint-staged</h3>
 
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

Esta aplicación se desarrollo como app web que permite visualizar, encontrar y guardar, los mejores
GIFs de manera fácil y rápida. Implementando solicitudes Axios para consumir la API de Giphy

 <br />

### _*Herramientas*_ 🛠️

- [React](https://create-react-app.dev/docs)
- [Redux-Saga](https://github.com/bmealhouse/next-redux-saga)
- [Axios](https://github.com/axios/axios)
- [Hooks](https://es.reactjs.org/docs/hooks-intro.html)
- [Git](https://git-scm.com/)
- [Eslint](https://eslint.org/)
- [Lint-staged](https://openbase.io/js/lint-staged)
- [Husky](https://github.com/typicode/husky)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Prettier](https://github.com/prettier/prettier)
- [Airbnb Style Guide](https://github.com/airbnb/javascript)

### Próximos alcances

- [ ] Añadir tests en todos los componentes.

## Correr proyecto localmente

Este proyecto puede ser corrido en un equipo local, clonando e instalando localmente las
dependencias requeridas.

### Crear proyecto localmente

Comenzar proyecto de manera locar clonando este repositorio con:

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

Se deben definir las variables de ambiente para poder realizar las llamadas a la API_URL, ya que el
repositorio no las incluye. Es posible correr `cp .env.example .env` para definir las propias
variables de ambiente en archivo `.env`.

Ejemplo:

```shell
REACT_APP_API_URL_BASE=https://api.giphy.com/v1
```

### Correr proyecto

- Para correr Giphy en un ambiente de producción ejecutar:

```
$ yarn build
```

```
$ yarn start
```

- Para correr Giphy en un ambiente de desarrollo ejecutar:

```
$ yarn dev
```

Una vez corriendo estará listo en `http://localhost:3000/`

### Ejecutar tests

Para ejecutar los tests correr los siguientes comando:

```
$ yarn test
```

```
$ yarn test:coverage
```

### Prettier and Eslint

Prettier and Eslint se ejecutarán automáticamente al realizar un _commit_.

Sin embargo, también pueden ser ejecutados independentemente con los siguientes comandos:

**Prettier**

```
$ yarn prettier:write
```

**Eslint**

```
$ yarn lint:js
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
