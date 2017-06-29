<style scoped lang="less">
  @import "../../assets/css/index.less";
  .square{ padding: 2.7rem 0;background: #32373e;
    .user{ width: 100%; height:5rem; background: #3a4049;  border-bottom: 1px #575e68 solid;display: flex ;align-items: center;
      justify-content: center ;
      .portrait{
          .icon-icon-logo{ width: 3rem; height: 3rem;}
      }
      .usermsg{ font-size: 0.8rem; color:#d3d3d3; }
    }
    .recharge{width: 90%;padding:1rem 1rem 2rem 1rem; margin: auto; margin-top:5%; background: #3a4049;color:#d3d3d3;font-size: 0.6rem; text-align: left;
      .rechinput{}
      dl{overflow: hidden;
        dt{float: left}
        dd{float: right}
      }

      .rowe{ padding: 0.5rem 0 1.5rem;.fixmiddle;
        .col-25{ flex: 1; padding: 0.35rem 0; background: none;outline: none; margin: 0 6px; position: relative; border:1px solid #7a8493; text-align: center; font-size: 0.7rem;
          i{ display: none;}
        }
        .activ{ border:1px solid #3bafda;border-radius: 0.2rem;
           i{display: block; border-radius:0 0 0.2rem 0;  position: absolute;width: 1rem;  height: 1rem; background: url(../../assets/images/check.png) right bottom no-repeat; background-size: 1rem; right: 0; bottom: 0px; }
        }
      }
      .sque{ width: 85%; margin: auto;
        button{ width: 100%;}

      }

    }
  }

</style>
<template>
  <div class="square">
    <log-svg></log-svg>
    <header-top :toptitles=toptitle :righttit=righttits></header-top>
    <section>
      <div class="user">
       <div class="portrait"> <svg class="icon icon-icon-logo"><use xlink:href="#icon-icon-logo"></use></svg></div>
        <div class="usermsg">
          <div>账号：809781066</div>
          <div>剩余奇币：0 <span class="colorThis">+100</span></div>
        </div>
      </div>
    </section>
    <section>
      <div class="recharge">
        <el-input placeholder="请输充值金额"  class="rechinput" >
          <template slot="prepend"><i class="fa fa-rmb"></i></template>
        </el-input>
        <dl>
          <dt>奇币<em>0</em></dt>
          <dd>1元＋100奇币</dd>
        </dl>
        <label >选择充值方式</label>
        <div class="rowe">
          <button class="col-25 activ">支付宝<i></i></button>
          <button class="col-25">财付通<i></i></button>
          <button class="col-25">银联<i></i></button>
          <button class="col-25">微信支付<i></i></button>
        </div>
        <div class="sque">
          <el-button type="primary">去支付</el-button>
        </div>
      </div>
    </section>
    <section>
      <p style="text-align: center; margin:2rem 0 0; font-size: 0.4rem; color: #7a8493;">注：充值遇到问题，请联系客服</p>
      <p style="text-align: center; margin:0; font-size: 0.4rem;color: #7a8493;">电话：<span class="colorThis">0592－8889887</span></p>

    </section>

    <footer-index></footer-index>
  </div>
</template>

<script>
  import headerTop from "../../components/header"
  import logSvg from "../../components/logosvg"
  import footerIndex from "../../components/footer"
export default {
  data () {
    return {
      toptitle:"平台充值",
      righttits:"登录"

    }
  },
  components:{
    headerTop,
    footerIndex,
    logSvg

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

