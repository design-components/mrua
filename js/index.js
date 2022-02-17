(function(){
	$(document).ready(function(){


		function formulas(vo,x,vf,a,t){
		var opcion = $('.option-input').filter(":checked").val();
		var txt = $('.result-txt');



		if (opcion == "v" ) {
			$('.v').css({'display':'none'});
			$('.x').css({'display':'none'});
			$('.a').css({'display':'block'});
			$('.t').css({'display':'block'});

			var result= vo + (a*t);

		}else if (opcion == "x" ){
			$('.v').css({'display':'none'});
			$('.x').css({'display':'none'});
			$('.a').css({'display':'block'});
			$('.t').css({'display':'block'});

			var uno = (a * (t*t))/2;
			var result = (vo*t) + uno;


		}else if( opcion=="a"){
			$('.v').css({'display':'block'});
			$('.a').css({'display':'none'});
			$('.t').css({'display':'block'});



			var result = (vf - vo ) / t ;
						
		}else if(opcion=="t"){
			$('.a').css({'display':'block'});
			$('.t').css({'display':'none'});
			$('.v').css({'display':'block'});
			var result = (vf- vo) / a;

		}

		if (isNaN(result)) {
			txt.text(0);
		}else {
			txt.text(result);
		}

		// console.log(result);
	}

	formulas();


		$('.content').on('keyup , click',function(){
			var vo = parseFloat($('#vod').val());
			var x  = parseFloat($('#xd').val());
			var vf = parseFloat($('#vd').val());
			var a  = parseFloat($('#ad').val());
			var t  = parseFloat($('#td').val());

			formulas(vo,x,vf,a,t);

		});

	$('.option-input').on('click' , function(){

		formulas();
	})


	})
}())