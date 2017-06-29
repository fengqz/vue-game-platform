<style scoped lang="less">
  @import "../assets/css/index.less";
  footer{ height: 2.5rem;.positionffixed; background: #434a54; bottom:0;left: 0; border-top: #e7e7e7 solid 1px; z-index: 200;
    nav{ margin:auto; width: 100%; height: 100%; .fixmiddle;
      div{ line-height: 2.0rem;flex: 1; color: #e7e7e7;
        a{color: #e7e7e7; font-size:0.7rem;
          span{display: block; height:1rem; margin: 0;line-height: 1.2rem;
            &:nth-of-type(1){font-size: 1rem;height:1.2rem;line-height:1rem; padding-top: 0.3rem;}
          }
        }
        .active{
          span{color:#21252c; }

        }
      }
    }

  }

</style>
<template>


  <div>
    <footer>
      <nav>
        <div>
          <router-link to="/home" class="tab-item external" active-class="active" >
              <span class="icon fa fa-gamepad"></span>
              <span class="tab-label">游戏推荐</span>
            </router-link>
        </div>
        <div>
            <router-link to="/gameclasify" class="tab-item external" active-class="active" >
              <span class="icon fa fa-gears"></span>
              <span class="tab-label">分类</span>
            </router-link>
        </div>
        <div>
            <router-link to="/square" class="tab-item external " active-class="active" >
              <span class="icon fa fa-cube"></span>
              <span class="tab-label">充值</span>
            </router-link>
        </div>
        <div>
            <router-link to="/personal" class="tab-item external " active-class="active" >
              <span class="icon fa fa-user-o"></span>
              <span class="tab-label">个人</span>
            </router-link>
        </div>

      </nav>
    </footer>
  </div>

</template>
<script>
 export default {
     data(){
         return{

         }

     },

   methods:{


   }

 }

</script>
