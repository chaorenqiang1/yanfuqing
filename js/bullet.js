// 函数用于创建新的弹幕
function createDanmaku(text) {
    // Create a new danmaku element
    var danmaku = document.createElement("div");
    danmaku.classList.add("danmaku");
    danmaku.innerText = text;

    // 设置danmaku位置到容器的右边缘
    danmaku.style.right = "0";

    // 设置danmaku顶部位置为0到容器高度之间的随机值
    var container = document.querySelector(".danmaku-container");
    danmaku.style.top = Math.floor(Math.random() * container.offsetHeight) + "px";

    // 添加danmaku到容器
    container.appendChild(danmaku);

    // 将danmaku动画到容器的左边缘
    var animationDuration = 10000; // 10 秒
    var danmakuWidth = danmaku.offsetWidth;
    var containerWidth = container.offsetWidth;
    var distance = containerWidth + danmakuWidth;
    var duration = (distance / containerWidth) * animationDuration;
    danmaku.style.transition = "transform " + duration + "ms linear";
    danmaku.style.transform = "translateX(-" + distance + "px)";

    // 动画完成后从容器中移除弹幕
    setTimeout(function() {
        danmaku.remove();
    }, duration);
}

// 函数生成随机弹幕文本
function generateDanmakuText() {
    var texts = ["颜福庆旧居，英式乡村风情浓", "医学教育家颜福庆的故居", " 历史悠久，建筑风格独特", "感受武康路的风情万种", "探访医学名人的历史足迹", "英伦风住宅，拍照好地方", "一座充满故事的花园洋房","了解中国医学教育发展史","红砖烟囱，独具特色","一座充满故事的美丽建筑","颜福庆旧居，感受历史底蕴","感受历史建筑的韵味","漫步英式花园，享受时光","感受西医在中国的起源","走进颜福庆的世界，感受医学情怀","了解上海医科大学的前世今生"];
    var index = Math.floor(Math.random() * texts.length);
    return texts[index];
}

// 每2秒生成一个新的弹幕
setInterval(function() {
    var text = generateDanmakuText();
    createDanmaku(text);
}, 1000);