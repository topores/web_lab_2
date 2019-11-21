<%--
  Created by IntelliJ IDEA.
  User: davydov_rostislav
  Date: 2019-11-07
  Time: 17:28
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Web Lab 1</title>
  <style>
  <%@include file="/content/styles-back.css"%>

  </style>

  <script>
    <%@include file="/content/script.js"%>
    <%@include file="/content/canvas.js"%>
  </script>

</head>

<body>
<header>
  Проверка попадания точки в график
  <br>Ростислав Давыдов Юрьевич (P3214)
  <br>Вариант - 215760
</header>

<br>

<div class="main">

  <table width="100%">
    <tr>
      <th colspan="1"> <he>Определение попадания точки в область</he></th>
    </tr>
    <tr>
      <th colspan="2" width="50%">
        <form action="/wbgfdtnrbgvfcdr/etb/e" method="get"
              onsubmit="check(document.getElementById('X').value, document.getElementById('Y').value, RRR)"
              target="answer">
            <p class="inputField">Координата X: <select id="X" name="X" onchange="checkX()">
                <option disabled selected></option>
                <option value="-5">-5</option>
                <option value="-4">-4</option>
                <option value="-3">-3</option>
                <option value="-2">-2</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>

            </select></p>
          <p class="inputField">Координата Y:
            <input id="Y" name="Y" placeholder="Число от -3 до 3." type="text" onchange="checkY()">
          </p>


          <p class="inputField">Радиус R:<var id="R"></var>
            <input type="hidden" name="R">
          <div class="button-div" >
            <button type="button" class="button in-button x-button" value="1" onclick="function  a(){RRR='1'; document.getElementById('R').innerHTML='1'; checkR()}; a()">1</button>
            <button type="button" class="button in-button x-button" value="2" onclick="function a(){RRR='2'; document.getElementById('R').innerHTML='2'; checkR()}; a()">2</button>
            <button type="button" class="button in-button x-button" value="3" onclick="function a(){RRR='3'; document.getElementById('R').innerHTML='3'; checkR()}; a()">3</button>
            <button type="button" class="button in-button x-button" value="4" onclick="function a(){RRR='4'; document.getElementById('R').innerHTML='4'; checkR()}; a()">4</button>
            <button type="button" class="button in-button x-button" value="5" onclick="function a(){RRR='5'; document.getElementById('R').innerHTML='5'; checkR()}; a()">5</button>
          </div>
          </p>
          <p><input id="send" class="button" type="submit" value="Отправить">
            <input class="button" type="reset" value="Очистить"></p>
        </form>
      </th>
      <th width="100%">
        <!-- <canvas id="canvas" width=237px height=215px></canvas> -->
        <canvas height="320px" width="320px" style="margin: 15px"></canvas>
      </th>
    </tr>
    <tr>
      <th colspan="1" >
        <p id="Xwarn" class="warning" hidden>X должно быть числом от -5 до 3.</p>
      </th>
    </tr>
    <tr>
      <th colspan="1" >
        <p id="Ywarn" class="warning" hidden>Y должно быть числом от -3 до 3.</p>
      </th>
    </tr>
    <tr>
      <th colspan="1" >
        <p id="Rwarn" class="warning" hidden>R должно быть числом от 1 до 5.</p>
      </th>
    </tr>
    <tr>
      <th colspan="1" >
        <p id="mess">

        </p>
      </th>
    </tr>

    <tr>
      <th colspan="1" >
        <p id="answ">

        </p>
      </th>
    </tr>

    <tr>
      <th colspan="1" >
        <p>
          <iframe id="iframe1" name="answer" hidden=""></iframe>
        </p>
      </th>
    </tr>

  </table  >

  <table class="f" border="3"  width="800px" id="table1" hidden="">

</table>

    <table id="buttable" width="800px" hidden="">
    <tr><td><button onclick="sendClear()">Clear History</button></td></tr>
    </table>

</div>


<script type="text/javascript">
 var RRR = document.getElementById("R").innerHTML;



  function checkVar(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }
  function message(s){
    document.getElementById("mess").innerHTML="<res>"+s+"</res>"

  }

  function check(x, y, r) {
    var flag = false;
    if (x==="" )
      document.getElementById("X").style.background="#d45659"
    else if (!checkVar(x))
      document.getElementById("X").style.background="#d45659"
    else if (!(x >= -5 && x <= 3))
      document.getElementById("X").style.background="#d45659"
    else
      document.getElementById("X").style.background="#fefffe"


    if (y==="" )
      document.getElementById("Y").style.background="#d45659"
    else if (!checkVar(y))
      document.getElementById("Y").style.background="#d45659"
    else if (!(y <= 3 && y >= -3))
      document.getElementById("Y").style.background="#d45659"
    else
      document.getElementById("Y").style.background="#fefffe"

    if (r==="" )
      document.getElementById("R").style.background="#d45659"
    else if (!checkVar(r))
      document.getElementById("R").style.background="#d45659"
    else if (!(r <= 5 && r >= 1))
      document.getElementById("R").style.background="#d45659"
    else
      document.getElementById("R").style.background="rgba(0, 125, 215, 0)"

    message("");
    if (checkVar(x) && checkVar(y) && checkVar(r) && (x!=="" && y!=="" && r!=="")) {
      if (x >= -5 && x <= 3 && y <= 3 && y >= -3 && y <= 3 && r >= 1 && r <= 5)
        flag = true;
      else
        message("Проверьте введеные значения");

    } else
      message("Введены не все данные/Введены не числа");
    setListener();
    if (flag===true) send(x,y,r);
    return flag
  }

</script>
</body>
</html>