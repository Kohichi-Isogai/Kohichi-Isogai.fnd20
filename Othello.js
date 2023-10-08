'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const black = "rgb(0, 0, 0)"
const white = "rgb(255, 255, 255)"
const noValidCellColor = "rgb(37, 155, 37)";
const validCellColor = "rgb(247, 247, 131)";
const blackBorder = "2px solid black";

const adjustColumnCoordAry = [-1, -1, -1,  0, 0,  1, 1, 1];
const adjustRowCoordAry =    [-1,  0, 1, -1, 1, -1, 0, 1];
const initValidCellAry = [20, 29, 34, 43];

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
  initValidCellAry.forEach((cell) => {
    cellData[cell].style.background = validCellColor;
    stoneData[cell].style.background = validCellColor;
  })
 
  document.body.getElementsByClassName("oneMore")[0].style.visibility = "hidden";

  firstRun = false
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
  inCellData.forEach((cell) =>{
    if(cell.style.background === validCellColor){
      cell.style.background = noValidCellColor;
    }
  })
  inStoneData.forEach((stone) =>{
    if(stone.style.background === validCellColor){
      stone.style.background = noValidCellColor;
    }
  })
}

/////おける場所チェック

function mappingTheBoard(stoneAllData){
  const result = [];
  let  stoneColumnAry = [];
  let  stoneCount = 0;
  for (const stone of stoneAllData){
    const selectedStoneColor = getComputedStyle(stone).backgroundColor;
    if(selectedStoneColor === white){
      stoneColumnAry.push(1);
    } else if (selectedStoneColor === black){
      stoneColumnAry.push(2);
    } else {
      stoneColumnAry.push(0);
    }
    if(stoneCount % 8 === 7){
      result.push(stoneColumnAry);
      stoneColumnAry = [];
    }
    stoneCount++;
  }
  return result; 
}

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

function oneMoreTurnCheck(inTrunChangeCount,inStoneAry,inCellData,inStoneData,inTurnData){

  if(inTrunChangeCount === 64){
    document.body.getElementsByClassName("oneMore")[0].style.visibility = "visible";
    if(mySotne === white){
      mySotne = black;
      opponentSotne = white;
      inTurnData[0].style.background = black;
      inTurnData[0].style.color = white;
    } else {
      mySotne = white;
      opponentSotne = black;
      inTurnData[0].style.background = white;
      inTurnData[0].style.color = black;
    }
    inStoneAry.forEach((column,i) => column.forEach((cell,j) => {
      if(cell === 3){
        console.log("in");
        leftReversedCheck(inCellData,inStoneData,i,j);
        rightReversedCheck(inCellData,inStoneData,i,j);
        upReversedCheck(inCellData,inStoneData,i,j);
        downReversedCheck(inCellData,inStoneData,i,j);
        leftUpReversedCheck(inCellData,inStoneData,i,j);
        rightUpReversedCheck(inCellData,inStoneData,i,j);
        leftDownReversedCheck(inCellData,inStoneData,i,j);
        rightDownReversedCheck(inCellData,inStoneData,i,j);
      }
    }))
    
  }
}

function clickDisplayAlert(x, y) {
  const cell = x * 8 + y;
  const stoneData = document.querySelectorAll(".stone");
  const cellData = document.querySelectorAll(".cell");

  document.body.getElementsByClassName("oneMore")[0].style.visibility = "hidden";

  if(stoneData[cell].style.background === validCellColor){
    turnCount++;
    stoneData[cell].style.background = mySotne;
    stoneData[cell].style.border = blackBorder;

    //ひっくり返す
    leftReversed(stoneData,x,y);
    upReversed(stoneData,x,y);
    rightReversed(stoneData,x,y);
    downReversed(stoneData,x,y);
    leftUpReversed(stoneData,x,y);
    rightUpReversed(stoneData,x,y);
    leftDownReversed(stoneData,x,y);
    rightDownReversed(stoneData,x,y);

    const stoneAry = mappingTheBoard(stoneData);
    resetEmptyCellColor(cellData,stoneData);
    
    stoneAry.forEach((column,i) => column.forEach((cell,j) => {
      if(cell === 0){
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
    }))

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

    stoneAry.forEach((column,i) => column.forEach((cell,j) => {
      if(cell === 3){
        leftReversedCheck(cellData,stoneData,i,j);
        rightReversedCheck(cellData,stoneData,i,j);
        upReversedCheck(cellData,stoneData,i,j);
        downReversedCheck(cellData,stoneData,i,j);
        leftUpReversedCheck(cellData,stoneData,i,j);
        rightUpReversedCheck(cellData,stoneData,i,j);
        leftDownReversedCheck(cellData,stoneData,i,j);
        rightDownReversedCheck(cellData,stoneData,i,j);
      }
    }))
    
    let trunChangeCount = 0;
    cellData.forEach((cell) => {
      if(getComputedStyle(cell).backgroundColor === noValidCellColor){
        trunChangeCount++;
      }
    });

    oneMoreTurnCheck(trunChangeCount,stoneAry,cellData,stoneData,turnData);

    let whiteCount = 0;
    let blackCount = 0;
    stoneAry.forEach((column,i) => column.forEach((cell,j) => {
      if(cell === 1){
        whiteCount++;
      } else if(stoneAry[i][j] === 2){
        blackCount++;
      }
    }))

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

  stoneData.forEach((stone,index) => {
    if(index === 27 ||index === 36){
      stone.style.background = white;
      stone.style.border = blackBorder;
    }else if (index === 28 ||index === 35){
      stone.style.background = black;
      stone.style.border = blackBorder;
    } else {
      stone.style.background = noValidCellColor;
      cellData[index].style.background = noValidCellColor;
      stone.style.border = "0px";
    }
  })

  initValidCellAry.forEach((index) => {
    cellData[index].style.background = validCellColor;
    stoneData[index].style.background = validCellColor;
  });

  const turnData = document.querySelectorAll(".turn")[0];
    turnData.style.background = white;
    turnData.style.color = black;

}
