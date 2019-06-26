// https://vuejs.org/v2/guide/
var app = new Vue({
    el: '#app',
    data: {
        message: `專長於組裝各式語言與各大平台服務， 打造最小可行產品原型． 曾獲得2011 政府開放資料平台 App 社會組首獎． 2015 PIXNET
        Mobile Service
        社會組首獎． 2014 DSC R
        課程講師． 2017 pycon 與2017 DSC 講者。`
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '很多事情都需要自己下去走過一次才能知道中間的甘苦，在公司內做專案如此，相信離開到外面也應該是如此．既然都說政治的影響力到處都存在，我們也覺得現在上位的那些政治人物都有許多可以被取而代之的地方，那麼為何我們不上，更重要的是在這些過程之中，是不是其實有更多不足外人道的地方，所以永遠都只能是那些看來很蠢的人在檯面上．既然如此，那麼更積極地去瞭解與揭露這些現象的好方法，應該就是自己跳下去走一遭．' +
            'You loaded this page on ' + new Date().toLocaleString()
    }
})