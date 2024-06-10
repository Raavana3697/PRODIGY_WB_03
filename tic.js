var flag = 1;

function myfunc() {
    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var b4 = document.getElementById("b4").value;
    var b5 = document.getElementById("b5").value;
    var b6 = document.getElementById("b6").value;
    var b7 = document.getElementById("b7").value;
    var b8 = document.getElementById("b8").value;
    var b9 = document.getElementById("b9").value;

    // Checking if Player X won or not
    if ((b1 == 'X' && b2 == 'X' && b3 == 'X') || 
        (b4 == 'X' && b5 == 'X' && b6 == 'X') || 
        (b7 == 'X' && b8 == 'X' && b9 == 'X') || 
        (b1 == 'X' && b4 == 'X' && b7 == 'X') || 
        (b2 == 'X' && b5 == 'X' && b8 == 'X') || 
        (b3 == 'X' && b6 == 'X' && b9 == 'X') || 
        (b1 == 'X' && b5 == 'X' && b9 == 'X') || 
        (b3 == 'X' && b5 == 'X' && b7 == 'X')) {
            document.getElementById('print').innerHTML = "Player X won";
            disableButtons();
            alert('Player X won');
    }

    // Checking if Player O won or not
    else if ((b1 == 'O' && b2 == 'O' && b3 == 'O') || 
        (b4 == 'O' && b5 == 'O' && b6 == 'O') || 
        (b7 == 'O' && b8 == 'O' && b9 == 'O') || 
        (b1 == 'O' && b4 == 'O' && b7 == 'O') || 
        (b2 == 'O' && b5 == 'O' && b8 == 'O') || 
        (b3 == 'O' && b6 == 'O' && b9 == 'O') || 
        (b1 == 'O' && b5 == 'O' && b9 == 'O') || 
        (b3 == 'O' && b5 == 'O' && b7 == 'O')) {
            document.getElementById('print').innerHTML = "Player O won";
            disableButtons();
            alert('Player O won');
    }

    // Checking for Tie
    else if (b1 != '' && b2 != '' && b3 != '' && b4 != '' && b5 != '' && b6 != '' && b7 != '' && b8 != '' && b9 != '') {
        document.getElementById('print').innerHTML = "Match Tie";
        alert('Match Tie');
    }

    // Continue the game
    else {
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player O Turned";
        }
        else {
            document.getElementById('print').innerHTML = "Player X Turned";
        }
    }
}

function disableButtons() {
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
}

function myfunc_2() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
}

function myfunc_3() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}

function myfunc_4() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "O";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}

function myfunc_5() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "O";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}

function myfunc_6() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "O";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}

function myfunc_7() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "O";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}

function myfunc_8() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "O";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}

function myfunc_9() {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "O";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}

function myfunc_10() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "O";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}

function myfunc_11() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "O";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}
