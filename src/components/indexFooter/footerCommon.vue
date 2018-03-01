<template>
   <!--底部连接-->
        <footer>
            <div class="center">
                <div class="fl left">
                    <p>
                       <i class="iconfont">&#xe654;</i>
                       浙江链钱科技集团有限公司版权所有
                    </p>
                    <p>浙ICP备17029694号</p>
                    <p>联系方式</p>
                    <p>0571-56707129</p>
                </div>
                <div class="fl right">
                    <ul>
                        <li>关于链钱</li>
                        <li>集团简介</li>
                        <li>组织架构</li>
                        <li>发展方向</li>
                        <li>集团文化</li>
                        <li>获得荣誉</li>
                    </ul>
                    <ul>
                        <li>关于合作</li>
                        <li>招贤纳士</li>
                        <li>合作伙伴</li>
                    </ul>
                     <ul>
                        <li>联系我们</li>
                    </ul>
                </div>
                <div class="fl code">
                    <img src="./images/code.jpg" alt="">
                </div>
            </div>
        
        </footer>
</template>
<script>
import $ from 'jQuery';
export default {
    data () {
        return {
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>
<style lang='scss'>
@import  '../../assets/scss/normalize.css';
@import  '../../assets/scss/common.scss';
@import "../../assets/fonts/iconfont.css";
footer{
    width:100%;
    height:400px;
    background:#151312;
    color:#fff;
    .left{
        width:280px;
        padding-top:94px;
        margin-right:120px;
        p:first-child{
            font-size:16px;
            line-height:30px;
        }
        p:nth-child(2){
            font-size:16px;
            line-height:30px;
            margin-bottom:42px;
        }
        p:nth-child(3){
            font-size:18px;
            line-height:41px;
        }
         p:nth-child(4){
            font-size:37px;
            line-height:58x;
        }

    }
    .right{
        padding-top:84px;
        ul{
             width:100px;
             margin-right:100px;
             float:left;
            li{
                font-size:14px;
                line-height:28px;
            }
            li:first-child{
                font-size:16px;
                line-height:46px;
                border-bottom:1px solid #424140;
                margin-bottom:10px;
            }
        }
    }
    .code{
        padding-top:100px;
    }
}
</style>