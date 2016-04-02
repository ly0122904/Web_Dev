/*
   New Perspectives on HTML and CSS
   Tutorial 5
   Case Problem 1

   Sudoku Puzzle Table Solving JavaScript
   Author: YanLiu w0122904_702
   Date:   Nov.30, 2015

   Filename: stable.js
*/

document.getElementById("ButtonReset").addEventListener("click",resetAll);

var cells = document.getElementsByTagName('td');
/* var selectedcell = "0"; */


for (var i=0; i < cells.length; i++)
{
	if (cells[i].innerHTML =="")
	{
		cells[i].addEventListener("click", insertValue);
	}	
}
//cells[selectedIndex].innerHTML = aValue;


//Function Here
/* Reset function*/
function resetAll()
{
	alert("The Sudoku will be resetted!!!");
	location.reload();
}
/* Function for selected cell input and check number validation  */
function insertValue()
{
	// all the mouse event info is same in the Selected
	Selected = window.event.srcElement;
	// pompt input a value <-string
	alert('Please enter a valid data 0-9.' );
	var aValue = prompt("Please enter a valid data 0-9.");
	
	// check if it is a digit(number) 
	var checkNumber = true;
	var regEX=/["1","2","3","4","5","6","7","8","9"]/; 
	var result = aValue.match(regEX); 
	if (result == null)
	{
		alert("Invalid Number! Try again!");
		checkNumber = false;
	}
	else	//is number then check valid if it matches suduko rule
	{
		//debugger: alert ("Your Input Number: " + result);		
		var rowRegEx = /row[A-I]/;
		var colRegEx = /col[1-9]/;
		var boxRegEx = /box[1-9]/;
		
		// get selected cell class name by row, col, box	
		var SrowName = Selected.className.match(rowRegEx);
		var ScolName = Selected.className.match(colRegEx);
		var SboxName = Selected.className.match(boxRegEx);
		
		// Check row
		// Get all the cells in the same row
		var checkCells = document.getElementsByClassName(SrowName);
		for (var k=0; k <checkCells.length ; k++)  
		{
			//debugger: var digitCell = checkCells[k].innerHTML; 
			if (checkCells[k].innerHTML == result)
			{ 
				alert ("Invalid Number, Try again");
				var checkNumber = false;
				break;
			}				   
		} 
		// Check col
		// Get all the cells in the same col
		if (checkNumber == true)
		{
			var checkCells = document.getElementsByClassName(ScolName);
			for (var k=0; k <checkCells.length ; k++)  
			{
				if (checkCells[k].innerHTML == result)
				{ 
					alert ("Invalid Number, Try again");
					var checkNumber = false;
					break;
				}				   
			}
		}
		// Check Box
		// Get all the cells in the same box
		if (checkNumber == true)
		{
			var checkCells = document.getElementsByClassName(SboxName);
			for (var k=0; k <checkCells.length ; k++)  
			{
				if (checkCells[k].innerHTML == result)
				{ 
					alert ("Invalid Number, Try again");
					var checkNumber = false;
					break;
				}				   
			} 
		}
		// Valide digit display to the screen
		if (checkNumber == true)
		{
			Selected.innerHTML = aValue;
			Selected.style.color = "red";
		}		
	}	
}

