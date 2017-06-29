
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../assets/css/index.less";
  @import "../../assets/css/font-awesome.css";

  .gameclasify{width: 100%; overflow: hidden; padding-top: 2.5rem; padding-bottom: 2.7rem;
    section{ width: 100%;
      dl{.fixmiddle; border-bottom: #505965 solid 1px; height: 4.5rem; padding-top: 0.2rem;
           dd{ padding: 0; margin: 0;
             &:nth-of-type(1){flex: 1; text-align: center; font-size: 0.8rem; color: #4e91d2;  vertical-align:middle;display:table-cell; line-height: 4rem;}
             &:nth-of-type(2){flex: 10;text-align: left; display: inline-flex;
               div{ height: 100%;vertical-align:middle;display:table-cell;
                 &:nth-of-type(1){ width: 3.2rem; height: 3.2rem; overflow: hidden; border-radius: 6px;
                   img{ width: 100%; height: 100%;}
                 }
                 &:nth-of-type(2){font-size: 0.4rem;  flex:3; color: white; padding-left:8px;
                   span{ display: block;
                     &:nth-of-type(1){ font-size: .8rem;}
                     &:nth-of-type(2){ font-size: .5rem; padding-top: 10px; color:#bfc7d1; }
                   }
                   p{ display: inline-block; margin-left: 0.2rem;
                     span{ display: inline-block;font-size: .5rem !important;color:#bfc7d1!important; padding: 2px 4px!important; border: 1px #bfc7d1 solid; border-radius: 4px; }
                   }
                 }
               }
             }
             &:nth-of-type(3){flex: 3; text-align: center; display: block; padding-right: 0.3rem;
                i{ font-size: 0.6rem; color: #46aede; display: block;  margin-top: -20px;}
               span{display: block;
                 &:nth-of-type(1){font-size: 0.8rem; color: #46aede; margin-bottom: 10px;}
                 &:nth-of-type(2){font-size: 0.5rem; padding: 0.3rem; color:white; background: #46aede; border-radius: 6px;}
               }
             }
           }
         }
       }
      }


</style>
<template>
  <div class="gameclasify">
    <header-top :toptitles=toptitle :righttit=righttits></header-top>
    <section>
     <dl v-for="(item,key) in list">
        <dd>{{key+1}}</dd>
        <dd>
          <div><img :src=item.mgurl></div>
          <div>
            <span>{{item.title}}</span>
            <span>{{item.introduce}}</span>
            <p v-for="tbk in item.type">
              <span>{{tbk}}</span>
            </p>
          </div>
        </dd>
        <dd>
          <i class="fa fa-heart-o"></i>
          <span>9.6</span>
          <span>开始游戏</span>
        </dd>
      </dl>
      <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" spinner="bubbles">
          <span slot="no-results"> 加载失败。。。 </span>
          <span slot="no-more">已经到底了！！！！ </span>
      </infinite-loading>
  </section>
    <footer-index></footer-index>
  </div>
</template>

<script>
  import headerTop from "../../components/header"
  import footerIndex from "../../components/footer"
  import api from "../../axios/axiso"
 import InfiniteLoading from 'vue-infinite-loading';
export default {
  name: 'hello',
  data () {
    return {
      toptitle:"游戏分类",
      righttits:"搜索",
      goodslistid: 1,
      pagelist:0,
      list: []
    }
  },
  components:{
    headerTop,
    footerIndex,
    InfiniteLoading
  },
/*  beforeMount:{


  },*/
  methods: {
    onInfinite() {
        setTimeout(()=>{
        api.gameclasify({
          params: {
            id: this.goodslistid,
          }
        }).then(({data})=>{
          this.list = this.list.concat(data[0].list);
          this.pagelist+=data[0].list.length;
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
         if(this.list.length===this.pagelist){
            this.goodslistid+=1;
          }

        }).catch(error=>{
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          console.log("error");

        });

      },1000);
    },
  }


}
</script>

