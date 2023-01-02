const playersDiv = document.getElementById("players");
const selectButtons = document.querySelectorAll(".select_btn");
const selectButtons1 = document.getElementsByClassName("select_btn");
// console.log(selectButtons)
// console.log(selectButtons1)
const calculateBtn = document.getElementById("calculate_btn");
const calculateTotalBtn = document.getElementById("calculate_total_btn");

const ul = document.getElementById("unordered_list");

const perPlayerCost =parseInt(document.getElementById("per_player_cost").value);
const playersExpenses = document.getElementById("players_expenses");
const coach_fee = parseInt(document.getElementById("coach_fee").value);
console.log();
const manager_fee = parseInt(document.getElementById("manager_fee").value);
console.log(manager_fee);

const total = document.getElementById("total");

// selecting players
const players=[];

function addToCart(e) {
    players.push(e.target.parentNode.children[0].textContent);
    const player=document.createElement('li');
    for (let i = 0; i < players.length; i++) {
        player.innerText=players[i];
        ul.appendChild(player);  
    }
}
for (let i = 0; i < selectButtons.length; i++) {
    const btn = selectButtons[i];
    btn.addEventListener('click', addToCart
)}

// calculate players expenses
function calculatePlayerExpenses() {
    const playerCost = perPlayerCost*players.length;
    playersExpenses.innerText = playerCost;
  
    // console.log(playerExpenses);
}
calculateBtn.addEventListener('click', calculatePlayerExpenses);


function calculateTotal(){
    const playerExpensesInNumber =parseInt(playersExpenses)
    console.log(typeof(playerExpensesInNumber));
    console.log(typeof(manager_fee));
    console.log(typeof(coach_fee));

    const totalCost= playerExpensesInNumber + manager_fee + coach_fee;
    console.log(isNaN(totalCost))
    console.log(totalCost)
    total.innerText= totalCost;
}

// var allButtons = document.querySelectorAll('div[class^=button]');
// console.log("Found", allButtons.length, "div which class starts with “button”.");

// for (var i = 0; i < allButtons.length; i++) {  allButtons[i].addEventListener('click', function() {    console.clear();    console.log("You clicked:", this.innerHTML);  });}