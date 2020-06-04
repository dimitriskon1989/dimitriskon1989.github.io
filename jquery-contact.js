$(function() {

    $("#firstname_error_message").hide();
    $("#lastname_error_message").hide();
    $("#phone_error_message").hide();
	$("#email_error_message").hide();
	$("#message_error_message").hide();

	var error_firstname = false;
	var error_lastname = false;
	var error_phone = false;
	var error_email = false;
	var error_message = false;

	var pattern_letters = new RegExp(/^[a-zA-Zα-ωΑ-Ω ]+$/);
	var pattern_phone = new RegExp(/^[0-9]+$/);
	var pattern_email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);


	$("#form_firstname").focusout(function() {

		check_firstname();
		
    });
    $("#form_lastname").focusout(function() {

		check_lastname();
		
	});

	$("#form_phone").focusout(function() {

		check_phone();
		
	});

	$("#form_email").focusout(function() {

		check_email();
		
	});

	$("#form_message").focusout(function() {

		check_message();
		
	});

	function check_firstname() {
	
		var firstname = $("#form_firstname").val();
		
		if(firstname == "") {
			$("#firstname_error_message").html("Field is required");
			$("#firstname_error_message").show();
			error_firstname = true;
		} 
		else {
			if (pattern_letters.test(firstname)) {
				$("#firstname_error_message").hide();
			}
			else {
				$("#firstname_error_message").html("Must contain only letters or whitespaces");
				$("#firstname_error_message").show();
				error_firstname = true;
			}
		}
    }
    
    function check_lastname() {
	
		var lastname = $("#form_lastname").val();
		
		if(lastname == "") {
			$("#lastname_error_message").html("Field is required");
			$("#lastname_error_message").show();
			error_lastname = true;
		} 
		else {
			if (pattern_letters.test(lastname)) {
				$("#lastname_error_message").hide();
			}
			else {
				$("#lastname_error_message").html("Must contain only letters or whitespaces");
				$("#lastname_error_message").show();
				error_lastname = true;
			}
		}
	}

    function check_phone() {
	
		var phone = $("#form_phone").val();

		if (phone == "") {
			$("#phone_error_message").hide();
		}
		else {
			if(pattern_phone.test(phone)) {
				if (phone.length < 10) {
					$("#phone_error_message").html("Must contain at least 10 numbers");
					$("#phone_error_message").show();
					error_phone = true;
				}
				else {
					$("#phone_error_message").hide();
				}
			} 
			else {
				$("#phone_error_message").html("Must contain only numbers");
				$("#phone_error_message").show();
				error_phone = true;
			}
		}
	}    

	function check_email() {

		var email = $("#form_email").val();
	
		if (email == "") {
			$("#email_error_message").html("Field is required");
			$("#email_error_message").show();
			error_email = true;
		}
		else {
			if(pattern_email.test(email)) {
				$("#email_error_message").hide();
			} else {
				$("#email_error_message").html("Invalid email address");
				$("#email_error_message").show();
				error_email = true;
			}
		}
	
	}

	function check_message() {
	
		var message = $("#form_message").val();
		
		if(message == "") {
			$("#message_error_message").html("Field is required");
			$("#message_error_message").show();
			error_message = true;
		} 
		else {
			$("#message_error_message").hide();
		}
    }

	$("#form").submit(function() {
											
		error_firstname = false;
		error_lastname = false;
		error_phone= false;
		error_email = false;
		error_message = false;
											
		check_firstname();
		check_lastname();
		check_phone();
		check_email();
		check_message();
		
		if(error_firstname == false && error_lastname == false && error_phone == false && error_email == false && error_message == false) {
			return true;
		} 
		else {
			return false;	
		}

	});

});