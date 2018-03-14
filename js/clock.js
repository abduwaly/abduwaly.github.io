var canvas = document.getElementById("clock-canvas");
var ctx = canvas.getContext("2d");
//中心点
var cx = canvas.width/2;
var cy = canvas.height/2;
//把画布原点放在中间
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

    //刻度
    drawDial();
    //数字
    drawNumber()
    //针
    drawNeedle()
}

//绘制刻度
function drawDial(){
    var angle = 0;
    for(var i = 0; i < 60; i++){
        ctx.save();
        //旋转
        ctx.rotate(angle);
        //开始绘制刻度
        ctx.beginPath();
        ctx.moveTo(109,0);
        ctx.lineTo(119,0)
        ctx.strokeStyle = "silver";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
        //角度累加：转为弧度
        angle += Math.PI/180*6;
    }

    var angle = 0;
    for(var i = 0; i < 12; i++){
        ctx.save();
        //旋转
        ctx.rotate(angle);
        //开始绘制刻度
        ctx.beginPath();
        ctx.moveTo(105,0);
        ctx.lineTo(119,0)
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.restore();
        //角度累加：转为弧度
        angle += (Math.PI/180)*30;
    }
}

//画数字
function drawNumber(){
    var angle = 0;
    for(var i = 12; i > 0; i--){
        ctx.save();
        ctx.rotate(-angle);

        ctx.translate(0,-97);
        //把文字转回垂直显示
        ctx.rotate(angle);
        //开始绘制文字
        ctx.font = "14px"
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeText(i,0,0);
        ctx.restore();
        angle += (Math.PI/180)*30;
    }
}

//针
function drawNeedle(){
    //获取最新时间
    currentTime();
    //时针
    ctx.save();
    //旋转操作在绘制的上面，save方法内部
    ctx.rotate(-Math.PI/2);
    var angle = ctx.hour * (Math.PI/180) * 30;
    //1小时 == 60分 == 30度  一分钟0.5度
    var hAngle = ctx.minutes * (Math.PI/180) * 0.5;
    //1小时 == 60分 == 3600秒 == 30度  一秒钟1/120度
    var sAngle = ctx.seconds * (Math.PI/180)* 1/120;
    ctx.rotate(angle + hAngle + sAngle);
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineCap = "round";//棱角处理
    ctx.lineWidth = 8;
    ctx.moveTo(0,0);
    ctx.lineTo(50,0);
    ctx.stroke();
    ctx.restore();

    //分针
    ctx.save();
    ctx.rotate(-Math.PI/2);
    //每分钟6度
    var angle = ctx.minutes*(Math.PI/180)*6;
    //1分钟 == 60秒 == 6度  每秒0.1度
    var sAngle = ctx.seconds*(Math.PI/180)*0.1;
    ctx.rotate(angle+sAngle);
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineCap = "round";//棱角处理
    ctx.lineWidth = 6;
    ctx.moveTo(0,0);
    ctx.lineTo(70,0);
    ctx.stroke();
    ctx.restore();

    //秒针
    ctx.save();
    ctx.rotate(-Math.PI/2);
    //每秒钟6度
    var angle = ctx.seconds*(Math.PI/180)*6;
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineCap = "round";//棱角处理
    ctx.lineWidth = 4;
    ctx.moveTo(0,0);
    ctx.lineTo(90,0);
    ctx.stroke();
    ctx.restore();

    //原点
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.arc(0,0,7,0,Math.PI*2,false);
    ctx.fill();
    ctx.restore();

    //数字时钟
    $("#digital-clock .hour").html(ctx.time.substr(0,2));
    $("#digital-clock .minute").html(ctx.time.substr(3,2));
    $("#digital-clock .second").html(ctx.time.substr(6,2));
}

//获取时间
function currentTime(){
    var dateC = new Date();
    ctx.time = dateC.toTimeString().substr(0,9);
    ctx.hour = dateC.getHours();
    ctx.minutes = dateC.getMinutes();
    ctx.seconds = dateC.getSeconds();
}

//定时器
setInterval(function(){
    //清除画布
    ctx.clearRect(-cx,-cy,canvas.width,canvas.height);
    drawWatch();
},1000);