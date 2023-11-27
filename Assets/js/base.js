// ロード・リサイズ時に画面最適化

var base = document.getElementById("base");

function Optimize(){
    var height = window.innerHeight;
    var fix_height =  height / 800;
    base.style.transform = "scale("+fix_height+") translateX(-50%)";
}

window.addEventListener('load', Optimize);
window.addEventListener('resize', Optimize);

//右クリック禁止
document.oncontextmenu = function(){return false;}
//選択禁止
document.onselectstart = function(){return false;}
//ダブルタップ拡大禁止
document.addEventListener("dblclick", function(e){ e.preventDefault();}, { passive: false });




