<style scoped lang="less">
  /* @import "../assets/css/index.less";*/
  @import "../../assets/css/font-awesome.css";
.index{ padding-bottom: 2.8rem ; background: #22262c;}
  img{ width: 100%; height: auto}
  .icon-icon-logo{width: 2.5rem;height: 2.5rem; float: left;}
  .swiper{ border-bottom:1px #575e68 solid;}
  section{ font-size: 0;
      .titlebox{ background:#434a54; color:#b3bac1;  font-size: 0.5rem; padding: 0.2rem; border-bottom: 2px solid #575e68; }
      .index-sideimg{ position: relative;  margin: 0; background: #22262c;
        .thisopacty{ position: absolute; top: 50%; left: 2rem; right: 2rem; margin-top: -1rem; padding: 0.5rem 0; color: white;font-size: 0.6rem; border: 1px solid #3bafda; background-color: rgba(59, 175, 218,0.6);
          i{height:0.5rem; width: 1px; background: white; display: inline-block;margin: 0 0.2rem; }
        }
      }
  }
  .external{position: relative;
    .text-titlebox{ position: absolute; bottom:0; left: 0; padding: 1rem 0; color: white; font-size: 0.8rem; right: 0; background:rgba(0,0,0,0.5); border-bottom: 1px solid #575e68;  }
  }
  article{ height: 2rem; border-top:8px #22262c solid; padding:0.4rem; text-align: left; line-height: 2rem;
    .icom{ height: 1.5rem; width: 1.5rem; overflow: hidden; border-radius: 100%;float: left; margin-right:0.3rem;
        img{height: 100%;}
    }
    span{ height: 100%; line-height: 1.5rem; color: white;float: left; font-size: 0.5rem;}
    div{font-size: 0.6rem; color: white; line-height: 0.8rem;
      &:nth-of-type(2){}
      &:nth-of-type(3){  color: #7e848a;}
    }
  }
  .ty_banpt{ overflow: hidden; padding-bottom: 0.1rem;border-bottom: 2px solid #575e68;}
  .ty_banpt .swiper-slide-prev, .ty_banpt .swiper-slide-next{opacity:0.5;transform:scale(.9)}
  .ty_banpt .swiper-slide-active{top:0;opacity:1;transform:scale(1)}
  .ty_banpt .swiper-slide img{ width:100%; }

</style>
<template>
  <div class="index">
    <header-index ></header-index>
    <!-- 首页第1栏 -->
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="item in ipers">
        <div class="external">
          <img :src="item.mgurl" alt="">
          <div class="text-titlebox">{{item.title}}</div>
        </div>
      </swiper-slide>

    </swiper>
    <!-- 首页第2栏 我玩过的游戏-->
    <section>
      <article>
        <div class="icom"><img src="../../assets/upload/side4.jpg"></div>
        <span class="title">来自广告</span>
      </article>
      <div class="ty_banpt">
      <swiper :options="swiperOption2" >
        <swiper-slide v-for="item in ipersto">
            <img :src="item.mgurl" alt="">
        </swiper-slide>
      </swiper>
      </div>
    </section>
    <!-- 首页第3栏 -->
    <section v-for="item in banner">
      <article>
        <div class="icom"><img :src="item.portrait"></div>
        <div class="facebook-name">{{item.from}}</div>
        <div class="facebook-date">{{item.name}}</div>
      </article>
      <img :src="item.url" >
      <div class="titlebox">{{item.title}}</div>
    </section>
    <!-- 首页第5栏 -->
    <section v-for="item in advert">
      <div class="index-sideimg">
        <img :src="item.url" alt="">
        <div class="thisopacty">最新游戏<i></i>{{item.title}}</div>
      </div>
      <!-- 首页第5栏 end-->
    </section>
    <!-- 首页第3栏 -->
    <footer-index></footer-index>
  </div>
</template>
<script>
import footerIndex from "../../components/footer"
import headerIndex from "../../components/indexheader"
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import api from "../../axios/axiso"
export default {
  name: 'hello',
  data () {
    return {
      ipers:[],
      ipersto:[],
      banner:[],
      advert:[],
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000
      },
      swiperOption2: {
        centeredSlides: true,
        slidesPerView: 1.3,
      }
    }
  },
  components:{
    headerIndex,
    footerIndex,
    swiper,
    swiperSlide
  },
  beforeCreate(){
      api.getdata("/api/index").then(({data})=>{
       this.ipers=this.ipers.concat(data[0].swiper);
       this.ipersto=this.ipersto.concat(data[1].swipertw);
       this.banner=this.banner.concat(data[2].banner);
       this.advert=this.advert.concat(data[3].advert);
      }).catch((error)=> {
        console.log(error);
      });
  }
}
</script>
