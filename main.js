var no;
function getNo(){
    no = Math.floor((Math.random()*100))+1;
  console.log(no);
}
var guessCount;
var values = [];
var results_updt = '';
// console.log(no);
const entry = document.querySelector('.entry');
const submit = document.querySelector('.submit');
const comment = document.querySelector('.comment');
const results = document.querySelector('.results');
const hint_area = document.querySelector('.hint-area');
const play_again = document.querySelector('.play_again');
submit.addEventListener('click',() => {
    checkGuess();
});
entry.addEventListener('keypress',(e)=>{
  if(e.keyCode === 13||e.key === 'Enter')
  {
    checkGuess();
    e.preventDefault();
  }
  else
  return false; 
});
function newGame() {
    getNo();
    guessCount = 0;
    values = [];
    results_updt = '';
    results.textContent = '';
    hint_area.textContent = '';
    play_again.style.display = "none";
    entry.disabled = false;
    submit.disabled = false;
    entry.focus();
}
newGame();

resetGame = function()
{
   entry.disabled = true;
   submit.disabled = true;
   play_again.style.display = "block";
}
function print()
{
    for(let j=0;j<values.length;j++)
      {
        results_updt += values[j] + ' ';
      }
      results.textContent = results_updt;
      results_updt = '';
      console.log(values);
}
function checkGuess()
{
  var guess = Number(entry.value);
  console.log(guess);
  values.push(guess);
    
  if(guessCount<10)
  {
     print();  
     
    if(guess === no)
    {
      hint_area.textContent = "Congratulations! You Win";
      hint_area.style.color = "rgb(62, 201, 62)";
      resetGame();
    }
    else if(guess<no)
    {
      hint_area.textContent = "Your value is too low";
      hint_area.style.color = "rgb(255, 71, 71)";
    }
    else if(guess>no)
    {
      hint_area.textContent = "Your value is too high";
      hint_area.style.color = "rgb(255, 71, 71)";
    }
    if(guessCount >= 9 && guess != no)
    {
      hint_area.textContent = "Game Over :(";
      hint_area.style.color = "rgb(255, 71, 71)";
      entry.value = '';
      resetGame();
    } 
    entry.focus(); 
    guessCount++;
    console.log(guessCount);
    entry.value = '';
   }
   
   
 
}

play_again.addEventListener('click',() => {
   newGame();
});