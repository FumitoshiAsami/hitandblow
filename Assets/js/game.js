var playersecret;
var comsecret;

var player_view = document.getElementById("player-num");
var com_view = document.getElementById("com-num");
var player_table = document.getElementById("player-table");
var com_table = document.getElementById("com-table");
var message = document.getElementById("message");
var buttons = document.getElementById("buttons");

//720通りの候補
var targetnumbers = [[0,1,2],[0,1,3],[0,1,4],[0,1,5],[0,1,6],[0,1,7],[0,1,8],[0,1,9],
[0,2,1],[0,2,3],[0,2,4],[0,2,5],[0,2,6],[0,2,7],[0,2,8],[0,2,9],[0,3,1],[0,3,2],
[0,3,4],[0,3,5],[0,3,6],[0,3,7],[0,3,8],[0,3,9],[0,4,1],[0,4,2],[0,4,3],[0,4,5],
[0,4,6],[0,4,7],[0,4,8],[0,4,9],[0,5,1],[0,5,2],[0,5,3],[0,5,4],[0,5,6],[0,5,7],
[0,5,8],[0,5,9],[0,6,1],[0,6,2],[0,6,3],[0,6,4],[0,6,5],[0,6,7],[0,6,8],[0,6,9],
[0,7,1],[0,7,2],[0,7,3],[0,7,4],[0,7,5],[0,7,6],[0,7,8],[0,7,9],[0,8,1],[0,8,2],
[0,8,3],[0,8,4],[0,8,5],[0,8,6],[0,8,7],[0,8,9],[0,9,1],[0,9,2],[0,9,3],[0,9,4],
[0,9,5],[0,9,6],[0,9,7],[0,9,8],[1,0,2],[1,0,3],[1,0,4],[1,0,5],[1,0,6],[1,0,7],
[1,0,8],[1,0,9],[1,2,0],[1,2,3],[1,2,4],[1,2,5],[1,2,6],[1,2,7],[1,2,8],[1,2,9],
[1,3,0],[1,3,2],[1,3,4],[1,3,5],[1,3,6],[1,3,7],[1,3,8],[1,3,9],[1,4,0],[1,4,2],
[1,4,3],[1,4,5],[1,4,6],[1,4,7],[1,4,8],[1,4,9],[1,5,0],[1,5,2],[1,5,3],[1,5,4],
[1,5,6],[1,5,7],[1,5,8],[1,5,9],[1,6,0],[1,6,2],[1,6,3],[1,6,4],[1,6,5],[1,6,7],
[1,6,8],[1,6,9],[1,7,0],[1,7,2],[1,7,3],[1,7,4],[1,7,5],[1,7,6],[1,7,8],[1,7,9],
[1,8,0],[1,8,2],[1,8,3],[1,8,4],[1,8,5],[1,8,6],[1,8,7],[1,8,9],[1,9,0],[1,9,2],
[1,9,3],[1,9,4],[1,9,5],[1,9,6],[1,9,7],[1,9,8],[2,0,1],[2,0,3],[2,0,4],[2,0,5],
[2,0,6],[2,0,7],[2,0,8],[2,0,9],[2,1,0],[2,1,3],[2,1,4],[2,1,5],[2,1,6],[2,1,7],
[2,1,8],[2,1,9],[2,3,0],[2,3,1],[2,3,4],[2,3,5],[2,3,6],[2,3,7],[2,3,8],[2,3,9],
[2,4,0],[2,4,1],[2,4,3],[2,4,5],[2,4,6],[2,4,7],[2,4,8],[2,4,9],[2,5,0],[2,5,1],
[2,5,3],[2,5,4],[2,5,6],[2,5,7],[2,5,8],[2,5,9],[2,6,0],[2,6,1],[2,6,3],[2,6,4],
[2,6,5],[2,6,7],[2,6,8],[2,6,9],[2,7,0],[2,7,1],[2,7,3],[2,7,4],[2,7,5],[2,7,6],
[2,7,8],[2,7,9],[2,8,0],[2,8,1],[2,8,3],[2,8,4],[2,8,5],[2,8,6],[2,8,7],[2,8,9],
[2,9,0],[2,9,1],[2,9,3],[2,9,4],[2,9,5],[2,9,6],[2,9,7],[2,9,8],[3,0,1],[3,0,2],
[3,0,4],[3,0,5],[3,0,6],[3,0,7],[3,0,8],[3,0,9],[3,1,0],[3,1,2],[3,1,4],[3,1,5],
[3,1,6],[3,1,7],[3,1,8],[3,1,9],[3,2,0],[3,2,1],[3,2,4],[3,2,5],[3,2,6],[3,2,7],
[3,2,8],[3,2,9],[3,4,0],[3,4,1],[3,4,2],[3,4,5],[3,4,6],[3,4,7],[3,4,8],[3,4,9],
[3,5,0],[3,5,1],[3,5,2],[3,5,4],[3,5,6],[3,5,7],[3,5,8],[3,5,9],[3,6,0],[3,6,1],
[3,6,2],[3,6,4],[3,6,5],[3,6,7],[3,6,8],[3,6,9],[3,7,0],[3,7,1],[3,7,2],[3,7,4],
[3,7,5],[3,7,6],[3,7,8],[3,7,9],[3,8,0],[3,8,1],[3,8,2],[3,8,4],[3,8,5],[3,8,6],
[3,8,7],[3,8,9],[3,9,0],[3,9,1],[3,9,2],[3,9,4],[3,9,5],[3,9,6],[3,9,7],[3,9,8],
[4,0,1],[4,0,2],[4,0,3],[4,0,5],[4,0,6],[4,0,7],[4,0,8],[4,0,9],[4,1,0],[4,1,2],
[4,1,3],[4,1,5],[4,1,6],[4,1,7],[4,1,8],[4,1,9],[4,2,0],[4,2,1],[4,2,3],[4,2,5],
[4,2,6],[4,2,7],[4,2,8],[4,2,9],[4,3,0],[4,3,1],[4,3,2],[4,3,5],[4,3,6],[4,3,7],
[4,3,8],[4,3,9],[4,5,0],[4,5,1],[4,5,2],[4,5,3],[4,5,6],[4,5,7],[4,5,8],[4,5,9],
[4,6,0],[4,6,1],[4,6,2],[4,6,3],[4,6,5],[4,6,7],[4,6,8],[4,6,9],[4,7,0],[4,7,1],
[4,7,2],[4,7,3],[4,7,5],[4,7,6],[4,7,8],[4,7,9],[4,8,0],[4,8,1],[4,8,2],[4,8,3],
[4,8,5],[4,8,6],[4,8,7],[4,8,9],[4,9,0],[4,9,1],[4,9,2],[4,9,3],[4,9,5],[4,9,6],
[4,9,7],[4,9,8],[5,0,1],[5,0,2],[5,0,3],[5,0,4],[5,0,6],[5,0,7],[5,0,8],[5,0,9],
[5,1,0],[5,1,2],[5,1,3],[5,1,4],[5,1,6],[5,1,7],[5,1,8],[5,1,9],[5,2,0],[5,2,1],
[5,2,3],[5,2,4],[5,2,6],[5,2,7],[5,2,8],[5,2,9],[5,3,0],[5,3,1],[5,3,2],[5,3,4],
[5,3,6],[5,3,7],[5,3,8],[5,3,9],[5,4,0],[5,4,1],[5,4,2],[5,4,3],[5,4,6],[5,4,7],
[5,4,8],[5,4,9],[5,6,0],[5,6,1],[5,6,2],[5,6,3],[5,6,4],[5,6,7],[5,6,8],[5,6,9],
[5,7,0],[5,7,1],[5,7,2],[5,7,3],[5,7,4],[5,7,6],[5,7,8],[5,7,9],[5,8,0],[5,8,1],
[5,8,2],[5,8,3],[5,8,4],[5,8,6],[5,8,7],[5,8,9],[5,9,0],[5,9,1],[5,9,2],[5,9,3],
[5,9,4],[5,9,6],[5,9,7],[5,9,8],[6,0,1],[6,0,2],[6,0,3],[6,0,4],[6,0,5],[6,0,7],
[6,0,8],[6,0,9],[6,1,0],[6,1,2],[6,1,3],[6,1,4],[6,1,5],[6,1,7],[6,1,8],[6,1,9],
[6,2,0],[6,2,1],[6,2,3],[6,2,4],[6,2,5],[6,2,7],[6,2,8],[6,2,9],[6,3,0],[6,3,1],
[6,3,2],[6,3,4],[6,3,5],[6,3,7],[6,3,8],[6,3,9],[6,4,0],[6,4,1],[6,4,2],[6,4,3],
[6,4,5],[6,4,7],[6,4,8],[6,4,9],[6,5,0],[6,5,1],[6,5,2],[6,5,3],[6,5,4],[6,5,7],
[6,5,8],[6,5,9],[6,7,0],[6,7,1],[6,7,2],[6,7,3],[6,7,4],[6,7,5],[6,7,8],[6,7,9],
[6,8,0],[6,8,1],[6,8,2],[6,8,3],[6,8,4],[6,8,5],[6,8,7],[6,8,9],[6,9,0],[6,9,1],
[6,9,2],[6,9,3],[6,9,4],[6,9,5],[6,9,7],[6,9,8],[7,0,1],[7,0,2],[7,0,3],[7,0,4],
[7,0,5],[7,0,6],[7,0,8],[7,0,9],[7,1,0],[7,1,2],[7,1,3],[7,1,4],[7,1,5],[7,1,6],
[7,1,8],[7,1,9],[7,2,0],[7,2,1],[7,2,3],[7,2,4],[7,2,5],[7,2,6],[7,2,8],[7,2,9],
[7,3,0],[7,3,1],[7,3,2],[7,3,4],[7,3,5],[7,3,6],[7,3,8],[7,3,9],[7,4,0],[7,4,1],
[7,4,2],[7,4,3],[7,4,5],[7,4,6],[7,4,8],[7,4,9],[7,5,0],[7,5,1],[7,5,2],[7,5,3],
[7,5,4],[7,5,6],[7,5,8],[7,5,9],[7,6,0],[7,6,1],[7,6,2],[7,6,3],[7,6,4],[7,6,5],
[7,6,8],[7,6,9],[7,8,0],[7,8,1],[7,8,2],[7,8,3],[7,8,4],[7,8,5],[7,8,6],[7,8,9],
[7,9,0],[7,9,1],[7,9,2],[7,9,3],[7,9,4],[7,9,5],[7,9,6],[7,9,8],[8,0,1],[8,0,2],
[8,0,3],[8,0,4],[8,0,5],[8,0,6],[8,0,7],[8,0,9],[8,1,0],[8,1,2],[8,1,3],[8,1,4],
[8,1,5],[8,1,6],[8,1,7],[8,1,9],[8,2,0],[8,2,1],[8,2,3],[8,2,4],[8,2,5],[8,2,6],
[8,2,7],[8,2,9],[8,3,0],[8,3,1],[8,3,2],[8,3,4],[8,3,5],[8,3,6],[8,3,7],[8,3,9],
[8,4,0],[8,4,1],[8,4,2],[8,4,3],[8,4,5],[8,4,6],[8,4,7],[8,4,9],[8,5,0],[8,5,1],
[8,5,2],[8,5,3],[8,5,4],[8,5,6],[8,5,7],[8,5,9],[8,6,0],[8,6,1],[8,6,2],[8,6,3],
[8,6,4],[8,6,5],[8,6,7],[8,6,9],[8,7,0],[8,7,1],[8,7,2],[8,7,3],[8,7,4],[8,7,5],
[8,7,6],[8,7,9],[8,9,0],[8,9,1],[8,9,2],[8,9,3],[8,9,4],[8,9,5],[8,9,6],[8,9,7],
[9,0,1],[9,0,2],[9,0,3],[9,0,4],[9,0,5],[9,0,6],[9,0,7],[9,0,8],[9,1,0],[9,1,2],
[9,1,3],[9,1,4],[9,1,5],[9,1,6],[9,1,7],[9,1,8],[9,2,0],[9,2,1],[9,2,3],[9,2,4],
[9,2,5],[9,2,6],[9,2,7],[9,2,8],[9,3,0],[9,3,1],[9,3,2],[9,3,4],[9,3,5],[9,3,6],
[9,3,7],[9,3,8],[9,4,0],[9,4,1],[9,4,2],[9,4,3],[9,4,5],[9,4,6],[9,4,7],[9,4,8],
[9,5,0],[9,5,1],[9,5,2],[9,5,3],[9,5,4],[9,5,6],[9,5,7],[9,5,8],[9,6,0],[9,6,1],
[9,6,2],[9,6,3],[9,6,4],[9,6,5],[9,6,7],[9,6,8],[9,7,0],[9,7,1],[9,7,2],[9,7,3],
[9,7,4],[9,7,5],[9,7,6],[9,7,8],[9,8,0],[9,8,1],[9,8,2],[9,8,3],[9,8,4],[9,8,5],
[9,8,6],[9,8,7]];

//履歴の配列
var historychallenge = [];
var historyhit = [];

var index;
var selectednum;

function select_candidate_number(){
  //1回目
  if (count_com == 1){
    index = targetRandom((targetnumbers.length)-1);
    selectednum = targetnumbers[index];
    return selectednum;
  //2回目以降
  }else{
    while(true){
      index = targetRandom((targetnumbers.length)-1);
      selectednum = targetnumbers[index];

      if(historychallenge.includes(selectednum)){
        continue;
      }else{
        return selectednum;
      }
    }
  }
}

function answerCheck(table_number, target_number, H, B){
  var check_H = 0;
  var check_B = 0;

    for (var col = 0; col < 3; col++) {
        if (target_number[col] === table_number[col]) {
            check_H++;
        }
    }

    if (check_H !== H) {
        return false;
    }

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (i !== j && target_number[i] === table_number[j]) {
                check_B++;
            }
        }
    }

    if (check_B !== B) {
        return false;
    }

    return true;
}

function start(){
  //COMの数字を決める
  comsecret = comRandom();
  console.log("COMが決めた数字:"+comsecret.join(""));

  timerstart(20,'Player');

}



function playernumset(){
  timerstop();

  first_time = false;//最初かどうかの判定にfalse入れる

  playersecret = inputarray;
  player_view.innerHTML=playersecret.join("");//表示

  //COM考え中
  comthinking();

  timerstart(60,'Com');

  setTimeout(() => {
    comturn();
  }, 2500);


}


var count_com = 0;//カウント

function comturn(){
  timerstop();

  count_com++;//カウントアップ

  console.log("COM当て:"+count_com+"回目 候補数:"+targetnumbers.length);
  console.log(targetnumbers);

  var comyoso = [];
  comyoso = select_candidate_number();//数字予想（ランダムに候補から選ぶ）

  //hitblow判定処理
  var hit = 0;
  var blow = 0;

  for (var i = 0; i < 3; i++){
    if(playersecret[i]===comyoso[i]){
      hit++;
    }else if(playersecret.includes(comyoso[i])){
      blow++;
    }
  }


  //履歴配列に予想を追加
  historychallenge.push(comyoso);
  historyhit.push(hit);

  //表示
  com_table.rows[count_com].cells[0].innerHTML = comyoso.join("");
  com_table.rows[count_com].cells[1].innerHTML = hit+" "+blow;


  //候補の再生成をする
  var newtargetnumbers = [];
  for (var i = 0; i < targetnumbers.length; i++) {
      if (answerCheck(targetnumbers[i], comyoso, hit, blow)) {
          // 新しい候補の数を追加
          newtargetnumbers.push(targetnumbers[i]);
      }
  }
  targetnumbers = newtargetnumbers;//更新


  playerthinking();

  timerstart(60,'Player');

}


var count_player = 0;//カウント

function playerturn(){
    timerstop();

    count_player++;//カウントアップ

    //hitblow判定処理
    var hit = 0;
    var blow = 0;
    
    for (var i = 0; i < 3; i++){//3回ループ
      if(comsecret[i]===inputarray[i]){
        hit++;
      }else if(comsecret.includes(inputarray[i])){
        blow++;
      }
    }
    
    //table表示
    player_table.rows[count_player].cells[0].innerHTML = inputarray.join("");
    player_table.rows[count_player].cells[1].innerHTML = hit+" "+blow;
    

  
    //勝敗判定
    if(historyhit[(count_com)-1] == 3 && hit>=3){
      draw();
      return;
    }else if(historyhit[(count_com)-1] == 3 && hit!=3){
      lose();
      return;
    }else if (hit>=3){
      win();
      return;
    }else if (count_player==10 && historyhit[(count_com)-1] == 3 && hit!=3){
      lose();
      return;
    }else if (count_player==10 && hit!=3){
      draw();
      return;
    }else if (count_player==10){
      lose();
      return;
    }else{
      console.log("続行");
    }


    //COM考え中
    comthinking();

    timerstart(60,'Com');

    setTimeout(() => {
      comturn();
    }, 2500);

}


  //エンド勝ち
  function win(){
    timerstop();
    com_view.innerHTML=comsecret.join("");
    message.classList.remove(message.classList);
    message.classList.add("msginactive");
    end.classList.add("win");
    keydisabled();
  }
      

  //エンド負け
  function lose(){
    timerstop();
    com_view.innerHTML=comsecret.join("");
    message.classList.remove(message.classList);
    message.classList.add("msginactive");
    end.classList.add("lose");
    keydisabled();
  }

  //エンド引き分け
  function draw(){
    timerstop();
    com_view.innerHTML=comsecret.join("");
    message.classList.remove(message.classList);
    message.classList.add("msginactive");
    end.classList.add("draw");
    keydisabled();
  }



//comの数字を生成
function comRandom() {
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var result = [];
  
    for (var i = 0; i < 3; i++){//3回ループ
        var length = array.length;//array配列の長さ
        var rand = Math.floor(Math.random()*length);//小数点以下切り捨てarray配列の長さ分の乱数
        result.push(array[rand]);//result配列に入れる
        array.splice(rand,1);//array配列から取り出されたのは削除
    }
    return result;
  
}


//0~arraylenのランダム数字生成
function targetRandom(arraylen) {
  var random = Math.floor( Math.random() * (arraylen + 1 - 0) ) + 0;
  return random;
}

//タイマー
var timer = document.getElementById("time");
var countdown;
var counttime;

function timerstart(settime,playercom){
  timer.innerHTML = settime;
  counttime = settime;
  countdown = setInterval(function() {
    counttime--;
    timer.innerHTML = counttime;

    if(counttime <= 0){            
      switch(playercom){
        case "Player":
          lose();
          break;
        case "Com":
          win();
          break;
      }

    }
  },1000);
        
}

function timerstop(){
  clearInterval(countdown);
}

function playerthinking(){
  keyenabled();
  message.classList.remove(message.className);
  message.classList.add("msg1");
}

function comthinking(){
  keydisabled();
  message.classList.remove(message.className);
  message.classList.add("msg2");
}

function keyenabled(){
  buttons.classList.remove("buttons-disabled");
  buttons.classList.add("buttons-enabled");
  key_enabled = true;//key有効
}

function keydisabled(){
  buttons.classList.remove("buttons-enabled");
  buttons.classList.add("buttons-disabled");
  key_enabled = false;//key無効
}