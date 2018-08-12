/******************AUTHOR YOGITA VERMA*******************************
*******************DATED 1 JULY 2018*********************************
********************ROCK PAPER SCISSOR GAME**************************
*********************************************************************/




let compscore=0,userscore=0,gamecount=0;
/***********CLICKING BUTTONS***************/
document.querySelector("#paper").addEventListener('click',game('paper'));
document.querySelector("#scissor").addEventListener('click',game('scissor'));
document.querySelector("#rock").addEventListener('click',game('rock'));



/*****************GETTTING COMPUTER'S GUESS****************/

function  getRandomGuess(){
			
		let Com_options=['p','s','r'];
		let index = Math.floor(Math.random() * 3 )+1;
		return Com_options[index];
		
		}


/***************COMPARING COMPUTER'S AND USER CHOICES*************/

 function game(userInput)
 {
	 let comp_selection=getRandomGuess();
	 while( gamecount<=5){
		 
	 /*********COMPUTER WINS IN THESE CASES*********/
	 
	 if(userInput==='scissor' && comp_selection==='r')
	 {
		 compscore++;
		 gamecount++;
	 }
	else if(userInput==='paper' && comp_selection==='s')
	 {
		 compscore++;
		  gamecount++;
	 }
	else if(userInput==='rock' && comp_selection==='p')
	 {
		 compscore++;
		  gamecount++;
	 }
	 
	  /*************USER WIN'S IN THESE CASES****************/
	  if(comp_selection==='s' && userInput==='rock')
	 {
		 userscore++;
		  gamecount++;
	 }
	else if(comp_selection==='p' && userInput==='scissor')
	 {
		 userscore++;
		  gamecount++;
	 }
	else if(comp_selection==='r' && userInput==='paper')
	 {
		 userscore++;
		  gamecount++;
	 }
		/*let html="";
		 html+='<h6 class ="pl-5 pb-3" >Computer Score : '+compscore+'</h6>';
		 html+='<h6 class="pr-5 pb-3">Your score: '+userscore+'</h6>';*/
		 document.querySelector(".cs").innerHTML=compscore;
		  document.querySelector(".ys").innerHTML=userscore;
	 }
	 let scorestring='';
	  if(userscore > compscore)
		  
		  scorestring+='<p class="score pt-3 text-center">Hurray you won!!!!</p>';
	  else if(userscore < compscore)
		scorestring+='<p class="score pt-3 text-center">You lost against the computer!</p>';
		  
	
 }