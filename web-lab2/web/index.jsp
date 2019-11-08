<%-- Created by IntelliJ IDEA. --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Web Lab 1</title>
  <link href="styles-back.css" rel="stylesheet">
  <script src="script.js"></script>


</head>

<body>
<header>
  Проверка попадания точки в график
  <br>Ростислав Давыдов Юрьевич (P3214)
  <br>Вариант - 214004
</header>

<br>

<div class="main">

  <table width="100%">
    <tr>
      <th colspan="1"> <he>Определение попадания точки в область</he></th>
    </tr>
    <tr>
      <th colspan="2" width="50%">
        <form action="" method="get"
              onsubmit="return check(document.getElementById('X').value, document.getElementById('Y').value, document.getElementById('R').value)"
              target="answer">
          <p class="inputField">Координата X:
            <input id="X" name="X" placeholder="Число от -5 до 3." type="text" onchange="checkX()">
          </p>
          <p class="inputField">Координата Y: <select id="Y" name="Y" onchange="checkY()">
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

          <p class="inputField">Радиус R:
            <input id="R" name="R" placeholder="Число от 2 до 5" type="text" onchange="checkR()">
          </p>
          <p><input id="send" class="button" type="submit" value="Отправить">
            <input class="button" type="reset" value="Очистить"></p>
        </form>
      </th>
      <th width="100%">
        <!-- <canvas id="canvas" width=237px height=215px></canvas> -->
        <img width="420" height="320" src='img/areas.png' id='area' align="bottom"/>
      </th>
    </tr>
    <tr>
      <th colspan="1" >
        <p id="Xwarn" class="warning" hidden>X должно быть числом от -5 до 3.</p>
      </th>
    </tr>
    <tr>
      <th colspan="1" >
        <p id="Ywarn" class="warning" hidden>Y должно быть числом от -5 до 3.</p>
      </th>
    </tr>
    <tr>
      <th colspan="1" >
        <p id="Rwarn" class="warning" hidden>R должно быть числом от 2 до 5.</p>
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
        <p>
          <iframe name="answer"></iframe>
        </p>
      </th>
    </tr>

  </table>

</div>


<script type="text/javascript">
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
    else if (!(y <= 3 && y >= -5))
      document.getElementById("Y").style.background="#d45659"
    else
      document.getElementById("Y").style.background="#fefffe"

    if (r==="" )
      document.getElementById("R").style.background="#d45659"
    else if (!checkVar(r))
      document.getElementById("R").style.background="#d45659"
    else if (!(r <= 5 && r >= 2))
      document.getElementById("R").style.background="#d45659"
    else
      document.getElementById("R").style.background="#fefffe"

    message("");
    if (checkVar(x) && checkVar(y) && checkVar(r) && (x!=="" && y!=="" && r!=="")) {
      if (x >= -5 && x <= 3 && y <= 3 && y >= -5 && y <= 3 && r >= 2 && r <= 5)
        flag = true
      else
        message("Проверьте введеные значения");

    } else
      message("Введены не все данные/Введены не числа");

    return flag
  }

</script>
</body>
</html>