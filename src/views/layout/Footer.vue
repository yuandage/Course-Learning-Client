<template>
    <div>
        <div class="footer idx-minwidth">
            <div class="container">
                <div class="footer-wrap idx-width">
                    <div class="footer-sns clearfix">
                        <div class="l">
                            <a href="javascript:void(0);" class="footer-sns-weixin" target="_blank" title="微信">
                                <i class="footer-sns-weixin-expand"></i>
                            </a>
                            <p>官方公众号</p>
                        </div>
                        <div class="l"> <a href="http://weibo.com/u/3306361973" class="footer-sns-weibo hide-text"
                                target="_blank" title="新浪微博">新浪微博</a>
                            <p>官方微博</p>
                        </div>
                    </div>
                </div>
                <div class="footer-link">
                    <!-- <a href="/about/us" target="_blank" title="关于我们">关于我们</a> --> <a href="/index/companytrain"
                        target="_blank" title="企业合作">企业合作</a> <a href="/about/job" target="_blank" title="人才招聘">人才招聘</a>
                    <a href="/about/contact" target="_blank" title="联系我们">联系我们</a> <a href="/about/recruit"
                        target="_blank" title="讲师招募">讲师招募</a> <a href="/help" target="_blank" title="帮助中心">帮助中心</a> <a
                        href="/user/feedback" target="_blank" title="意见反馈">意见反馈</a> <a href="http://daxue.imooc.com/"
                        target="_blank">慕课大学</a> <a href="https://github.com/yuandage/Course-Learning-Client"
                        target="_blank">代码托管</a> <a href="/about/friendly" target="_blank" title="友情链接">友情链接</a> </div>
                <div class="footer-copyright">
                    <p>©&nbsp;2019&nbsp;&nbsp;&nbsp;版权归属于
                        YuanHong</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .footer {
        padding: 30px 0;
    }

    .container {
        position: relative;
        width: 1152px;
        margin: 0 auto;
    }

    .footer .footer-wrap {
        position: absolute;
        width: auto;
        right: 0;
        bottom: 0;
    }

    .idx-width {
        width: 1200px;
        margin: 0 auto;
    }

    .footer .footer-sns {
        padding: 0;
    }

    .footer-sns {
        padding-top: 30px;
        text-align: center;
    }

    .footer .footer-sns>div:first-child {
        margin-right: 32px;
    }

    .l {
        float: left;
    }

    .hide-text {
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
    }

    .footer .footer-sns a {
        color: #D9DDE1;
    }

    .footer-sns a {
        display: inline-block;
        height: 32px;
        width: 32px;
        vertical-align: middle;
        background-image: url(../../assets/idx-btm.png);
        background-repeat: no-repeat;
        margin: 0 9px;
    }

    .footer-sns-weixin {
        position: relative;
        background-position: -52px -221px;
        background-image: url(../../assets/idx-btm.png);
    }

    .footer-sns-weixin:hover i {
        display: block;
    }

    .footer-sns-weixin i {
        position: absolute;
        display: none;
        width: 172px;
        height: 212px;
        left: -77px;
        bottom: 40px;
        background: url(../../assets/elevator.png?t=0705) no-repeat 0 0;
    }

    .footer-sns-weibo {
        background-position: 0 -221px;
    }

    .footer a {
        display: inline-block;
        font-size: 14px;
        color: #4D555D;
        line-height: 28px;
    }

    .footer .footer-sns p {
        font-size: 12px;
        color: #4D555D;
        line-height: 24px;
        margin-top: 4px;
    }

    .footer .footer-link {
        text-align: left;
        border: none;
        padding: 0;
    }

    .footer-link {
        padding: 25px 0;
        margin: 0 auto;
        text-align: center;
        border-bottom: 1px solid #d0d6d9;
    }

    .footer-link a {
        margin: 0 12px;
        color: #99a1a6;
    }

    .footer .footer-copyright {
        font-size: 12px;
        line-height: 14px;
        padding: 0;
        padding-left: 10px;
        text-align: left;
        margin-top: 8px;
        color: #93999F;
        line-height: 24px;
    }

    .moco-emoji {
        width: 18px;
        height: 18px;
        margin: 0 !important;
    }
</style>