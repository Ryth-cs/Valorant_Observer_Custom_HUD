// for (var i = 1; i < 6; i++) {
//     console.log(i)
//     document.getElementById("team1_player_"+i).innerHTML = "Left " + i;
//     document.getElementById("team2_player_"+i).innerHTML = "Right " + i;

//     document.getElementById("left-agent-image-"+i).style.backgroundImage = "url('48px/Brimstone.png')";
//     document.getElementById("right-agent-image-"+i).style.backgroundImage = "url('48px/Breach.png')"; 

//     document.getElementById("team1_player_1").innerHTML = "TheInventor";
// } 

// var playerData = {
// 	LeftTeam : "Team Left",
// 	Left1 : "P1",
// 	Left1Agent : "Unknown",
// 	Left2 : "P2",
// 	Left2Agent : "Unknown",
// 	Left3 : "P3",
// 	Left3Agent : "Unknown",
// 	Left4 : "P4",
// 	Left4Agent : "Unknown",
// 	Left5 : "P5",
// 	Left5Agent : "Unknown",
// 	RightTeam : "Team Right",
// 	Right1 : "P6",
// 	Right1Agent : "Unknown",
// 	Right2 : "P7",
// 	Right2Agent : "Unknown",
// 	Right3 : "P8",
// 	Right3Agent : "Unknown",
// 	Right4 : "P9",
// 	Right4Agent : "Unknown",
// 	Right5 : "P0",
// 	Right5Agent : "Unknown"
// }

var socket = io('/overlay');

// socket.on('dataValue', function(data) {
//   	console.log("Received!");
//     //playerData = data;
//     updateData(data);  
// });

socket.on('adminVal', function(data) {
	console.log(data)
    //playerData = data;
    updateData(data);  
})

function updateData(data) {
    // for (var i = 0; i < 6; i++) {
    //     document.getElementById("team1_player_"+i).innerHTML = data.Left1;
    // }

    //document.getElementById("team1_player_1").innerHTML = "TheInventor";
    //document.getElementById("right-agent-image-1").style.backgroundImage = "url('48px/Breach.png')";

    for (let att in data) {
        console.log(att + " is " + data[att]);
        if (att.toString().includes("agent")) {
            document.getElementById(att.toString()).style.backgroundImage = `url('48px/${data[att]}.png')`;
        } else {
            document.getElementById(att.toString()).innerHTML = data[att];
        }
    }
    
}


// function setup() {
//   	cnv = createCanvas(windowWidth, windowHeight);
// 	background(50, 50, 50);
// }

// function draw() {
// 	background(50, 50, 50);
// 	textSize(32);
// 	fill(255);
// 	//console.log(playerData.Left1)
// 	textAlign(CENTER);

// 	// Left Team names
// 	text(playerData.LeftTeam, 110, 50);
// 	text(playerData.Left1, 110, 150);
// 	text(playerData.Left2, 110, 225);
// 	text(playerData.Left3, 110, 300);
// 	text(playerData.Left4, 110, 375);
// 	text(playerData.Left5, 110, 450);

// 	// Right Team names
// 	text(playerData.RightTeam, 410, 50);
// 	text(playerData.Right1, 410, 150);
// 	text(playerData.Right2, 410, 225);
// 	text(playerData.Right3, 410, 300);
// 	text(playerData.Right4, 410, 375);
// 	text(playerData.Right5, 410, 450);

// 	textSize(16);
// 	// Left Team agents
// 	text(playerData.Left1Agent, 110, 170);
// 	text(playerData.Left2Agent, 110, 245);
// 	text(playerData.Left3Agent, 110, 320);
// 	text(playerData.Left4Agent, 110, 395);
// 	text(playerData.Left5Agent, 110, 470);

// 	// Right Team agents
// 	text(playerData.Right1Agent, 410, 170);
// 	text(playerData.Right2Agent, 410, 245);
// 	text(playerData.Right3Agent, 410, 320);
// 	text(playerData.Right4Agent, 410, 395);
// 	text(playerData.Right5Agent, 410, 470);

// }
