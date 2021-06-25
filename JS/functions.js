
$(function(){

// SLIDE
	// $("#slider").nivoSlider();


//SLIDE 

	var indiceAtual = 0;
	var indiceMax = $('.slide img').length;

	startSlide();
	controlSlide();
	contpac();

	function startSlide(){

		for(var i = 0; i < indiceMax; i++){
			if(i == 0){
				$('.controll').append('<span style="background:#3936ff;"></span>')
			}
			else{
				$('.controll').append('<span></span>')
			}
		}

		$('.slide img').eq(0).stop().fadeIn(5300)

		setInterval( function(){
			switSlide();
		}, 5300);
	}

	function switSlide(){
		$('.slide img').eq(indiceAtual).stop().fadeOut(5300);
		indiceAtual+=1;

		if(indiceAtual == indiceMax){
			indiceAtual = 0;
		}

		setInterval(function(){
			$('.controll span').css('background','white');
			$('.controll span').eq(indiceAtual).css('background','#3936ff');
		}, 5300);

		$('.slide img').eq(indiceAtual).stop().fadeIn(5300);	

	}

	function controlSlide(){
		$('.controll span').click(function(){
			$('.slide img').eq(indiceAtual).stop().fadeOut(5300);
			indiceAtual=$(this).index();
			$('.slide img').eq(indiceAtual).stop().fadeIn(5300);
			$('.controll span').css('background','white');
			$(this).css('background','#3936ff');

		})
	}

// CONTADOR
	

	function contpac(){
		const btcont=document.getElementById("add-pac");
		const n=document.getElementById("expo");



		let contador = 0;

		n.innerHTML=contador;

		btcont.addEventListener("click", function(){
			n.innerHTML= 2+contador;			
		})
	}


// CLOSE MODAL

	function closemodal01(){
		$('#show-lanche').click(function(){
			$('.cover-modal').css('display', 'flex');
		})

		$('#close').click(function(){
			$('.cover-modal').css('display', 'none');
		})
		
		// $('#camp-close').click(function(){
		// 	$('.cover-modal').css('display', 'none');
		// })

	}

	closemodal01();


})





