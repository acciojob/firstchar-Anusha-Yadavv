function firstChar(text) {
  // your code here
	let first_char=text[0];
	// return first_char
	if(text.length==1 && first_char==" "){
		return " ";
	}
	else if(first_char!==" " && text.length>2){
		return first_char;
	}
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
