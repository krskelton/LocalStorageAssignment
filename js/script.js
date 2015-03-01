// Kristin Skelton 3/1/2015
// javascript for LocalStorageAssignment/index.html

$(document).ready(function(){

	//Create a GUID and store the it in sessionStorage
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	var guid = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();

	sessionStorage.setItem('GUID', guid);

	//When save button is clicked store the name and background-color value in localStorage
	$('#save').click(function(){
		
		//Store name input as a variable 
		var inputValue = $('#name').val();
		//Check if the user entered a new value for the name input. If so, pass the variable to localStorage.
		if(inputValue != ""){
			localStorage.setItem('name', inputValue);
		}
		
		//Store background-color input as a variable 
		var colorValue = $('#background-color').val();		
		//Check if the user entered a new value for the color input. If so, pass the variable to localStorage.
		if(colorValue != "choose") {
			localStorage.setItem('background-color', colorValue);
		}

		//Reload the page so the changes will appear
		document.location.reload();
	});



	//If the name is set append it to the section message and footer
	var name = localStorage.getItem('name');
	
	if (name != null){
		$('#section').append('<h1>Hi, ' + name + '!</h1>');
		$('footer').append('<div>Hi ' + name + ', your session GUID is ' + guid + '.</div>');
	} 

	//If the background-color is set change the background image to reflect the selection
	var backgroundColor = localStorage.getItem('background-color');	
	
	if (backgroundColor != null){
		
		//Switch statement to get the correct image for the selection
		switch (backgroundColor) {
			case 'silver':
		    $('body').css({"background":"url(css/images/silver-lights.png) no-repeat center center fixed","background-size":"cover"});
		    break;

		    case 'gold':
		    $('body').css({"background":"url(css/images/gold-lights.png) no-repeat center center fixed","background-size":"cover"});
		    break;

		  	case 'blue':
		    $('body').css({"background":"url(css/images/blue-lights.png) no-repeat center center fixed","background-size":"cover"});
		    break;

		    case 'green':
		    $('body').css({"background":"url(css/images/green-lights.png) no-repeat center center fixed","background-size":"cover"});
		    break;

		    case 'purple':
		    $('body').css({"background":"url(css/images/purple-lights.png) no-repeat center center fixed", "background-size":"cover"});
		    break;

		  	case 'none':
			$('body').css("background-image", "" );
		    break;

		  	default:
			$('body').css("background-image", "" );
		    break;
		}
	}

	//When clear button is clicked clear the localStorage to reset the values and reload the page
	$('#clear').click(function(){
		localStorage.clear();
		document.location.reload();
	});

	//Stick the footer at the bottom of the page
	$(function(){
	    $(window).resize(function(){
	        placeFooter();
	    });
	    placeFooter();
	    // hide it before it's positioned
	    $('footer').css('position','fixed');
	});

	function placeFooter() {    
	    var windHeight = $(window).height();
	    var footerHeight = $('footer').height();
	    var offset = parseInt(windHeight) - parseInt(footerHeight);
	    $('footer').css('top',offset);
	}
});