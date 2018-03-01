<template>
    <div id='body'>
        <!--bannner-->
        <div class="banner">
            <div class="center">
                <div class="intro-text">链钱集团是一家以“金融科技”为核心，着力发展互联网金融生态为主旨的大型集团公司，集团主倡“利用金融科技、高效配置金融资源的集约型金融发展模式”。</div>
            </div>
        </div>
        <!--关于我们-->
        <div class="about">
            <div class="center">
                <div class="top">
                    <h2>ABOUT</h2>
                    <h3><span></span>&nbsp;集团简介</h3>
                </div>
                <div class="bottom">
                    <div class="fl left"></div>
                    <div class="fl right">
                        <div class="chunk"></div>
                        <div class="text">
                            <p>
                              链钱集团是一家以“金融科技”为核心，着力发展互联网金融生态为主旨的大型集团公司，集团主倡“利用金融科技、高效配置金融资源的集约型金融发展模式”。
                            </p>
                            <p>
                              在金融科技领域中，集团以提升金融服务效率及加强风险控制效果为目标，为金融领域企业研发人工智能、大数据、反欺诈模型、风控决策引擎等前沿科技技术，致力于打造一套安全高效的金融科技体系。
                            </p>
                        </div>
                        <div class="more">MORE</div>
                    </div>
                </div>
            </div>
        </div>
        <!--企业创新-->
        <div class="enterprose">
            <div class="center">
                <p>ENTERPRISE SPIRIT</p>
                <ul>
                    <li>匠心<span>&</span></li>
                    <li>高效<span>&</span></li>
                    <li>协作<span>&</span></li>
                    <li>绿色<span>&</span></li>
                    <li>创新</li>
                </ul>
            </div>
        </div>
        <!--合作-->
        <div class="cooperation" v-show="false">
             <div class="center">
                <div class="top">
                    <h2>PARTNER</h2>
                    <h3><span>#</span>&nbsp;合作伙伴</h3>
                </div>
                <div class="bottom">
                   <!--
                    <ul>
                        <li v-for="(item, index) in cooperation" :class="{side:(index + 1)%4==0 && index!=0}">
                            <img :src="item.img" alt=""><span></span>
                        </li>
                    </ul>
                    -->
                    <div class="swiper-container" id='swiper-my'>
                        <div class='swiper-wrapper'>
                            <div class="swiper-slide" v-for="item in cooperation">
                                <ul>
                                    <li v-for="(item, index) in item.arr" :class="{side:(index + 1)%4==0 && index!=0}">
                                        <img :src="item.img" alt=""><span></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="site">
            <div class="center">
                <div class="fl">
                    <p>浙江链钱科技集团有限公司</p>
                    <p><i class="iconfont">&#xe6be;</i>0571-56707129</p>
                    <p><i class="iconfont">&#xe603;</i>浙江省杭州市西湖区学院路28号德力西大厦3号楼</p>
                </div>
                <div class="fr"></div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import {Common, storage} from 'js/common'
import $ from 'jQuery';
export default {
    data () {
        return {
            cooperation: [
                {
                    arr: [
                        {img: require('./images/img1.jpg')},
                        {img: require('./images/img2.jpg')},
                        {img: require('./images/img3.jpg')},
                        {img: require('./images/img4.jpg')},
                        {img: require('./images/img5.jpg')},
                        {img: require('./images/img6.jpg')},
                        {img: require('./images/img7.jpg')},
                        {img: require('./images/img8.jpg')}
                    ]
                },
                {
                    arr: [
                        {img: require('./images/img1.jpg')},
                        {img: require('./images/img2.jpg')},
                        {img: require('./images/img3.jpg')},
                        {img: require('./images/img4.jpg')},
                        {img: require('./images/img5.jpg')},
                        {img: require('./images/img6.jpg')},
                        {img: require('./images/img7.jpg')},
                        {img: require('./images/img8.jpg')}
                    ]
                },
                {
                    arr: [
                        {img: require('./images/img1.jpg')},
                        {img: require('./images/img2.jpg')},
                        {img: require('./images/img3.jpg')},
                        {img: require('./images/img4.jpg')},
                        {img: require('./images/img5.jpg')},
                        {img: require('./images/img6.jpg')},
                        {img: require('./images/img7.jpg')},
                        {img: require('./images/img8.jpg')}
                    ]
                }
            ]
        }
    },
    created () {
    },
    mounted () {
        // this.banner();
    },
    computed: {
    },
    watch: {
    },
    methods: {
          // 轮播图
        banner () {
            let swiper = new Swiper('#swiper-my', {
                pagination: '.swiper-pagination',
                loop: true,
                // autoplay: 5000,
                paginationClickable: true, //点击分页器切换
                // grabCursor: true, //鼠标变为手掌
                // paginationType: 'custom',
                autoplayDisableOnInteraction: true // 停止自动播放
            });
        }
    }
}
</script>
