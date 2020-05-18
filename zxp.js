// pages/home/home.js
let shopInfo = [{
  shopId:"19001",
  shopName:"Apple Store 官方旗舰店",
  shopImg:"https://g-search1.alicdn.com/img/bao/uploaded/i4//c4/13/TB1etCbSpXXXXcsXXXXSutbFXXX.jpg_140x140Q90.jpg_.webp",
  shopMes:"主营Apple-iPhone手机-Mac电脑",
  shopType:"",
  shopAddress:"山东省烟台市莱山区莱山科技创业大厦",
  special:"",
  sup:""
},
{
  shopId: "19002",
  shopName: "ALIENWARE外星人旗舰店",
  shopImg: "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1ivo_JpXXXXXBXpXXwu0bFXXX.png",
  shopMes: "主营台式电脑，笔记本电脑",
  shopType: "",
  shopAddress: "山东省烟台市莱山区莱山科技创业大厦",
  special: "",
  sup: ""
},
{
  shopId: "19003",
  shopName: "thunderobot旗舰店",
  shopImg: "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1NKIINNjaK1RjSZKzXXXVwXXa",
  shopMes: "雷神官方旗舰店，主营笔记本电脑，配件",
  shopType: "",
  shopAddress: "山东省烟台市莱山区莱山科技创业大厦",
  special: "",
  sup: ""
},
{
  shopId: "19004",
  shopName: "华为官方旗舰店",
  shopImg: "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1Z.mzyMmTBuNjy1XbXXaMrVXa",
  shopMes: "华为官方旗舰店，主营手机，笔记本电脑，配件等",
  shopType: "",
  shopAddress: "山东省烟台市莱山区莱山科技创业大厦",
  special: "",
  sup: ""
},
{
  shopId: "19005",
  shopName: "戴尔官方旗舰店",
  shopImg: "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1nE3FN9zqK1RjSZFHXXb3CpXa",
  shopMes: "戴尔官方旗舰店，主营笔记本电脑，台式电脑等",
  shopType: "",
  shopAddress: "山东省烟台市莱山区莱山科技创业大厦",
  special: "",
  sup: ""
},
{
  shopId: "19006",
  shopName: "machenike官方旗舰店",
  shopImg: "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1ethuh_nI8KJjSszgXXc8ApXa",
  shopMes: "机械师官方旗舰店，主营笔记本电脑，外设等",
  shopType: "",
  shopAddress: "山东省烟台市莱山区莱山科技创业大厦",
  special: "",
  sup: ""
},
{
  shopId: "19007",
  shopName: "联想官方旗舰店",
  shopImg: "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1QGlkSVXXXXcLXpXXXXXXXXXX",
  shopMes: "联想官方旗舰店，主营笔记本、台式电脑等",
  shopType: "",
  shopAddress: "山东省烟台市莱山区莱山科技创业大厦",
  special: "",
  sup: ""
},
{
  shopId: "19008",
  shopName: "三星官方旗舰店",
  shopImg: "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1lsMhLFXXXXb1XFXXSutbFXXX.jpg",
  shopMes: "三星官方旗舰店，主营手机，平板电脑等",
  shopType: "",
  shopAddress: "山东省烟台市莱山区莱山科技创业大厦",
  special: "",
  sup: ""
},
{
  shopId: "19009",
  shopName: "beats官方旗舰店",
  shopImg: "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1_oynKpXXXXaFXFXXSutbFXXX.jpg",
  shopMes: "beats官方旗舰店，主营耳机等",
  shopType: "",
  shopAddress: "山东省烟台市莱山区莱山科技创业大厦",
  special: "",
  sup: ""
},
{
  shopId: "19010",
  shopName: "罗技官方旗舰店",
  shopImg: "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1mibJKXXXXXaiXFXXSutbFXXX.jpg",
  shopMes: "罗技官方旗舰店，主营鼠标等",
  shopType: "",
  shopAddress: "山东省烟台市莱山区莱山科技创业大厦",
  special: "",
  sup: ""
}
]
let goodsInfo = {
  "19001":[
    {
      goodsId:"19001iphone11",
      goodsName:"iphone 11",
      goodsImg:[
        "https://img.alicdn.com/imgextra/i1/1917047079/O1CN013S2ciR22AEKHvEaig_!!1917047079.png_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i3/1917047079/O1CN014v7P7f22AEJ80sYzJ_!!2-item_pic.png_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/1917047079/O1CN01tf2B5s22AEJ9gGpzX_!!2-item_pic.png_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i4/1917047079/O1CN01RDOEez22AEKLECYNL_!!2-item_pic.png_430x430q90.jpg"
      ],
      goodsMesImg:[
        "http://inews.gtimg.com/newsapp_bt/0/10932134544/1000.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=173777066,3935746623&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1995190994,443857338&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1962949852,3059852265&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1201929416,3035952645&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2744741440,868681009&fm=11&gp=0.jpg"
      ],
      goodsMes:"这是一款来自于未来的Iphone",
      goodsStock:200,
      goodsNum:0,
      goodsPrice:5199,
      sepcial:"",
      sup:""
    },
    {
      goodsId: "19001iphone11pro",
      goodsName: "iphone 11 Pro",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i4/1917047079/O1CN01BK2sFK22AEKMmfMgb_!!1917047079.png_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i4/1917047079/O1CN01hvXoXX22AEJ6Cz0yZ_!!2-item_pic.png_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/1917047079/O1CN010BukBD22AEJC4OIsb_!!2-item_pic.png_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i4/1917047079/O1CN018q9fgv22AEJ8QuU25_!!2-item_pic.png_430x430q90.jpg"
      ],
      goodsMesImg: [
        "http://5b0988e595225.cdn.sohucs.com/images/20190913/2dbabf961b1d45668671088df6911d57.jpeg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1964691593,3933671846&fm=11&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1707452120,997025639&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2025842170,4132292282&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3278021159,672649377&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3755193193,1353284749&fm=26&gp=0.jpg"
      ],
      goodsMes: "这是一款很好用的Iphone",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 7199,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19001macbookair",
      goodsName: "MacBook Air",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i3/1917047079/O1CN01GZEBGn22AEJxzgHmL_!!1917047079.png_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i4/1917047079/O1CN01W9FJvQ22AEICk2lcP_!!1917047079.jpeg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i3/1917047079/O1CN011T51EZ22AEIEdH5qE_!!1917047079.jpeg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/1917047079/O1CN01HmoFQb22AEIDV1GrS_!!1917047079.jpeg_430x430q90.jpg"
      ],
      goodsMesImg: [
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2638680532,4211737311&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2372202843,2441789258&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2824055596,283370836&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=702812647,3596286477&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2583146527,35864477&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3358257893,591506104&fm=26&gp=0.jpg"
      ],
      goodsMes: "这是一款很好用的MacBook",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 12199,
      sepcial: "",
      sup: ""
    }
  ],
  "19002": [
    {
      goodsId: "19002awA51M",
      goodsName: "AlienWare A51M",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i1/2510050218/O1CN01zLYqVt1DTsuMIQmnz_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/2510050218/O1CN01zLYqVt1DTsuMIQmnz_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/2510050218/O1CN01klLOZw1DTsurzdkhM_!!2510050218.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i4/2510050218/O1CN01GNv4qo1DTsuslaL1S_!!2510050218.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
        "http://s1.dgtle.com/forum/201902/26/145636zce7ksp07bb8bysj.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4131972449,507193252&fm=26&gp=0.jpg",
        "http://2f.zol-img.com.cn/product/195_400x300/909/ceqfbK3eE7mY.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1203406481,4115205396&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4227901393,2928937601&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2674954553,3265030202&fm=26&gp=0.jpg"
      ],
      goodsMes: "外星人alienware A51M 17.3英寸2080独显144hz游戏笔记本电脑1969 ",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 50199,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19002awm17",
      goodsName: "AlienWare M17",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i2/2510050218/O1CN01HsF3fF1DTsuriWws8_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/2510050218/O1CN01hlrE1z1DTsu6abqf9_!!2510050218.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/2510050218/O1CN01mRrkST1DTsu0cL48O_!!2510050218.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i3/2510050218/O1CN01aK3P5O1DTssyqlLAE_!!2510050218.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=81485046,3390167942&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=543518672,2865485311&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2908827581,3917132538&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=678801040,3786187036&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=891691182,595696766&fm=11&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=940755639,3680869848&fm=26&gp=0.jpg"
      ],
      goodsMes: "外星人alienware全新m17 R2 RTX2060独显144Hz游戏笔记本电脑4737 ",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 19999,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19002awm15",
      goodsName: "AlienWare M15",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i1/2510050218/O1CN01BS4e1K1DTstWGCvBF_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/2510050218/O1CN01TWY5fl1DTstVvwZp5_!!2510050218.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/2510050218/O1CN01iiKY4C1DTstUBwmIJ_!!2510050218.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i3/2510050218/O1CN017pLiNe1DTstOeFFWX_!!2510050218.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
          "http://i0.hdslb.com/bfs/archive/ad316ba2d35c9c9ed99eaedf45fce486c02d77ab.jpg",
          "http://shandianruanjian.com/wp-content/uploads/2018/10/610472-alienware-m15-rear-angle-view.jpg",
          "http://img2.tbcdn.cn/tfscom/i4/1054582967/TB2Te2jgxXkpuFjy0FiXXbUfFXa_%21%211054582967.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3287155731,3673299920&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1918684111,1536335352&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3944638280,220163941&fm=11&gp=0.jpg"
      ],
      goodsMes: "外星人alienware全新m15 R2?九代酷睿i5四核GTX1650 4G独显游戏本吃鸡电脑戴尔DELL创意设计笔记本电脑4505 ",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 12499,
      sepcial: "",
      sup: ""
    }
  ],
  "19003": [
    {
      goodsId: "19003ls911",
      goodsName: "THUNDEROBOT 雷神911",
      goodsImg: [
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2111250403/O1CN01xbCCQ41EqcBwu4JSk_!!2111250403.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/2111250403/O1CN01QM9j3p1Eqc9B00A69_!!2111250403.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2111250403/O1CN01qotfOA1Eqc8pJUusu_!!2111250403.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2111250403/O1CN01HKYI111Eqc8Lg9ijz_!!2111250403.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
          "http://img2.tbcdn.cn/tfscom/i4/1054582967/TB2Te2jgxXkpuFjy0FiXXbUfFXa_%21%211054582967.jpg",
          "http://img.pconline.com.cn/images/product/570725/20146/13/14026242617109941_800.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1269204935,2420615770&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2971738698,339063287&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=715309975,300395490&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2845291848,2056716220&fm=26&gp=0.jpg"
      ],
      goodsMes: "THUNDEROBOT雷神911MT/ME暗杀星九代英特尔酷睿i7笔记本电脑15.6英寸GTX1650全面屏轻薄便携吃鸡游戏本 ",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 6199,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19003ls911pro",
      goodsName: "THUNDEROBOT 雷神911Pro",
      goodsImg: [
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2111250403/O1CN01r1N4fr1EqcBwNdR60_!!2111250403.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2111250403/O1CN01BX5STq1EqcB27VEYX_!!2111250403.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2111250403/O1CN01jBbq3W1EqcBCH7uNV_!!2111250403.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2111250403/O1CN01jBbq3W1EqcBCH7uNV_!!2111250403.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3860445716,3409203583&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4132622242,2594893186&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4034190397,3446288106&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2052482939,1161693242&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1131842489,399239854&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2058058171,76670706&fm=26&gp=0.jpg"
      ],
      goodsMes: "雷神911pro钛空版九代英特尔酷睿i7-9750H笔记本电脑GTX1660Ti 6G独显轻薄全面屏144HZ吃鸡电竞游戏本分期 ",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 8099,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19003ls911mp",
      goodsName: "THUNDEROBOT 雷神911MP",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i2/2111250403/O1CN01DDivHr1EqcByXlj95_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i3/2111250403/O1CN01cLxuby1EqcB6xgS5C_!!2111250403.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/2111250403/O1CN013i7IiI1EqcAfeSOTu_!!2111250403.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i3/2111250403/O1CN01nixBss1EqcAa6DnBs_!!2111250403.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141736832,4004806499&fm=11&gp=0.jpg",
          "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20191014/14c7b6d8891a48d8aef2ce97ba9ee142.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1269204935,2420615770&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1508679115,2263617470&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2256611984,3722601093&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=357985713,2878056198&fm=26&gp=0.jpg"
      ],
      goodsMes: "雷神911MP 伪装者九代英特尔酷睿i7笔记本电脑17.3英寸GTX1650/GTX1660Ti轻薄吃鸡游戏本 ",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 6899,
      sepcial: "",
      sup: ""
    }
  ],
  "19004": [
    {
      goodsId: "19004hwmate20",
      goodsName: "HUAWEI MATE20",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i3/2838892713/O1CN01vYAPsE1Vub6WTRdxW_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/2838892713/O1CN011VuazdvGWiPZtfU_!!2838892713.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i3/2838892713/O1CN011VuazciQmVxEnmr_!!2838892713.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/2838892713/O1CN011VuazWRuOwDt9Ds_!!2838892713.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
          "http://n.sinaimg.cn/front/218/w640h378/20190211/PtJj-hswimzy1242668.jpg",
          "http://www.fabuzhe.com.cn/resources/upload/jsp/upload/image/20181115/1542248146687031152.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1267238833,91502146&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2040490167,994089552&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3489568677,3863831084&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3541492578,125553671&fm=26&gp=0.jpg"
      ],
      goodsMes: "【Huawei/华为 Mate 20 全面屏超大广角徕卡三摄麒麟980芯片人工智能手机mate20官方旗舰店 ",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 3199,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19004hwmate30",
      goodsName: "HUAWEI MATE30",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i3/2838892713/O1CN01u4Sn9S1Vub6Rtseky_!!2838892713.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/2838892713/O1CN01PU3Uie1Vub5LQGh2G_!!2-item_pic.png_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/2838892713/O1CN01B2iCzn1Vub5QYqTlh_!!2838892713.png_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i3/2838892713/O1CN01FHXdNe1Vub5SSE8G5_!!2838892713.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
          "http://img0.pconline.com.cn/pconline/1909/18/12918508_1_thumb.png",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1480304935,901151304&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1300065253,2972963254&fm=11&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4216681673,2565825307&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3308800328,679955099&fm=11&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3711241328,2285053290&fm=26&gp=0.jpg"
      ],
      goodsMes: "Huawei/华为Mate 30麒麟990超级快充4000万徕卡4G智能手机mate30华为官方旗舰店 ",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 3999,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19004hwmate30rs",
      goodsName: "HUAWEI MATE30RS",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i3/2838892713/O1CN015bz9zm1Vub6NnS7X7_!!2838892713.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i4/2838892713/O1CN01RNcOfm1Vub62XL38W_!!2-item_pic.png_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/2838892713/O1CN01ADHiub1Vub61WtrLH_!!2838892713.png_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/2838892713/O1CN012ZDCLu1Vub5tOmEK4_!!2838892713.png_430x430q90.jpg"
      ],
      goodsMesImg: [
          "http://article-fd.zol-img.com.cn/t_s500x2000/g5/M00/0E/00/ChMkJl3fKk2IIkOaAABNDkLLuAwAAvdeQNF528AAE0m790.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3349251551,954364255&fm=11&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2335193241,2374181043&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=723780112,3533470587&fm=11&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3077586880,4095224608&fm=11&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2306012105,727271483&fm=11&gp=0.jpg"
      ],
      goodsMes: "Huawei/华为Mate30 RS保时捷设计5G芯片徕卡四摄mate30rs华为官方旗舰店 ",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 12999,
      sepcial: "",
      sup: ""
    }
  ],
  "19005": [
    {
      goodsId: "19005dell7000",
      goodsName: "DELL 灵越7000",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i4/379092568/O1CN01POn6BW1UqBfrMJDF3_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i4/379092568/O1CN01YNpLwC1UqBfibox0W_!!379092568.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i4/379092568/O1CN01CNGMer1UqBdd5OCfx_!!379092568.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/379092568/O1CN01W4nG5W1UqBdcTC730_!!379092568.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2607183611,1711061970&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3426096375,572791129&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3644749999,1753011134&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3294481457,1009344808&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3462611664,1218906061&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1785982716,1861114507&fm=26&gp=0.jpg"
      ],
      goodsMes: "Dell/戴尔 灵越7000 i7独显GTX1650设计师i5游戏本4K商务超薄7590",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 7999,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19005dell5000",
      goodsName: "DELL 灵越5000",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i1/379092568/O1CN01WpHxWd1UqBfmLyrrb_!!379092568.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/379092568/O1CN01WpHxWd1UqBfmLyrrb_!!379092568.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/379092568/O1CN01My81PE1UqBed93RRn_!!379092568.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/379092568/O1CN01XkB7nf1UqBeXmujNS_!!379092568.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1764829645,3882964665&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1494738714,2910921642&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=63184138,2715534583&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2417871851,858240748&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=246144880,595786488&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1862564727,3397935359&fm=26&gp=0.jpg"
      ],
      goodsMes: "Dell/戴尔 灵越5000 fit14轻薄本10代i5办公轻薄本笔记本5490独显",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 5199,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19005dellxps13",
      goodsName: "DELL XPS13",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i1/379092568/O1CN014LwFZt1UqBfqprzvx_!!2-item_pic.png_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i4/379092568/O1CN01GERnAl1UqBfqD98Ew_!!379092568.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/379092568/O1CN0172mEpb1UqBetzvIx7_!!379092568.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i4/379092568/O1CN01L09v051UqBetzvuO6_!!379092568.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3364370702,3264954487&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1837536836,1340526055&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4115456544,462744324&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3486220884,1620154350&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1864778447,1887307200&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2976778289,777033157&fm=26&gp=0.jpg"
      ],
      goodsMes: "戴尔/DELL XPS13笔记本10代i5设计师本轻薄本便携i7商务办公7390",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 9999,
      sepcial: "",
      sup: ""
    }
  ],
  "19006": [
    {
      goodsId: "19006jxsf117",
      goodsName: "MACHENIKE F117",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i3/1730407557/O1CN01QhKf7r25h9e1E5Co1_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i3/1730407557/O1CN01xdYABt25h9dQkDzR4_!!1730407557.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/1730407557/O1CN0150u0jU25h9dOyOO0d_!!1730407557.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i3/1730407557/O1CN015edEBS25h9dOifT6l_!!1730407557.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2054056266,1107010536&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4203907961,483181092&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1861277086,212578513&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3780641140,2823236300&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4286935085,358468095&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3418816292,1416291783&fm=26&gp=0.jpg"
      ],
      goodsMes: "机械师F117-VD九代英特尔酷睿i7-9750H游戏本240Hz屏100%sRGB色域RTX2060学生轻薄电竞吃鸡笔记本电脑wifi6",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 12199,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19006jxst90",
      goodsName: "MACHENIKE T90",
      goodsImg: [
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/1730407557/O1CN01mhp3AZ25h9e2UbnvU_!!1730407557.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/1730407557/O1CN01v5bYIs25h9ceIdC4d_!!1730407557.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/1730407557/O1CN01Aru9yt25h9cOxi1s5_!!1730407557.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/1730407557/O1CN01uKnwcz25h9bZYJgXG_!!1730407557.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=531963758,4175644849&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3326925843,1351057003&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1048945585,1063550076&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1647972635,2933927405&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3906868950,1993264541&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2219044918,3256791183&fm=26&gp=0.jpg"
      ],
      goodsMes: "机械师T90 TB1九代英特尔酷睿i7-9750H 游戏本GTX1650 4G独显学生15.6英寸超轻薄便携手提学生吃鸡笔记本电脑",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 7199,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19006jxspx780",
      goodsName: "MACHENIKE PX780",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i1/1730407557/O1CN01V90pEi25h9civopAF_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i3/1730407557/O1CN01mn89x025h9cgdR1u9_!!1730407557.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i3/1730407557/O1CN01waYIfe25h9cS12eFq_!!1730407557.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/1730407557/O1CN01ESGprX25h9cWvuZtY_!!1730407557.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3561170278,2620174114&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=528430823,3331075831&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1948815032,1533882212&fm=15&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2020048217,3509570189&fm=15&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2636675822,2072892024&fm=15&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2083967843,45145455&fm=15&gp=0.jpg"
      ],
      goodsMes: "机械师PX780九代英特尔酷睿i9-9900K吃鸡游戏本RTX2080 8G独显笔记本电脑17.3英寸4K屏移动工作站手提商务本",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 29999,
      sepcial: "",
      sup: ""
    }
  ],
  "19007": [
    {
      goodsId: "19007lenovo",
      goodsName: "LENOVO Y7000",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i3/126446588/O1CN01U1BjQx1yXLr9ox0qr_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/126446588/O1CN01heBfj91yXLrDboloq_!!126446588.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/126446588/O1CN01PkVBea1yXLnlGtnXs_!!126446588.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/126446588/O1CN01NKrMMR1yXLnnoQKaL_!!126446588.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2590003445,4093623370&fm=26&gp=0.jpg",
          "http://pic2.zhimg.com/80/v2-8f1a33f6867b50084bd251224d086146_qhd.jpg",
          "http://img.xinxisea.com/public/pcimgs/5288/154347469845650.jpg",
          "http://img3.imgtn.bdimg.com/it/u=3287836906,32701181&fm=26&gp=0.jpg",
          "http://zkres1.myzaker.com/201905/5ccf033177ac6431cd71c115_1024.jpg",
          "http://ask-fd.zol-img.com.cn/g5/M00/06/09/ChMkJlszN1qIODZCAACfZgJGh9gAApUtAMjKVwAAJ9-828.jpg"
      ],
      goodsMes: "Lenovo/联想拯救者Y7000 高色域九代酷睿i5/i7 15.6英寸游戏本笔记本电脑GTX1650",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 6999,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19007lenovoxx13",
      goodsName: "联想小新Pro13",
      goodsImg: [
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/bao/uploaded/i2/126446588/O1CN01rQPBm71yXLr67CYdi_!!126446588.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/126446588/O1CN01k7JuhG1yXLquAkCPo_!!126446588.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/126446588/O1CN01QA3luv1yXLr1k5svI_!!126446588.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/126446588/O1CN01DjwAyL1yXLr67DxzH_!!126446588.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
          "http://2f.zol-img.com.cn/product/202_320x240/251/ce1gPOdaN5no.jpg",
          "http://img.pconline.com.cn/images/product/626233/20167/28/14696910674038382_800.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2121594949,2422271115&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=876174252,1681731546&fm=11&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2963844106,2133605034&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2399503867,496899400&fm=11&gp=0.jpg"
      ],
      goodsMes: "联想小新Pro13 13.3英寸全面屏超轻薄笔记本电脑标压R5-3550H/16G/512GSSD",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 5199,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19007lenovoxx14",
      goodsName: "联想小新Air14",
      goodsImg: [
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/bao/uploaded/i4/126446588/O1CN01894mfE1yXLqdwxQEB_!!126446588.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/126446588/O1CN01oo94rd1yXLqEiLXL8_!!126446588.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/126446588/O1CN01zPtCIS1yXLqFzrDwA_!!126446588.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/126446588/O1CN01oa3Muf1yXLqA3yjwa_!!126446588.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4177814030,3615771197&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3651490465,2011852176&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2684434198,1703001211&fm=26&gp=0.jpg",
          "http://staticqn.qizuang.com/img/20180704/5b3c8affe460b-s5.jpg",
          "http://img.pconline.com.cn/images/product/1133/1133090/bx.jpg",
          "http://img.pconline.com.cn/images/product/1096/1096232/beishi_m2.jpg"
      ],
      goodsMes: "联想小新Air14锐龙版笔记本电脑轻薄本(R5-3500U 12G 512G PCIE IPS )轻奢灰",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 4999,
      sepcial: "",
      sup: ""
    }
  ],
  "19008": [
    {
      goodsId: "19008sxs10",
      goodsName: "三星Galaxy S10",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i1/370627083/O1CN012pEyTJ22C3ucANpSo_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i3/370627083/O1CN01pQNeDh22C3pkhE4iH_!!370627083.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/370627083/O1CN01yAWiNS22C3rHw94B8_!!2-item_pic.png_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/370627083/O1CN01vbDqzv22C3sDjtvZd_!!370627083.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
          "http://dingyue.ws.126.net/XJIsA2LHnfhRS0lJBIP4stqF2ehrGqSx6V1SRL8evxOtj1551253167487compressflag.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=43914474,543016335&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3990022049,3166123920&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2030162155,874247962&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3124616836,2787824856&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2353775684,268718965&fm=26&gp=0.jpg"
      ],
      goodsMes: "Samsung/三星Galaxy S10 SM-G9730骁龙855 4G游戏官方全面屏智能手机",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 5199,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19008sxnote10",
      goodsName: "三星Galaxy Note10",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i1/370627083/O1CN01NWYjSN22C3uY1aba1_!!370627083.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i4/370627083/O1CN01ltIwnx22C3uHETmyv_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/370627083/O1CN01WLsJ5D22C3sz3yGI6_!!370627083.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i3/370627083/O1CN01LyBxjP22C3tCYta0H_!!370627083.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1136325675,2451716090&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=349105229,1223156664&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=253663998,3145545847&fm=26&gp=0.jpg",
          "http://sy0.img.it168.com/article/0/768/768400.png_i-500x280",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1825747563,3617502769&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3193207753,3577294249&fm=26&gp=0.jpg"
      ],
      goodsMes: "Samsung/三星Galaxy Note10 SM-N9700骁龙855 IP68防水S Pen 4G智能手机",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 6299,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19008sxa9",
      goodsName: "三星Galaxy A90 5G",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i2/370627083/O1CN01S5vnO922C3uZgxCf0_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/370627083/O1CN01eGMjAL22C3u6ejvrT_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i4/370627083/O1CN01yK3g1F22C3tmhYm9p_!!370627083.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/370627083/O1CN01ymkdUx22C3tmWddrV_!!370627083.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
          "http://img4.imgtn.bdimg.com/it/u=3521052561,2783901269&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=475131472,3572194626&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1715226754,2825796788&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2654715892,1112797456&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1821071714,2938418890&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4039621775,1422039691&fm=15&gp=0.jpg"
      ],
      goodsMes: "Samsung/三星Galaxy A90 5G SM-A9080 骁龙855 游戏智能拍照25W快充手机",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 3999,
      sepcial: "",
      sup: ""
    }
  ],
  "19009": [
    {
      goodsId: "19009beatsx",
      goodsName: "Beats BeatsX",
      goodsImg: [
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/1809177149/O1CN01AeEmrH22gI2ylu6Lx_!!1809177149.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/1809177149/O1CN01HL7T8E22gI2qiEZsM_!!1809177149.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/1809177149/O1CN01mfpi2C22gI1A4MQZK_!!1809177149.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/1809177149/O1CN014D8l6022gI1Bheznl_!!1809177149.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=318919784,1909259995&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1527662155,1964448226&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=358276886,1791599921&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2863319444,817276318&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3200165006,3838573489&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1976507150,2463209388&fm=26&gp=0.jpg"
      ],
      goodsMes: "Beats BeatsX 耳塞式无线蓝牙B耳机入耳式X耳机耳麦-",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 799,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19009solo3",
      goodsName: "Beats Solo3",
      goodsImg: [
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/1809177149/O1CN015Gusog22gI3ITgeI9_!!1809177149.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/1809177149/O1CN01fzctUb22gI1BhQQNY_!!1809177149.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/1809177149/O1CN016Irqci22gI18WQMmZ_!!1809177149.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/1809177149/O1CN01qddhEl22gI18jqDuE_!!1809177149.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
          "http://pic4.58cdn.com.cn/zhuanzh/n_v22931c725f0ba48a58cc0e596d902b605.jpg?w=750&h=0",
          "http://hbimg.b0.upaiyun.com/e0068061a778fd0484adc40b7f79cbc9e8c6d5cf73141-ZVWvdv_fw658",
          "http://hbimg.b0.upaiyun.com/a14a8bba257cd8d31ebb2da6ec5deea4c697bc1e2c01d-HkahbJ_fw658",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3876625405,2530948239&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3497146978,266964425&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4235558522,293141925&fm=26&gp=0.jpg"
      ],
      goodsMes: "Beats Solo3 Wireless 头戴式无线蓝牙耳机耳麦",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 1499,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19009studio3",
      goodsName: "Beats Studio3",
      goodsImg: [
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/1809177149/O1CN01Hoz7iV22gI3JVUPpK_!!1809177149.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/1809177149/O1CN01eGh42y22gI1A0eQ3D_!!1809177149.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/1809177149/O1CN01XSj6ZL22gI18WTBnx_!!1809177149.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/1809177149/O1CN01vkHxlZ22gI1AlEHSw_!!1809177149.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
          "http://img3.imgtn.bdimg.com/it/u=3249209600,3505396139&fm=26&gp=0.jpg",
          "http://pic2.58cdn.com.cn/zhuanzh/n_v2f0f177c390534d45a4303d96cc221cff.jpg?w=750&h=0",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1786593005,4032715803&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2505191092,3576376297&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=299705138,105508596&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1627405503,679815541&fm=26&gp=0.jpg"
      ],
      goodsMes: "Beats Studio3 Wireless无线蓝牙降噪头戴式通用耳机",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 2199,
      sepcial: "",
      sup: ""
    }
  ],
  "19010": [
    {
      goodsId: "19010G502",
      goodsName: "罗技 G502",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i2/428722076/O1CN01N5DzGI1RCqnvVFFEA_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i4/428722076/O1CN01wAU1JR1RCqmeOQMSF_!!428722076.png_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/428722076/TB2B0GceKtTMeFjSZFOXXaTiVXa_!!428722076.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/428722076/O1CN01WzKKXs1RCqnSmodYu_!!428722076.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
          "http://img4.imgtn.bdimg.com/it/u=2671603548,1205698492&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3101868490,202702310&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=808295008,612916088&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1596106187,3854429451&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=756090546,2084513637&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1872261494,1907349771&fm=26&gp=0.jpg"
      ],
      goodsMes: "罗技G502HERO/RGB有线电竞游戏机械鼠标吃鸡宏背光",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 499,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19010Master3",
      goodsName: "罗技MX Master3",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i1/428722076/O1CN01ia6QuG1RCqoHd8b8O_!!428722076-0-pixelsss.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/428722076/O1CN017vtmbk1RCqndIgYvj_!!428722076.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/428722076/O1CN01EjHgkz1RCqnKKljnR_!!428722076.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i4/428722076/O1CN01mrwq8T1RCqne8C9t5_!!428722076.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
          "http://img4.imgtn.bdimg.com/it/u=2447341660,878840568&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3180865928,2686509516&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=472335027,473236519&fm=11&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3393837113,1874104807&fm=11&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2792751498,2861631784&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1743772177,2356272202&fm=26&gp=0.jpg"
      ],
      goodsMes: "罗技MX Master3大师无线蓝牙充电电脑办公高端鼠标",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 899,
      sepcial: "",
      sup: ""
    },
    {
      goodsId: "19010G903",
      goodsName: "罗技 G903",
      goodsImg: [
        "https://img.alicdn.com/imgextra/i4/428722076/O1CN01bVSNa41RCqnsWPAms_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/428722076/O1CN011sUJGr1RCqmgbekHJ_!!428722076.png_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i4/428722076/O1CN01SM67oj1RCqmhnGU6W_!!428722076.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/428722076/O1CN01geXadZ1RCqmeRsk2K_!!428722076.jpg_430x430q90.jpg"
      ],
      goodsMesImg: [
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2575732796,3463750660&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2181553404,1110806536&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2021475840,2400242855&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4139485799,610518095&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=465263992,3895985458&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1619527550,3251610877&fm=26&gp=0.jpg"
      ],
      goodsMes: "罗技G903 HERO无线电竞游戏机械鼠标RGB背光可充电",
      goodsStock: 200,
      goodsNum: 0,
      goodsPrice: 999,
      sepcial: "",
      sup: ""
    }
  ]
}
