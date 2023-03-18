userNameInput = prompt("ใส่ชื่อมาซิ๊!");

NameList = ["Thomas", "Jimmy", "Catherine", "Tony", "Isabel"]

userMoney = 0;
userClick = 0;
baseRank = "Bronze Finger I"


//Profile ผู้ใช้
PlayerData = {
name : userNameInput,
money : userMoney,
click : userClick,
rank : baseRank,
}

//ระบบสุ่มชื่อ
if (userNameInput.length <= 0) {
  var IndexRamdom = Math.floor(Math.random() * 5);
  PlayerData.name = NameList[IndexRamdom];
}

document.getElementById("Profile").innerHTML = "Profile";

document.getElementById("userName").innerHTML = "Username : " + PlayerData.name;

document.getElementById("userMoney").innerHTML = "money : " + PlayerData.money;

document.getElementById("clickCount").innerHTML = "ClickCount : " + PlayerData.click;

//เพิ่มจำนวนคลิ๊ก
function clickIncrease() {
  PlayerData.click ++;
  document.getElementById("clickCount").innerHTML = "ClickCount : " + PlayerData.click;
  if (PlayerData.click == 250) {
    PlayerData.rank = "Bronze Finger II"
    document.getElementById("clickCount").innerHTML = PlayerData.click - PlayerData.click
  }


  if (PlayerData.click == 550) {
    PlayerData.rank = "Bronze Finger III"
    document.getElementById("rank").innerHTML = PlayerData.rank;
    alert("Congratulation Your Rank UP!! to " + PlayerData.rank);
  }
}

//แรงค์
document.getElementById("userRank").innerHTML = PlayerData.name + " Rank";
document.getElementById("rank").innerHTML = PlayerData.rank;

//เพิ่มแรงค์