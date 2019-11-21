function drawAxis(r) {
    var canvas = document.querySelector("canvas");
    let height = canvas.height;
    let width = canvas.width;
    var context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.fillStyle= "black";
    context.lineWidth = 1;
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.moveTo(width / 2, height);
    context.lineTo(width / 2, 0);
    context.lineTo(width / 2 + 3, 7);
    context.moveTo(width / 2, 0);
    context.lineTo(width / 2 - 3, 7);
    context.stroke();
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(0, height / 2);
    context.lineTo(width, height / 2);
    context.lineTo(width - 7, height / 2 + 3);
    context.moveTo(width, height / 2);
    context.lineTo(width - 7, height / 2 - 3);
    context.stroke();
    context.strokeStyle = "black";
    context.lineWidth = 1;
    drawDigitsX(context,5,width,height);
    context.stroke();
    context.strokeStyle = "black";
    context.lineWidth = 1;
    drawDigitsY(context,5,width,height);
    context.stroke();

    context.strokeStyle = "white";

    drawTextX(context,5,width,height,r);
    drawTextY(context,5,width,height,r);
    context.stroke();

}

function drawDigitsX(context, i, width, height) {
    let t = width / 2;
    i=25;
    t += i;
    for (let j = 1; j < 7; j++) {

        context.moveTo(t, height / 2 + 5);
        context.lineTo(t, height / 2 - 5);
        t += i;
    }
    t = width / 2;
    for (let j = 0; j < 7; j++) {

        context.moveTo(t, height / 2 + 5);
        context.lineTo(t, height / 2 - 5)
        t -= i;
    }
}

function drawDigitsY(context, i, width, height) {
    let t = height / 2;
    i=25;
    t += i;
    for (let j = 1; j < 6; j++) {

        context.moveTo(width / 2 + 5, t);
        context.lineTo(width / 2 - 5, t);
        t += i;
    }
    t = height / 2;
    for (let j = 0; j < 6; j++) {

        context.moveTo(width / 2 + 5, t);
        context.lineTo(width / 2 - 5, t);
        t -= i;
    }
}

function drawTextX(context, i, width, height,r){
    context.font = "9px Verdana";
    context.strokeStyle="white";
    let t = width / 2;
    i=25;
    t += i;
    for (let j = 1; j < 7; j++) {
        context.strokeText(j/4*r, t,height / 2+14 );
        t += i;
    }
    t = width / 2;
    for (let j = 0; j < 7; j++) {
        context.strokeText(j/4*r, t, height / 2 +14);
        t -= i;
    }
}

function drawTextY(context, i, width, height,r) {
    let t = height / 2;
    i=25;
    context.font = "9px Verdana";
    context.strokeStyle="white";
    t += i;
    for (let j = 1; j < 6; j++) {

        context.strokeText(j/4*r, width / 2, t+14);
        t += i;
    }
    t = height / 2;
    for (let j = 0; j < 6; j++) {
        context.strokeText(j/4*r, width / 2, t+14);
        t -= i;
    }
}


function drawArea2(r) {
    var r=100;
    var canvas = document.querySelector("canvas");
    let height = canvas.height;
    let width = canvas.width;
    var context = canvas.getContext("2d");

    context.strokeStyle="rgb(60, 60, 60)";
    context.fillStyle = "rgb(60, 60, 60)";
    context.beginPath ();
    context.arc(width/2, height / 2, r, Math.PI * 1.5, Math.PI * 1, true);

    context.fill();
    context.moveTo(width/2, height / 2);
    context.lineTo(width/2, height / 2 -  r);
    context.lineTo(width/2-r, height / 2 );
    context.fill();

    context.stroke();
}

function drawArea3(r) {
    var r=100;
    var canvas = document.querySelector("canvas");
    let height = canvas.height;
    let width = canvas.width;
    var context = canvas.getContext("2d");
    context.beginPath ();
    context.strokeStyle="rgb(60, 60, 60)";
    context.fillStyle = "rgb(60, 60, 60)";
    context.moveTo(width/2, height / 2);
    context.lineTo(width/2, height / 2 +  r/2);
    context.lineTo(width/2-r, height / 2 );
    context.fill();

    context.stroke();
}
function drawArea4(r) {
    var r=100;
    var canvas = document.querySelector("canvas");
    let height = canvas.height;
    let width = canvas.width;
    var context = canvas.getContext("2d");
    context.strokeStyle="rgb(60, 60, 60)";
    context.fillStyle = "rgb(60, 60, 60)";
    context.fillRect(width/2, height / 2, r, r);
    context.stroke();
}
function clear() {
    var r=100;
    var canvas = document.querySelector("canvas");
    let height = canvas.height;
    let width = canvas.width;
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawPoint(x, y, color) {
    var r=100;
    var canvas = document.querySelector("canvas");
    let height = canvas.height;
    let width = canvas.width;
    var context = canvas.getContext("2d");
    context.fillStyle = color;
    context.strokeStyle="#ebe6e4";
    context.beginPath();
    let i=r/RRR;
    context.arc(width / 2 + x * i, height / 2 - y * i, 3, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
}



function paintTable(points) {
    let html = "<tr id=\"head\" b>" +
        "      <td>X</td>" +
        "      <td>Y</td>" +
        "      <td>R</td>" +
        "      <td>inArea</td>" +
        "      <td>time</td>" +
        "    </tr>";
    points=points.reverse();
    for (let i = 0; i < points.length; i++) {
        html = html + "<tr>" + "<td>" + points[i].X.toFixed(2) + "</td><td>" + points[i].Y.toFixed(2) + "</td><td>" + points[i].R.toFixed(2) + "</td><td>" + points[i].inArea + "</td><td>" + points[i].time + "</td>" + "</tr>";

    }
    document.getElementById("table1").innerHTML=html;
    document.getElementById("buttable").hidden=false;

}