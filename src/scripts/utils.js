let jsonData = null

async function fetchData() {
    try {
        const response = await fetch('../../json/project.json')
        if (!response.ok) {
            throw new Error('Error en la conexion')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al cargar el JSON:', error)
    }
}

async function processData() {
    const data = await fetchData()
    if (data) {
        jsonData = data
    }
}

document.addEventListener('DOMContentLoaded', async  (event) => {

    await processData()

    const params = new URLSearchParams(window.location.search)
    const project = params.get('project')

    const projectTitle = document.querySelector('.project-title')
    const projectImage = document.querySelector('.project-image')
    const projectDescription = document.querySelector('.project-description')
    const projectText = document.querySelector('.project-text')

    if (project) {
        projectTitle.textContent = project
        projectDescription.textContent = jsonData['projects'][project][0]
        projectImage.src = jsonData['projects'][project][2]
        projectText.textContent = jsonData['projects'][project][1]
        
    }
})