<template>
  <div>
    <div class="footer idx-minwidth">
      <div class="container">
        <div class="footer-wrap idx-width">

        </div>
        <div class="footer-link">
          <a href="/about/us" target="_blank" title="关于我们">关于我们</a>

          <a href="/about/contact" target="_blank" title="联系我们">联系我们</a>

          <a href="https://github.com/yuandage/Course-Learning-Client" target="_blank">代码托管</a>
        </div>
        <div class="footer-copyright">
          <p>©&nbsp;2020&nbsp;&nbsp;&nbsp;版权归属于
            YuanHong</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
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
