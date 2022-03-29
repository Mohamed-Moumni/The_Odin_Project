const min = 1;
const max = 3;
const RPS = ["Rock", "Paper", "Scissor"];
let computer = 3;
let player = 3; 

function computerPlay()
{
    return (Math.floor(Math.random() * (max - min + 1) + min));
}

function single_round(playerSelection, computerSelection)
{
    if (playerSelection == computerSelection)
        return (RPS[playerSelection - 1] + " tie with " + RPS[computerSelection - 1]);
    if (playerSelection == 1)
    {
        if (computerSelection == 2)
        {
            computer--;
            return ("You Win! " + RPS[computerSelection - 1] + " Beats " + RPS[playerSelection - 1] + ".");
        }
        player--;
        return ("You Win! " + RPS[playerSelection - 1] + " Beats " + RPS[computerSelection - 1] + ".");
    }
    else if (playerSelection == 2)
    {
        if (computerSelection == 3)
        {
            computer--;
            return ("You Win! " + RPS[computerSelection - 1] + " Beats " + RPS[playerSelection - 1] + ".");
        }
        player--;
        return ("You Win!" + RPS[playerSelection - 1] + " Beats " + RPS[computerSelection - 1] + ".");
    }
    else if (playerSelection == 3)
    {
        if (computerSelection == 1)
        {
            computer--;
            return ("You Win! " + RPS[computerSelection - 1] + " Beats " + RPS[playerSelection - 1] + ".");
        }
        player--;
        return ("You Win! " + RPS[playerSelection - 1] + " Beats " + RPS[computerSelection - 1] + ".");
    }
}

function show_result()
{
    if (player == 0 && computer == 0)
        return ("Tie in That Match");
    if (player == 0)
        return ("The winner Is Player");
    if (computer == 0)
        return ("The winner Is Computer");
}

function game()
{
    let player_choose;
    let computer_choose;

    player_choose = computerPlay();
    computer_choose = computerPlay();
    single_round(player_choose, computer_choose);
    console.log(show_result());
}

function main_program()
{
    while (player != 0 && computer != 0)
    {
        game();
    }
}