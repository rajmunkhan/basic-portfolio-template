const form = document.getElementById('form');
const DropyourMessage = document.getElementById('DropyourMessage');
const email = document.getElementById('email');
const fullname = document.getElementById('fullname');
const Subject = document.getElementById('Subject');




function checkInputs() {
	// trim to remove the whitespaces
    const fullnameValue = fullname.value.trim();
	const emailValue = email.value.trim();
	const SsubjectValue = Subject.value.trim();
	const DropyourMessageValue =DropyourMessage.value.trim();
    
	
    if(fullnameValue === '') {
		setErrorFor(fullname, 'Name cannot be blank');
		return false;
	} else {
		setSuccessFor(fullname);
	}

	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		return false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		return false;
	} else {
		setSuccessFor(email);
	}



	alert("Form submitted succesfully");
    return true;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isnum(num) {
	return /^(([0-9]{5}-[0-9]{5}))$/.test(num);
}











