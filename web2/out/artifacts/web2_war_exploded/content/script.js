function checkX(event) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", document.documentURI+"?Val=" + X.value + "&var=X", true);
    xhr.onreadystatechange = function () {
        console.log(xhr.responseText);
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (xhr.responseText.includes('invalid')) {
                    document.getElementById("X").style.background="#d45659";
                    document.getElementById("Xwarn").hidden=false;
                    //document.getElementById("send").
                } else {
                    document.getElementById("X").style.background="#fefffe"
                    document.getElementById("Xwarn").hidden=true;
                }
            }
        }
    }
    xhr.send();
}

function checkY(event) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", document.documentURI+"?Val=" + Y.value + "&var=Y", true);
    xhr.onreadystatechange = function () {
        console.log(xhr.responseText);
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                //alert(xhr.responseText)
                if (xhr.responseText.includes('invalid')) {
                    document.getElementById("Y").style.background="#d45659";
                    document.getElementById("Ywarn").hidden=false;
                    //document.getElementById("send").
                } else {
                    document.getElementById("Y").style.background="#fefffe"
                    document.getElementById("Ywarn").hidden=true;
                }
            }
        }
    }
    xhr.send();
}

function checkR(event) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", document.documentURI+"?Val=" + RRR + "&var=R", true);
    xhr.onreadystatechange = function () {
        console.log(xhr.responseText);
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                //alert(xhr.responseText)
                if (xhr.responseText.includes('invalid')) {
                    document.getElementById("R").style.background="#d45659";
                    document.getElementById("Rwarn").hidden=false;
                    //document.getElementById("send").
                } else {
                    document.getElementById("R").style.background="rgba(0, 125, 215, 0.0);";
                    document.getElementById("Rwarn").hidden=true;
                    setListener();
                    sendGet();
                }
            }
        }
    }
    xhr.send();
}

function send(x,y,r) {

    let xhr = new XMLHttpRequest();
    let params="X=" + x + "&Y=" + y+"&R=" + r;
   // alert(params);

    //alert("sent")
    xhr.open("POST", document.documentURI, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        console.log(xhr.responseText);
        if (xhr.readyState === 4) {
            //alert(xhr.responseText)
            if (xhr.status === 200) {
                    clear();
                    drawArea2(1);
                    drawArea3(1);
                    drawArea4(1);
                    drawAxis(RRR);
                    //drawArea(1);
                    var points=JSON.parse(xhr.responseText);
                    if (points.length>0){
                        for (let i = 0; i < points.length; i++) {
                            if (areaCheck(points[i].X,points[i].Y)===true)
                            drawPoint(points[i].X, points[i].Y, "#ebe6e4");
                            else drawPoint(points[i].X, points[i].Y, "#000000");
                        }
                        document.getElementById("table1").hidden=false;
                        paintTable(points)
                    }

            }
        }
    }
    xhr.send(params);


}
function areaCheck(x,y) {
    let r=RRR;
    let inArea1=(x>0 && y>0 && false);
    let inArea2= (x<=0 && y>=0 && x*x+y*y<=r*r);
    let inArea3= (x<0 && y<0 && y>-0.5*r-0.5*x);
    let inArea4= (x>=0 && y<=0 && y>-r && x<r);

    return inArea1 || inArea2 || inArea3 || inArea4;
}


function sendGet(){

    let xhr = new XMLHttpRequest();
    let params="getHistory=" + "true";
    // alert(params);


    xhr.open("POST", document.documentURI, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        console.log(xhr.responseText);
        if (xhr.readyState === 4) {
            //alert(xhr.responseText)
            if (xhr.status === 200) {
                //alert(xhr.responseText);
                clear();
                drawArea2(1);
                drawArea3(1);
                drawArea4(1);
                drawAxis(RRR);
                //drawArea(1);
                var points=JSON.parse(xhr.responseText);
                if (points.length>0){
                    for (let i = 0; i < points.length; i++) {
                        if (areaCheck(points[i].X,points[i].Y)===true)
                            drawPoint(points[i].X, points[i].Y, "#ebe6e4");
                        else drawPoint(points[i].X, points[i].Y, "#000000");
                    }
                    document.getElementById("table1").hidden=false;
                    paintTable(points)
                }

            }
        }
    }
    xhr.send(params);



}

function sendClear(){

    let xhr = new XMLHttpRequest();
    let params="clear=" + "true";


    xhr.open("POST", document.documentURI, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        console.log(xhr.responseText);

        if (xhr.readyState === 4) {
            //alert(xhr.responseText)
            if (xhr.status === 200) {
                //document.getElementById("answ").innerHTML=xhr.responseText;
                clear();
                drawArea2(1);
                drawArea3(1);
                drawArea4(1);
                drawAxis(RRR);
                document.getElementById("table1").hidden=true;
                //document.getElementById("tbody").innerHTML=html;

                document.getElementById("buttable").hidden=true;
            }
        }
    }
    xhr.send(params);


}


function setListener(){
    var canvas = document.querySelector("canvas");
    canvas.addEventListener("click",  onCanvClick);
}
function onCanvClick(event)
{
    var canvas = document.querySelector("canvas");
    let x = event.offsetX;
    let y = event.offsetY;

    if ((RRR > 0) && (RRR <= 5)) {
        let X = (x - canvas.width / 2) / 100 * RRR;
        let Y = -(y - canvas.height / 2) / 100 * RRR;

        send(X, Y, RRR)
            }

}