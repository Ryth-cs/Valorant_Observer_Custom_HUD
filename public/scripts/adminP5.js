var cnv;
var socket = io('/admin');

function setup() {
  	cnv = createCanvas(windowWidth, windowHeight);
	background(50, 50, 50);

	// Left team
	Player1Agent = createSelect();
	Player1Agent.position(175, 50);
	Player1Agent.option('Breach');Player1Agent.option('Brimstone');Player1Agent.option('Cypher');Player1Agent.option('Jett');Player1Agent.option('Killjoy');Player1Agent.option('Omen');Player1Agent.option('Phoenix');Player1Agent.option('Raze');Player1Agent.option('Reyna');Player1Agent.option('Sage');Player1Agent.option('Sova');Player1Agent.option('Viper');
	Player2Agent = createSelect();
	Player2Agent.position(175, 100);
	Player2Agent.option('Breach');Player2Agent.option('Brimstone');Player2Agent.option('Cypher');Player2Agent.option('Jett');Player2Agent.option('Killjoy');Player2Agent.option('Omen');Player2Agent.option('Phoenix');Player2Agent.option('Raze');Player2Agent.option('Reyna');Player2Agent.option('Sage');Player2Agent.option('Sova');Player2Agent.option('Viper');
	Player3Agent = createSelect();
	Player3Agent.position(175, 150);
	Player3Agent.option('Breach');Player3Agent.option('Brimstone');Player3Agent.option('Cypher');Player3Agent.option('Jett');Player3Agent.option('Killjoy');Player3Agent.option('Omen');Player3Agent.option('Phoenix');Player3Agent.option('Raze');Player3Agent.option('Reyna');Player3Agent.option('Sage');Player3Agent.option('Sova');Player3Agent.option('Viper');
	Player4Agent = createSelect();
	Player4Agent.position(175, 200);
	Player4Agent.option('Breach');Player4Agent.option('Brimstone');Player4Agent.option('Cypher');Player4Agent.option('Jett');Player4Agent.option('Killjoy');Player4Agent.option('Omen');Player4Agent.option('Phoenix');Player4Agent.option('Raze');Player4Agent.option('Reyna');Player4Agent.option('Sage');Player4Agent.option('Sova');Player4Agent.option('Viper');
	Player5Agent = createSelect();
	Player5Agent.position(175, 250);
	Player5Agent.option('Breach');Player5Agent.option('Brimstone');Player5Agent.option('Cypher');Player5Agent.option('Jett');Player5Agent.option('Killjoy');Player5Agent.option('Omen');Player5Agent.option('Phoenix');Player5Agent.option('Raze');Player5Agent.option('Reyna');Player5Agent.option('Sage');Player5Agent.option('Sova');Player5Agent.option('Viper');
	// Right team
	Player6Agent = createSelect();
	Player6Agent.position(475, 50);
	Player6Agent.option('Breach');Player6Agent.option('Brimstone');Player6Agent.option('Cypher');Player6Agent.option('Jett');Player6Agent.option('Killjoy');Player6Agent.option('Omen');Player6Agent.option('Phoenix');Player6Agent.option('Raze');Player6Agent.option('Reyna');Player6Agent.option('Sage');Player6Agent.option('Sova');Player6Agent.option('Viper');
	Player7Agent = createSelect();
	Player7Agent.position(475, 100);
	Player7Agent.option('Breach');Player7Agent.option('Brimstone');Player7Agent.option('Cypher');Player7Agent.option('Jett');Player7Agent.option('Killjoy');Player7Agent.option('Omen');Player7Agent.option('Phoenix');Player7Agent.option('Raze');Player7Agent.option('Reyna');Player7Agent.option('Sage');Player7Agent.option('Sova');Player7Agent.option('Viper');
	Player8Agent = createSelect();
	Player8Agent.position(475, 150);
	Player8Agent.option('Breach');Player8Agent.option('Brimstone');Player8Agent.option('Cypher');Player8Agent.option('Jett');Player8Agent.option('Killjoy');Player8Agent.option('Omen');Player8Agent.option('Phoenix');Player8Agent.option('Raze');Player8Agent.option('Reyna');Player8Agent.option('Sage');Player8Agent.option('Sova');Player8Agent.option('Viper');
	Player9Agent = createSelect();
	Player9Agent.position(475, 200);
	Player9Agent.option('Breach');Player9Agent.option('Brimstone');Player9Agent.option('Cypher');Player9Agent.option('Jett');Player9Agent.option('Killjoy');Player9Agent.option('Omen');Player9Agent.option('Phoenix');Player9Agent.option('Raze');Player9Agent.option('Reyna');Player9Agent.option('Sage');Player9Agent.option('Sova');Player9Agent.option('Viper');
	Player0Agent = createSelect();
	Player0Agent.position(475, 250);
	Player0Agent.option('Breach');Player0Agent.option('Brimstone');Player0Agent.option('Cypher');Player0Agent.option('Jett');Player0Agent.option('Killjoy');Player0Agent.option('Omen');Player0Agent.option('Phoenix');Player0Agent.option('Raze');Player0Agent.option('Reyna');Player0Agent.option('Sage');Player0Agent.option('Sova');Player0Agent.option('Viper');
		
	// Left uni
	Team1 = createInput();
	Team1.position(700, 50);
	// Right uni
	Team2 = createInput();
	Team2.position(1000, 50);

	// Left team
	Player1 = createInput();
	Player1.position(20, 50);
	Player2 = createInput();
	Player2.position(20, 100);
	Player3 = createInput();
	Player3.position(20, 150);
	Player4 = createInput();
	Player4.position(20, 200);
	Player5 = createInput();
	Player5.position(20, 250);
	// Right team
	Player6 = createInput();
	Player6.position(320, 50);
	Player7 = createInput();
	Player7.position(320, 100);
	Player8 = createInput();
	Player8.position(320, 150);
	Player9 = createInput();
	Player9.position(320, 200);
	Player0 = createInput();
	Player0.position(320, 250);
}

function draw() {
	//background(100, 50, 50);
	textSize(16);
	fill(255);
	text("Team Left Name", 700, 35);
	text("Team Right Name", 1000, 35);
	text("Player 1", 20, 35);
	text("Player 2", 20, 85);
	text("Player 3", 20, 135);
	text("Player 4", 20, 185);
	text("Player 5", 20, 235);
	text("Player 1", 320, 35);
	text("Player 2", 320, 85);
	text("Player 3", 320, 135);
	text("Player 4", 320, 185);
	text("Player 5", 320, 235);

	button = createButton('Update');
	button.position(19, 350);
	button.mousePressed(updateVal);
}

function updateVal() {
	console.log("clicked")
	//var textInput = input.value();
	var playerData = {
		LeftTeam : Team1.value(),
		Left1 : Player1.value(),
		Left1Agent : Player1Agent.value(),
		Left2 : Player2.value(),
		Left2Agent : Player2Agent.value(),
		Left3 : Player3.value(),
		Left3Agent : Player3Agent.value(),
		Left4 : Player4.value(),
		Left4Agent : Player4Agent.value(),
		Left5 : Player5.value(),
		Left5Agent : Player5Agent.value(),
		RightTeam : Team2.value(),
		Right1 : Player6.value(),
		Right1Agent : Player6Agent.value(),
		Right2 : Player7.value(),
		Right2Agent : Player7Agent.value(),
		Right3 : Player8.value(),
		Right3Agent : Player8Agent.value(),
		Right4 : Player9.value(),
		Right4Agent : Player9Agent.value(),
		Right5 : Player0.value(),
		Right5Agent : Player0Agent.value()
	}
	socket.emit('adminUpdate', playerData)
}
