const newPasswordInput = document.getElementById("new-password");
const confirmNewPasswordInput = document.getElementById("confirm-new-password");
const validations = document.querySelectorAll("validations li");
const resetButton = document.getElementById("reset-button");

newPasswordInput.addEventListener("input", function () {
	let newPassword = newPasswordInput.value;
	let trial = validator(newPassword);
	if (trial) {
		document.getElementById("new-password").className = "form-control is-valid";
		document.getElementById("reset-button").disabled = false;
		checkPassword();
	}
});

confirmNewPasswordInput.addEventListener("input", function () {
	checkPassword();
});

resetButton.addEventListener("click", function () {
	reset();
});

//function to check all password requirements
function validator(newPassword) {
	//let x = true;

	const passwordRegex =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\s]).{8,}$/;
	//const password = newPassword;
	if (passwordRegex.test(newPassword)) {
		return true;
		//console.log("Password is valid.");
	} else {
		return false;
		//console.log("Password is not valid.");
	}

	//return x == true ? true : false;
}
// function to check equality of both fields - working fine
function checkPassword() {
	const newPassword = newPasswordInput.value;
	const confirmNewPassword = confirmNewPasswordInput.value;
	if (
		newPassword === confirmNewPassword &&
		newPassword != "" &&
		confirmNewPassword != ""
	) {
		document.getElementById("confirm-new-password").className =
			"form-control is-valid";
	} else {
		document.getElementById("confirm-new-password").className =
			"form-control is-invalid";
	}
}

//function to reset all fields - working fine
function reset(newPassword, confirmNewPassword) {
	newPasswordInput.value = "";
	confirmNewPasswordInput.value = "";
	document.getElementById("new-password").className = "form-control is-invalid";
	document.getElementById("confirm-new-password").className =
		"form-control is-invalid";
	//console.log("cleared");
}
