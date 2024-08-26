const btn = document.querySelector("#results");

let player_1_count = 0;
let player_2_count = 0;
let rounds = 0;

btn.addEventListener("click", () => {
    const user_one = document.getElementById("user_one").value.toLowerCase();
    const user_two = document.getElementById("user_two").value.toLowerCase();

    if (user_one === user_two) {
        btn.innerText = `Round ${rounds + 1}: Draw`;
    } else if (
        (user_one === "paper" && user_two === "rock") ||
        (user_one === "rock" && user_two === "scissors") ||
        (user_one === "scissors" && user_two === "paper")
    ) {
        btn.innerText = `Round ${rounds + 1}: Player 1 wins this round`;
        player_1_count++;
    } else if (
        (user_one === "rock" && user_two === "paper") ||
        (user_one === "paper" && user_two === "scissors") ||
        (user_one === "scissors" && user_two === "rock")
    ) {
        btn.innerText = `Round ${rounds + 1}: Player 2 wins this round`;
        player_2_count++;
    } else {
        btn.innerText = "Invalid input";
        return;  // Exit early if input is invalid to avoid incrementing the round counter
    }

    rounds++;

    // Check if 5 rounds have been completed
    if (rounds === 5) {
        if (player_1_count > player_2_count) {
            btn.innerText = `Game Over! Player 1 wins! Final Score: Player 1 - ${player_1_count}, Player 2 - ${player_2_count}`;
        } else if (player_2_count > player_1_count) {
            btn.innerText = `Game Over! Player 2 wins! Final Score: Player 1 - ${player_1_count}, Player 2 - ${player_2_count}`;
        } else {
            btn.innerText = `Game Over! It's a draw! Final Score: Player 1 - ${player_1_count}, Player 2 - ${player_2_count}`;
        }

        // Reset the game after displaying the final result
        player_1_count = 0;
        player_2_count = 0;
        rounds = 0;
    }
});
