///helpful resources 
///https://www.codeleaks.io/tic-tac-toe-game-using-html-css-and-javascript/
///https://www.geeksforgeeks.org/simple-tic-tac-toe-game-using-javascript/


///decalring variables
var button = document.getElementById("button");
var username1 = document.getElementById("username1");
var username2 = document.getElementById("username2");
var error = document.getElementById("error");
var game = document.getElementById("game");
var playertrun = document.getElementById("playerturn");
var displayplayer = document.getElementById("displayplayer");
var commentary = document.getElementById("commentary");
var comtext = document.getElementById("com-text");
var container = document.getElementById("container");
var cell1 = document.getElementById("cell1");
var cell2 = document.getElementById("cell2");
var cell3 = document.getElementById("cell3");
var cell4 = document.getElementById("cell4");
var cell5 = document.getElementById("cell5");
var cell6 = document.getElementById("cell6");
var cell7 = document.getElementById("cell7");
var cell8 = document.getElementById("cell8");
var cell9 = document.getElementById("cell9");
var turn = 1;

//function to display time live
function time(){
   return new Date().toLocaleString();
}
///renmove usernames from input box when page refreshed
username1.value = '';
username2.value = '';

///player object constructor functions
function player(name, symbol){
    this.name = name;
    this.symbol = symbol;
}
/// player objects
var user1 = new player(username1, "X");
var user2 = new player(username2 , "O");

///input validation function
function validateUser() {
    if (username1.value == "" || username2.value == "") {
        /// display error if usernames missing
        ///hide game details
        error.classList.remove("hide")
        game.classList.add("hide")
        error.innerHTML = "Both player names are required for the game to start";
    }  
    else {
        /// display the game if confditions met
        error.classList.add("hide");
        game.classList.remove("hide");
        ///display player 1 at the beggining all the time
        playertrun.innerHTML = "<span>Who's turn: </span>";
        ///make sure player name displayed in red
        displayplayer.innerHTML = user1.name.value; 
        /// prevent start button being reclicked when game already started
        button.disabled = true;
        /// call reload cells function when page refreshed to renew the tic tac toe grid
        reload()
    }
}
///function to reload cells
function reload(){
    cell1.value = '';
    cell2.value = '';
    cell3.value = '';
    cell4.value = '';
    cell5.value = '';
    cell6.value = '';
    cell7.value = '';
    cell8.value = '';
    cell9.value = '';
}
///function for draw conditions
function draw(){
    if((cell1.value == user1.symbol || cell1.value == user2.symbol) && 
    (cell2.value == user1.symbol || cell2.value == user2.symbol) && 
    (cell3.value == user1.symbol || cell3.value == user2.symbol) &&
    (cell4.value == user1.symbol || cell4.value == user2.symbol) && 
    (cell5.value == user1.symbol || cell5.value == user2.symbol) && 
    (cell6.value == user1.symbol || cell6.value == user2.symbol) &&
    (cell7.value == user1.symbol || cell7.value == user2.symbol) && 
    (cell8.value == user1.symbol || cell8.value == user2.symbol) && 
    (cell9.value == user1.symbol || cell9.value == user2.symbol)){
    comtext.innerHTML += "<b></br><span>Draw, nobody wins.</span></b>";
    }
}
///function to switch who's turn it is
function turnValidation(){
    if (turn ==1){
        playertrun.innerHTML = "<span>Who's turn: </span>";
        displayplayer.innerHTML = user1.name.value;
    }
    else {
        playertrun.innerHTML = "<span>Who's turn: </span>" ;
        displayplayer.innerHTML = user2.name.value;
    }
}
///function to disable all cells
function disableCells(){
    cell1.disabled = true;
    cell2.disabled = true;
    cell3.disabled = true;
    cell4.disabled = true;
    cell5.disabled = true;
    cell6.disabled = true;
    cell7.disabled = true;
    cell8.disabled = true;
    cell9.disabled = true;
}
///function to check players winning conditions
function conditions() {
    ///player X winning conditions
    ///calling disableCells to disable game from continuing after winning condition is met
    if (cell1.value == user1.symbol && cell2.value == user1.symbol && cell3.value == user1.symbol) {
        comtext.innerHTML += "<b></br>" + user1.name.value + "<span> is the winner!!!</span></b>"
        disableCells()
    }
    else if (cell1.value == user1.symbol && cell4.value == user1.symbol && cell7.value == user1.symbol) {
        comtext.innerHTML += "<b></br>" + user1.name.value + "<span> is the winner!!!</span></b>"
        disableCells()
    }
    else if (cell7.value == user1.symbol && cell8.value == user1.symbol && cell9.value == user1.symbol) {
        comtext.innerHTML += "<b></br>" + user1.name.value + "<span> is the winner!!!</span></b>"
        disableCells()
    }
    else if (cell3.value == user1.symbol && cell6.value == user1.symbol && cell9.value == user1.symbol) {
        comtext.innerHTML += "<b></br>" + user1.name.value + "<span> is the winner!!!</span></b>"
        disableCells()
    }
    else if (cell1.value == user1.symbol && cell5.value == user1.symbol && cell9.value == user1.symbol) {
        comtext.innerHTML += "<b></br>" + user1.name.value + "<span> is the winner!!!</span></b>"
        disableCells()
    }
    else if (cell3.value == user1.symbol && cell5.value == user1.symbol && cell7.value == user1.symbol) {
        comtext.innerHTML += "<b></br>" + user1.name.value + "<span> is the winner!!!</span></b>"
        disableCells()
    }
    else if (cell2.value == user1.symbol && cell5.value == user1.symbol && cell8.value == user1.symbol) {
        comtext.innerHTML += "<b></br>" + user1.name.value + "<span> is the winner!!!</span></b>"
        disableCells()
    }
    else if (cell4.value == user1.symbol && cell5.value == user1.symbol && cell6.value == user1.symbol) {
        comtext.innerHTML += "<b></br>" + user1.name.value + "<span> is the winner!!!</span></b>"
        disableCells()
    }
    ///player O winning conditions 
    else if (cell1.value == user2.symbol && cell2.value == user2.symbol && cell3.value == user2.symbol) {
        comtext.innerHTML += "<b></br>" + user2.name.value + "<span> is the winner!!!</span></b>"
        disableCells()
    }
    else if (cell1.value == user2.symbol && cell4.value == user2.symbol && cell7.value == user2.symbol) {
        comtext.innerHTML += "<b></br>" + user2.name.value + "<span> is the winner!!!</span></b>"
        disableCells()
    }
    else if (cell7.value == user2.symbol && cell8.value == user2.symbol && cell9.value == user2.symbol) {
        comtext.innerHTML += "<b></br>" + user2.name.value + "<span> is the winner!!!</span></b>"
        disableCells()
    }
    else if (cell3.value == user2.symbol && cell6.value == user2.symbol && cell9.value == user2.symbol) {
        comtext.innerHTML += "<b></br>" + user2.name.value + "<span> is the winner!!!</span></b>"
        disableCells()
    }
    else if (cell1.value == user2.symbol && cell5.value == user2.symbol && cell9.value == user2.symbol) {
        comtext.innerHTML += "<b></br>" + user2.name.value + "<span> is the winner!!!</span></b>"
        disableCells()
    }
    else if (cell3.value == user2.symbol && cell5.value == user2.symbol && cell7.value == user2.symbol) {
        comtext.innerHTML += "<b></br>" + user2.name.value + "<span> is the winner!!!</span></b>"
        disableCells()
    }
    else if (cell2.value == user2.symbol && cell5.value == user2.symbol && cell8.value == user2.symbol) {
        comtext.innerHTML += "<b></br>" + user2.name.value + "<span> is the winner!!!</span></b>"
        disableCells()
    }
    else if (cell4.value == user2.symbol && cell5.value == user2.symbol && cell6.value == user2.symbol) {
        comtext.innerHTML += "<b></br>" + user2.name.value + "<span> is the winner!!!</span></b>"
        disableCells()
    }
    ///call draw condition if "else if" conditions not true
    else if (draw()){
    }
    ///call turn validation function to change the turn appropriately
    else {
        turnValidation()
    }
}
///functions for individual cell box validation
///call conditions() function to disable cells when game won
function cell1box(){
    if (turn == 1){
        cell1.value = user1.symbol;
        cell1.disabled = true;
        turn = 0;
        comtext.innerHTML += "</br>" +  user1.name.value + "<span> Played X at 1,1 @</span>" + time() + "</br>";
        conditions()
    }
    else{
        cell1.value = user2.symbol;
        cell1.disabled = true;
        turn = 1;
        comtext.innerHTML += "</br>" + user2.name.value + "<span> Played O at 1,1 @</span>" + time() + "</br>";  
        conditions()
    }
}
function cell2box(){
    if (turn == 1){
        cell2.value = user1.symbol;
        cell2.disabled = true;
        turn = 0;
        comtext.innerHTML += "</br>" + user1.name.value + "<span> Played X at 1,2 @</span>" + time() + "</br>";
        conditions()
    }
    else{
        cell2.value = user2.symbol;
        cell2.disabled = true;
        turn = 1;
        comtext.innerHTML += "</br>" + user2.name.value + "<span> Played O at 1,2 @</span>" + time() + "</br>";
        conditions()
    }
}
function cell3box(){
    if (turn == 1){
        cell3.value = user1.symbol;
        cell3.disabled = true;
        turn = 0;
        comtext.innerHTML += "</br>" + user1.name.value + "<span> Played X at 1,3 @</span>" + time() + "</br>";
        conditions()
    }
    else{
        cell3.value = user2.symbol;
        cell3.disabled = true;
        turn = 1;
        comtext.innerHTML += "</br>" + user2.name.value + "<span> Played O at 1,3 @</span>" + time() + "</br>";
        conditions()
    }
}
function cell4box(){
    if (turn == 1){
        cell4.value = user1.symbol;
        cell4.disabled = true;
        turn = 0;
        comtext.innerHTML += "</br>" + user1.name.value + "<span> Played X at 2,1 @</span>" + time() + "</br>";
        conditions()
    }
    else{
        cell4.value = user2.symbol;
        cell4.disabled = true;
        turn = 1;
        comtext.innerHTML += "</br>" + user2.name.value + "<span> Played O at 2,1 @</span>" + time() + "</br>";
        conditions()
    }
}
function cell5box(){
    if (turn == 1){
        cell5.value = user1.symbol;
        cell5.disabled = true;
        turn = 0;
        comtext.innerHTML += "</br>" + user1.name.value + "<span> Played X at 2,2 @</span>" + time() + "</br>";
        conditions()
    }
    else{
        cell5.value = user2.symbol;
        cell5.disabled = true;
        turn = 1;
        comtext.innerHTML += "</br>" + user2.name.value + "<span> Played O at 2,2 @</span>" + time() + "</br>";
        conditions()
    }
}
function cell6box(){
    if (turn == 1){
        cell6.value = user1.symbol;
        cell6.disabled = true;
        turn = 0;
        comtext.innerHTML += "</br>" + user1.name.value + "<span> Played X at 2,3 @</span>" + time() + "</br>";
        conditions()
    }
    else{
        cell6.value = user2.symbol;
        cell6.disabled = true;
        turn = 1;
        comtext.innerHTML += "</br>" + user2.name.value + "<span> Played O at 2,3 @</span>" + time() + "</br>";
        conditions()
    }
}
function cell7box(){
    if (turn == 1){
        cell7.value = user1.symbol;
        cell7.disabled = true;
        turn = 0;
        comtext.innerHTML += "</br>" + user1.name.value + "<span> Played X at 3,1 @</span>" + time() + "</br>";
        conditions()
    }
    else{
        cell7.value = user2.symbol;
        cell7.disabled = true;
        turn = 1;
        comtext.innerHTML += "</br>" + user2.name.value + "<span> Played O at 3,1 @</span>" + time() + "</br>";
        conditions()
    }
}
function cell8box(){
    if (turn == 1){
        cell8.value = user1.symbol;
        cell8.disabled = true;
        turn = 0;
        comtext.innerHTML += "</br>" + user1.name.value + "<span> Played X at 3,2 @</span>" + time() + "</br>";
        conditions()
    }
    else{
        cell8.value = user2.symbol;
        cell8.disabled = true;
        turn = 1;
        comtext.innerHTML += "</br>" + user2.name.value + "<span> Played O at 3,2 @</span>" + time() + "</br>";
        conditions()
    }
}
function cell9box(){
    if (turn == 1){
        cell9.value = user1.symbol;
        cell9.disabled = true;
        turn = 0;
        comtext.innerHTML += "</br>" + user1.name.value + "<span> Played X at 3,3 @</span>" + time() + "</br>";
        conditions()
    }
    else{
        cell9.value = user2.symbol;
        cell9.disabled = true;
        turn = 1;
        comtext.innerHTML += "</br>" + user2.name.value + "<span> Played O at 3,3 @</span>" + time() + "</br>";
        conditions()
    }
}
///decalre onclick to call functions when necessarry
button.onclick = validateUser;
cell1.onclick = cell1box;
cell2.onclick = cell2box;
cell3.onclick = cell3box;
cell4.onclick = cell4box;
cell5.onclick = cell5box;
cell6.onclick = cell6box;
cell7.onclick = cell7box;
cell8.onclick = cell8box;
cell9.onclick = cell9box;
