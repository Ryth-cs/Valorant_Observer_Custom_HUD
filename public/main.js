var socket = io('/overlay');
greenLeft = true;

socket.on('adminVal', function(data) {
	console.log(data)
    //playerData = data;
    updateData(data);  
})

socket.on('adminSwitch', function(data) {
    switchSides();  
})

function switchSides() {
    if (greenLeft) {
        // Switch green to right
        document.getElementById("left-video").src = "RedSide.mp4";
        document.getElementById("right-video").src = "BlueSide.mp4";
        document.getElementById("overlay").style.backgroundImage = `url('Overlay_Red_Blue.png')`;
        greenLeft = false;
    } else {
        // Switch green to left
        document.getElementById("left-video").src = "BlueSide.mp4";
        document.getElementById("right-video").src = "RedSide.mp4";
        document.getElementById("overlay").style.backgroundImage = `url('Overlay_Blue_Red.png')`;
        greenLeft = true;
    }
}

function updateData(data) {

    for (let att in data) {
        console.log(att + " is " + data[att]);
        if (att.toString().includes("agent")) {
            document.getElementById(att.toString()).style.backgroundImage = `url('48px/${data[att]}.png')`;
        } else {
            document.getElementById(att.toString()).innerHTML = data[att];
        }
    }
    
}
