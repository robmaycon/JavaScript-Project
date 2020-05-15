var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table")

tabela.addEventListener("dblclick", function(event) {

	if (event.target.tagName == 'TD') {
		event.target.parentNode.classList.add("fadeout");

		setTimeout(function() {
	
			event.target.parentNode.remove();
		}, 1000);
	}		
})