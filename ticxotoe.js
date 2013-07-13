// the game board as a 3x3 Array
// uses x, o and - for free space 
var tictac = new Array(3);
tictac[0] = new Array(3);
tictac[1] = new Array(3);
tictac[2] = new Array(3);

var level = 3;  //easy = 1; medium = 2; hard = 3

// $ quick way to getElById
var $ = function(id) 
{
	return document.getElementById(id);
};

// init board and setup event handlers
window.onload = function()
{
	initialize();
	
	$("clearB").onclick = initialize;
	$("11").onclick = click11; 
	$("12").onclick = click12;
	$("13").onclick = click13;
	$("21").onclick = click21;
	$("22").onclick = click22;
	$("23").onclick = click23;
	$("31").onclick = click31;
	$("32").onclick = click32;
	$("33").onclick = click33;
	$("easy").onclick = setLevel;
	$("medium").onclick = setLevel;
	$("hard").onclick = setLevel;
}


var setLevel = function()
{
	initialize();  //reset board

	if($("easy").checked)
	{
		level = 1;
		//alert("easy");
	}
	else if ($("medium").checked)
	{
		level = 2;
		//alert("medium");
	}
	else  if($("hard").checked)//hard
	{
		level = 3;
		//alert("hard");
	}

};

var initialize = function()
{
	for (var i=0; i<3; i++)   /* set board elements to dash - (all free spaces) */
		for(var j=0; j<3;  j++)
	      tictac[i][j] = '-';
		  
	$("11").src = "poolWater.png";	// show free space images
	$("12").src = "poolWater.png";
	$("13").src = "poolWater.png";	  
	$("21").src = "poolWater.png";	  
	$("22").src = "poolWater.png";	  
	$("23").src = "poolWater.png";	  
	$("31").src = "poolWater.png";	  
	$("32").src = "poolWater.png";	  
	$("33").src = "poolWater.png";	  	
};


function click11() 
{
	//alert("In 11 src = " + $("11").src);
	if(tictac[0][0] !== '-')
	{   
		return;
	}
	
	tictac[0][0] = 'x';
	$("11").src = "poolX.png";
	getMove();
}

function click12() 
{
	//alert("In 12 src = " + $("12").src);
	if(tictac[0][1] !== '-')
	{
		return;
	}
		
	tictac[0][1] = 'x';
	$("12").src = "poolX.png";
	getMove();
}

function click13() 
{
	//alert("In 13 src = " + $("13").src);
	if(tictac[0][2] !== '-')
	{
		return;
	}
	
	tictac[0][2] = 'x';
	$("13").src = "poolX.png";
	getMove();
}

function click21() 
{
	if(tictac[1][0] !== '-')
	{
		return;
	}
	
	tictac[1][0] = 'x';
	$("21").src = "poolX.png";
	getMove();
}

function click22() 
{
	if(tictac[1][1] !== '-')
	{
		return;
	}
	
	tictac[1][1] = 'x';
	$("22").src = "poolX.png";
	getMove();
}

function click23() 
{
	if(tictac[1][2] !== '-')
	{
		return;
	}
	
	tictac[1][2] = 'x';
	$("23").src = "poolX.png";
	getMove();
}

function click31() 
{
	if(tictac[2][0] !== '-')
	{
		return;
	}
	
	tictac[2][0] = 'x';
	$("31").src = "poolX.png";
	getMove();
}

function click32() 
{
	if(tictac[2][1] !== '-')
	{
		return;
	}
	
	tictac[2][1] = 'x';
	$("32").src = "poolX.png";
	getMove();
}

function click33() 
{
	if(tictac[2][2] !== '-')
	{
		return;
	}
	
	tictac[2][2] = 'x';
	$("33").src = "poolX.png";
	getMove();
	
}

function getMove()
{
  if(level === 3)
  {  
	if (checkIfWon('x') === 1)    //x already won
	{
            var conf = confirm("X wins\nReset Game");
			if(conf == true)
			{
				initialize();
			}
			 else
			{
				initialize();
			}
    }

    else if (winPossible('o') === 1) // can comp win? 
	{
		 var conf = confirm("O Wins");
		 if(conf)
		 {
			initialize();
		 }
		 else
		 {
			initialize();
		 }
    }
	
    else if (winPossible('x') === 0) // opp need to be blocked? 
	{
            // if opponent does not have to be blocked then choose move 
            computerMove();
	}
  }  //end hard
  else if (level === 1 || level === 2)   //easy or medium
  {
	if (checkIfWon('x') === 1)    //x already won
	{
            var conf = confirm("X wins\nReset Game");
			if(conf == true)
			{
				initialize();
			}
			 else
			{
				initialize();
			}
    }
	else if(checkIfWon('o') === 1)
	{
		  var conf = confirm("O wins\nReset Game");
			if(conf == true)
			{
				initialize();
			}
			 else
			{
				initialize();
			}
	}
	else
	{
		computerMove();
		if(checkIfWon('o'))
		{
			var conf = confirm("O wins\nReset Game");
			if(conf == true)
			{
				initialize();
			}
			 else
			{
				initialize();
			}
		}
	}
  }  // end easy

}

function checkIfWon(letter)
{
    var i, j, winner = 0;   /* did someone win ? */
    
    for (i=0; i<3; i++)  //check rows
        if (tictac[i][0] === letter && tictac[i][1] === letter && tictac[i][2] === letter)
            winner = 1;
    
    for (j=0;j<3;j++)    //check cols
        if(tictac[0][j] === letter && tictac[1][j] === letter && tictac[2][j] === letter)
            winner = 1;
    
	// check diags
    if(tictac[0][0] === letter && tictac[1][1] === letter && tictac[2][2] === letter)
        winner = 1;
		
    if(tictac[0][2] === letter && tictac[1][1] === letter && tictac[2][0] === letter)
        winner = 1;
    
    return (winner);
}


function winPossible(letter)
{
    var row,col;
    
    for(row =0; row<3; row++)
    {
        for(col=0; col<3; col++)
        {
            if (tictac[row][col] === '-')
            {
                tictac[row][col] = letter;
                if(checkIfWon(letter) === 0)
                    tictac[row][col] = '-';
                else
                {
                    tictac[row][col] = 'o';
                  
                    if(row === 0 & col === 0)
						$("11").src = "poolO.png";
                    
                    if(row == 0 & col == 1)
						$("12").src = "poolO.png";
                    
                    if(row == 0 & col == 2)
						$("13").src = "poolO.png";
                    
                    if(row == 1 & col == 0)
						$("21").src = "poolO.png";
                    
                    if(row == 1 & col == 1)
						$("22").src = "poolO.png";
                    
                    if(row == 1 & col == 2)
						$("23").src = "poolO.png";
                    
                    if(row == 2 & col == 0)
						$("31").src = "poolO.png";
                    
                    if(row == 2 & col == 1)
						$("32").src = "poolO.png";
                    
                    if(row == 2 & col == 2)
						$("33").src = "poolO.png";
						
                    return (1);
                }
            }
        }
    } 
    
    return(0);
}


function computerMove() /* if no win or block make a move */
{

  if(level === 3)
  { 
    if(tictac[2][1] === 'x' && tictac [1][2] === 'x' && tictac[2][2] === '-') {
        tictac[2][2] = 'o';
		$("33").src = "poolO.png";
    }
	
    else if(tictac[1][1] === '-')  {
        tictac[1][1] = 'o';
		$("22").src = "poolO.png";
    }
    else if(tictac[0][0] === '-' && (tictac[0][2] !== 'x' || tictac[2][0] !== 'x'))  {
        tictac[0][0] = 'o';
		$("11").src = "poolO.png";
    }
    else if (tictac[2][2] === '-' && (tictac[0][2] !== 'x' || tictac[2][0] !== 'x'))   {
	    tictac[2][2] = 'o';
		$("33").src = "poolO.png";
    }
    else if (tictac[2][0] === '-'&& (tictac[0][0] !== 'x' || tictac[2][2] !== 'x')) {
	    tictac[2][0] = 'o';
		$("31").src = "poolO.png";
    }
    else if (tictac[0][2] === '-' && (tictac[0][0] !== 'x' || tictac[2][2] !== 'x')) {
	    tictac[0][2] = 'o';
		$("13").src = "poolO.png";
    }
    else if (tictac[1][0] === '-') {
	    tictac[1][0] = 'o';
		$("21").src = "poolO.png";
    }
    else if (tictac[2][1] === '-') {
        tictac[2][1] = 'o';
		$("32").src = "poolO.png";
    }
    else if (tictac[1][2] === '-') {
        tictac[1][2] = 'o';
		$("23").src = "poolO.png";
    }
    else if (tictac[0][1] === '-')  {
        tictac[0][1] = 'o';
		$("12").src = "poolO.png";
    }
    else
    {
		 var conf = confirm("Cat's Game");
		 if(conf)
		 {
			initialize();
		 }
		 else
		 {
			initialize();
		 }
    }
  }   // end level 3
  else if (level === 2)  //medium
  {
	  if(isBoardFull())
      {
         var conf = confirm("Cat's Game");
		 if(conf)
		 {
			initialize();
		 }
		 else
		 {
			initialize();
		 }
            return;
      }
        
        
        if(winPossible('o'))
        { 
            return;
        }
        else if (winPossible('x')) //block?
        {
            return;
        }
        else // no win or block make random move
        {
            var rowInd = Math.floor(Math.random() * 3);   //0-2
            var colInd = Math.floor(Math.random() * 3);
        
            while (tictac[rowInd][colInd] != '-')
            {
                var rowInd = Math.floor(Math.random() * 3);
                var colInd = Math.floor(Math.random() * 3);
            }
        
        
            tictac[rowInd][colInd] = 'o';
			makeMoveWithRowAndCol(rowInd, colInd);
        }

  }
  else   // level = 1
  {     
      if(isBoardFull())
      {
         var conf = confirm("Cat's Game");
		 if(conf)
		 {
			initialize();
		 }
		 else
		 {
			initialize();
		 }
            return;
      }
	  
	   var rowInd = Math.floor(Math.random() * 3);   //0-2
       var colInd = Math.floor(Math.random() * 3);
        
       while (tictac[rowInd][colInd] != '-')
       {
         var rowInd = Math.floor(Math.random() * 3);
         var colInd = Math.floor(Math.random() * 3);
       }
        
       tictac[rowInd][colInd] = 'o';
	   makeMoveWithRowAndCol(rowInd, colInd);
  }
  
} //end computerMove()



function isBoardFull()
{
    var isFull = true;
    
    for(var i=0; i<3; i++)
        for(var j=0; j<3; j++)
        {
            if(tictac[i][j] == '-')
            {
                isFull = false;
            }
        }
    
    return isFull;
}

function makeMoveWithRowAndCol(row, col)
{
    switch (row) {
        case 0:
            if(col === 0)
            {
				$("11").src = "poolO.png";
			}
            else if(col === 1)
            {
				$("12").src = "poolO.png";
            }
            else if(col === 2)
            {
				$("13").src = "poolO.png";   
            }
            break;
        case 1:
            if(col === 0)
            {
				$("21").src = "poolO.png";
            }
            else if(col === 1)
            {
				$("22").src = "poolO.png";
            }
            else if(col === 2)
            {
                $("23").src = "poolO.png";
            }
            break;
        case 2:
            if(col === 0)
            {
				$("31").src = "poolO.png";
            }
            else if(col === 1)
            {
				$("32").src = "poolO.png";   
            }
            else if(col === 2)
            {
                $("33").src = "poolO.png";
            }
            break;
        default:
            break;
    }
}





