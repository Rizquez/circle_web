import jsonData from '../json/project.json' assert { type: 'json' }

// Ahora vamos a controlar los eventos del DOM realizando de manera interna la 
// llamada a la funcion que extrae los datos del JSON.
document.addEventListener('DOMContentLoaded', (event) => {

    const params = new URLSearchParams(window.location.search)
    const project = params.get('project')

    const projectTitle = document.querySelector('.project-title')
    const projectImage = document.querySelectorAll('.project-image')
    const projectDescription = document.querySelector('.project-description')
    const projectText = document.querySelector('.project-text')
    const projectDate = document.querySelector('.project-date span')

    if (project) {
        projectTitle.textContent = project
        projectDescription.textContent = jsonData['projects'][project][0]
        projectImage.forEach(element => {
            element.src = jsonData['projects'][project][2]
        })
        projectText.textContent = jsonData['projects'][project][1]
        projectDate.innerHTML = jsonData['projects'][project][3]
    }
})