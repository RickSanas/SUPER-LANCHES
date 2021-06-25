	function finalizar(){
		var btn_cabou=document.getElementById("cabou");

		btn_cabou.addEventListener('click', function(){
			swal('COMPRA EFETUADA', 'ESSE FOI O NOSSO SITE, OBRIGADO PELA ATENÇÃO ;)', 'success');
		})
	}

	finalizar();

	function remover(){
		var btn_remove=document.getElementById("remove-pac1");
		var btn_remove2=document.getElementById("remove-pac2");

		btn_remove.addEventListener('click', function(){
			document.getElementById("add-1").style.display = "none";
		})

		btn_remove2.addEventListener('click', function(){
			document.getElementById("add-2").style.display = "none";
		})



	}

	remover();