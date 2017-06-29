<style scoped lang="less">
   @import "../../assets/css/index.less";
   .personal{ background: #22262c; }
  header{ height: 5.5rem; width: 100%; background: #616d7d; display: flex ;flex-direction: row ;flex-wrap: wrap ;justify-content: center ; align-items: center ; align-content: center ;
    .portrait{ position: relative;  background: #000; height: 2rem; width: 2rem; border-radius: 100%; border:#677584 solid 3px; padding: 3px; overflow: hidden;
        img{ width: 100px; height: auto; position:absolute; top:50%; left: 50%; margin: -40px ; }
    }
    .portname{ width: 12rem; height: 4rem; padding-top: 1.8rem; color: #cfd8e3; line-height: 1rem; text-align: left; font-size: 0.8rem;
      span{ display:inline-block; font-size: 0.6rem; }
      button{ padding: 0.1rem 0.2rem; margin-left: 0.5rem; outline: none; font-size: 0.4rem; border-radius: 4px; background: #3bafda; border: none; display: inline-block}

    }

  }
section{

   dl{.fixmiddle; background: #434a55; height: 2rem;  color: #bac5d2;border-bottom:#575e68 solid 1px; margin-bottom: 0.2rem;
     dt{ width: 1.5rem; height: 1.5rem; margin-left: 0.2rem;
       .douerr{width: 1.2rem; height: 1.2rem; margin-top: 0.1rem}
     }
     dd{
       &:nth-of-type(1){ flex: 2; text-align: left; font-size: 0.5rem; line-height: 1rem;}
       &:nth-of-type(2){ flex:0.5; text-align: right;
         .arrow-r{ width: 0.8rem; height: 0.8rem}
       }

     }
   }
  ul{border-bottom:#575e68 solid 1px; margin-bottom: 0.2rem;
    li{.fixmiddle;color: #bac5d2; background: #434a55;
      div{ height: 1.9rem; line-height: 1.9rem;
        &:nth-of-type(1){width: 1.6rem; margin-left: 0.2rem;
          .code{width: 1rem; height: 1rem; margin-top: 0.3rem;}
        }
        &:nth-of-type(2){ flex: 2; text-align: left; font-size: 0.5rem;border-bottom:#2b3037 solid 1px;}
        &:nth-of-type(3){ flex:0.5;text-align: right;border-bottom:#2b3037 solid 1px;
          .arrow-r{ width: 0.8rem; height: 0.8rem}
        }

      }
      &:last-child{
        div{ border: none}
      }
    }
  }
  .el-button{width: 90%;}
}


</style>
<template>
  <div class="personal">
      <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-douerr" viewBox="0 0 32 32">
          <title>douerr</title>
          <path fill="#e5a505" style="fill: var(--color1, #e5a505)" d="M16.087 0c-8.918 0-16.087 7.169-16.087 16.087s7.169 16.087 16.087 16.087c8.918 0 16.087-7.169 16.087-16.087-0.175-8.918-7.344-16.087-16.087-16.087zM20.109 22.732c-0.699 0.874-1.749 1.399-3.148 1.574v1.574h-1.924v-1.574c-1.049-0.175-2.098-0.525-2.973-1.224s-1.224-2.098-1.224-3.847v-0.874h4.197v1.049c0 1.049 0 1.749 0.175 2.098s0.35 0.35 0.699 0.35c0.35 0 0.525-0.175 0.699-0.35s0.175-0.525 0.175-0.874c0-0.874 0-1.574-0.175-1.924s-0.525-0.874-1.399-1.224-2.098-1.399-2.623-1.749-0.874-0.874-1.224-1.574-0.525-1.399-0.525-2.273c0-1.224 0.35-2.273 1.049-2.973s1.749-1.224 3.148-1.224v-1.399h1.924v1.399c1.224 0.175 2.273 0.525 2.798 1.224s0.874 1.574 0.874 2.798c0 0.175 0 0.35 0 0.699h-4.197v-0.699c0-0.699 0-1.224-0.175-1.399s-0.35-0.35-0.699-0.35c-0.175 0-0.525 0.175-0.525 0.35s-0.175 0.525-0.175 0.874c0 0.699 0.175 1.049 0.35 1.399 0.175 0.175 1.049 0.699 2.273 1.574 1.049 0.699 1.749 1.049 2.098 1.399s0.699 0.874 1.049 1.399 0.35 1.399 0.35 2.273c0.175 1.399-0.175 2.623-0.874 3.497z"></path>
        </symbol>
        <symbol id="icon-arrow-r" viewBox="0 0 17 32">
          <title>arrow-r</title>
          <path fill="none" stroke="#e0e0e6" stroke-width="1.9104" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" style="stroke: var(--color2, #e0e0e6)" d="M0.955 31.045l15.093-15.093-15.093-14.997"></path>
        </symbol>
        <symbol id="icon-code1" viewBox="0 0 32 32">
          <title>code1</title>
          <path fill="#df616d" style="fill: var(--color1, #df616d)" d="M17.103 9.379c-1.103 0-2.207 0-2.759 0.552l-3.862-0.552v2.207c-1.103 1.103-1.655 2.207-2.207 3.31h-2.207v3.31h2.207c1.103 3.31 4.414 5.517 8.276 5.517 4.966 0 8.828-3.31 8.828-7.172s-3.862-7.172-8.276-7.172zM11.586 14.897c-0.552 0-1.103-0.552-1.103-1.103s0.552-1.103 1.103-1.103 1.103 0.552 1.103 1.103c0 0.552-0.552 1.103-1.103 1.103z"></path>
          <path fill="#df616d" style="fill: var(--color1, #df616d)" d="M16 0c-8.828 0-16 7.172-16 16s7.172 16 16 16 16-7.172 16-16-7.172-16-16-16zM21.517 4.966c1.655 0 3.31 1.655 3.31 3.31 0 0.552 0 1.103-0.552 1.103s-0.552-0.552-1.103-0.552c0 0 0-0.552 0-0.552 0-1.103-1.103-2.207-2.207-2.207s-1.655 0.552-2.207 1.103c-0.552 0-0.552 0-1.103 0 1.103-1.103 2.207-2.207 3.862-2.207zM11.586 26.483c-1.103 0-2.207-1.103-2.207-2.207 0-0.552 0-1.103 0.552-1.103s0.552 0.552 1.103 0.552c0 0 0 0.552 0 0.552 0 0.552 0.552 1.103 1.103 1.103s1.103-0.552 1.103-0.552c0.552 0 0.552 0 1.103 0.552-1.103 0.552-1.655 1.103-2.759 1.103zM22.621 26.483c-1.103 0-1.655-0.552-2.207-1.655 0.552 0 0.552 0 1.103-0.552 0 0.552 0.552 0.552 1.103 0.552s1.103-0.552 1.103-1.103c0 0 0-0.552 0-0.552 0.552 0 0.552-0.552 1.103-0.552 0 0.552 0.552 0.552 0.552 1.103-0.552 2.207-1.655 2.759-2.759 2.759zM17.103 24.828c-4.414 0-7.724-2.207-9.379-5.517h-1.655c-0.552 0-1.103-0.552-1.103-1.103v-3.31c0-0.552 0.552-1.103 1.103-1.103h1.655c0.552-1.103 1.103-1.655 1.655-2.759v-1.655c0-0.552 0-0.552 0.552-0.552 0 0 0.552-0.552 0.552-0.552s0 0 0 0l3.31 0.552c1.103 0 2.207-0.552 2.759-0.552 5.517 0 9.931 3.862 9.931 8.276s-4.414 8.276-9.379 8.276z"></path>
        </symbol>
        <symbol id="icon-code2" viewBox="0 0 32 32">
          <title>code2</title>
          <path fill="#f2b819" style="fill: var(--color2, #f2b819)" d="M24.755 11.472c0 4.668-3.784 8.453-8.453 8.453s-8.453-3.784-8.453-8.453c0-4.668 3.784-8.453 8.453-8.453s8.453 3.784 8.453 8.453z"></path>
          <path fill="#f2b819" style="fill: var(--color2, #f2b819)" d="M32 29.585c0-4.226-2.415-8.453-6.038-10.868-2.415 3.019-5.434 4.83-9.057 4.83-4.226 0.604-8.453-1.208-10.868-4.226-3.623 2.415-6.038 7.245-6.038 12.075 0 0 0 0.604 0 0.604h32c0-0.604 0-1.208 0-2.415z"></path>
          <path fill="#f2b819" style="fill: var(--color2, #f2b819)" d="M5.434 15.698v-7.849c0 0 0 0 0 0 1.811-4.226 6.038-6.641 10.264-6.641 4.83 0 8.453 3.019 10.868 6.641v7.849c2.415 0 3.623-1.811 3.623-4.226 0-1.811-1.208-3.019-2.415-3.623-1.811-4.83-6.038-7.849-11.472-7.849s-10.264 3.019-12.075 7.849c-1.811 0.604-2.415 1.811-2.415 3.623 0 2.415 1.811 4.226 3.623 4.226z"></path>
        </symbol>
        <symbol id="icon-code3" viewBox="0 0 32 32">
          <title>code3</title>
          <path fill="#3fa5cc" style="fill: var(--color3, #3fa5cc)" d="M31.418 5.236h-9.309c0.582-0.582 0.582-1.164 0.582-1.745 0-1.745-1.745-3.491-3.491-3.491s-3.491 1.745-3.491 3.491c0 0.582 0 1.164 0.582 1.745h-1.164c0.582-0.582 0.582-1.164 0.582-1.745 0-1.745-1.164-3.491-2.909-3.491s-3.491 1.745-3.491 3.491c0 0.582 0 1.164 0.582 1.745h-9.309c0 0-0.582 0.582-0.582 0.582v9.309c0 0.582 0.582 0.582 0.582 0.582h13.382v-9.309h3.491v9.309h13.382c0.582 0 0.582-0.582 0.582-0.582v-9.309c0.582 0 0-0.582 0-0.582z"></path>
          <path fill="#3fa5cc" style="fill: var(--color3, #3fa5cc)" d="M18.618 17.455h-1.164v13.382h-2.909v-13.382h-11.636v13.964c0 0.582 0.582 0.582 0.582 0.582h25.018c0.582 0 0.582-0.582 0.582-0.582v-13.964h-10.473zM18.618 30.836v0c0 0 0-0.582 0-0.582v0.582z"></path>
        </symbol>
        <symbol id="icon-code5" viewBox="0 0 32 32">
          <title>code5</title>
          <path fill="#70bc5f" style="fill: var(--color4, #70bc5f)" d="M30.255 11.055c0-3.491-2.909-6.4-6.4-6.4-2.327 0-4.073 1.164-5.236 2.327h-5.236c-1.164-1.745-3.491-2.909-5.236-2.909-3.491 0-6.4 2.909-6.4 6.4l-1.745 13.382c0 2.327 1.745 4.073 4.073 4.073 1.164 0 2.327-0.582 2.909-1.745 0 0 0 0 0 0l4.073-8.727h9.309l4.073 8.727c0 0 0 0 0 0 0.582 1.164 1.745 1.745 2.909 1.745 2.327 0 4.073-1.745 4.073-4.073l-1.164-12.8zM9.891 12.218h-1.745v1.745c0 0.582-0.582 0.582-0.582 0.582-0.582 0-0.582-0.582-0.582-0.582v-1.745h-2.327c-0.582 0-0.582-0.582-0.582-0.582 0-0.582 0.582-0.582 0.582-0.582h1.745v-2.327c0-0.582 0.582-0.582 0.582-0.582 0.582 0 0.582 0.582 0.582 0.582v1.745h1.745c0.582 0 0.582 0.582 0.582 0.582 0.582 0.582 0.582 1.164 0 1.164zM18.036 13.382h-4.073c-0.582 0-0.582-0.582-0.582-0.582 0-0.582 0.582-0.582 0.582-0.582h4.073c0.582 0 0.582 0.582 0.582 0.582 0 0.582-0.582 0.582-0.582 0.582zM20.364 11.055c-0.582 0-0.582-0.582-0.582-0.582s0.582-0.582 0.582-0.582h1.164c0.582 0 0.582 0.582 0.582 0.582s0 0.582-0.582 0.582h-1.164zM23.273 14.545h-1.745c-0.582 0-0.582-0.582-0.582-0.582 0-0.582 0.582-0.582 0.582-0.582h1.745c0.582 0 0.582 0.582 0.582 0.582 0 0.582-0.582 0.582-0.582 0.582zM24.436 9.309c-0.582 0-0.582-0.582-0.582-0.582 0-0.582 0.582-0.582 0.582-0.582h1.164c0.582 0 0.582 0.582 0.582 0.582 0 0.582-0.582 0.582-0.582 0.582h-1.164zM26.764 13.382h-1.164c-0.582 0-0.582-0.582-0.582-0.582 0-0.582 0.582-0.582 0.582-0.582h1.164c0.582 0 0.582 0.582 0.582 0.582 0 0.582 0 0.582-0.582 0.582z"></path>
        </symbol>
        <symbol id="icon-code4" viewBox="0 0 32 32">
          <title>code4</title>
          <path fill="#fff" style="fill: var(--color5, #fff)" d="M9.891 13.964v-2.327c0-0.582-0.582-1.164-1.164-1.164-1.164 0-1.745 0.582-1.745 1.164v2.327l0.582 1.164c0 0 0 0.582 0 0.582s0 0.582-0.582 0.582l-1.745 1.164v1.745c0 0.582 0.582 0.582 0.582 0.582h5.236c0.582-0.582 0.582-0.582 0.582-1.164v-1.164l-2.327-2.327 0.582-1.164z"></path>
          <path fill="#fff" style="fill: var(--color5, #fff)" d="M30.836 6.4h-13.964v-3.491c0-0.582-0.582-0.582-0.582-0.582h-15.709c0 0-0.582 0.582-0.582 0.582v25.018c0 0.582 0.582 0.582 0.582 0.582h9.309c0.582 0 0.582-0.582 0.582-0.582v-3.491h1.164v3.491c0 0.582 0.582 0.582 0.582 0.582h6.4c0.582 0 0.582-0.582 0.582-0.582v-3.491h1.164v3.491c0 0.582 0.582 0.582 0.582 0.582h9.309c0.582 0 0.582-0.582 0.582-0.582v-20.945c0.582-0.582 0-0.582 0-0.582zM12.8 18.618c0 1.164-1.164 1.745-1.745 1.745h-5.236c-1.164 0-1.745-1.164-1.745-1.745v-1.745c0 0 0-0.582 0.582-0.582l2.327-1.164-1.164-0.582c0 0 0 0 0-0.582v-2.327c0-1.164 1.164-2.327 2.327-2.327s2.327 1.164 2.327 2.327v2.327c0 0 0 0 0 0.582v0.582l2.327 1.164c0 0 0.582 0.582 0.582 0.582v1.745zM26.764 20.945h-10.473c-0.582 0-0.582-0.582-0.582-0.582 0-0.582 0.582-0.582 0.582-0.582h10.473c0.582 0 0.582 0.582 0.582 0.582s0 0.582-0.582 0.582zM26.764 16.873h-10.473c-0.582 0-0.582-0.582-0.582-0.582 0-0.582 0.582-0.582 0.582-0.582h10.473c0.582 0 0.582 0.582 0.582 0.582s0 0.582-0.582 0.582zM26.764 12.8h-10.473c-0.582 0-0.582-0.582-0.582-0.582 0-0.582 0-0.582 0.582-0.582h10.473c0.582 0 0.582 0 0.582 0.582s0 0.582-0.582 0.582z"></path>
        </symbol>
      </defs>
    </svg>
    <header>
      <div class="portrait">
        <img src="../../assets/upload/gamelog.jpg" >
      </div>
      <div class="portname">游戏爱好者<i class="fa fa-pencil fa-fw"></i>
        <br>
        <span>账号：809781066</span><button>修改密码</button></div>
    </header>
    <section>
      <dl>
        <dt><svg class="douerr"><use xlink:href="#icon-douerr"></use></svg></dt>
        <dd>游戏币充值</dd>
        <dd> <svg class="arrow-r"><use xlink:href="#icon-arrow-r"></use></svg></dd>
      </dl>
      <ul>
        <li>
          <div><svg class="code"><use xlink:href="#icon-code1"></use></svg></div>
          <div>游戏币充值</div>
          <div> <svg class="arrow-r"><use xlink:href="#icon-arrow-r"></use></svg></div>
      </li>
        <li>
          <div><svg class="code"><use xlink:href="#icon-code2"></use></svg></div>
          <div>游戏币充值</div>
          <div> <svg class="arrow-r"><use xlink:href="#icon-arrow-r"></use></svg></div>
        </li>
        <li>
          <div><svg class="code"><use xlink:href="#icon-code3"></use></svg></div>
          <div>游戏币充值</div>
          <div> <svg class="arrow-r"><use xlink:href="#icon-arrow-r"></use></svg></div>
        </li>
      </ul>
      <dl>
        <dt><svg class="douerr"><use xlink:href="#icon-code4"></use></svg></dt>
        <dd>游戏币充值</dd>
        <dd> <svg class="arrow-r"><use xlink:href="#icon-arrow-r"></use></svg></dd>
      </dl>
      <dl>
        <dt><svg class="douerr"><use xlink:href="#icon-code5"></use></svg></dt>
        <dd>游戏币充值</dd>
        <dd> <svg class="arrow-r"><use xlink:href="#icon-arrow-r"></use></svg></dd>
      </dl>

        <el-button class="el-button" type="primary" >退出当前账号</el-button>

    </section>
    <footer-index></footer-index>
  </div>
</template>


<script>
  import logSvg from '../../components/logosvg'
  import footerIndex from "../../components/footer"
export default {

  data () {
    return {

    }
  },
  components:{
    footerIndex,
    logSvg
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

