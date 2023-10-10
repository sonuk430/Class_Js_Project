let color = ["red", "green","yellow", "blue","purple","black"];
let index = 0;
let Triangle = false;

let cShap = document.getElementById("shap_change");
let cColor = document.getElementById("color_change");


cColor.addEventListener("click",changeColor);
cShap.addEventListener("click",changeShap);

function changeColor(){
    console.log(index);
    if(index === color.length){
        index = 0;
    }
    document.getElementById("circle").style.backgroundColor = color[index];
    index++;
}



function changeShap(){
    if(!Triangle){
        let i = document.getElementById("square1");
    }


}