// https://vuejs.org/v2/guide/


Vue.component('contact-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['info'],
    template: '<div><div>{{info.title}}</div> <div><a v-bind:href ="info.link">{{info.name}}</a></div></div>'
})


var app = new Vue({
    el: '#app',
    data: {
        name: "林鉦育",
        nickname: "aha",
        personal_image: "https://scontent.ftpe8-2.fna.fbcdn.net/v/t1.0-9/53551226_2581654768517336_3318850207487098880_o.jpg?_nc_cat=100&_nc_ht=scontent.ftpe8-2.fna&oh=03f1ab3bebd77734136efea83ea53fa6&oe=5D60923E",
        message: `專長於組裝各式語言與各大平台服務， 打造最小可行產品原型． 曾獲得2011 政府開放資料平台 App 社會組首獎． 2015 PIXNET
        Mobile Service
        社會組首獎． 2014 DSC R
        課程講師． 2017 pycon 與2017 DSC 講者。`,
        support_link: "#",
        support_name: "支持小額贊助",
        infoList: [{
            title: "與我聯繫",
            link: "mailto:ntuaha@gmail.com",
            name: "ntuaha@gmail.com",
            id: 0
        }, {
            title: "個人網站",
            link: "https://funny.aha.taipei/",
            name: "https://funny.aha.taipei/",
            id: 1
        }, {
            title: "Github",
            link: "https://www.github.com/ntuaha/",
            name: "https://www.github.com/ntuaha/",
            id: 2
        }, {
            title: "Medium",
            link: "https://medium.com/@aha",
            name: "https://medium.com/@aha",
            id: 3
        }]
    }
})







var app2 = new Vue({
    el: '#app-2',
    data: {
        title: "行動初衷",
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        context: '很多事情都需要自己下去走過一次才能知道中間的甘苦，在公司內做專案如此，相信離開到外面也應該是如此．既然都說政治的影響力到處都存在，我們也覺得現在上位的那些政治人物都有許多可以被取而代之的地方，那麼為何我們不上，更重要的是在這些過程之中，是不是其實有更多不足外人道的地方，所以永遠都只能是那些看來很蠢的人在檯面上．既然如此，那麼更積極地去瞭解與揭露這些現象的好方法，應該就是自己跳下去走一遭．'
    }
})


var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

// https://blog.csdn.net/zgh0711/article/details/78367734
var app4 = new Vue({
    el: '#app-4',
    data: {
        title: "2020 立委參選政見大綱",
        issues: [{
                context: '支持多元能源相關政策'
            },
            {
                context: '支持金融創新法規開放相關政策'
            },
            {
                context: '支持地方基礎運輸建設開放相關政策'
            }, {
                context: '協助新莊相關基礎建設與開放都市規劃進度追蹤'
            }
        ]
    },
    methods: {
        showInfo: function (item, index) {
            console.log(item, item.context, index)
            console.log(this.issues[index])
            item.context = "!!"
        }
    }
})



Vue.component('navbar', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['brand', 'search_name'],
    template: `<div class="navbar navbar-dark bg-dark fixed-top justify-content-between" >
            <a class="navbar-brand" href="#">{{brand}}</a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">{{search_name}}</button>
            </form>
        </div>`
})

// https://blog.csdn.net/zgh0711/article/details/78367734
var nav = new Vue({
    el: '#navbar',
    data: {
        brand: "aha的個人首頁",
        search_name: "Search"
    }
})