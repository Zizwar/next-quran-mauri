//Create layer Ayat quran mauri
//const WH = {width:1080,height: 1920};
const WH = { width: 456, height: 707 };
let oldLine = 0;
let oldLift = WH.width;
let line = 0;
const numberLine = 20;
const heightLine = (WH.height / numberLine);
const $ = (id) => document.getElementById(id);
let resCalcPage = [];
let page = getHashValue('page') || 3;
function creatLineFahras(i) {
    //alert(num)
    const elm = document.createElement("div");
    elm.className += "lineFahras";
    elm.style.top = (heightLine * i) + "px";
    elm.style.height = (heightLine) + "px";
    elm.onclick = (e) => creatLayerFahras(e, i);//calcThis(e,i);


    $("wino").appendChild(elm);
}
function creatLayerFahras({ pageX }, i) {

    //if 1 line
    lineNumber = (i) - oldLine;
    thisLine = i;

    //alert(JSON.stringify({lineNumber,oldLine}))
    //oldLine = i;
    if (!lineNumber) {
        //alert("lineNumber1")
        renderLineFahres({ pageX, i, width: (oldLift - pageX) })
        oldLift = pageX;
        return;
    }
    //if 2 lineNumber
    if (lineNumber === 1) {
        //alert("lineNumber2")
        //lastLine
        renderLineFahres({ pageX, i, width: WH.width - pageX })
        //firstLine
        renderLineFahres({ pageX: 0, i: (oldLine), width: (oldLift) })
        oldLine = thisLine;
        oldLift = pageX;

        return;
    }


    //if multilineNumber
    if (lineNumber > 1) {
        //alert("multi line")
        //lastLine
        renderLineFahres({ pageX, i, width: WH.width - pageX })
        //firstLine
        renderLineFahres({ pageX: 0, i: (oldLine), width: (oldLift) })
        //alert("looop")
        //renderMultiLine Btwn
        for (let ii = oldLine + 1; ii < thisLine; ii++)
            renderLineFahres({ pageX: 0, i: (ii), width: WH.width })

        oldLine = thisLine;
        oldLift = pageX
    }


    //return;
}


function renderLineFahres({ pageX, i, width, cb }) {
    //alert(e)
    const elm = document.createElement("div");
    //elm.className += "lineFahras";
    const left = pageX.toFixed(2);
    const style = { left, i, width, top: (heightLine * i).toFixed(2), height: (heightLine).toFixed(2), page }
    resCalcPage.push(style)
    with (elm.style) {
        top = style.top + "px";
        height = style.height + "px";
        left = style.left + "px";
        width = style.width + "px";
        position = "absolute";
        background = "#336699";
        opacity = 0.7;
        zIndex = 999

    }

    //oldLift = pageX;
    if (cb) cb()
    //elm.style.background = style.background;

    console.log({ style })
    elm.onclick = (e) => calcThis(e, i)
    $("wino").appendChild(elm);
}

const reRenderPage = () => {

    const pageUrl = `https://mushaf.me/fahres/page/images/muhammadi/page${page}.png`;
    $("imagino").setAttribute("src", pageUrl);
    //const idTest = $('test');
    //alert(idTest.innerHTML);
    //idTest.innerHTML = 444

    for (i = 0; i < numberLine; i++) {
        creatLineFahras(i)

    }


    calcThis = () => {
        alert("see console resCalc Page log")
        console.log({ resCalcPage })
        const win = window.open("", "Resault Page: " + page, "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=700,height=500,top=" + (screen.height - 400) + ",left=" + (screen.width - 840));
        win.document.body.innerHTML = JSON.stringify(resCalcPage);


    };

    const elmCalcPage = $("calcPage");
    elmCalcPage.onclick = calcThis
    elmCalcPage.innerText = `Calc Page (${page})`;


    const elmNextPage = $("nextPage");
    elmNextPage.onclick = () => {
        page = +page + 1;
        resCalcPage = [];
        $("wino").innerHTML = "";
        reRenderPage();
    }
    elmNextPage.innerText = `next Page (${+page + 1})`;



}

function getHashValue(key) {
    const matches = location.hash.match(new RegExp(key + '=([^&]*)'));

    return matches ? matches[1] : null;
}

window.onload = () => {
    reRenderPage();
}

