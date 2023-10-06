'use strict'
// 1行目に記載している 'use strict' は削除しないでください


const black = "rgb(0, 0, 0)"
const white = "rgb(255, 255, 255)"
const noValidCellColor = "rgb(37, 155, 37)";
const validCellColor = "rgb(247, 247, 131)";
const blackBorder = "2px solid black";

let mySotne = white;
let opponentSotne = black;
let turnCount = 0;

let firstRun = true;


if(firstRun){

  const row = document.body.getElementsByTagName("div")[3];
  for (let i = 0; i <= 7; i++) {
    const column = document.createElement("div");
    column.classList.add("container");
    for (let j = 0; j <= 7; j++) {
      const Square = document.createElement("div");
      Square.classList.add("cell");
      const Stone = document.createElement("div");
      Stone.classList.add("stone");
      // Stone.innerText = `${i},${j}`;
      // Stone.style.color = "aqua";
      Stone.setAttribute("onclick", `clickDisplayAlert(${i},${j})`);
      Square.appendChild(Stone);
      column.appendChild(Square);

    }
    row.appendChild(column);
  }
  
  const stoneData = document.querySelectorAll(".stone");
  stoneData.forEach((stone,index) => {
    if(index === 27 ||index === 36){
      stone.style.background = white;
      stone.style.border = blackBorder;
    }else if (index === 28 ||index === 35){
      stone.style.background = black;
      stone.style.border = blackBorder;
    }
    
  })

  const cellData = document.querySelectorAll(".cell");
  const validCellAry = [20, 29, 34, 43];
  validCellAry.forEach((cell) => {
    cellData[cell].style.background = validCellColor;
    stoneData[cell].style.background = validCellColor;
  })
 
  document.body.getElementsByClassName("oneMore")[0].style.visibility = "hidden";

  firstRun = false
}








function leftOrUpReversed(inStoneData,direction,inX,inY){
  let count = 0;
  let isReversed = false;
  let checkIndex = 0;
  let stoneBackgColor = "";
  let adjustmentI = 0;

  if(direction === "up"){
    checkIndex = inX;
    adjustmentI = -1;
  } else if (direction === "left") {
    checkIndex = inY;
    adjustmentI = -1;
  }
  for(let i = checkIndex + adjustmentI;i >= 0;i--){
    if(direction === "up"){
      stoneBackgColor = getComputedStyle(inStoneData[i * 8 + inY]).backgroundColor;
    } else if (direction === "left") {
      stoneBackgColor = getComputedStyle(inStoneData[inX * 8 + i]).backgroundColor;
    }
    if(stoneBackgColor === opponentSotne){
      count++;
    } else if(stoneBackgColor === mySotne && count >= 1){
      isReversed = true;
      break;
    }  else if(stoneBackgColor === noValidCellColor || i === 0){
      count = 0;
      break;
    } else{
      break;
    }
  }

  if(isReversed === true && count >= 1){
    for(let i = checkIndex - 1 ;i >= checkIndex - count;i-- ){
      if(direction === "up"){
        inStoneData[i * 8 + inY].style.background = mySotne;
      } else if (direction === "left") {
        inStoneData[inX * 8 + i].style.background = mySotne;
      }
    }
  }
}












function leftReversed(inStoneData,inX,inY){
  let count = 0;
  let isReversed = false;
  for(let i = inY - 1;i >= 0;i--){
    const stoneBackgColor = getComputedStyle(inStoneData[inX * 8 + i]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    } else if(stoneBackgColor === mySotne && count >= 1){
      isReversed = true;
      break;
    }  else if(stoneBackgColor === noValidCellColor || i === 0){
      count = 0;
      break;
    } else{
      break;
    }
  }
  if(isReversed === true && count >= 1){
    for(let i = inY - 1 ;i >= inY - count;i-- ){
      inStoneData[inX * 8 + i].style.background = mySotne;
    }
  }
}

function rightReversed(inStoneData,inX,inY){
  let count = 0;
  let isReversed = false;
  for(let i = inY + 1;i <= 7; i++){
    const stoneBackgColor = getComputedStyle(inStoneData[inX * 8 + i]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    } else if(stoneBackgColor === mySotne && count >= 1){
      isReversed = true;
      break;
    }  else if(stoneBackgColor === noValidCellColor || i === 0){
      count = 0;
      break;
    } else{
      break;
    }
  }
  if(isReversed === true && count >= 1){
    for(let i = inY + 1 ;i <= inY + count;i++ ){
      inStoneData[inX * 8 + i].style.background = mySotne;
    }
  }
}


function downReversed(inStoneData,inX,inY){
  let count = 0;
  let isReversed = false;
  for(let i = inX + 1;i <= 7;i++){
    const stoneBackgColor = getComputedStyle(inStoneData[i * 8 + inY]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    } else if(stoneBackgColor === mySotne && count >= 1){
      isReversed = true;
      break;
    }  else if(stoneBackgColor === noValidCellColor || i === 0){
      count = 0;
      break;
    } else{
      break;
    }
  }
  if(isReversed === true && count >= 1){
    for(let i = inX + 1 ;i <= inX + count;i++ ){
      inStoneData[i * 8 + inY].style.background = mySotne;
    }
  }
}

function upReversed(inStoneData,inX,inY){
  let count = 0;
  let isReversed = false;
  for(let i = inX - 1;i >= 0;i--){
    const stoneBackgColor = getComputedStyle(inStoneData[i * 8 + inY]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    } else if(stoneBackgColor === mySotne && count >= 1){
      isReversed = true;
      break;
    }  else if(stoneBackgColor === noValidCellColor || i === 0){
      count = 0;
      break;
    } else{
      break;
    }
  }
  if(isReversed === true && count >= 1){
    for(let i = inX - 1 ;i >= inX - count;i-- ){
      inStoneData[i * 8 + inY].style.background = mySotne;
    }
  }
}

function leftUpReversed(inStoneData,inX,inY){
  let count = 0;
  let isReversed = false;
  let checkingX = inX - 1;
  let checkingY = inY - 1;
  while (checkingX >= 0 && checkingY >= 0){
    const stoneBackgColor = getComputedStyle(inStoneData[checkingX * 8 + checkingY]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    } else if(stoneBackgColor === mySotne && count >= 1){
      isReversed = true;
      break;
    }  else if(stoneBackgColor === noValidCellColor || checkingX === 0 || checkingY === 0){
      count = 0;
      break;
    } else{
      break;
    }
    checkingX--;
    checkingY--;
  }
  checkingX = inX - 1;
  checkingY = inY - 1;
  if(isReversed === true && count >= 1){
    for(let i = 1 ;i <=  count;i++){
      inStoneData[checkingX * 8 + checkingY].style.background = mySotne;
      checkingX--;
      checkingY--;
    }
  }
}


function rightUpReversed(inStoneData,inX,inY){
  let count = 0;
  let isReversed = false;
  let checkingX = inX - 1;
  let checkingY = inY + 1;
  while (checkingX >= 0 && checkingY <= 7){
    const stoneBackgColor = getComputedStyle(inStoneData[checkingX * 8 + checkingY]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    } else if(stoneBackgColor === mySotne && count >= 1){
      isReversed = true;
      break;
    }  else if(stoneBackgColor === noValidCellColor || checkingX === 0 || checkingY === 0){
      count = 0;
      break;
    } else{
      break;
    }
    checkingX--;
    checkingY++;
  }
  checkingX = inX - 1;
  checkingY = inY + 1;
  if(isReversed === true && count >= 1){
    for(let i = 1 ;i <=  count;i++){
      inStoneData[checkingX * 8 + checkingY].style.background = mySotne;
      checkingX--;
      checkingY++;
    }
  }
}

function leftDownReversed(inStoneData,inX,inY){
  let count = 0;
  let isReversed = false;
  let checkingX = inX + 1;
  let checkingY = inY - 1;
  while (checkingX <= 7 && checkingY >= 0){
    const stoneBackgColor = getComputedStyle(inStoneData[checkingX * 8 + checkingY]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    } else if(stoneBackgColor === mySotne && count >= 1){
      isReversed = true;
      break;
    }  else if(stoneBackgColor === noValidCellColor || checkingX === 0 || checkingY === 0){
      count = 0;
      break;
    } else{
      break;
    }
    checkingX++;
    checkingY--;
  }
  checkingX = inX + 1;
  checkingY = inY - 1;
  if(isReversed === true && count >= 1){
    for(let i = 1 ;i <=  count;i++){
      inStoneData[checkingX * 8 + checkingY].style.background = mySotne;
      checkingX++;
      checkingY--;
    }
  }
}

function rightDownReversed(inStoneData,inX,inY){
  let count = 0;
  let isReversed = false;
  let checkingX = inX + 1;
  let checkingY = inY + 1;
  while (checkingX <= 7 && checkingY <= 7){
    const stoneBackgColor = getComputedStyle(inStoneData[checkingX * 8 + checkingY]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    } else if(stoneBackgColor === mySotne && count >= 1){
      isReversed = true;
      break;
    }  else if(stoneBackgColor === noValidCellColor || checkingX === 0 || checkingY === 0){
      count = 0;
      break;
    } else{
      break;
    }
    checkingX++;
    checkingY++;
  }
  checkingX = inX + 1;
  checkingY = inY + 1;
  if(isReversed === true && count >= 1){
    for(let i = 1 ;i <=  count;i++){
      inStoneData[checkingX * 8 + checkingY].style.background = mySotne;
      checkingX++;
      checkingY++;
    }
  }
}

function resetEmptyCellColor(inCellData,inStoneData){
  for (let i = 0; i <= 7; i++){
    for (let j = 0; j <= 7; j++){
      if(inCellData[i * 8 + j].style.background === validCellColor){
        inCellData[i * 8 + j].style.background = noValidCellColor;
      }
      if(inStoneData[i * 8 + j].style.background === validCellColor){
        inStoneData[i * 8 + j].style.background = noValidCellColor;
      }
    }
  }
}

/////おける場所チェック

function leftReversedCheck(inItemData,inStoneData,inX,inY){
  let count = 0;
  for(let i = inY - 1;i >= 0;i--){
    const stoneBackgColor = getComputedStyle(inStoneData[inX * 8 + i]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    }
    if(stoneBackgColor === mySotne && count >= 1){
      inItemData[inX * 8 + inY].style.background = validCellColor;
      inStoneData[inX * 8 + inY].style.background = validCellColor;
      break;
    }  else if(stoneBackgColor === noValidCellColor || stoneBackgColor === validCellColor || count === 0){
      break;
    }
  }
}

function rightReversedCheck(inItemData,inStoneData,inX,inY){
  let count = 0;
  for(let i = inY + 1 ;i <= 7; i++){
    const stoneBackgColor = getComputedStyle(inStoneData[inX * 8 + i]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    }
    if(stoneBackgColor === mySotne && count >= 1){
      inItemData[inX * 8 + inY].style.background = validCellColor;
      inStoneData[inX * 8 + inY].style.background = validCellColor;
      break;
    }  else if(stoneBackgColor === noValidCellColor || stoneBackgColor === validCellColor || count === 0){
      break;
    }
  }
}


function downReversedCheck(inItemData,inStoneData,inX,inY){
  let count = 0;
  for(let i = inX + 1;i <= 7;i++){
    const stoneBackgColor = getComputedStyle(inStoneData[i * 8 + inY]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    }
    if(stoneBackgColor === mySotne && count >= 1){
      inItemData[inX * 8 + inY].style.background = validCellColor;
      inStoneData[inX * 8 + inY].style.background = validCellColor;
      break;
    }  else if(stoneBackgColor === noValidCellColor || stoneBackgColor === validCellColor || count === 0){
      break;
    }
  }
}


function upReversedCheck(inItemData,inStoneData,inX,inY){
  let count = 0;
  for(let i = inX - 1;i >= 0;i--){
    const stoneBackgColor = getComputedStyle(inStoneData[i * 8 + inY]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    }
    if(stoneBackgColor === mySotne && count >= 1){
      inItemData[inX * 8 + inY].style.background = validCellColor;
      inStoneData[inX * 8 + inY].style.background = validCellColor;
      break;
    }  else if(stoneBackgColor === noValidCellColor || stoneBackgColor === validCellColor || count === 0){
      break;
    }
  }
}

function leftUpReversedCheck(inItemData,inStoneData,inX,inY){
  let count = 0;
  let checkingX = inX - 1;
  let checkingY = inY - 1;
  while (checkingX >= 0 && checkingY >= 0){
    const stoneBackgColor = getComputedStyle(inStoneData[checkingX * 8 + checkingY]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    }
    if(stoneBackgColor === mySotne && count >= 1){
      inItemData[inX * 8 + inY].style.background = validCellColor;
      inStoneData[inX * 8 + inY].style.background = validCellColor;
      break;
    }  else if(stoneBackgColor === noValidCellColor || stoneBackgColor === validCellColor || count === 0){
      break;
    }
    checkingX--;
    checkingY--;
  }
}

function rightUpReversedCheck(inItemData,inStoneData,inX,inY){
  let count = 0;
  let checkingX = inX - 1;
  let checkingY = inY + 1;
  while (checkingX >= 0 && checkingY <= 7){
    const stoneBackgColor = getComputedStyle(inStoneData[checkingX * 8 + checkingY]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    }
    if(stoneBackgColor === mySotne && count >= 1){
      inItemData[inX * 8 + inY].style.background = validCellColor;
      inStoneData[inX * 8 + inY].style.background = validCellColor;
      break;
    }  else if(stoneBackgColor === noValidCellColor || stoneBackgColor === validCellColor || count === 0){
      break;
    }
    checkingX--;
    checkingY++;
  }
}

function rightDownReversedCheck(inItemData,inStoneData,inX,inY){
  let count = 0;
  let checkingX = inX + 1;
  let checkingY = inY + 1;
  while (checkingX <= 7 && checkingY <= 7){
    const stoneBackgColor = getComputedStyle(inStoneData[checkingX * 8 + checkingY]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    }
    if(stoneBackgColor === mySotne && count >= 1){
      inItemData[inX * 8 + inY].style.background = validCellColor;
      inStoneData[inX * 8 + inY].style.background = validCellColor;
      break;
    }  else if(stoneBackgColor === noValidCellColor || stoneBackgColor === validCellColor || count === 0){
      break;
    }
    checkingX++;
    checkingY++;
  }
}

function rightDownReversedCheck(inItemData,inStoneData,inX,inY){
  let count = 0;
  let checkingX = inX + 1;
  let checkingY = inY + 1;
  while (checkingX <= 7 && checkingY <= 7){
    const stoneBackgColor = getComputedStyle(inStoneData[checkingX * 8 + checkingY]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    }
    if(stoneBackgColor === mySotne && count >= 1){
      inItemData[inX * 8 + inY].style.background = validCellColor;
      inStoneData[inX * 8 + inY].style.background = validCellColor;
      break;
    }  else if(stoneBackgColor === noValidCellColor || stoneBackgColor === validCellColor || count === 0){
      break;
    }
    checkingX++;
    checkingY++;
  }
}


function leftDownReversedCheck(inItemData,inStoneData,inX,inY){
  let count = 0;
  let checkingX = inX + 1;
  let checkingY = inY - 1;
  
  while (checkingX <= 7 && checkingY >= 0){
    const stoneBackgColor = getComputedStyle(inStoneData[checkingX * 8 + checkingY]).backgroundColor;
    if(stoneBackgColor === opponentSotne){
      count++;
    }
    if(stoneBackgColor === mySotne && count >= 1){
      inItemData[inX * 8 + inY].style.background = validCellColor;
      inStoneData[inX * 8 + inY].style.background = validCellColor;
      break;
    }  else if(stoneBackgColor === noValidCellColor || stoneBackgColor === validCellColor || count === 0){
      break;
    }
    checkingX++;
    checkingY--;
  }
}

function clickDisplayAlert(x, y) {
  const cell = x * 8 + y;
  const stoneData = document.querySelectorAll(".stone");
  const cellData = document.querySelectorAll(".cell");


  document.body.getElementsByClassName("oneMore")[0].style.visibility = "hidden";

  if(stoneData[cell].style.background === validCellColor){
    const stoneAry =[];
    turnCount++;
    stoneData[cell].style.background = mySotne;
    stoneData[cell].style.border = blackBorder;


    //ひっくり返す関数追加
    leftOrUpReversed(stoneData,"up",x,y);
    leftOrUpReversed(stoneData,"left",x,y);
//    leftReversed(stoneData,x,y);
    rightReversed(stoneData,x,y);
//    upReversed(stoneData,x,y);
    downReversed(stoneData,x,y);
    leftUpReversed(stoneData,x,y);
    rightUpReversed(stoneData,x,y);
    leftDownReversed(stoneData,x,y);
    rightDownReversed(stoneData,x,y);


    let  stoneColumnAry = [];
    let  stoneCount = 0;
    for (const stone of stoneData){
      const selectedStoneColor = getComputedStyle(stone).backgroundColor;
      if(selectedStoneColor === white){
        stoneColumnAry.push(1);
      } else if (selectedStoneColor === black){
        stoneColumnAry.push(2);
      } else {
        stoneColumnAry.push(0);
      }
      if(stoneCount % 8 === 7){
        stoneAry.push(stoneColumnAry);
        stoneColumnAry = [];
      }
      stoneCount++;
    }


    resetEmptyCellColor(cellData,stoneData)
    

    
    const adjustColumnCoordAry = [-1, -1, -1,  0, 0,  1, 1, 1];
    const adjustRowCoordAry =    [-1,  0, 1, -1, 1, -1, 0, 1];
    for (let i = 0; i <= 7; i++){
      for (let j = 0; j <= 7; j++){
        if(stoneAry[i][j] === 0){
          for (let k = 0; k <= 7; k++){
            if(
              i + adjustColumnCoordAry[k] >= 0 &&
              i + adjustColumnCoordAry[k] <= 7 &&
              j + adjustRowCoordAry[k] >= 0 &&
              j + adjustRowCoordAry[k] <= 7
              ){
                if(
                  stoneAry[i + adjustColumnCoordAry[k]][j + adjustRowCoordAry[k]] === 1 || 
                  stoneAry[i + adjustColumnCoordAry[k]][j + adjustRowCoordAry[k]] === 2
                  ){
                    stoneAry[i][j] = 3;
                    break;
                }
            }
          }
        }
      }
    }

    const turnData = document.querySelectorAll(".turn");


    if(mySotne === white){
      mySotne = black;
      opponentSotne = white;
      turnData[0].style.background = black;
      turnData[0].style.color = white;
    } else {
      mySotne = white;
      opponentSotne = black;
      turnData[0].style.background = white;
      turnData[0].style.color = black;
    }






    for (let i = 0; i <= 7; i++){
      for (let j = 0; j <= 7; j++){
        if(stoneAry[i][j] === 3){
          leftReversedCheck(cellData,stoneData,i,j);
          rightReversedCheck(cellData,stoneData,i,j);
          upReversedCheck(cellData,stoneData,i,j);
          downReversedCheck(cellData,stoneData,i,j);
          leftUpReversedCheck(cellData,stoneData,i,j);
          rightUpReversedCheck(cellData,stoneData,i,j);
          leftDownReversedCheck(cellData,stoneData,i,j);
          rightDownReversedCheck(cellData,stoneData,i,j);
        }
      }
    }


    
    let trunChangeCount = 0;
    for(const cell of cellData){
      if(getComputedStyle(cell).backgroundColor === noValidCellColor){
        trunChangeCount++;
      }
    }
    if(trunChangeCount === 64){
      
      document.body.getElementsByClassName("oneMore")[0].style.visibility = "visible";
      if(mySotne === white){
        mySotne = black;
        opponentSotne = white;
        turnData[0].style.background = black;
        turnData[0].style.color = white;
      } else {
        mySotne = white;
        opponentSotne = black;
        turnData[0].style.background = white;
        turnData[0].style.color = black;
      }
      for (let i = 0; i <= 7; i++){
        for (let j = 0; j <= 7; j++){
          if(stoneAry[i][j] === 3){
            leftReversedCheck(cellData,stoneData,i,j);
            rightReversedCheck(cellData,stoneData,i,j);
            upReversedCheck(cellData,stoneData,i,j);
            downReversedCheck(cellData,stoneData,i,j);
            leftUpReversedCheck(cellData,stoneData,i,j);
            rightUpReversedCheck(cellData,stoneData,i,j);
            leftDownReversedCheck(cellData,stoneData,i,j);
            rightDownReversedCheck(cellData,stoneData,i,j);
          }
        }
      }
    }


    let whiteCount = 0;
    let blackCount = 0;
    for (let i = 0; i <= 7; i++){
      for (let j = 0; j <= 7; j++){
        if(stoneAry[i][j] === 1){
          whiteCount++;
        } else if(stoneAry[i][j] === 2){
          blackCount++;
        }
      }
    }

    if(turnCount === 60 || whiteCount === 0 || blackCount === 0){
      document.body.getElementsByClassName("oneMore")[0].style.visibility = "hidden";
      let OthelloResult = "";
      if(whiteCount > blackCount){
        OthelloResult = "○白の勝ち！！！";
      } else if(whiteCount < blackCount){
        OthelloResult = "黒の勝ち！！！";
      } else {
        OthelloResult = "引き分け！！！";
      }

      window.setTimeout(function(){
        window.alert(`○白 : ${whiteCount}  ●黒 : ${blackCount}\n\n結果 : ${OthelloResult}`)
      },200);

    }
  }  

}

function reset(){
  mySotne = white;
  opponentSotne = black;
  turnCount = 0;
  const cellData = document.querySelectorAll(".cell");
  const stoneData = document.querySelectorAll(".stone");
  document.body.getElementsByClassName("oneMore")[0].style.visibility = "hidden";


  for(let i = 0; i <= 7; i++ ){
    for(let j = 0; j <= 7; j++ ){
      const cell = i * 8 + j;
      const stoneData = document.querySelectorAll(".stone");
      if(cell === 27 ||cell === 36){
        stoneData[cell].style.background = white;
        stoneData[cell].style.border = blackBorder;
      }else if (cell === 28 ||cell === 35){
        stoneData[cell].style.background = black;
        stoneData[cell].style.border = blackBorder;
      } else {
        stoneData[cell].style.background = noValidCellColor;
        cellData[cell].style.background = noValidCellColor;
        stoneData[cell].style.border = "0px";
      }
  
    }
  }
  const validCellAry = [20, 29, 34, 43];
  for(const cell of validCellAry){
    cellData[cell].style.background = validCellColor;
    stoneData[cell].style.background = validCellColor;
  
  }

  
  const turnData = document.querySelectorAll(".turn")[0];
    turnData.style.background = white;
    turnData.style.color = black;

}
