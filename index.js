/*var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Simon\'s first website')
})
 */
//app.listen(3000)
var wrong = [];
var right = ["_","_","_"];
var guesses = 0;

function Hangman(){
   var fox = ["f","o","x"];
   var myNewTitle = document.getElementById('myTextField').value;
   //throwing flags if user inserts incorrect commands in prompt
   if(myNewTitle == 0)
   {
   	alert('Write Some real Text please.');
 	return;
   }
   if(myNewTitle.length > 1)
   {
   	alert('Enter one letter at a time!');
	return;   
   }
   if(wrong.indexOf(myNewTitle) > 0 || right.indexOf(myNewTitle) > 0){
   	alert('This letter has already been guessed');
   	return;
   }
   for(i=0;i < fox.length; i++){
    if(fox[i] == document.getElementById('myTextField').value){
   	 right[i] = document.getElementById('myTextField').value;
   	 correctLetter.innerHTML = right.toString();
     }
    else{
    var wrongLetter = document.getElementById('myTextField').value;	
     }
	}
	if(right.indexOf(wrongLetter) == -1){
	 wrong.push(wrongLetter);
   	 incorrectLetter.innerHTML = wrong.toString();	
   	 guesses++;
	}
	if(right.indexOf('_') < 0){
		alert('You Win!')
		return;
	} 
	if(guesses >= 6){
		alert('You Lose!')
		
		return;
	}
	guessCount.innerHTML = guesses;
    document.getElementById('myTextField').value = '';
}	
