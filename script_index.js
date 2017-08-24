var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 8000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
$(function() {
		var a = 0;
		$('#tv').hide();
		for (; a < 25; a += 1) {
			setTimeout(function b() {
				var a = Math.random() * 4e3 + 5e3,
				c = $("<div />", {
					"class": "smoke",
					css: {
						left:Math.random()*1300,
						backgroundSize: "contain",
						width: Math.random() * 1000,
						height: Math.random() * 900
				   }
				});
				(c).addClass("animated");
				$(c).addClass("zoomIn");
				$(c).addClass("rollOut");
				$(c).appendTo("#viewport");
				$.when($(c).animate({}, {
				  duration: a / 4,
				  easing: "linear",
				  queue: false,
				  complete: function() {
						$(c).animate({}, {
							duration: a / 3,
							easing: "linear",
							queue: false
						})
					}
				 }),
			 $(c).animate({
			  bottom: $("#viewport").height()
			 }, {
			  duration: a,
			  easing: "linear",
			  queue: false
			 })).then(
			 function() {
			  $(c).remove();
			  b()
			})
			}, Math.random() * 3e3)
		}	
		$("body").keypress(function() {
			$('body').addClass("fadeOut");
			setTimeout(function() {
				$('#tv').show();
			}, 2000);
		});
}())