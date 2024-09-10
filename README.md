# 🛠️ Proyecto: Visualización de Contribuciones de GitHub 🛠️

Este proyecto tiene como objetivo visualizar de manera interactiva y gráfica las contribuciones en un repositorio de GitHub, mostrando los commits, ramas y colaboradores a lo largo del tiempo. La idea es crear una herramienta que permita ver de forma clara cómo progresa un proyecto y cómo han participado los colaboradores a través del tiempo.

## 🎯 Objetivos Principales
- **Visualización de Datos**: Crear una representación gráfica que muestre las contribuciones de los colaboradores en función de sus commits y ramas.
- **Colaboración Comunitaria**: Abrir el proyecto a la comunidad para que puedan agregar funcionalidades y mejorar el diseño.
- **Transparencia y Progreso**: Permitir a cualquier persona observar el progreso de un proyecto y cómo se ha trabajado en él.

## 🚀 Características Actuales

- **Visualización Inicial**: Mostrar las ramas del repositorio y los commits asociados a ellas.
- **Datos de los Colaboradores**: Capturar y mostrar información básica de los colaboradores, como nombre y avatar.
- **Interfaz Simple**: Usamos jQuery para manejar la manipulación del DOM y presentar los datos.

## 🛠️ Tecnologías Utilizadas

- JavaScript (con jQuery para facilitar la manipulación del DOM)
- GitHub API para obtener datos de ramas, commits y colaboradores
- HTML y CSS para el diseño de la interfaz
- `dotenv` para gestionar variables de entorno (como el token de GitHub)

## 🌱 ¿Hacia Dónde Queremos Crecer?

El proyecto está en una etapa inicial, y nos encantaría recibir contribuciones de la comunidad. Aquí algunas áreas clave en las que puedes ayudar:

### 1. Mejora del Diseño

- Proponer y crear una visualización más atractiva y amigable para el usuario.
- Añadir gráficos interactivos, como líneas de tiempo más dinámicas, representaciones con gráficos de barras o diagramas de contribución.
- Mejorar la experiencia de usuario (UX) y la interfaz de usuario (UI) en general.

### 2. Funcionalidades Adicionales

- Añadir la posibilidad de seleccionar ramas o colaboradores específicos para ver su progreso de manera detallada.
- Filtrar por fechas para ver contribuciones en un rango de tiempo determinado.
- Mostrar más datos de los commits (como mensajes de commit, links a los cambios, etc.).
- Incluir visualizaciones adicionales como gráficos de líneas o diagramas de árbol que muestren las relaciones entre ramas y merges.

### 3. Optimización y Refactorización del Código

- Mejorar el manejo de errores y la experiencia del usuario cuando la API de GitHub no responde.
- Optimizar las llamadas a la API de GitHub para obtener datos de manera más eficiente.
- Mejorar la arquitectura del código para facilitar la escalabilidad y modularidad.

### 4. Internacionalización (i18n)

- Añadir soporte para varios idiomas para que el proyecto sea más accesible a la comunidad internacional.

## 🤝 Cómo Contribuir
1. Haz un **fork** del proyecto y clona tu copia en local.
2. Crea un archivo `.env` basado en el archivo `.env.example` para tus variables de entorno:

   ```bash
   cp .env.example .env
3. Rellena tu archivo .env con los valores correspondientes (token de GitHub, propietario del repositorio, nombre del repositorio).
4. Realiza tus cambios en una nueva rama:

   ```bash
   git checkout -b nombre-de-tu-rama
   
5. Haz commits claros y concisos sobre los cambios que realizas.
6. Envía tu PR (Pull Request) explicando detalladamente lo que has agregado o mejorado.
