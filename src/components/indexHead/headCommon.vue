<template>
    <div class="head">
        <div class="center">
            <div class="fl">
                <img src="./images/logo.png" alt="">
            </div>
            <nav class="fr">
                <template  v-for="(item, index) in nav">
                     <dl class="fl"  v-show="index!=1" @click="win_href(index, item.aUrl)">
                        <dt v-text="item.name" :class="[{present: index==index1}, {present1: index==index1}]"></dt>
                        <dd v-text="item.text" :class="{present: index==index1}"></dd>
                    </dl>
                    <dl class="fl mouse" v-show="index==1"  @click="win_href(index, item.aUrl)">
                        <dt v-text="item.name" :class="[{present: index==index1}, {present1: index==index1}]"></dt>
                        <dd v-text="item.text" :class="{present: index==index1}"></dd>
                        <div class="mouse">
                            <div class="angle"></div>
                            <div class="about">
                                <div class="fl left">
                                    <p>“链钱”集团系一家专业从事技术开发与服务、商业咨询、投资管理、批发零售于一体的大型金融企业。自成立以来，“链钱”一直以客户需求为核心，努力为客户提供更专业、更稳固、更安全的金融服务。</p>
                                </div>
                                <div class="fl line"></div>
                                <div class="fl right">
                                    <ul>
                                        <li>关于链钱</li>
                                        <li>组织架构</li>
                                        <li>发展方向</li>
                                        <li>集团文化</li>
                                        <li>获得荣誉</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </dl>
                </template>
            </nav>
        </div>
    </div>
</template>
<script>
import {Common} from 'js/common';
export default {
    data () {
        return {
            index1: 0,
            nav: [
                {name: '集团首页', text: 'HOME', aUrl: 'index.html'},
                {name: '关于链钱', text: 'ABOUT', aUrl: 'about.html'},
                // {name: '科技金融', text: 'TECHFIN', aUrl: 'techfin.html'},
                {name: '金融科技', text: 'FINTECH', aUrl: 'fintech.html'},
                {name: '联系我们', text: 'CONTACT', aUrl: 'contactUs.html'}
            ]
        }
    },
    mounted () {
        this.index_1();
    },
    computed: {
    },
    methods: {
        index_1 () {
            let index = Common.getQueryString('index');
            if (index) {
                this.index1 = index;
            }
        },
        win_href (index, url) {
            if (url === 'index.html' && index === 0) {
                window.location.href = '../' + url + '?index=' + index;
            } else {
                window.location.href = '../web/' + url + '?index=' + index;
            }
        },
        dataDetails () {
            console.log('a')
        },
        hiddenDetail () {
            console.log('b')
        }
    }
}
</script>
<style lang='scss'>
@import  '../../assets/scss/normalize.css';
@import  '../../assets/scss/common.scss';
@import "../../assets/fonts/iconfont.css";
.head{
    width:100%;
    height:142px;
    background-color:#f5f5f5;
    .fl{
        img{
            padding-top:60px;
        }
    }
    nav{
        height:100%;
        dl{
            width:139px;
            text-align:center;
            height:100%;
            position:relative;
            cursor:pointer;
            .mouse{
                display:none;
                position:absolute;
                left:0;
                top:127px;
                z-index:5;
                .angle{
                      width: 0;
                      height: 0;
                      border-right: 10px solid transparent;
                      border-bottom: 10px solid #d4bb7b;
                      border-left: 10px solid transparent;
                      margin-left:63px;
                }
                .about{
                    width:556px;
                    height:239px;
                    border-top:5px solid #d4bb7b;
                    background:url(./images/logo_bottom.png) right bottom no-repeat;
                    background-color:#f9f9f9;
                    .left{
                        p{
                            width:242px;
                            padding:0 40px;
                            text-align:left;
                            font-size:14px;
                            line-height:24px;
                            color:#666666;
                            padding-top:34px;
                        }
                    }
                    .line{
                        margin-top:39px;
                        height:161px;
                        width:1px;
                        background:#d4bb7b;
                        margin-right:40px;
                    }
                    .right{
                        padding-top:37px;
                        ul{
                            li{
                                font-size:16px;
                                line-height:30px;
                                color:#221814;
                            }
                        }
                    }

                }
            }
            dt{
                padding-top:55px;
                font-size:16px;
                color:#333333;
                line-height:30px;
            }
            dd{
                font-size:12px;
                color:#e2e2e2;
            }
            .present{
                color:#d4bb7b;
            }
            .present1{
                font-weight: bold;
            }
        }
        dl:hover{
            background:#151312;
             &.mouse{
                 .mouse{
                     display:none;
                 }
            }
            dt{
                color:#d4bb7b;
            }
            dd{
                color:#d4bb7b;
            }
        }
    }
}
</style>
