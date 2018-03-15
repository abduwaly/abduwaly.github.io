var canvas = document.getElementById("clock-canvas");
var ctx = canvas.getContext("2d");

var cx = canvas.width/2;
var cy = canvas.height/2;

ctx.translate(cx,cy);

drawWatch();
function drawWatch(){
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 3;
    ctx.arc(0,0,121,0,Math.PI*2,false);
    ctx.stroke();
    ctx.restore();


    drawDial();

    drawNumber()

    drawNeedle()
}


function drawDial(){
    var angle = 0;
    for(var i = 0; i < 60; i++){
        ctx.save();

        ctx.rotate(angle);

        ctx.beginPath();
        ctx.moveTo(109,0);
        ctx.lineTo(119,0)
        ctx.strokeStyle = "silver";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();

        angle += Math.PI/180*6;
    }

    var angle = 0;
    for(var i = 0; i < 12; i++){
        ctx.save();

        ctx.rotate(angle);

        ctx.beginPath();
        ctx.moveTo(105,0);
        ctx.lineTo(119,0)
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.restore();

        angle += (Math.PI/180)*30;
    }
}


function drawNumber(){
    var angle = 0;
    for(var i = 12; i > 0; i--){
        ctx.save();
        ctx.rotate(-angle);

        ctx.translate(0,-97);

        ctx.rotate(angle);

        ctx.font = "14px"
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeText(i,0,0);
        ctx.restore();
        angle += (Math.PI/180)*30;
    }
}


function drawNeedle(){

    currentTime();

    ctx.save();

    ctx.rotate(-Math.PI/2);
    var angle = ctx.hour * (Math.PI/180) * 30;

    var hAngle = ctx.minutes * (Math.PI/180) * 0.5;

    var sAngle = ctx.seconds * (Math.PI/180)* 1/120;
    ctx.rotate(angle + hAngle + sAngle);
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineCap = "round";
    ctx.lineWidth = 8;
    ctx.moveTo(0,0);
    ctx.lineTo(50,0);
    ctx.stroke();
    ctx.restore();


    ctx.save();
    ctx.rotate(-Math.PI/2);

    var angle = ctx.minutes*(Math.PI/180)*6;

    var sAngle = ctx.seconds*(Math.PI/180)*0.1;
    ctx.rotate(angle+sAngle);
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineCap = "round";
    ctx.lineWidth = 6;
    ctx.moveTo(0,0);
    ctx.lineTo(70,0);
    ctx.stroke();
    ctx.restore();


    ctx.save();
    ctx.rotate(-Math.PI/2);

    var angle = ctx.seconds*(Math.PI/180)*6;
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineCap = "round";
    ctx.lineWidth = 4;
    ctx.moveTo(0,0);
    ctx.lineTo(90,0);
    ctx.stroke();
    ctx.restore();


    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.arc(0,0,7,0,Math.PI*2,false);
    ctx.fill();
    ctx.restore();


    $("#digital-clock .hour").html(ctx.time.substr(0,2));
    $("#digital-clock .minute").html(ctx.time.substr(3,2));
    $("#digital-clock .second").html(ctx.time.substr(6,2));
}


function currentTime(){
    var dateC = new Date();
    ctx.time = dateC.toTimeString().substr(0,9);
    ctx.hour = dateC.getHours();
    ctx.minutes = dateC.getMinutes();
    ctx.seconds = dateC.getSeconds();
}


setInterval(function(){
    ctx.clearRect(-cx,-cy,canvas.width,canvas.height);
    drawWatch();
},1000);