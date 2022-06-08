
/*** Este bloco pertence ao código responsável por fazer funcionar os slides pelas setas do teclado ***/

document.addEventListener('keyup', function(e) {
		var btn_prev = document.getElementById("btn-left")
		var btn_next = document.getElementById("btn-right")
    	switch (e.keyCode) {
		case 37:
			btn_prev.click()
			break
        case 40:
            btn_prev.click()
            break        
        case 39:
            btn_next.click()
			break
        case 38:
            btn_next.click()
		}
});
/**** ****/