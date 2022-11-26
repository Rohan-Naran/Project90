function addUser()
{
    user1=document.getElementById("player1_name_input").value;
    user2=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1",user1);
    localStorage.setItem("player2",user2);
    window.location="quiz_game_page.html";
}