let minNum=1;
let maxNum=100;
const answer=Math.floor(Math.random() *(maxNum-minNum +1))+minNum;
let guess;
let attempt=0;
let running=true;
while(running)
{
    guess=window.prompt(`enter a guess from ${minNum}-${maxNum}`);
        guess=Number(guess);
        if(guess===null)
        {
            running=false;
        }
        else if(guess<answer)
        {
            alert("Too low! Try again.");
            attempt++;
        }
        else if(guess>answer)
        {
            alert("Too high! Try again.");
            attempt++;
        }
        else
        {
            alert(`Congratulations! You guessed the correct number in ${attempt} attempts.`);
            running=false;
        }
}