//Create layer Ayat
const WH = {width:1080,height: 1920};
let iStor = 1;
let xStor =  WH.width;
let line = 0;
const numberLine = 20;
const heightLine = (WH.height / numberLine);
const $ = (id)=>document.getElementById(id);
function creatLineFahras(i){
	//alert(num)
	const elm = document.createElement("div");
	elm.className += "lineFahras";
	elm.style.top = (heightLine*i)+"px";
	elm.style.height = (heightLine)+"px";
	elm.onclick= (e)=>creatLayerFahras(e,i);//clickThis(e,i);


$("wino").appendChild(elm);
}
function creatLayerFahras({pageX},i){

//if 1 line
 line =  (i)-iStor;

alert(JSON.stringify({line,iStor}))
iStor = i;
if(!line){
	alert("line1")
	renderLineFahres({pageX,i,xStor})
	xStor = pageX;
	return;
}
//if 2 line
if(line===1){
	alert("line2")
	renderLineFahres({pageX,i,xStor:WH.width,cb:()=>{	
		xStor = pageX;
		renderLineFahres({pageX:0,i:(i-1),xStor})
	}})
	return;
}
//if multiline
if(line>1){
	alert("multi line")
	//renderLineFahres({pageX,i,xStor})
	renderLineFahres({pageX,i,xStor:WH.width,cb:()=>{
		alert("looop")
		for(let ii=5;ii<7;ii++){

			renderLineFahres({pageX:0,i:(ii-1),xStor:WH.width})
	}	
		renderLineFahres({pageX,i:(7-1),xStor})
	}})
	//return;
}

}
function renderLineFahres({pageX,i,xStor,cb}){
	//alert(e)
	const elm = document.createElement("div");
	//elm.className += "lineFahras";
	const left = (pageX);
	const width = xStor?xStor:(WH.width - pageX);
	const style = {left,i,width,top : (heightLine*i),height : (heightLine)}
	with(elm.style){
	top = style.top+"px";
	height = style.height+"px";
	left = style.left+"px";
	width = style.width+"px";
	position="absolute";
	background="#336699";
	opacity=0.7;
	zIndex=999

	}
	//xStor = pageX;
if(cb)cb()
	//elm.style.background = style.background;

console.log({style})
	elm.onclick= (e)=>clickThis(e,i)
$("wino").appendChild(elm);
}

window.onload= ()=>{

//const idTest = $('test');
//alert(idTest.innerHTML);
//idTest.innerHTML = 444

for(i=0;i<numberLine;i++){
	creatLineFahras(i)

}


 clickThis=(e,i)=>{
   const relX = e.pageX
   const  relY = e.pageY
  console.log({relX,relY,i})
  return;


};

 $("test").onclick= clickThis
}