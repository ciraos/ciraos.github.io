/* custom.js */

//! 
$.ajax({
    type: 'get',
    url: 'https://apis.map.qq.com/ws/location/v1/ip', // 'https://api.qjqq.cn/api/district', // 'https://apis.map.qq.com/ws/location/v1/ip',
    data: {
        key: 'PWQBZ-ASZCQ-N6J5P-4USCK-NUTF7-QKB4Z',
        output: 'jsonp',
    },
    dataType: 'jsonp',
    success: function (res) {
        ipLocation = res;
    }
})
function getDistance(e1, n1, e2, n2) {
    const R = 6371
    const { sin, cos, asin, PI, hypot } = Math
    let getPoint = (e, n) => {
        e *= PI / 180
        n *= PI / 180
        return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
    }
    let a = getPoint(e1, n1)
    let b = getPoint(e2, n2)
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
    let r = asin(c / 2) * 2 * R
    return Math.round(r);
}
function showWelcome() {
    let dist = getDistance(117.015835, 32.654785, ipLocation.result.location.lng, ipLocation.result.location.lat); //这里记得换成自己的经纬度
    let pos = ipLocation.result.ad_info.nation;
    let ip;
    let posdesc;
    switch (ipLocation.result.ad_info.nation) {
        case "日本":
            posdesc = "よろしく，一起去看樱花吗";
            break;
        case "美国":
            posdesc = "Let us live in peace!";
            break;
        case "英国":
            posdesc = "想同你一起夜乘伦敦眼";
            break;
        case "俄罗斯":
            posdesc = "干了这瓶伏特加！";
            break;
        case "法国":
            posdesc = "C'est La Vie";
            break;
        case "德国":
            posdesc = "Die Zeit verging im Fluge.";
            break;
        case "澳大利亚":
            posdesc = "一起去大堡礁吧！";
            break;
        case "加拿大":
            posdesc = "拾起一片枫叶赠予你";
            break;
        case "中国":
            pos = ipLocation.result.ad_info.province + " " + ipLocation.result.ad_info.city + " " + ipLocation.result.ad_info.district;
            ip = ipLocation.result.ip;
            switch (ipLocation.result.ad_info.province) {
                case "北京市":
                    posdesc = "北——京——欢迎你~~~";
                    break;
                case "天津市":
                    posdesc = "讲段相声吧";
                    break;
                case "河北省":
                    posdesc = "山势巍巍成壁垒，天下雄关铁马金戈由此向，无限江山";
                    break;
                case "山西省":
                    posdesc = "展开坐具长三尺，已占山河五百余";
                    break;
                case "内蒙古自治区":
                    posdesc = "天苍苍，野茫茫，风吹草低见牛羊";
                    break;
                case "辽宁省":
                    posdesc = "我想吃烤鸡架！";
                    break;
                case "吉林省":
                    posdesc = "状元阁就是东北烧烤之王";
                    break;
                case "黑龙江省":
                    posdesc = "很喜欢哈尔滨大剧院";
                    break;
                case "上海市":
                    posdesc = "众所周知，中国只有两个城市";
                    break;
                case "江苏省":
                    switch (ipLocation.result.ad_info.city) {
                        case "南京市":
                            posdesc = "这是我挺想去的城市啦";
                            break;
                        case "苏州市":
                            posdesc = "上有天堂，下有苏杭";
                            break;
                        default:
                            posdesc = "散装是必须要散装的";
                            break;
                    }
                    break;
                case "浙江省":
                    posdesc = "东风渐绿西湖柳，雁已还人未南归";
                    break;
                case "河南省":
                    switch (ipLocation.result.ad_info.city) {
                        case "郑州市":
                            posdesc = "豫州之域，天地之中";
                            break;
                        case "南阳市":
                            posdesc = "臣本布衣，躬耕于南阳此南阳非彼南阳！";
                            break;
                        case "驻马店市":
                            posdesc = "峰峰有奇石，石石挟仙气嵖岈山的花很美哦！";
                            break;
                        case "开封市":
                            posdesc = "刚正不阿包青天";
                            break;
                        case "洛阳市":
                            posdesc = "洛阳牡丹甲天下";
                            break;
                        default:
                            posdesc = "可否带我品尝河南烩面啦？";
                            break;
                    }
                    break;
                case "安徽省":
                    switch (ipLocation.result.ad_info.city) {
                        case "淮南市":
                            posdesc = "来碗淮南牛肉汤！"
                            break;
                        case "黄山市":
                            posdesc = "黄山归来不看岳，五月归来不看山。";
                            break;
                        case "芜湖市":
                            posdesc = "蚌埠住了，芜湖起飞";
                            break;
                    }
                    break;
                case "福建省":
                    posdesc = "井邑白云间，岩城远带山";
                    break;
                case "江西省":
                    posdesc = "落霞与孤鹜齐飞，秋水共长天一色";
                    break;
                case "山东省":
                    posdesc = "遥望齐州九点烟，一泓海水杯中泻";
                    break;
                case "湖北省":
                    switch (ipLocation.result.ad_info.city) {
                        case "黄冈市":
                            posdesc = "红安将军县！辈出将才！";
                            break;
                        default:
                            posdesc = "来碗热干面~";
                            break;
                    }
                    break;
                case "湖南省":
                    posdesc = "74751，长沙斯塔克";
                    break;
                case "广东省":
                    switch (ipLocation.result.ad_info.city) {
                        case "广州市":
                            posdesc = "看小蛮腰，喝早茶了嘛~";
                            break;
                        case "深圳市":
                            posdesc = "今天你逛商场了嘛~";
                            break;
                        case "阳江市":
                            posdesc = "阳春合水！博主家乡~ 欢迎来玩~";
                            break;
                        default:
                            posdesc = "来两斤福建人~";
                            break;
                    }
                    break;
                case "广西壮族自治区":
                    posdesc = "桂林山水甲天下";
                    break;
                case "海南省":
                    posdesc = "朝观日出逐白浪，夕看云起收霞光";
                    break;
                case "四川省":
                    posdesc = "康康川妹子";
                    break;
                case "贵州省":
                    posdesc = "茅台，学生，再塞200";
                    break;
                case "云南省":
                    posdesc = "玉龙飞舞云缠绕，万仞冰川直耸天";
                    break;
                case "西藏自治区":
                    posdesc = "躺在茫茫草原上，仰望蓝天";
                    break;
                case "陕西省":
                    posdesc = "来份臊子面加馍";
                    break;
                case "甘肃省":
                    posdesc = "羌笛何须怨杨柳，春风不度玉门关";
                    break;
                case "青海省":
                    posdesc = "牛肉干和老酸奶都好好吃";
                    break;
                case "宁夏回族自治区":
                    posdesc = "大漠孤烟直，长河落日圆";
                    break;
                case "新疆维吾尔自治区":
                    posdesc = "驼铃古道丝绸路，胡马犹闻唐汉风";
                    break;
                case "台湾省":
                    posdesc = "我在这头，大陆在那头";
                    break;
                case "香港特别行政区":
                    posdesc = "永定贼有残留地鬼嚎，迎击光非岁玉";
                    break;
                case "澳门特别行政区":
                    posdesc = "性感荷官，在线发牌";
                    break;
                default:
                    posdesc = "带我去你的城市逛逛吧！";
                    break;
            }
            break;
        default:
            posdesc = "带我去你的国家逛逛吧";
            break;
    }
    let timeChange;
    let date = new Date();
    if (date.getHours() >= 5 && date.getHours() < 11) timeChange = "<span>🌤️ 早上好，一日之计在于晨</span>";
    else if (date.getHours() >= 11 && date.getHours() < 13) timeChange = "<span>☀️ 中午好，记得午休喔~</span>";
    else if (date.getHours() >= 13 && date.getHours() < 17) timeChange = "<span>🕞 下午好，饮茶先啦！</span>";
    else if (date.getHours() >= 17 && date.getHours() < 19) timeChange = "<span>🚶‍♂️ 即将下班，记得按时吃饭~</span>";
    else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = "<span>🌙 晚上好，夜生活嗨起来！</span>";
    else timeChange = "夜深了，早点休息，少熬夜";
    if (ip.includes(":")) {
        ip = "<br>好复杂，咱看不懂~(ipv6)";
    }
    try {
        document.getElementById("welcome-info").innerHTML =
            `欢迎来自 <b><span style="color: var(--kouseki-ip-color);font-size: var(--kouseki-gl-size)">${pos}</span></b> 的小友💖<br>${posdesc}🍂<br>当前位置距博主约 <b><span style="color: var(--kouseki-ip-color)">${dist}</span></b> 公里！<br>您的IP地址为：<b><span>${ip}</span></b><br>${timeChange} <br>`;
    } catch (err) {
        console.log("Pjax无法获取元素")
    }
}
window.onload = showWelcome;
//document.addEventListener('pjax:complete', showWelcome);

//! 首页头图加载优化
class ProgressiveLoad {
    constructor(smallSrc, largeSrc) {
        this.smallSrc = smallSrc;
        this.largeSrc = largeSrc;
        this.initTpl();
    }
    /**
     * @description 生成ui模板
     */
    initTpl() {
        this.container = document.createElement('div');
        this.smallStage = document.createElement('div');
        this.largeStage = document.createElement('div');
        this.smallImg = new Image();
        this.largeImg = new Image();
        this.container.className = 'pl-container';
        this.smallStage.className = 'pl-img pl-blur';
        this.largeStage.className = 'pl-img';
        this.container.appendChild(this.smallStage);
        this.container.appendChild(this.largeStage);
        this.smallImg.onload = this._onSmallLoaded.bind(this);
        this.largeImg.onload = this._onLargeLoaded.bind(this);
    }
    /**
     * @description 加载背景
     */
    progressiveLoad() {
        this.smallImg.src = this.smallSrc;
        this.largeImg.src = this.largeSrc;
    }
    /**
     * @description 大图加载完成
     */
    _onLargeLoaded() {
        this.largeStage.classList.add('pl-visible');
        this.largeStage.style.backgroundImage = `url('${this.largeSrc}')`;
    }
    /**
     * @description 小图加载完成
     */
    _onSmallLoaded() {
        this.smallStage.classList.add('pl-visible');
        this.smallStage.style.backgroundImage = `url('${this.smallSrc}')`;
    }
}
const executeLoad = (config, target) => {
    console.log('执行渐进背景替换');
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const loader = new ProgressiveLoad(
        isMobile ? config.mobileSmallSrc : config.smallSrc,
        isMobile ? config.mobileLargeSrc : config.largeSrc
    );
    // 和背景图颜色保持一致，防止高斯模糊后差异较大
    if (target.children[0]) {
        target.insertBefore(loader.container, target.children[0]);
    }
    loader.progressiveLoad();
};
const config = {
    smallSrc: 'https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/erciyuan/ganyu4.avif', // 小图链接 尽可能配置小于100k的图片
    largeSrc: 'https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/erciyuan/ganyu5.avif', // 大图链接 最终显示的图片
    mobileSmallSrc: 'https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/erciyuan/ganyu7.avif', // 手机端小图链接 尽可能配置小于100k的图片
    mobileLargeSrc: 'https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/erciyuan/ganyu3.avif', // 手机端大图链接 最终显示的图片
    enableRoutes: ['/'],
};
function initProgressiveLoad(config) {
    const target = document.getElementById('page-header');
    if (target && target.classList.contains('full_page')) {
        executeLoad(config, target);
    }
}
function onPJAXComplete(config) {
    const target = document.getElementById('page-header');
    if (target && target.classList.contains('full_page')) {
        initProgressiveLoad(config);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    initProgressiveLoad(config);
});
document.addEventListener("pjax:complete", function () {
    onPJAXComplete(config);
});

//! AVIF
document.addEventListener('DOMContentLoaded', function () {
    // 从页面中提取第一个AVIF图片链接
    function getFirstAvifUrl() {
        const images = document.querySelectorAll('img');
        for (let img of images) {
            if (img.src.endsWith('.avif')) {
                return img.src;
            }
        }
        return null;
    }
    // 检测浏览器是否支持AVIF格式
    function supportsAvif(url) {
        return new Promise(resolve => {
            const avif = new Image();
            avif.src = url;
            avif.onload = () => {
                console.log("AVIF supported");
                resolve(true);
            };
            avif.onerror = () => {
                console.log("AVIF not supported");
                resolve(false);
            };
        });
    }
    // 替换图片URL中的avif为webp
    function replaceAvifWithWebp() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.src.endsWith('.avif')) {
                console.log("Replacing AVIF with WebP for image:", img.src);
                img.src = img.src.replace('.avif', '.webp');
            }
        });
    }
    const firstAvifUrl = getFirstAvifUrl(); // 获取第一个AVIF图片链接
    if (firstAvifUrl) {
        // 使用第一个AVIF图片链接进行检测
        supportsAvif(firstAvifUrl).then(supported => {
            if (!supported) {
                replaceAvifWithWebp();
            } else {
                console.log("AVIF images will be used.");
            }
        });
    } else {
        console.log("No AVIF images found on the page.");
    }
});
