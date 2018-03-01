<template>
    <div id='body'>
        <div class="banner"></div>
        <div class="subject">
            <div class="center">
                <div class="fl inclined_left">
                    <ul>
                        <li :class="{index: index==index1}" v-for="(item, index) in  nav" v-text="item.text" @click="index1=index"></li>
                    </ul>
                </div>
                <div class="fr inclined_right">
                    <div class="top">
                        <p class="fl" v-for="(item, index) in  nav"  v-text="item.title" v-show="index==index1"></p>
                        <p class="fr">
                            关于链钱  <i class="iconfont">&#xe679;</i> <span  v-for="(item, index) in  nav" v-text="item.text" v-show="index==index1"></span>
                        </p>
                    </div>
                    <div class="bottom">
                        <!--企业简介-->
                        <div class="introduction" v-show="index1==0">
                            <div class="fl left">
                                <div></div>
                                <p>
                                    链钱集团是一家以 “金融科技” 为核心，着力发展互联网金融生态为主旨的大型集团公司，集团主倡 “利用金融科技、高效配置金融资源的集约型金融发展模式”。
                                </p>
                                <div></div>
                                <h3>Finance Technology</h3>
                                <p>
                                   集团以提升金融服务效率及加强风险控制效果为目标，为金融领域企业研发人工智能、大数据、反欺诈模型、风控决策引擎等前沿科技技术，致力于打造一套安全高效的金融科技体系；
                                </p><br/>
                                <p>
                                   以中小微企业或个人为用户群体，以提供多元化、人性化的创新金融产品和服务为目标，以改善用户体验为宗旨；在严格遵守和实施现行监管制度的前提下，不断加强业务与风控流程，不断优化产品与服务，助力国内互联网金融向健康有序的方向发展，稳中求进、进中求好，为国家金融科技生态的发展建设贡献力量。
                                </p>
                            </div>
                            <div class="fr right">
                                <div></div><!--图-->
                                <div></div><!--线-->
                                <h3>Lianqian Group</h3>
                                <p>
                                   链钱集团是一家以“金融科技”为核心，着力发展互联网金融生态为主旨的大型集团公司，集团主倡“利用金融科技、高效配置金融资源的集约型金融发展模式”。
                                </p><br/>
                                <p>
                                  链钱集团至今已服务数十万名投资会员、数百万借款用户、及数千家中小微企业；凭借着前瞻性的视野、创新的金融理念、合理的资产配置、专业的管理团队、完善的风控系统，链钱集团赢得了各界企业及领导的高度赞誉与极大好评。
                                </p>
                            </div>
                        </div>
                        <!--组织架构-->
                        <div class="framework" v-show="index1==1">
                        </div>
                        <!--荣誉-->
                        <div class="honor" v-show="index1==3">
                            <dl class="fl" v-for="(item, index) in honor" :class="{side:(index + 1)%3==0 && index!=0}">
                                <dt>
                                    <img :src="item.img" alt="">
                                    <span></span>
                                </dt>
                                <dd>
                                    <p v-text="item.text"></p>
                                    <p v-text="item.text1"></p>
                                </dd>
                            </dl>
                        </div>
                        <!--合作-->
                        <div class="cooperation"  v-show="index1==2">
                           <div class="fl" v-for="(item, index) in cooperation" :class="{side:(index + 1)%3==0 && index!=0}">
                               <img :src="item.img" alt="">
                               <span></span>
                           </div>
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
            nav: [
                {text: '企业简介', title: 'COMPANY PROFILES'},
                {text: '组织架构', title: 'ORGANIZATION CHART'},
                // {text: '发展历程', title: ''},
                // {text: '集团文化', title: ''},
                {text: '合作伙伴', title: 'PARTNER'},
                {text: '荣誉资质', title: 'HONOR'}
            ],
            honor: [
                {img: require('./images/d1.png'), text: '2016年中国（杭州）互联网金融博览会', text1: '互联网金融创新平台奖'},
                {img: require('./images/d2.png'), text: '中国互联网金融行业百强企业', text1: '（浙江人众金融服务股份有限公司）'},
                {img: require('./images/d3.png'), text: '2016年中国（杭州）互联网金融博览会', text1: '互联网金融人气平台奖'},
                {img: require('./images/d4.png'), text: '杭州跨境电子商务协会', text1: '副会长单位'},
                {img: require('./images/d5.png'), text: '浙江省企业理财协会', text1: '副会长单位'},
                {img: require('./images/d6.png'), text: '浙江省企业理财协会', text1: '融资租赁（互联网金融）专业委员会'},
                {img: require('./images/d7.png'), text: '中国金融诚信联盟-AAA级信誉企业', text1: '（浙江人众金融服务股份有限公司）'},
                {img: require('./images/d8.png'), text: '中国金融诚信联盟-联盟成员单位', text1: '（浙江人众金融服务股份有限公司）'},
                {img: require('./images/d9.png'), text: '中国金融管理协会-副会长单位', text1: '（浙江人众金融服务股份有限公司）'},
                {img: require('./images/dl10.png'), text: '浙江大学&链钱集团', text1: '金融智能联合实验室'},
                {img: require('./images/dl11.png'), text: '浙江大学计算机学院', text1: '实习基地'}
            ],
            cooperation: [
                {img: require('./images/z1.png')},
                {img: require('./images/z2.png')},
                {img: require('./images/z3.png')},
                {img: require('./images/z4.png')},
                {img: require('./images/z5.png')},
                {img: require('./images/z6.png')},
                {img: require('./images/z7.png')},
                {img: require('./images/z8.png')},
                {img: require('./images/z9.png')},
                {img: require('./images/z10.png')},
                {img: require('./images/z11.png')},
                {img: require('./images/z12.png')}
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
    }
}
</script>
