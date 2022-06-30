const myName = document.getElementsByClassName("name");
myName[0].innerHTML = "Mike";


const myBtn = document.getElementById("submit_btn");
myBtn.addEventListener("click", AddToDo);

const myInput = document.getElementById('input_field');

const list = $("#tasks ol");

const vowels = ["a", "e", "i", "o", "u"];
console.log(vowels);

let name_arr = [];

function AddToDo(e){

	let current_val = myInput.value;
	let myChars = current_val.split("");
	console.log(myChars[0]);

	//Check for duplicate
	for(let i=0; i<name_arr.length;i++){
		if(current_val == name_arr[i]){
			alert("this is a duplicate");

		}
	}

	name_arr.push(current_val);


	// Check for vowel
	if(vowels.includes(myChars[0].toLowerCase())){
		//console.log("this is our guy");

		current_val = reverseString(current_val);
	}


	list.append('<li>' + current_val + '</li>');
	
	myInput.value = "";

	e.preventDefault();
}

function reverseString(s) {
    var newString = "";
    for (var i = s.length - 1; i >= 0; i--) {
        newString += s[i];
    }
    return newString;
}