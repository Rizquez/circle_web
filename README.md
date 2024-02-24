# Circle Web | HTML + CSS + JS
![img](circle.jpg)

Este proyecto esta se desarrolla con la finalidad de poner en practica las habilidades adquiridas sobre desarrollo web integrando herramientas de HTML, CSS y JavaScript.

> [!NOTE]
El diseño esta basado en el fichero `.fig` que se encuentra al mismo nivel que el directorio raiz del proyecto.

> [!IMPORTANT]
Este proyecto es de caracter educativo y sirve para aplicar habilidades/conceptos relacionados al uso de aplicaciones WEB.

> [!TIP]
El fichero `.fig` puede ser visualizado utilizando herramientas como [Figma](https://www.figma.com/).

## Funcionalidad
Este proyecto consta de tres partes las cuales se describen a continuacion:

- La primera pagina es la principal, en esta se puede conocer un poco mas de la empresa asi como los patners, proyectos recientes y comentarios de los clientes. Tambien se encuentran otros servicios ofrecidos por la empresa, asi como un espacio en donde se podra ingresar un email para suscribirse al newsletter.

- Para acceder a la segunda se debera dar clic en la opcion de `Learn more` en los proyectos del apartado `Recent Projects`, lo cual redijira al usuario a una pagina que se genera en base a la informacion relacionada al proyecto en cuestion. En esta pagina, ademas conseguira informacion sobre otros proyectos que han sido desarrollados por la empresa. Tambien se podra dar clic en `Learn more` para acceder a la informacion de cada proyecto. Aqui tambien encontrara la seccion para suscribirse.

- La ultima pagina es la de contacto, en donde el usuario podra indicar sus datos de contacto, asi como redactar un mensaje y enviarlo junto con sus datos mediante el formulario de contacto.

## Estructura del proyecto
```
├── circle.jpg
├── LICENSE
├── mid-term-project.fig
├── README.md
└── src
    ├── contactus_page
    │   ├── styles
    │   │   └── contact_us.css
    │   └── templates
    │       └── contact_us.html
    ├── home_page
    │   ├── styles
    │   │   └── home_page.css
    │   └── templates
    │       └── home_page.html
    ├── json
    │   └── projec.json
    ├── project_page
    │   ├── styles
    │   │   └── project_page.css
    │   └── templates
    │       └── project_page.html
    ├── resources
    │   ├── hero-section
    │   │   └── hero.png
    │   ├── logos
    │   │   ├── airbnb-log.svg
    │   │   ├── amazon-logo.svg
    │   │   ├── circle.svg
    │   │   ├── fedex-logo.svg
    │   │   ├── google-logo.svg
    │   │   └── microsoft-logo.svg
    │   ├── newsletter
    │   │   └── icon
    │   │       └── mail.svg
    │   ├── projects-section
    │   │   ├── 1.jpg
    │   │   ├── 2.jpg
    │   │   ├── 3.jpg
    │   │   ├── 4.jpg
    │   │   ├── 5.jpg
    │   │   └── 6.jpg
    │   ├── services-section
    │   │   └── icon
    │   │       ├── 1.svg
    │   │       ├── 2.svg
    │   │       └── 3.svg
    │   └── testimonial-section
    │       ├── memoji-1.png
    │       ├── memoji-2.png
    │       ├── memoji-3.png
    │       ├── memoji-4.png
    │       ├── orbit.png
    │       └── profile.png
    ├── scripts
    │   └── utils.js
    └── styles
        └── global.css
```

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir al proyecto, por favor haz un `fork` del repositorio, crea una rama con tus mejoras y envía un `pull request`.

## Licencia
Este proyecto está bajo una licencia MIT. Consulta el archivo `LICENSE` para más detalles.