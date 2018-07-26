var colorToggle=true;
var cardNo=0;
var Unfinished=true;

async function changeColor(n) {
    var Colors=['#2dd88f','#8855d8','#c8d7d8','#d85552','#d8bd32'];
    var i=0;
    while (colorToggle&&!Unfinished){
        document.getElementById(n).style.color=Colors[i%5];
        await sleep(50);
        i++
    }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



function Fill(n) {
    var Cards = ['X', 'O'];
    var element = document.getElementById(n);
    if (element.innerText != "X"&&element.innerText!="O"&&Unfinished) {
        document.getElementById(n).innerText = Cards[cardNo % 2];
        cardNo++;
        if (cardNo % 2 === 1) {
            document.getElementById(n).style.color = 'red';
            document.getElementById('table').setAttribute('bordercolor','blue')

        } else {
            document.getElementById(n).style.color = 'blue';
            document.getElementById('table').setAttribute('bordercolor','red')

        }
    }
    check();
}

function check() {
    var One = document.getElementById('1').innerText;
    var Two = document.getElementById('2').innerText;
    var Three = document.getElementById('3').innerText;
    var Four = document.getElementById('4').innerText;
    var Five = document.getElementById('5').innerText;
    var Six = document.getElementById('6').innerText;
    var Seven = document.getElementById('7').innerText;
    var Eight = document.getElementById('8').innerText;
    var Nine = document.getElementById('9').innerText;
    // CHECK BY ROWS
    if (One == "X" && Two == "X" && Three == "X") {
        Unfinished = false;
        changeColor('1');
        changeColor('2');
        changeColor('3');
    }
    else if (One == 'O' && Two == 'O' && Three == 'O') {
        Unfinished = false;
        changeColor('1');
        changeColor('2');
        changeColor('3');
    }
    else if (Four == "X" && Five == "X" && Six == "X") {
        Unfinished = false;
        changeColor('4');
        changeColor('5');
        changeColor('6');
    }
    else if (Four == 'O' && Five == 'O' && Six == 'O') {
        Unfinished = false;
        changeColor('4');
        changeColor('5');
        changeColor('6');
    }
    else if (Seven == "X" && Eight == "X" && Nine == "X") {
        Unfinished = false;
        changeColor('7');
        changeColor('8');
        changeColor('9');
    }
    else if (Seven == "O" && Eight == "O" && Nine == "O") {
        Unfinished = false;
        changeColor('7');
        changeColor('8');
        changeColor('9');
    }
    // CHECK BY COLUMNS
    else if (One == "X" && Four == "X" && Seven == "X") {
        Unfinished = false;
        changeColor('1');
        changeColor('4');
        changeColor('7');
    }
    else if (One == "O" && Four == "O" && Seven == 'O') {
        Unfinished = false;
        changeColor('1');
        changeColor('4');
        changeColor('7');
    }
    else if (Two == "X" && Five == "X" && Eight == "X") {
        Unfinished = false;
        changeColor('2');
        changeColor('5');
        changeColor('8');
    }
    else if (Two == "O" && Five == "O" && Eight == 'O') {
        Unfinished = false;
        changeColor('2');
        changeColor('5');
        changeColor('8');
    }
    else if (Three == "X" && Six == "X" && Nine == "X") {
        Unfinished = false;
        changeColor('3');
        changeColor('6');
        changeColor('9');
    }
    else if (Three == "O" && Six == "O" && Nine == "O") {
        Unfinished = false;
        changeColor('3');
        changeColor('6');
        changeColor('9');
    }
    // CHECK ORIB
    else if (One == "X" && Five == "X" && Nine == "X") {
        Unfinished = false;
        changeColor('1');
        changeColor('5');
        changeColor('9');
    }
    else if (One == "O" && Five == "O" && Nine == "O") {
        Unfinished = false;
        changeColor('1');
        changeColor('5');
        changeColor('9');
    }
    else if (Three == "X" && Five == "X" && Seven == "X") {
        Unfinished = false;
        changeColor('3');
        changeColor('5');
        changeColor('7');
    }
    else if (Three == "O" && Five == "O" && Seven == "O") {
        Unfinished = false;
        changeColor('3');
        changeColor('5');
        changeColor('7');
    }

}
function Restart(){
    Unfinished=true;
    colorToggle=false;
    Arr=['1','2','3','4','5','6','7','8','9'];
    for (var el of Arr){
        document.getElementById(el).innerText=""

    }
    colorToggle=true;
}