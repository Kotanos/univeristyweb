var tbl;

var tpNums = [
['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
['0', '0', '0', '0', '1', '1', '0', '0', '4', '1', '0', '0', '2', '4', '0', '4', '5', '0', '2', '0', '7', '0', '0', '0', '0'],
['5', '7', '2', '1', '3', '3', '7', '0', '4', '6', '7', '6', '3', '4', '4', '4', '3', '6', '2', '5', '1', '12', '5', '1', '0'],
['6', '3', '7', '6', '6', '6', '4', '11', '1', '1', '4', '5', '1', '1', '7', '1', '1', '5', '4', '1', '1', '1', '6', '10', '3'],
['4', '5', '5', '6', '6', '7', '7', '6', '4', '3', '3', '2', '2', '1', '2', '2', '1', '1', '1', '1', '1', '1', '3', '1', '8'],
];

var lfNums = [
['0', '1', '5', '11', '4'],
['3', '3', '9', '2', '1'],
['0', '2', '8', '5', '5'],
['0', '0', '2', '14', '5'],
['2', '4', '4', '2', '6'],
['0', '2', '6', '5', '2'],
['0', '0', '0', '11', '7'],
['0', '6', '3', '3', '6'],
['0', '1', '7', '5', '5'],
['0', '0', '8', '7', '4'],
['0', '0', '8', '9', '4'],
['0', '0', '12', '1', '8'],
['0', '0', '2', '1', '2'],
['0', '0', '0', '9', '3'],
['0', '0', '0', '0', '2'],
['0', '0', '0', '0', '9'],
['0', '0', '0', '0', '6'],
['0', '0', '0', '0', '6'],
['0', '0', '0', '0', '6'],
['0', '0', '0', '0', '7'],
['0', '0', '0', '0', '8'],
['0', '0', '0', '0', '8'],
['0', '0', '0', '0', '8'],
['0', '0', '0', '0', '7'],
['0', '0', '0', '0', '7'],
];
var mainNums = [
['1', '0', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '1', '1', '1', '1'],
['1', '1', '1', '0', '0', '0', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '1', '1', '0', '1'],
['1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '0', '0', '1', '1', '1', '1', '1'],
['1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '0'],
['1', '1', '0', '0', '1', '1', '1', '1', '0', '1', '1', '1', '1', '0', '0', '0', '1', '1', '0', '1', '1', '1', '1', '1', '1'],
['0', '1', '1', '0', '0', '0', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '0', '1', '1'],
['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1'],
['1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '0', '0', '0', '1', '1', '1', '0', '0', '0', '1', '1', '1', '1', '1', '1'],
['1', '0', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '1', '1', '1', '1', '1', '0', '0', '0', '1', '1', '1', '1', '1'],
['1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '1', '1', '1', '1'],
['1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '1', '1', '1', '1'],
['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1'],
['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '1', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0'],
['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '0', '0'],
['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0'],
['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0'],
['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
['0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
['0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
['0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
['0', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
['1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
['1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
['1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
['1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
];

var fullTableHeight = lfNums.length + tpNums.length;
var fullTableWidth = lfNums[0].length + tpNums[0].length;

function createTable(leftNums, topNums) {
    debugger;

    var tab_cont = document.getElementById("table-container");
    tbl = document.createElement('table');
    tbl.className = "cross-table";

    for (var i = 0; i < fullTableHeight; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < fullTableWidth; j++) {
            if (i == 0 && j == 0) {
                var td = tr.insertCell();
                td.setAttribute('colSpan', "" + leftNums[0].length);
                td.setAttribute('rowSpan', "" + topNums.length);
                td.className = "td-zero-cell";
            }

            if ((i < topNums.length) && (j < leftNums[0].length)) {
                continue;
            } else {
                var td = tr.insertCell();
                if ((j+1) % 5==0 && (j+1)>leftNums[0].length) td.className+=" fvth-bl-right";
                if ((i+1-topNums.length) % 5==0 && (i+1-topNums.length)>0  ) td.className+=" fvth-bl-bot";
                if (i < topNums.length)
                    td.appendChild(document.createTextNode(topNums[i][j - 5]));
                if (j < leftNums[0].length)
                    td.appendChild(document.createTextNode(leftNums[i - 5][j]));
                if (i < topNums.length || j < leftNums[0].length)
                    td.className+= " td-header-cell";
                else {
                    td.className+= " td-field-cell";
                    td.style.background="white";
                    td.onmousedown = function () {
                        if (this.style.background == "white") this.style.background = "black";
                        else if (this.style.background == "black")  this.style.background = "white";
            }
                }
            }
        }
    }
    tab_cont.appendChild(tbl);
}

function clearTable() {
   
    for (i = tpNums.length; i <fullTableHeight ; i++) {
        c = tbl.rows[i].cells;
        
        for (j = lfNums[0].length; j < fullTableWidth; j++) {
            c[j].style.background = "white";
        }
    }
}

function showAnswer() {

    for (i = tpNums.length; i <fullTableHeight ; i++) {
        c = tbl.rows[i].cells;
        
        for (j = lfNums[0].length; j < fullTableWidth; j++) {
           if (mainNums[i-tpNums.length][j-lfNums[0].length]=="1")
            c[j].style.background = "black";
         else c[j].style.background = "white";
        }
    }
}

function checkRez()
{
    debugger;
     var rezl=true;
    for (i = tpNums.length; i <fullTableHeight ; i++) {
        c = tbl.rows[i].cells;
        
        for (j = lfNums[0].length; j < fullTableWidth; j++) {
           if ((mainNums[i-tpNums.length][j-lfNums[0].length]=="1" && c[j].style.background == "white") ||
               (mainNums[i-tpNums.length][j-lfNums[0].length]=="0" && c[j].style.background == "black"))
           {
               rezl=false;
               break;
           }

        }
    } 
rezl?alert("Кроссворд решен правильно!"):alert("Кроссворд решен не правильно!");
}


createTable(lfNums, tpNums);