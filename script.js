/**
 * 宇宙财富消费模拟世界
 * JavaScript 主文件
 */

// 全局数据模型
const appData = {
  // 用户数据
  user: {
    wealth: 1000000000000000000, // 初始财富：1e18
    name: "宇宙首富",
    currentLocation: "cosmic-map", // 当前位置
    assets: { // 已购买资产
      earth: [],
      space: [],
      buddha: [],
      heaven: []
    },
    favorites: [], // 收藏物品
    purchaseHistory: [] // 购买历史
  },
  
  // 物品数据
  items: {
    earth: [
      {
        id: "earth_001",
        name: "豪华别墅",
        category: "real_estate",
        price: 5000000000,
        description: "位于比弗利山庄的豪华别墅，占地10000平方米，拥有私人泳池、电影院和直升机停机坪。",
        image: "https://p3-doubao-search-sign.byteimg.com/labis/8c74fd1458736925eb96364f13b5cafc~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912560&x-signature=tfxZEVkAVye1w9GQLuqvJKE14GM%3D",
        isFavorite: false,
        location: "earth"
      },
      {
        id: "earth_002",
        name: "私人岛屿",
        category: "real_estate",
        price: 10000000000,
        description: "位于加勒比海的私人岛屿，面积500亩，拥有白沙滩、珊瑚礁和私人码头。",
        image: "https://p3-doubao-search-sign.byteimg.com/labis/10d23cd38c779e476b090f2dd57f526d~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912560&x-signature=SHEyI123Xt4AFbuOpqchCCHR5wA%3D",
        isFavorite: false,
        location: "earth"
      },
      {
        id: "earth_003",
        name: "黄金珠宝套装",
        category: "luxury",
        price: 200000000,
        description: "由18K黄金打造，镶嵌罕见的彩色宝石和钻石的高级珠宝套装，包括项链、耳环和手镯。",
        image: "https://p26-doubao-search-sign.byteimg.com/pgc-image/21115655fa20478d8393b16140a76087~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912560&x-signature=KiNMKsGflO8LoGKSPP5xt5sEq2g%3D",
        isFavorite: false,
        location: "earth"
      },
      {
        id: "earth_004",
        name: "科技公司",
        category: "company",
        price: 50000000000,
        description: "领先的科技公司，专注于人工智能和量子计算研发，市场估值超过500亿美元。",
        image: "https://p3-doubao-search-sign.byteimg.com/labis/131e6532d66651088f1085df336d2557~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912560&x-signature=b19fTivcf50LHDuyBc3C%2FKTzEtw%3D",
        isFavorite: false,
        location: "earth"
      },
      {
        id: "earth_005",
        name: "超级跑车",
        category: "luxury",
        price: 5000000,
        description: "限量版超级跑车，最高时速超过400公里，全球仅生产10辆。",
        image: "https://p11-doubao-search-sign.byteimg.com/labis/def03c2cfa7d9454b1ed4eb471e330be~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912560&x-signature=mie5eZHdh18bqUb6ZjNcPJYHdYQ%3D",
        isFavorite: false,
        location: "earth"
      },
      {
        id: "earth_006",
        name: "数字艺术藏品",
        category: "virtual",
        price: 100000000,
        description: "由知名数字艺术家创作的NFT艺术品，具有独特的数字签名和所有权证明。",
        image: "https://p11-doubao-search-sign.byteimg.com/labis/068c830c7bed80c593b959009a81bcf1~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912560&x-signature=Ya1kfCqbEDpu6YZD8VGHA0ombak%3D",
        isFavorite: false,
        location: "earth"
      },
      {
        id: "earth_007",
        name: "智能别墅系统",
        category: "tech",
        price: 10000000,
        description: "全屋智能控制系统，包括AI管家、智能安防、环境控制等功能，支持语音和手势控制。",
        image: "https://p3-doubao-search-sign.byteimg.com/labis/8c81c13d7135f50e30aaeef7a1615d49~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912560&x-signature=IARdi4wpdbBGlcyBL9IdotKymm0%3D",
        isFavorite: false,
        location: "earth"
      },
      {
        id: "earth_008",
        name: "总统职位",
        category: "service",
        price: 100000000000,
        description: "通过合法程序获得某个国家的总统职位，拥有行政权力和外交特权。",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1971137900137283596~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912560&x-signature=%2BnAro63heIsOTSlfdGoFcuw7lcU%3D",
        isFavorite: false,
        location: "earth"
      }
    ],
    space: [
      {
        id: "space_001",
        name: "星际战舰",
        category: "spaceship",
        price: 1000000000000,
        description: "配备最新武器系统和超光速引擎的星际战舰，可以轻松征服整个星系。",
        image: "https://p3-doubao-search-sign.byteimg.com/pgc-image/9f5461d0fd5a46aa85a64e6c9bede3f3~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912560&x-signature=aqWazUgDNqTIiiOPzywL5YiyeOE%3D",
        isFavorite: false,
        location: "space",
        galaxy: "milky_way"
      },
      {
        id: "space_002",
        name: "火星殖民地",
        category: "real_estate",
        price: 500000000000,
        description: "位于火星赤道附近的大型殖民地，可容纳10000人居住，拥有完整的生态系统。",
        image: "https://p26-doubao-search-sign.byteimg.com/labis/d3a7ae5cb9c73388485a53f12be51185~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912560&x-signature=15EAH8%2Fxpywwao8JHCYYMikJk2M%3D",
        isFavorite: false,
        location: "space",
        galaxy: "milky_way"
      },
      {
        id: "space_003",
        name: "宇宙飞船",
        category: "spaceship",
        price: 200000000000,
        description: "豪华宇宙飞船，配备舒适的居住舱、观景台和先进的生命支持系统。",
        image: "https://p26-doubao-search-sign.byteimg.com/labis/2aac7f0c8b29bfb64327787f215205da~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912560&x-signature=L9uOyQ7dOJRVAeo0YO2iStZ24iY%3D",
        isFavorite: false,
        location: "space",
        galaxy: "andromeda"
      },
      {
        id: "space_004",
        name: "太空基地",
        category: "real_estate",
        price: 1000000000000,
        description: "位于月球背面的大型太空基地，拥有科研中心、资源开采设施和防御系统。",
        image: "https://p26-doubao-search-sign.byteimg.com/labis/1d275711e54f9b92ea522d8423a8f87c~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912560&x-signature=Lecl0gBkxlDVfgjtVrBjpWzwGo8%3D",
        isFavorite: false,
        location: "space",
        galaxy: "milky_way"
      },
      {
        id: "space_005",
        name: "虫洞创越快艇",
        category: "spaceship",
        price: 5000000000000,
        description: "能够创建和穿越虫洞的超光速快艇，可在瞬间到达宇宙的任何角落。",
        image: "https://p3-doubao-search-sign.byteimg.com/labis/2d2127ff3c7e6dda3698a2f3199ccb35~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912560&x-signature=Bk3cje3NGvhHVpEigZN3%2F7p02%2BY%3D",
        isFavorite: false,
        location: "space",
        galaxy: "triangulum"
      },
      {
        id: "space_006",
        name: "外星艺术品",
        category: "artifact",
        price: 50000000000,
        description: "来自Alpha Centauri星系的古代外星文明艺术品，具有神秘的能量场。",
        image: "https://p26-doubao-search-sign.byteimg.com/labis/2aac7f0c8b29bfb64327787f215205da~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912560&x-signature=L9uOyQ7dOJRVAeo0YO2iStZ24iY%3D",
        isFavorite: false,
        location: "space",
        galaxy: "andromeda"
      },
      {
        id: "space_007",
        name: "星系采矿权",
        category: "resource",
        price: 1000000000000,
        description: "某个富含稀有矿物的星系的独家采矿权，可获得巨额利润。",
        image: "https://p26-doubao-search-sign.byteimg.com/labis/d3a7ae5cb9c73388485a53f12be51185~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912560&x-signature=15EAH8%2Fxpywwao8JHCYYMikJk2M%3D",
        isFavorite: false,
        location: "space",
        galaxy: "sombrero"
      },
      {
        id: "space_008",
        name: "空天航母",
        category: "spaceship",
        price: 2000000000000,
        description: "巨大的空天航母，可搭载多架战斗机和小型飞船，拥有强大的防御系统。",
        image: "https://p3-doubao-search-sign.byteimg.com/pgc-image/9f5461d0fd5a46aa85a64e6c9bede3f3~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912560&x-signature=aqWazUgDNqTIiiOPzywL5YiyeOE%3D",
        isFavorite: false,
        location: "space",
        galaxy: "milky_way"
      }
    ],
    buddha: [
      {
        id: "buddha_001",
        name: "金身佛像",
        category: "artifact",
        price: 100000000000,
        description: "由纯金打造的巨大佛像，拥有神秘的能量场，可保你平安。",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/6af2d43e15de413bb1723334c1e0fd66~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912547&x-signature=LY5pn3sRVfPc93MAGRTeCnzm0bU%3D",
        isFavorite: false,
        location: "buddha",
        area: "buddhist_relics"
      },
      {
        id: "buddha_002",
        name: "琉璃宫殿",
        category: "real_estate",
        price: 500000000000,
        description: "位于三十三天的琉璃宫殿，由各种宝石和琉璃建造，金碧辉煌。",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/b92c50bd6f1a4d188a94d2e9bbe249a3~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912547&x-signature=xHHVu51igcpvQQf8f0yuIQjsvwk%3D",
        isFavorite: false,
        location: "buddha",
        area: "thirty_three_heavens"
      },
      {
        id: "buddha_003",
        name: "菩提树叶",
        category: "artifact",
        price: 50000000000,
        description: "从佛陀悟道的菩提树上取下的叶子，具有神奇的治愈能力。",
        image: "https://p26-doubao-search-sign.byteimg.com/pgc-image/dc8f53269e2a46008c62509ffaa8b1b5~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912547&x-signature=N9xPtZnUyTsU7Oc867jvnQsktQQ%3D",
        isFavorite: false,
        location: "buddha",
        area: "buddhist_relics"
      },
      {
        id: "buddha_004",
        name: "四大部洲游览权",
        category: "service",
        price: 200000000000,
        description: "获得游览佛国世界四大部洲的特权，体验不同的文化和景观。",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/6af2d43e15de413bb1723334c1e0fd66~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912547&x-signature=LY5pn3sRVfPc93MAGRTeCnzm0bU%3D",
        isFavorite: false,
        location: "buddha",
        area: "four_contients"
      },
      {
        id: "buddha_005",
        name: "天龙八部护法",
        category: "service",
        price: 1000000000000,
        description: "雇佣天龙八部作为您的护法，保护您的安全和利益。",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/b92c50bd6f1a4d188a94d2e9bbe249a3~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912547&x-signature=xHHVu51igcpvQQf8f0yuIQjsvwk%3D",
        isFavorite: false,
        location: "buddha",
        area: "thirty_three_heavens"
      },
      {
        id: "buddha_006",
        name: "七宝莲花座",
        category: "artifact",
        price: 300000000000,
        description: "由七种宝石打造的莲花座，坐上去可以提升修为和智慧。",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1890955911537885188~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912546&x-signature=rHqGtCz64kyGUIddu9gEqc7dfdI%3D",
        isFavorite: false,
        location: "buddha",
        area: "buddhist_relics"
      },
      {
        id: "buddha_007",
        name: "三十三天通行证",
        category: "service",
        price: 500000000000,
        description: "获得自由进出三十三天的通行证，可以拜访各位天神。",
        image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/b92c50bd6f1a4d188a94d2e9bbe249a3~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912547&x-signature=xHHVu51igcpvQQf8f0yuIQjsvwk%3D",
        isFavorite: false,
        location: "buddha",
        area: "thirty_three_heavens"
      },
      {
        id: "buddha_008",
        name: "佛教经文卷轴",
        category: "artifact",
        price: 100000000000,
        description: "记载着古老佛教经文的卷轴，蕴含着深奥的智慧和力量。",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1890955911537885188~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912546&x-signature=rHqGtCz64kyGUIddu9gEqc7dfdI%3D",
        isFavorite: false,
        location: "buddha",
        area: "buddhist_relics"
      }
    ],
    heaven: [
      {
        id: "heaven_001",
        name: "天使侍从",
        category: "service",
        price: 500000000000,
        description: "来自天堂的美丽天使，全天候为你提供各种服务。",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1891122066731433991~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912546&x-signature=6UbKZnFTIXO6oGk%2FRBmEcIECGfE%3D",
        isFavorite: false,
        location: "heaven",
        area: "divine_services"
      },
      {
        id: "heaven_002",
        name: "伊甸园别墅",
        category: "real_estate",
        price: 1000000000000,
        description: "位于伊甸园中的豪华别墅，周围环绕着美丽的花园和清澈的溪流。",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1891456996825759750~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912546&x-signature=bQLIT37lBYKorEL6PzeJNOKnlqE%3D",
        isFavorite: false,
        location: "heaven",
        area: "eden"
      },
      {
        id: "heaven_003",
        name: "生命之树果实",
        category: "artifact",
        price: 500000000000,
        description: "来自伊甸园生命之树的果实，食用后可以获得永恒的生命。",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1890853459421560832~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912546&x-signature=4u40id9WIT4AbAlXKLJflLoygEA%3D",
        isFavorite: false,
        location: "heaven",
        area: "eden"
      },
      {
        id: "heaven_004",
        name: "圣城豪宅",
        category: "real_estate",
        price: 2000000000000,
        description: "位于黄金圣城中的豪华住宅，可以俯瞰整个天堂的美景。",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1891122066731433991~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912546&x-signature=6UbKZnFTIXO6oGk%2FRBmEcIECGfE%3D",
        isFavorite: false,
        location: "heaven",
        area: "holy_city"
      },
      {
        id: "heaven_005",
        name: "神圣光环",
        category: "artifact",
        price: 300000000000,
        description: "象征神圣身份的光环，佩戴后可以获得天使的尊重和敬仰。",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1891456996825759750~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912546&x-signature=bQLIT37lBYKorEL6PzeJNOKnlqE%3D",
        isFavorite: false,
        location: "heaven",
        area: "divine_services"
      },
      {
        id: "heaven_006",
        name: "天堂音乐会门票",
        category: "service",
        price: 100000000000,
        description: "由天使合唱团表演的天堂音乐会门票，聆听天籁之音。",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1890853459421560832~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912546&x-signature=4u40id9WIT4AbAlXKLJflLoygEA%3D",
        isFavorite: false,
        location: "heaven",
        area: "divine_services"
      },
      {
        id: "heaven_007",
        name: "黄金街道",
        category: "real_estate",
        price: 5000000000000,
        description: "位于圣城中心的黄金街道，可以获得无尽的财富和荣耀。",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1891122066731433991~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912546&x-signature=6UbKZnFTIXO6oGk%2FRBmEcIECGfE%3D",
        isFavorite: false,
        location: "heaven",
        area: "holy_city"
      },
      {
        id: "heaven_008",
        name: "神圣马车",
        category: "transport",
        price: 200000000000,
        description: "由四匹天马拉动的神圣马车，可以在天堂自由穿梭。",
        image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1891456996825759750~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912546&x-signature=bQLIT37lBYKorEL6PzeJNOKnlqE%3D",
        isFavorite: false,
        location: "heaven",
        area: "divine_services"
      }
    ]
  },
  
  // 区域数据
  locations: {
    "cosmic-map": {
      name: "宇宙地图",
      description: "宇宙的全景图，展示各个可探索区域。",
      image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/998028010377314382~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912547&x-signature=dR8AjWO4V7yDlac2t%2BPOKcVrzaY%3D",
      color: "#0a192f"
    },
    earth: {
      name: "地球",
      description: "人类的家园，拥有丰富的资源和多样的文化。",
      image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/933129284883972141~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912546&x-signature=DFMZihW4m1QwnKErEt7x69X2KbA%3D",
      color: "#1a73e8",
      items: []
    },
    space: {
      name: "外太空星系",
      description: "浩瀚的宇宙，包含无数星系和星球，等待你的探索。",
      image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/998028010377314382~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912547&x-signature=dR8AjWO4V7yDlac2t%2BPOKcVrzaY%3D",
      color: "#0d47a1",
      items: []
    },
    buddha: {
      name: "佛国世界",
      description: "神秘的东方神话世界，包含33层天和四大部洲。",
      image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/b92c50bd6f1a4d188a94d2e9bbe249a3~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912547&x-signature=xHHVu51igcpvQQf8f0yuIQjsvwk%3D",
      color: "#ffd700",
      items: []
    },
    heaven: {
      name: "天堂",
      description: "圣洁的西方神界，包含伊甸园等神圣场景。",
      image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1891122066731433991~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1776912546&x-signature=6UbKZnFTIXO6oGk%2FRBmEcIECGfE%3D",
      color: "#f5f5f5",
      items: []
    }
  },
  
  // 当前选中的物品
  selectedItem: null,
  
  // 当前购买数量
  purchaseQuantity: 1,
  
  // 当前选中的迁移目的地
  selectedDestination: null,
  
  // 财富增长数据（用于图表）
  wealthHistory: [],
  
  // 初始化应用
  init() {
    this.loadUserData();
    this.initWealthHistory();
    this.renderStars();
    this.renderRecommendedItems();
    this.renderWealthChart();
    this.setupEventListeners();
    this.updateWealthDisplay();
  },
  
  // 从本地存储加载用户数据
  loadUserData() {
    const savedUser = localStorage.getItem('cosmicWealthUser');
    if (savedUser) {
      this.user = JSON.parse(savedUser);
    }
    
    // 更新收藏状态
    this.updateFavoritesStatus();
  },
  
  // 保存用户数据到本地存储
  saveUserData() {
    localStorage.setItem('cosmicWealthUser', JSON.stringify(this.user));
  },
  
  // 初始化财富历史数据
  initWealthHistory() {
    if (this.wealthHistory.length === 0) {
      const initialWealth = this.user.wealth;
      // 创建过去7天的财富数据
      for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        
        // 每天增加1%的财富
        const dailyGrowth = initialWealth * (1 + 0.01 * (6 - i));
        
        this.wealthHistory.push({
          date: date.toISOString().split('T')[0],
          wealth: dailyGrowth
        });
      }
    }
  },
  
  // 更新财富历史数据
  updateWealthHistory() {
    const today = new Date().toISOString().split('T')[0];
    
    // 如果今天已有数据，则更新
    if (this.wealthHistory[this.wealthHistory.length - 1].date === today) {
      this.wealthHistory[this.wealthHistory.length - 1].wealth = this.user.wealth;
    } else {
      // 否则添加新数据
      this.wealthHistory.push({
        date: today,
        wealth: this.user.wealth
      });
      
      // 只保留最近7天的数据
      if (this.wealthHistory.length > 7) {
        this.wealthHistory.shift();
      }
    }
    
    // 更新图表
    this.renderWealthChart();
  },
  
  // 更新收藏状态
  updateFavoritesStatus() {
    // 遍历所有物品，更新收藏状态
    for (const location in this.items) {
      this.items[location].forEach(item => {
        item.isFavorite = this.user.favorites.includes(item.id);
      });
    }
  },
  
  // 渲染背景星星
  renderStars() {
    const starsContainer = document.getElementById('stars-container');
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // 随机大小
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // 随机位置
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // 随机动画延迟
      star.style.animationDelay = `${Math.random() * 4}s`;
      
      starsContainer.appendChild(star);
    }
  },
  
  // 渲染推荐物品
  renderRecommendedItems() {
    const recommendedContainer = document.getElementById('recommended-items');
    recommendedContainer.innerHTML = '';
    
    // 从所有区域随机选择8个物品
    const allItems = [];
    for (const location in this.items) {
      allItems.push(...this.items[location]);
    }
    
    // 随机排序
    const shuffledItems = allItems.sort(() => 0.5 - Math.random());
    
    // 取前8个
    const recommendedItems = shuffledItems.slice(0, 8);
    
    // 渲染物品
    recommendedItems.forEach(item => {
      const itemCard = this.createItemCard(item);
      recommendedContainer.appendChild(itemCard);
    });
  },
  
  // 渲染地球物品
  renderEarthItems(category = 'all', searchQuery = '') {
    const earthItemsContainer = document.getElementById('earth-items');
    earthItemsContainer.innerHTML = '';
    
    // 筛选物品
    let filteredItems = this.items.earth;
    
    // 按分类筛选
    if (category !== 'all') {
      filteredItems = filteredItems.filter(item => item.category === category);
    }
    
    // 按搜索词筛选
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredItems = filteredItems.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
      );
    }
    
    // 渲染物品
    if (filteredItems.length === 0) {
      earthItemsContainer.innerHTML = `
        <div class="col-span-full text-center py-12">
          <i class="fa fa-search text-5xl text-gray-600 mb-4"></i>
          <p class="text-gray-400">未找到匹配的物品</p>
        </div>
      `;
      return;
    }
    
    filteredItems.forEach(item => {
      const itemCard = this.createItemCard(item);
      earthItemsContainer.appendChild(itemCard);
    });
  },
  
  // 渲染太空物品
  renderSpaceItems(galaxy = 'all', searchQuery = '') {
    const spaceItemsContainer = document.getElementById('space-items');
    spaceItemsContainer.innerHTML = '';
    
    // 筛选物品
    let filteredItems = this.items.space;
    
    // 按星系筛选
    if (galaxy !== 'all') {
      filteredItems = filteredItems.filter(item => item.galaxy === galaxy);
    }
    
    // 按搜索词筛选
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredItems = filteredItems.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
      );
    }
    
    // 渲染物品
    if (filteredItems.length === 0) {
      spaceItemsContainer.innerHTML = `
        <div class="col-span-full text-center py-12">
          <i class="fa fa-search text-5xl text-gray-600 mb-4"></i>
          <p class="text-gray-400">未找到匹配的物品</p>
        </div>
      `;
      return;
    }
    
    filteredItems.forEach(item => {
      const itemCard = this.createItemCard(item);
      spaceItemsContainer.appendChild(itemCard);
    });
  },
  
  // 渲染佛国物品
  renderBuddhaItems(area = 'all', searchQuery = '') {
    const buddhaItemsContainer = document.getElementById('buddha-items');
    buddhaItemsContainer.innerHTML = '';
    
    // 筛选物品
    let filteredItems = this.items.buddha;
    
    // 按区域筛选
    if (area !== 'all') {
      filteredItems = filteredItems.filter(item => item.area === area);
    }
    
    // 按搜索词筛选
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredItems = filteredItems.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
      );
    }
    
    // 渲染物品
    if (filteredItems.length === 0) {
      buddhaItemsContainer.innerHTML = `
        <div class="col-span-full text-center py-12">
          <i class="fa fa-search text-5xl text-gray-600 mb-4"></i>
          <p class="text-gray-400">未找到匹配的物品</p>
        </div>
      `;
      return;
    }
    
    filteredItems.forEach(item => {
      const itemCard = this.createItemCard(item);
      buddhaItemsContainer.appendChild(itemCard);
    });
  },
  
  // 渲染天堂物品
  renderHeavenItems(area = 'all', searchQuery = '') {
    const heavenItemsContainer = document.getElementById('heaven-items');
    heavenItemsContainer.innerHTML = '';
    
    // 筛选物品
    let filteredItems = this.items.heaven;
    
    // 按区域筛选
    if (area !== 'all') {
      filteredItems = filteredItems.filter(item => item.area === area);
    }
    
    // 按搜索词筛选
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredItems = filteredItems.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
      );
    }
    
    // 渲染物品
    if (filteredItems.length === 0) {
      heavenItemsContainer.innerHTML = `
        <div class="col-span-full text-center py-12">
          <i class="fa fa-search text-5xl text-gray-600 mb-4"></i>
          <p class="text-gray-400">未找到匹配的物品</p>
        </div>
      `;
      return;
    }
    
    filteredItems.forEach(item => {
      const itemCard = this.createItemCard(item);
      heavenItemsContainer.appendChild(itemCard);
    });
  },
  
  // 渲染用户资产
  renderUserAssets(type = 'all') {
    const assetsContainer = document.getElementById('user-assets');
    assetsContainer.innerHTML = '';
    
    // 收集所有资产
    let allAssets = [];
    for (const location in this.user.assets) {
      allAssets = allAssets.concat(this.user.assets[location]);
    }
    
    // 筛选资产
    let filteredAssets = allAssets;
    
    // 按类型筛选
    if (type !== 'all') {
      if (type === 'favorites') {
        filteredAssets = allAssets.filter(item => item.isFavorite);
      } else {
        filteredAssets = allAssets.filter(item => item.location === type);
      }
    }
    
    // 渲染资产
    if (filteredAssets.length === 0) {
      assetsContainer.innerHTML = `
        <div class="col-span-full text-center py-12">
          <i class="fa fa-diamond text-5xl text-gray-600 mb-4"></i>
          <p class="text-gray-400">您尚未拥有任何资产</p>
          <p class="text-gray-500 text-sm mt-2">前往各个区域开始您的宇宙购物之旅吧！</p>
        </div>
      `;
      return;
    }
    
    filteredAssets.forEach(item => {
      const itemCard = this.createAssetCard(item);
      assetsContainer.appendChild(itemCard);
    });
  },
  
  // 渲染购买历史
  renderPurchaseHistory() {
    const historyContainer = document.getElementById('purchase-history');
    historyContainer.innerHTML = '';
    
    // 如果没有购买历史
    if (this.user.purchaseHistory.length === 0) {
      historyContainer.innerHTML = '<p class="text-gray-400 text-center">您尚未购买任何物品</p>';
      return;
    }
    
    // 按时间倒序排列
    const sortedHistory = [...this.user.purchaseHistory].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    // 渲染最近的5条记录
    const recentHistory = sortedHistory.slice(0, 5);
    
    recentHistory.forEach(record => {
      const historyItem = document.createElement('div');
      historyItem.className = 'flex justify-between items-center py-2 border-b border-gray-800';
      
      historyItem.innerHTML = `
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded overflow-hidden flex-shrink-0">
            <img src="${record.item.image}" alt="${record.item.name}" class="w-full h-full object-cover">
          </div>
          <div>
            <p class="font-medium">${record.item.name}</p>
            <p class="text-xs text-gray-400">${new Date(record.timestamp).toLocaleString()}</p>
          </div>
        </div>
        <div class="text-right">
          <p class="font-exo font-bold text-gold">${this.formatCurrency(record.totalPrice)}</p>
          <p class="text-xs text-gray-400">x${record.quantity}</p>
        </div>
      `;
      
      historyContainer.appendChild(historyItem);
    });
  },
  
  // 渲染财富图表
  renderWealthChart() {
    const ctx = document.getElementById('wealth-chart').getContext('2d');
    
    // 销毁旧图表
    if (window.wealthChart) {
      window.wealthChart.destroy();
    }
    
    // 准备数据
    const labels = this.wealthHistory.map(item => {
      const date = new Date(item.date);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    });
    
    const data = this.wealthHistory.map(item => this.formatCurrencyForChart(item.wealth));
    
    // 创建新图表
    window.wealthChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: '财富',
          data: data,
          borderColor: '#ffd700',
          backgroundColor: 'rgba(255, 215, 0, 0.1)',
          borderWidth: 2,
          pointBackgroundColor: '#ffd700',
          pointRadius: 4,
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `财富: ${appData.formatCurrency(appData.wealthHistory[context.dataIndex].wealth)}`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)',
              callback: function(value) {
                if (value >= 1e12) {
                  return (value / 1e12).toFixed(1) + 'T';
                } else if (value >= 1e9) {
                  return (value / 1e9).toFixed(1) + 'B';
                } else if (value >= 1e6) {
                  return (value / 1e6).toFixed(1) + 'M';
                } else if (value >= 1e3) {
                  return (value / 1e3).toFixed(1) + 'K';
                }
                return value;
              }
            }
          },
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)'
            }
          }
        }
      }
    });
  },
  
  // 创建物品卡片
  createItemCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card rounded-xl overflow-hidden bg-black bg-opacity-30';
    card.dataset.itemId = item.id;
    
    // 获取分类名称
    const categoryName = this.getCategoryName(item.category);
    
    // 获取位置名称
    const locationName = this.getLocationName(item.location);
    
    card.innerHTML = `
      <div class="relative h-48 overflow-hidden">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
        <button class="favorite-btn absolute top-3 right-3 bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full transition-all ${item.isFavorite ? 'text-red-500' : ''}" data-item-id="${item.id}">
          <i class="fa ${item.isFavorite ? 'fa-heart' : 'fa-heart-o'}"></i>
        </button>
      </div>
      <div class="p-4">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-bold">${item.name}</h3>
          <span class="font-exo font-bold text-gold">${this.formatCurrency(item.price)}</span>
        </div>
        <p class="text-sm text-gray-400 mb-3 line-clamp-2">${item.description}</p>
        <div class="flex justify-between items-center">
          <div class="flex space-x-2">
            <span class="text-xs bg-black bg-opacity-30 px-2 py-1 rounded-full">${categoryName}</span>
            <span class="text-xs bg-black bg-opacity-30 px-2 py-1 rounded-full">${locationName}</span>
          </div>
          <button class="view-item-btn text-xs bg-accent hover:bg-opacity-80 px-3 py-1 rounded-full transition-all" data-item-id="${item.id}">查看详情</button>
        </div>
      </div>
    `;
    
    return card;
  },
  
  // 创建资产卡片
  createAssetCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card rounded-xl overflow-hidden bg-black bg-opacity-30';
    card.dataset.itemId = item.id;
    
    // 获取分类名称
    const categoryName = this.getCategoryName(item.category);
    
    // 获取位置名称
    const locationName = this.getLocationName(item.location);
    
    card.innerHTML = `
      <div class="relative h-48 overflow-hidden">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
        <button class="favorite-btn absolute top-3 right-3 bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full transition-all ${item.isFavorite ? 'text-red-500' : ''}" data-item-id="${item.id}">
          <i class="fa ${item.isFavorite ? 'fa-heart' : 'fa-heart-o'}"></i>
        </button>
      </div>
      <div class="p-4">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-bold">${item.name}</h3>
          <span class="font-exo font-bold text-gold">${this.formatCurrency(item.price)}</span>
        </div>
        <p class="text-sm text-gray-400 mb-3 line-clamp-2">${item.description}</p>
        <div class="flex justify-between items-center">
          <div class="flex space-x-2">
            <span class="text-xs bg-black bg-opacity-30 px-2 py-1 rounded-full">${categoryName}</span>
            <span class="text-xs bg-black bg-opacity-30 px-2 py-1 rounded-full">${locationName}</span>
          </div>
          <button class="view-item-btn text-xs bg-accent hover:bg-opacity-80 px-3 py-1 rounded-full transition-all" data-item-id="${item.id}">查看详情</button>
        </div>
      </div>
    `;
    
    return card;
  },
  
  // 设置事件监听器
  setupEventListeners() {
    // 区域导航
    document.querySelectorAll('.location-card').forEach(card => {
      card.addEventListener('click', () => {
        const location = card.dataset.location;
        this.navigateTo(`${location}-page`);
      });
    });
    
    // 返回按钮
    document.querySelectorAll('.back-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.navigateTo('cosmic-map');
      });
    });
    
    // 底部导航
    document.getElementById('home-btn').addEventListener('click', () => {
      this.navigateTo('cosmic-map');
    });
    
    document.getElementById('migration-btn').addEventListener('click', () => {
      this.navigateTo('migration-page');
    });
    
    document.getElementById('assets-btn').addEventListener('click', () => {
      this.navigateTo('assets-page');
      this.renderUserAssets();
      this.renderPurchaseHistory();
    });
    
    document.getElementById('assets-footer-btn').addEventListener('click', () => {
      this.navigateTo('assets-page');
      this.renderUserAssets();
      this.renderPurchaseHistory();
    });
    
    document.getElementById('close-assets').addEventListener('click', () => {
      this.navigateTo('cosmic-map');
    });
    
    // 资产类型筛选
    document.querySelectorAll('.asset-type-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // 更新按钮状态
        document.querySelectorAll('.asset-type-btn').forEach(b => {
          b.classList.remove('active', 'bg-gold', 'text-black');
          b.classList.add('bg-black', 'bg-opacity-30');
        });
        btn.classList.add('active', 'bg-gold', 'text-black');
        btn.classList.remove('bg-black', 'bg-opacity-30');
        
        // 筛选资产
        const type = btn.dataset.type;
        this.renderUserAssets(type);
      });
    });
    
    // 地球物品分类筛选
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // 更新按钮状态
        document.querySelectorAll('.category-btn').forEach(b => {
          b.classList.remove('active', 'bg-earth');
          b.classList.add('bg-black', 'bg-opacity-30');
        });
        btn.classList.add('active', 'bg-earth');
        btn.classList.remove('bg-black', 'bg-opacity-30');
        
        // 筛选物品
        const category = btn.dataset.category;
        const searchQuery = document.getElementById('earth-search').value;
        this.renderEarthItems(category, searchQuery);
      });
    });
    
    // 太空物品星系筛选
    document.querySelectorAll('.galaxy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // 更新按钮状态
        document.querySelectorAll('.galaxy-btn').forEach(b => {
          b.classList.remove('active', 'bg-spaceBlue');
          b.classList.add('bg-black', 'bg-opacity-30');
        });
        btn.classList.add('active', 'bg-spaceBlue');
        btn.classList.remove('bg-black', 'bg-opacity-30');
        
        // 筛选物品
        const galaxy = btn.dataset.galaxy;
        const searchQuery = document.getElementById('space-search').value;
        this.renderSpaceItems(galaxy, searchQuery);
      });
    });
    
    // 佛国物品区域筛选
    document.querySelectorAll('.buddha-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // 更新按钮状态
        document.querySelectorAll('.buddha-btn').forEach(b => {
          b.classList.remove('active', 'bg-buddhaGold', 'text-black');
          b.classList.add('bg-black', 'bg-opacity-30');
        });
        btn.classList.add('active', 'bg-buddhaGold', 'text-black');
        btn.classList.remove('bg-black', 'bg-opacity-30');
        
        // 筛选物品
        const area = btn.dataset.buddha;
        const searchQuery = document.getElementById('buddha-search').value;
        this.renderBuddhaItems(area, searchQuery);
      });
    });
    
    // 天堂物品区域筛选
    document.querySelectorAll('.heaven-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // 更新按钮状态
        document.querySelectorAll('.heaven-btn').forEach(b => {
          b.classList.remove('active', 'bg-heavenWhite', 'text-black');
          b.classList.add('bg-black', 'bg-opacity-30');
        });
        btn.classList.add('active', 'bg-heavenWhite', 'text-black');
        btn.classList.remove('bg-black', 'bg-opacity-30');
        
        // 筛选物品
        const area = btn.dataset.heaven;
        const searchQuery = document.getElementById('heaven-search').value;
        this.renderHeavenItems(area, searchQuery);
      });
    });
    
    // 搜索功能
    document.getElementById('earth-search').addEventListener('input', (e) => {
      const searchQuery = e.target.value;
      const activeCategory = document.querySelector('.category-btn.active').dataset.category;
      this.renderEarthItems(activeCategory, searchQuery);
    });
    
    document.getElementById('space-search').addEventListener('input', (e) => {
      const searchQuery = e.target.value;
      const activeGalaxy = document.querySelector('.galaxy-btn.active').dataset.galaxy;
      this.renderSpaceItems(activeGalaxy, searchQuery);
    });
    
    document.getElementById('buddha-search').addEventListener('input', (e) => {
      const searchQuery = e.target.value;
      const activeArea = document.querySelector('.buddha-btn.active').dataset.buddha;
      this.renderBuddhaItems(activeArea, searchQuery);
    });
    
    document.getElementById('heaven-search').addEventListener('input', (e) => {
      const searchQuery = e.target.value;
      const activeArea = document.querySelector('.heaven-btn.active').dataset.heaven;
      this.renderHeavenItems(activeArea, searchQuery);
    });
    
    // 推荐物品滚动
    document.getElementById('scroll-left').addEventListener('click', () => {
      const container = document.getElementById('recommended-items');
      container.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    document.getElementById('scroll-right').addEventListener('click', () => {
      const container = document.getElementById('recommended-items');
      container.scrollBy({ left: 300, behavior: 'smooth' });
    });
    
    // 查看物品详情
    document.addEventListener('click', (e) => {
      if (e.target.closest('.view-item-btn')) {
        const btn = e.target.closest('.view-item-btn');
        const itemId = btn.dataset.itemId;
        this.showItemDetails(itemId);
      }
    });
    
    // 收藏物品
    document.addEventListener('click', (e) => {
      if (e.target.closest('.favorite-btn')) {
        const btn = e.target.closest('.favorite-btn');
        const itemId = btn.dataset.itemId;
        this.toggleFavorite(itemId);
        
        // 更新按钮状态
        const icon = btn.querySelector('i');
        if (icon.classList.contains('fa-heart-o')) {
          icon.classList.remove('fa-heart-o');
          icon.classList.add('fa-heart');
          btn.classList.add('text-red-500');
        } else {
          icon.classList.remove('fa-heart');
          icon.classList.add('fa-heart-o');
          btn.classList.remove('text-red-500');
        }
      }
    });
    
    // 关闭物品详情弹窗
    document.getElementById('close-modal').addEventListener('click', () => {
      document.getElementById('item-modal').classList.add('hidden');
    });
    
    document.getElementById('modal-overlay').addEventListener('click', () => {
      document.getElementById('item-modal').classList.add('hidden');
    });
    
    // 弹窗内收藏按钮
    document.getElementById('favorite-toggle').addEventListener('click', () => {
      if (this.selectedItem) {
        this.toggleFavorite(this.selectedItem.id);
        
        // 更新按钮状态
        const icon = document.querySelector('#favorite-toggle i');
        if (icon.classList.contains('fa-heart-o')) {
          icon.classList.remove('fa-heart-o');
          icon.classList.add('fa-heart');
          icon.classList.add('text-red-500');
        } else {
          icon.classList.remove('fa-heart');
          icon.classList.add('fa-heart-o');
          icon.classList.remove('text-red-500');
        }
      }
    });
    
    // 购买按钮
    document.getElementById('buy-item-btn').addEventListener('click', () => {
      if (this.selectedItem) {
        this.showPurchaseModal();
      }
    });
    
    // 关闭购买确认弹窗
    document.getElementById('cancel-purchase').addEventListener('click', () => {
      document.getElementById('purchase-modal').classList.add('hidden');
    });
    
    document.getElementById('purchase-modal-overlay').addEventListener('click', () => {
      document.getElementById('purchase-modal').classList.add('hidden');
    });
    
    // 数量调整
    document.getElementById('decrease-quantity').addEventListener('click', () => {
      if (this.purchaseQuantity > 1) {
        this.purchaseQuantity--;
        document.getElementById('item-quantity').textContent = this.purchaseQuantity;
        this.updateTotalPrice();
      }
    });
    
    document.getElementById('increase-quantity').addEventListener('click', () => {
      this.purchaseQuantity++;
      document.getElementById('item-quantity').textContent = this.purchaseQuantity;
      this.updateTotalPrice();
    });
    
    // 确认购买
    document.getElementById('confirm-purchase').addEventListener('click', () => {
      if (this.selectedItem) {
        this.purchaseItem();
      }
    });
    
    // 关闭购买成功弹窗
    document.getElementById('view-assets').addEventListener('click', () => {
      document.getElementById('success-modal').classList.add('hidden');
      this.navigateTo('assets-page');
      this.renderUserAssets();
      this.renderPurchaseHistory();
    });
    
    document.getElementById('continue-shopping').addEventListener('click', () => {
      document.getElementById('success-modal').classList.add('hidden');
    });
    
    document.getElementById('success-modal-overlay').addEventListener('click', () => {
      document.getElementById('success-modal').classList.add('hidden');
    });
    
    // 迁移功能
    document.querySelectorAll('.destination-option').forEach(option => {
      option.addEventListener('click', () => {
        // 更新选中状态
        document.querySelectorAll('.destination-option').forEach(opt => {
          opt.classList.remove('ring-2', 'ring-accent');
        });
        option.classList.add('ring-2', 'ring-accent');
        
        // 设置选中的目的地
        this.selectedDestination = option.dataset.destination;
        
        // 启用确认按钮
        document.getElementById('confirm-migration').disabled = false;
        
        // 更新迁移背景和星球
        const migrationBg = document.getElementById('migration-bg');
        const destinationPlanet = document.getElementById('destination-planet');
        
        // 设置背景
        migrationBg.style.backgroundImage = `url('${this.locations[this.selectedDestination].image}')`;
        
        // 设置目标星球
        destinationPlanet.style.backgroundImage = `url('${this.locations[this.selectedDestination].image}')`;
        destinationPlanet.style.opacity = '1';
      });
    });
    
    // 取消迁移
    document.getElementById('cancel-migration').addEventListener('click', () => {
      this.navigateTo('cosmic-map');
    });
    
    // 确认迁移
    document.getElementById('confirm-migration').addEventListener('click', () => {
      if (this.selectedDestination) {
        this.startMigration();
      }
    });
    
    // 初始化页面时渲染各区域物品
    window.addEventListener('load', () => {
      this.renderEarthItems();
      this.renderSpaceItems();
      this.renderBuddhaItems();
      this.renderHeavenItems();
    });
  },
  
  // 页面导航
  navigateTo(pageId) {
    // 获取当前页面和目标页面
    const currentPage = document.querySelector('.page.active');
    const targetPage = document.getElementById(pageId);
    
    if (!targetPage || currentPage === targetPage) return;
    
    // 隐藏当前页面
    currentPage.classList.remove('active');
    currentPage.classList.add('hidden');
    
    // 显示目标页面
    targetPage.classList.remove('hidden');
    targetPage.classList.add('active');
    
    // 更新当前位置
    this.user.currentLocation = pageId;
    this.saveUserData();
    
    // 更新底部导航状态
    document.querySelectorAll('footer button').forEach(btn => {
      btn.classList.remove('text-gold');
      btn.classList.add('text-gray-400');
    });
    
    if (pageId === 'cosmic-map') {
      document.getElementById('home-btn').classList.remove('text-gray-400');
      document.getElementById('home-btn').classList.add('text-gold');
    } else if (pageId === 'migration-page') {
      document.getElementById('migration-btn').classList.remove('text-gray-400');
      document.getElementById('migration-btn').classList.add('text-gold');
    } else if (pageId === 'assets-page') {
      document.getElementById('assets-footer-btn').classList.remove('text-gray-400');
      document.getElementById('assets-footer-btn').classList.add('text-gold');
    }
  },
  
  // 显示物品详情
  showItemDetails(itemId) {
    // 查找物品
    const item = this.findItemById(itemId);
    if (!item) return;
    
    // 保存选中的物品
    this.selectedItem = item;
    
    // 更新弹窗内容
    document.getElementById('modal-item-image').src = item.image;
    document.getElementById('modal-item-name').textContent = item.name;
    document.getElementById('modal-item-price').textContent = this.formatCurrency(item.price);
    document.getElementById('modal-item-description').textContent = item.description;
    document.getElementById('modal-item-category').textContent = this.getCategoryName(item.category);
    document.getElementById('modal-item-location').textContent = this.getLocationName(item.location);
    
    // 更新收藏按钮状态
    const favoriteIcon = document.querySelector('#favorite-toggle i');
    if (item.isFavorite) {
      favoriteIcon.classList.remove('fa-heart-o');
      favoriteIcon.classList.add('fa-heart');
      favoriteIcon.classList.add('text-red-500');
    } else {
      favoriteIcon.classList.remove('fa-heart');
      favoriteIcon.classList.add('fa-heart-o');
      favoriteIcon.classList.remove('text-red-500');
    }
    
    // 显示弹窗
    document.getElementById('item-modal').classList.remove('hidden');
  },
  
  // 显示购买确认弹窗
  showPurchaseModal() {
    if (!this.selectedItem) return;
    
    // 重置购买数量
    this.purchaseQuantity = 1;
    document.getElementById('item-quantity').textContent = this.purchaseQuantity;
    
    // 更新弹窗内容
    document.getElementById('purchase-item-image').src = this.selectedItem.image;
    document.getElementById('purchase-item-name').textContent = this.selectedItem.name;
    document.getElementById('purchase-item-price').textContent = this.formatCurrency(this.selectedItem.price);
    
    // 更新总价
    this.updateTotalPrice();
    
    // 显示弹窗
    document.getElementById('purchase-modal').classList.remove('hidden');
  },
  
  // 更新总价
  updateTotalPrice() {
    if (!this.selectedItem) return;
    
    const totalPrice = this.selectedItem.price * this.purchaseQuantity;
    document.getElementById('total-price').textContent = this.formatCurrency(totalPrice);
  },
  
  // 购买物品
  purchaseItem() {
    if (!this.selectedItem) return;
    
    const totalPrice = this.selectedItem.price * this.purchaseQuantity;
    
    // 检查余额
    if (this.user.wealth < totalPrice) {
      alert('您的财富不足，无法购买此物品！');
      return;
    }
    
    // 扣除财富
    this.user.wealth -= totalPrice;
    
    // 添加到资产
    const itemCopy = JSON.parse(JSON.stringify(this.selectedItem));
    this.user.assets[itemCopy.location].push(itemCopy);
    
    // 添加到购买历史
    this.user.purchaseHistory.push({
      item: itemCopy,
      quantity: this.purchaseQuantity,
      totalPrice: totalPrice,
      timestamp: new Date().toISOString()
    });
    
    // 保存用户数据
    this.saveUserData();
    
    // 更新财富显示
    this.updateWealthDisplay();
    
    // 更新财富历史
    this.updateWealthHistory();
    
    // 关闭购买确认弹窗
    document.getElementById('purchase-modal').classList.add('hidden');
    
    // 显示购买成功弹窗
    document.getElementById('success-message').textContent = `您成功购买了 ${this.purchaseQuantity} 个 ${this.selectedItem.name}，花费了 ${this.formatCurrency(totalPrice)}。`;
    document.getElementById('success-modal').classList.remove('hidden');
    
    // 创建购买特效
    this.createPurchaseEffect();
  },
  
  // 创建购买特效
  createPurchaseEffect() {
    const container = document.body;
    
    // 创建100个粒子
    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // 随机大小
      const size = Math.random() * 6 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // 随机颜色
      const colors = ['#ffd700', '#00b0ff', '#ffffff'];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      // 随机位置（以鼠标点击位置为中心）
      const x = window.innerWidth / 2;
      const y = window.innerHeight / 2;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      
      // 随机动画
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      const lifetime = Math.random() * 1000 + 1000;
      
      particle.style.transform = `translate(${Math.cos(angle) * speed * 50}px, ${Math.sin(angle) * speed * 50}px)`;
      particle.style.opacity = '0';
      particle.style.transition = `transform ${lifetime}ms ease-out, opacity ${lifetime}ms ease-out`;
      
      container.appendChild(particle);
      
      // 开始动画
      setTimeout(() => {
        particle.style.transform = `translate(${Math.cos(angle) * speed * 100}px, ${Math.sin(angle) * speed * 100}px)`;
        particle.style.opacity = '1';
      }, 10);
      
      // 移除粒子
      setTimeout(() => {
        container.removeChild(particle);
      }, lifetime);
    }
  },
  
  // 切换收藏状态
  toggleFavorite(itemId) {
    const itemIndex = this.user.favorites.indexOf(itemId);
    
    if (itemIndex === -1) {
      // 添加到收藏
      this.user.favorites.push(itemId);
      
      // 更新物品状态
      const item = this.findItemById(itemId);
      if (item) {
        item.isFavorite = true;
      }
    } else {
      // 从收藏中移除
      this.user.favorites.splice(itemIndex, 1);
      
      // 更新物品状态
      const item = this.findItemById(itemId);
      if (item) {
        item.isFavorite = false;
      }
    }
    
    // 保存用户数据
    this.saveUserData();
  },
  
  // 开始迁移
  startMigration() {
    if (!this.selectedDestination) return;
    
    // 获取飞船和目标星球元素
    const spaceship = document.getElementById('spaceship');
    const destinationPlanet = document.getElementById('destination-planet');
    
    // 重置飞船位置
    spaceship.style.transition = 'none';
    spaceship.style.left = '10px';
    spaceship.style.bottom = '10px';
    spaceship.style.transform = 'scale(1)';
    
    // 重置目标星球
    destinationPlanet.style.opacity = '1';
    destinationPlanet.style.transform = 'scale(1)';
    
    // 强制重绘
    void spaceship.offsetWidth;
    
    // 设置动画
    spaceship.style.transition = 'all 3s ease-in-out';
    spaceship.style.left = 'calc(50% - 64px)';
    spaceship.style.bottom = 'calc(50% - 64px)';
    spaceship.style.transform = 'scale(0.5)';
    
    // 星球动画
    destinationPlanet.style.transition = 'all 3s ease-in-out 1s';
    destinationPlanet.style.transform = 'scale(1.5)';
    
    // 动画结束后导航到目标页面
    setTimeout(() => {
      this.navigateTo(`${this.selectedDestination}-page`);
    }, 4000);
  },
  
  // 更新财富显示
  updateWealthDisplay() {
    const formattedWealth = this.formatCurrency(this.user.wealth);
    
    // 更新顶部导航栏
    document.getElementById('user-wealth').textContent = formattedWealth;
    document.getElementById('user-wealth-mobile').textContent = formattedWealth;
    
    // 更新各页面的财富显示
    document.querySelectorAll('.user-wealth-page').forEach(el => {
      el.textContent = formattedWealth;
    });
  },
  
  // 根据ID查找物品
  findItemById(itemId) {
    for (const location in this.items) {
      const item = this.items[location].find(item => item.id === itemId);
      if (item) return item;
    }
    return null;
  },
  
  // 获取分类名称
  getCategoryName(category) {
    const categoryMap = {
      'real_estate': '房产',
      'luxury': '奢侈品',
      'company': '公司',
      'tech': '科技产品',
      'virtual': '虚拟资产',
      'spaceship': '宇宙飞船',
      'artifact': '艺术品/圣物',
      'resource': '资源',
      'service': '服务',
      'transport': '交通工具'
    };
    
    return categoryMap[category] || category;
  },
  
  // 获取位置名称
  getLocationName(location) {
    const locationMap = {
      'earth': '地球',
      'space': '太空',
      'buddha': '佛国',
      'heaven': '天堂'
    };
    
    return locationMap[location] || location;
  },
  
  // 格式化货币
  formatCurrency(value) {
    if (value >= 1e18) {
      return (value / 1e18).toFixed(2) + ' 亿亿';
    } else if (value >= 1e12) {
      return (value / 1e12).toFixed(2) + ' 万亿';
    } else if (value >= 1e9) {
      return (value / 1e9).toFixed(2) + ' 十亿';
    } else if (value >= 1e6) {
      return (value / 1e6).toFixed(2) + ' 百万';
    } else if (value >= 1e3) {
      return (value / 1e3).toFixed(2) + ' 千';
    }
    return value.toFixed(2);
  },
  
  // 格式化图表货币
  formatCurrencyForChart(value) {
    if (value >= 1e18) {
      return value / 1e18;
    } else if (value >= 1e12) {
      return value / 1e12;
    } else if (value >= 1e9) {
      return value / 1e9;
    } else if (value >= 1e6) {
      return value / 1e6;
    } else if (value >= 1e3) {
      return value / 1e3;
    }
    return value;
  }
};

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
  appData.init();
});
