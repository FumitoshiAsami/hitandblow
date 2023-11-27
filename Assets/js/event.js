var ttl = document.getElementById("ttl");
var main = document.getElementById("main");
var end = document.getElementById("end");
var clrbutton = document.getElementById("clr-btn");
var bsbutton = document.getElementById("bs-btn");
var okbutton = document.getElementById("ok-btn");
var startbutton = document.getElementById("start-btn");
var howtobutton = document.getElementById("howto-btn");
var howto = document.getElementById("howtoplay");
var closearea = document.getElementById("close-area");



//スタートボタンイベント
startbutton.addEventListener('click', function() {
    ttl.classList.remove("active");
    ttl.classList.add("inactive");
    main.classList.remove("inactive");
    main.classList.add("active");
    start();
}, false);

//遊び方ボタンイベント
howtobutton.addEventListener('click', function() {
    howto.classList.remove("howtoplay-inactive");
    howto.classList.add("howtoplay-active");
}, false);

closearea.addEventListener('click', function() {
    howto.classList.remove("howtoplay-active");
    howto.classList.add("howtoplay-inactive");
}, false);


//メイン
var inputarray =[];//入力用の配列

var msg = document.getElementById("msg");
var view = document.getElementById("numview");

var key_enabled = true;//キーが有効かどうかの判定用


//keypadイベント
var key = document.querySelectorAll(".key");
key.forEach((value) => {
  value.addEventListener("click", function(e) {

    if(key_enabled){//trueだったら
        var input= Number(e.target.innerHTML);//数値に変換
        validation(input);
    }

});
});

//keybordイベント
document.addEventListener('keydown', function(e) {
    if(key_enabled){//trueだったら
        switch(e.key){
            case "0":
                validation(0);
                break;
            case "1":
                validation(1);
                break;
            case "2":
                validation(2);
                break;
            case "3":
                validation(3);
                break;
            case "4":
                validation(4);
                break;
            case "5":
                validation(5);
                break;
            case "6":
                validation(6);
                break;
            case "7":
                validation(7);
                break;
            case "8":
                validation(8);
                break;
            case "9":
                validation(9);
                break;
            case "Backspace":
                inputbs();
                break;
            case "Enter":
                okbtn();
                break;
            default:
                return;
        }
    }
});


//バリデーションチェック
function validation(inputkey){
    if(inputarray.length===3){
        msgshow("入力できるのは3桁までです");
    }else if(inputarray.includes(inputkey)===true){
        msgshow("既に入力済です");
    }else{
        inputarray.push(inputkey);//配列に入れる
        view.innerHTML = inputarray.join("");
    }
}


function inputclear(){
    inputarray =[];//配列リセット
    view.innerHTML = inputarray.join("");
}

function inputbs(){
    inputarray.pop();
    view.innerHTML = inputarray.join("");
}

var first_time = true;//最初からどうかの判定用

function okbtn(){
    if(key_enabled){//trueだったら
        switch(first_time){
            case true:
                if(inputarray.length == 3 ){//3桁だったら
                    playernumset();
                    inputclear();
                }else{//無効
                    msgshow("3桁入力してください");
                }
                break;
            default:
                if(inputarray.length == 3 ){//3桁だったら
                    playerturn();
                    inputclear();   
                }else{//無効
                msgshow("3桁入力してください");
                }
        }
    }
}



end.addEventListener('click', function() {
    window.location.reload();
}, false);

clrbutton.addEventListener('click', function() {
    inputclear();
}, false);

bsbutton.addEventListener('click', function() {
    inputbs();
}, false);

okbutton.addEventListener('click', function() {
    okbtn();
}, false);

function msgshow(msgcontent){
    msg.innerHTML = msgcontent;
    setTimeout(() => {
        msg.innerHTML = "";
      }, 2000);
}