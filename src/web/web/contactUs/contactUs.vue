<template>
    <div id='body'>
        <div class="banner"></div>
        <div class="subject">
            <div class="center">
                <div class="fl inclined_left">
                    <ul>
                        <li :class="{index: index==index1}" v-for="(item, index) in  nav" v-text="item.text" @click="list_cut(index)"></li>
                    </ul>
                </div>
                <div class="fr inclined_right">
                    <div class="top">
                        <p class="fl" v-for="(item, index) in  nav"  v-text="item.title" v-show="index==index1"></p>
                        <p class="fr">
                            联系我们  <i class="iconfont">&#xe679;</i> <span @click="consult_cut(index)"  v-for="(item, index) in  nav" v-text="item.text" v-show="index==index1"></span><span v-show="index2!=10">&nbsp;<i class="iconfont">&#xe679;</i> 资讯详情</span>
                        </p>
                    </div>
                    <div class="bottom">
                       <!--咨讯-->
                       <div class="consult" v-show="index1 == 0 && index2 == 10">
                           <div class="list">
                                <div v-for="(item, index) in consult" @click="particulars(index)">
                                    <div class="fl">
                                        <p v-text="item.title"></p>
                                        <p v-text="item.text1"></p>
                                        <p>
                                            <span class="fl" v-text="item.text2"></span><span class="fr" v-text="item.time"></span>
                                        </p>
                                    </div>
                                    <div class="fr">
                                        <img :src="item.img" alt="">
                                    </div>
                                </div>
                          </div>
                       </div>
                       <!--招聘-->
                       <div class="recruiting" v-show="index1==1 && index2 == 10">
                            <img src="./images/Website.png" alt="">
                       </div>
                       <!--联系我们-->
                       <div class="contact" v-show="index1==2 && index2 == 10">
                           <div class="top">
                               <div class="fl">
                                   <p>浙江链钱科技集团有限公司</p>
                                   <ul>
                                       <li>
                                           <i class="iconfont">&#xe6be;</i>0571-56707129
                                       </li>
                                       <li>
                                           <i class="iconfont">&#xe603;</i>浙江省杭州市西湖区学院路28号德力西大厦3号楼
                                       </li>
                                   </ul>
                               </div>
                               <div class="fr"></div>
                           </div>
                           <div class="bottom" v-if="false">
                               <dl class="fl" :class="{side:(index + 1)%3==0 && index!=0}"> 
                                   <dt>
                                       <p>
                                           <span>背景</span><i class="iconfont">&#xe603;</i>
                                       </p>
                                   </dt>
                                   <dd>
                                       <p>fjsdj dfjfdsjjjpdfsjfpdsj</p>
                                       <p>仍热歌</p>
                                   </dd>
                               </dl>
                           </div>
                       </div>
                       <!--详情-->
                       <div class="img">
                           <img src="./images/particulars1.jpg" alt="" v-show="index2==0">
                           <img src="./images/particulars2.jpg" alt="" v-show="index2==1">
                           <img src="./images/particulars3.jpg" alt="" v-show="index2==2">
                           <img src="./images/particulars4.jpg" alt="" v-show="index2==3">
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {Common, storage} from 'js/common'
import $ from 'jQuery';
export default {
    data () {
        return {
            index1: 0,
            index2: 10,
            nav: [
                {text: '集团资讯', title: 'NEWS'},
                {text: '招贤纳士', title: 'JOIN US'},
                {text: '联系方式', title: 'CONTACT'}
            ],
            site: [ //地址
                {address: '北京', name: '信用宝金融信息服务（北京）有限公司'}
            ],
            consult: [
                {title: '大举动！“金融智能联合实验室”成立!', text1: '人类正在进入人工智能时代，人工智能成为推动未来金融发展的巨大引擎。人工智能进行的', text2: '信息整合和分析，不仅所需时间较少，也更加精准，可用于身份识别、帮......', time: '2017/11/17', img: require('./images/zx1.png')},
                {title: '科技金融+金融科技 | 未来已来', text1: '在各种科学技术的影响下，世界瞬息万变。人们的行为方式和习惯越来越多的与科技联系在了', text2: '一起，网络化、科技化、数据化已成为这个时代最为鲜明的特征。', time: '2017/11/03', img: require('./images/zx2.png')},
                {title: '科技拥抱金融，聚力链接未来', text1: '随着大数据、云计算、人工智能、区块链技术等新兴技术的日趋成熟，现代科技正与传统金融', text2: '模式产生着奇妙的化学效应。', time: '2017/09/15', img: require('./images/zx3.png')},
                {title: '科技金融：大数据不是说说而已', text1: '每一天，世界上都有两百五十万的三次方的字节数据产生出来，而仅在过去两年时间内，世界', text2: '上90％的数据就被创建出。这些庞大的数据及高端复杂的科学技术正在……', time: '2017/09/01', img: require('./images/zx4.png')}
            ]

        }
    },
    created () {
    },
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
        list_cut (index) {
            this.index1 = index;
            this.index2 = 10;
        },
        particulars (index) {
            this.index2 = index;
        },
        consult_cut (index) {
            this.index2 = 10;
        }
    }
}
</script>