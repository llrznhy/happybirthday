
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "哈喽呀",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "亲爱的嘻嘻同学",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "你的第二个生日！",
        "这一年多年来，我见过你",
        "搞怪的样子",
        "可爱的样子",
        "生气的样子",
        "开心的样子",
        "都是我喜欢的样子",
        "虽然今年生日没有在你身边",
        "也要好好的哦",
        "要吃好好的",
        "好好睡觉",
        "坚持运动哦",
        "爱你哦",
        "生日快乐~~",
        "好事一定发生！"
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "哈喽呀": "./imgs/songxinxin.jpeg",
        "亲爱的嘻嘻同学": "./imgs/xixi.jpg",
        "今天是你的生日": "./imgs/birthday.jpg",
        "这是我们在一起的": "./imgs/tietie.jpg",
        "你的第二个生日！": "./imgs/shengri.jpg",
        "这一年多年来，我见过你": "./imgs/kaixin.jpg",
        "搞怪的样子": "./imgs/gaoguai.jpg",
        "可爱的样子": "./imgs/keai.jpg",
        "生气的样子": "./imgs/shengqi.jpg",
        "开心的样子":"./imgs/gaoxing.jpg",
        "都是我喜欢的样子": "./imgs/yangzi.jpeg",
        "虽然今年生日没有在你身边": "./imgs/shangxin.jpg",
        "也要好好的哦":"./imgs/chuo.gif",
        "要吃好好的": "./imgs/chifan.jpg",
        "好好睡觉":"./imgs/shuijiao.gif",
        "坚持运动哦":"./imgs/yundong.jpg",
        "爱你哦":"./imgs/aini.jpg",
        "生日快乐~~": "./imgs/shenglikuaile.jpg",
        "好事一定发生！":"./imgs/haoshi.jpg"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我点我",
        play: "来点音乐",
        bannar_coming: "搞点颜色",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕呢",
        light_candle: "蜡烛呢",
        wish_message: "生日快乐～",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: '爱你的老腊肉'
};
