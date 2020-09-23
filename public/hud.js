var socket = io('/hud');
greenLeft = true;

socket.on('adminTeamName', function(data) {
    updateData(data);  
})

socket.on('adminSwitch', function(data) {
    switchSides();  
})

function switchSides() {
    if (greenLeft) {
        // Switch green to right
        document.getElementById("base").style.backgroundImage = `url('HUD_Red_Blue.png')`;
        greenLeft = false;
    } else {
        // Switch green to left
        document.getElementById("base").style.backgroundImage = `url('HUD_Blue_Red.png')`;
        greenLeft = true;
    }
}

function updateData(data) {
    if (data != null) {
        document.getElementById("leftTeam").innerHTML = data.LeftTeam;
        document.getElementById("rightTeam").innerHTML = data.RightTeam;
    }
}