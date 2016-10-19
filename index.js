var totalPrice = 10;
var toppingList = [];

function sumOrder(topping){
  console.log("The topping you clicked was:"+ document.getElementById(topping).name);
  var price = parseFloat(document.getElementById(topping).value);
  if(document.getElementById(topping).checked)
  {
    console.log("button is clicked");
    totalPrice = totalPrice + price;
    toppingList.push(topping);
  }
  else
  {
    totalPrice = totalPrice - price;
    toppingList.pop(topping);
  }
  total.innerHTML = "$" + totalPrice;
  toppings.innerHTML = toppingList.toString();
}

function completeOrder(){
  console.log(toppingList.toString() + "=" + "$" + totalPrice);
  total.innerHTML = totalPrice;
  console.log("Thanks, order is completed");
  alert('Thank you! Your order is complete!');
}

/*
function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
        console.log(item);
        total.innerHTML = list;

    }
    // Finally, return the constructed list:
    return list;
    total.innerHTML = list;
}

*/

/*
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
*/
