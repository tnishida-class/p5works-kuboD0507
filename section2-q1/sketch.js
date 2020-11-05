// 小手調べ
function setup() {
  createCanvas(400, 400);
  for(let i=200; i>0; i-=20){
    if(i>100){
  stroke(255,0,0)}
    else{stroke(0,0,255)}
  ellipse(200,200,i);
  }
}
