const ball = document.querySelector("#ball");

const viewWidth = window.innerWidth;
const viewHeight = window.innerHeight;

ball.addEventListener("mouseover",function(event){
    
    let boxAttr = ball.getBoundingClientRect();
    // console.log(boxAttr);

    let pos = getNewPosition(boxAttr.width, boxAttr.height);
    // console.log(pos);

    ball.style.top = pos.y + "px";
    ball.style.left = pos.x + "px";
})


function getNewPosition(boxWidth, boxHeight) {

    let newX = Math.floor((Math.random() * viewWidth)  - boxWidth);
    let newY = Math.floor((Math.random() * viewHeight)  - boxHeight);
    // console.log(newX);
    // console.log(newY);

    // yaha hm circle ko display ke out side na jaye use control kr rahe he
    if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }
    
    return {x: newX, y: newY};
    //  console.log(newX);
    // console.log(newY);
}
