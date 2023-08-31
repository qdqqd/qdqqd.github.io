var source;
var prefix = "- From: 『";
var prefix2 = "』";
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
if (this.readyState === 4 && this.status === 200) {
var data = JSON.parse(this.responseText);
try {
source = prefix + data.source + prefix2 ;
} catch (e) {};
document.getElementById("source").textContent = source;
var typed = new Typed("#sentence", {
strings: [data.content],
startDelay: 300,
typeSpeed: 100,
loop: true,
backSpeed: 50,
backDelay: 5000,
showCursor: false,
onComplete: function(self) {
var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function() {
if (this.readyState === 4 && this.status === 200) {
var data = JSON.parse(this.responseText);
try {
source = prefix + data.source + prefix2;
} catch (e) {};
self.strings[0] = data.content;
}
};
xhr2.open("GET", "https://i.qdqqd.com/?action=yiyan", true);
xhr2.send();
},
onLastStringBackspaced: function(self) {
document.getElementById("source").textContent = source;
}
});
}
};
xhr.open("GET", "https://i.qdqqd.com/?action=yiyan", true);
xhr.send();

var OriginTitile=document.title,titleTime;document.addEventListener("visibilitychange",function(){if(document.hidden){document.title="喂(ó﹏ò｡) 快回来！";clearTimeout(titleTime)}else{document.title="(/≧▽≦/) 咦！回来了！";titleTime=setTimeout(function(){document.title=OriginTitile},1000)}});

console.log("\n %c 暗号:qdqqd %c by 柯乐 | qdqqd.com ","color:#444;background:#eee;padding:5px 0;","color:#F8F8FF;background:#F4A7B9;padding:5px 0;");

(function() {
        window.onclick = function(event) {
            var heart = document.createElement("b");
            heart.onselectstart = new Function('event.returnValue=false');
            document.body.appendChild(heart).innerHTML = "❤";
            heart.style.cssText = "position: fixed;left:-100%;";
            var f = 16, // 字体大小
                x = event.clientX - f / 2, // 横坐标
                y = event.clientY - f, // 纵坐标
                c = randomColor(), // 随机颜色
                a = 1, // 透明度
                s = 1.2; // 放大缩小
            var timer = setInterval(function() {
                if (a <= 0) {
                    document.body.removeChild(heart);
                    clearInterval(timer);
                } else {
                    heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");";
                    y--;
                    a -= 0.016;
                    s += 0.002;
                }
            }, 12)
        }
        // 随机颜色
        function randomColor() {

            return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";

        }
    }());