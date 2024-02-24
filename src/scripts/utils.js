import jsonData from '../json/project.json' assert { type: 'json' }

// Funcion para validar la estructura del correo electronico indicado para la subscripcion
function validateEmail(){
                
	var emailField = document.getElementById('email-input')
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

	if (validEmail.test(emailField.value)) {
		showAlert('Gracias por suscribirte 😉')
		return true
	} else {
		showAlert('Dirección de correo electrónica inválida ☹️')
		return false
	}
}

// Funcion para mostrar en pantalla un mensaje a usuario sobre el apartado del formulario
// de subscripcion mediante correo electronico
function showAlert(msg) {
    document.getElementById('text-alert').textContent = msg
    document.getElementById('customized-alert').style.display = 'block'
}

// Asignacion de la funcion closeAlert al window para que tenga alcance global
window.closeAlert = function() {
    document.getElementById('customized-alert').style.display = 'none'
}

// Aqui controlamos los eventos relacionados con el envio de correos para la subscripcion
// previniendo un comportamiento por default en el formulario y validando la estructura del 
// email sin recargar la pagina
document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault()
    validateEmail()
})

// Agregamos el manejador de eventos al boton dentro de la alerta para solo cerrar la alerta
document.getElementById('btn-ok').addEventListener('click', function() {
    closeAlert()
})

// Ahora vamos a controlar los eventos del DOM realizando de manera interna la 
// llamada a la funcion que extrae los datos del JSON e insertarlos en el fichero
// projects_page.html
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
