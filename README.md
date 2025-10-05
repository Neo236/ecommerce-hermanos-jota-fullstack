# Casa Jota Digital - Aplicación Full-Stack con React y Node.js

<div align="center">
  <img src="client/public/images/logo.svg" alt="Logo de Hermanos Jota" width="80">
  <br>
  <br>
  <h1>Casa Jota Digital</h1>
  <h3>E-commerce Full-Stack para Mueblería Hermanos Jota</h3>
</div>

---

## 📜 Resumen del Proyecto

Este proyecto representa la evolución de una maqueta estática a una **aplicación web full-stack completamente funcional**, desarrollada para el curso de Desarrollo Web de la **Escuela de Innovación del ITBA**.

La aplicación consiste en un **backend** (servidor) construido con **Node.js y Express** que expone una API REST para servir los datos de los productos, y un **frontend** (cliente) reconstruido desde cero como una **Single Page Application (SPA)** utilizando **React**. Ambas partes conviven en una estructura de monorepo y el entorno de desarrollo del backend está containerizado con **Docker** para garantizar consistencia y facilidad de uso.

---

## ✨ Funcionalidades Clave Implementadas

*   **Arquitectura Cliente-Servidor:** La aplicación está desacoplada: el frontend (cliente) es responsable únicamente de la interfaz de usuario y consume los datos que le provee el backend (servidor) a través de peticiones HTTP.
*   **API REST con Express:** El backend expone endpoints (`/api/productos` y `/api/productos/:id`) para consultar la lista completa de productos o un producto específico.
*   **Frontend Moderno con React:**
    *   **Arquitectura de Componentes:** La interfaz está descompuesta en componentes reutilizables (`Navbar`, `ProductList`, `ProductCard`, `ProductDetail`, etc.).
    *   **Manejo de Estado Centralizado:** Se utilizan los hooks de React (`useState`, `useEffect`) en el componente principal `App.jsx` para gestionar el estado global de la aplicación (productos, carrito, vista actual).
    *   **Renderizado Condicional:** La navegación entre la vista de catálogo y la vista de detalle de un producto se realiza sin recargar la página, cambiando el estado de la aplicación. **Esta decisión se tomó para cumplir con los requisitos del sprint, ya que no se cubría el uso de librerías de enrutamiento como React Router.**
*   **Carrito de Compras Funcional:** Los usuarios pueden añadir productos al carrito, y el contador en el `Navbar` se actualiza en tiempo real reflejando el estado de la aplicación.
*   **Formulario Controlado:** El formulario de contacto es un componente controlado de React, manejando sus valores a través del estado y mostrando un mensaje de éxito al enviar sin recargar la página.
*   **Entorno de Desarrollo Containerizado:** El backend se ejecuta dentro de un contenedor de **Docker**, asegurando que el entorno de desarrollo sea idéntico y portable para todos los desarrolladores.

---

## 🛠️ Tecnologías Utilizadas

#### **Frontend (Client)**
*   **React:** Para construir la interfaz de usuario declarativa y basada en componentes.
*   **Vite:** Como herramienta de construcción y servidor de desarrollo ultrarrápido.
*   **JavaScript (ES6+):** Incluyendo `fetch` para el consumo de la API.
*   **CSS3:** Para el estilizado y el diseño responsivo.

#### **Backend (Server)**
*   **Node.js:** Como entorno de ejecución para el servidor.
*   **Express.js:** Para la creación del servidor web y la API REST.
*   **Nodemon:** Para reiniciar automáticamente el servidor durante el desarrollo.

#### **Entorno y Herramientas**
*   **Docker & Docker Compose:** Para containerizar y orquestar el servicio del backend.
*   **WSL (Windows Subsystem for Linux):** Como entorno de desarrollo principal.

---

## 🚀 Cómo Ejecutar el Proyecto

Para correr este proyecto, necesitarás tener **Docker Desktop** y un entorno **WSL** con **Node.js** instalados en tu máquina.

1.  **Clonar el Repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/hemanos-jota-fullstack.git
    cd hemanos-jota-fullstack
    ```

2.  **Levantar el Backend (con Docker):**
    Asegúrate de que Docker Desktop esté corriendo. Luego, desde la carpeta raíz del proyecto, ejecuta:
    ```bash
    docker-compose up --build
    ```
    *   Este comando construirá la imagen de Docker para el backend, instalará sus dependencias y lo iniciará.
    *   El servidor del backend estará disponible en `http://localhost:3001`. Puedes probar la API visitando `http://localhost:3001/api/productos`.

3.  **Instalar y Levantar el Frontend:**
    *   Abre una **nueva terminal** de WSL.
    *   Navega a la carpeta del cliente:
        ```bash
        cd client
        ```
    *   Instala las dependencias del frontend:
        ```bash
        npm install
        ```
    *   Inicia el servidor de desarrollo de Vite:
        ```bash
        npm run dev
        ```

4.  **Acceder a la Aplicación:**
    *   Vite abrirá automáticamente tu navegador en la dirección del frontend (usualmente `http://localhost:5173`). ¡La aplicación estará lista para usarse!

---

## 🏗️ Arquitectura del Proyecto

El proyecto sigue una estructura de **monorepo** para mantener tanto el frontend como el backend en un solo repositorio de Git.

*   **/backend:** Contiene toda la aplicación de Node.js/Express, incluyendo las rutas, los datos de los productos y su `Dockerfile`.
*   **/client:** Contiene toda la aplicación de React creada con Vite, incluyendo los componentes, estilos y archivos públicos.
*   **docker-compose.yml:** Archivo en la raíz que define y configura el servicio del backend.

---

## 👥 Integrantes

*   Camila Maturano
*   Eduardo Benjamin Lopez Avila
*   Lautaro Sebastian Mambrin
*   Pablo Méndez
