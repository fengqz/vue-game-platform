<style scoped lang="less">
  @import "../assets/css/index.less";
  header{ height: 2.5rem;.positionffixed;top: 0; left: 0; border-bottom: #e7e7e7 solid 1px; z-index: 100; background-color: rgba(67, 74, 84,0.8);

    nav{ margin:auto; width: 100%; height: 100%; .fixmiddle;
      div{ line-height: 2.0rem;
          &:nth-of-type(1){flex: 10;
            .icon-icon-logo{ width:2rem; height: 2rem; float: left; }
          }
          &:nth-of-type(2){flex: 2;color:#e7e7e7;}
          &:nth-of-type(3){flex: 2;color:#e7e7e7;}
          &:nth-of-type(4){flex: 2;color:#e7e7e7;}
      }
    }

  }



</style>
<template>


  <div>
    <log-svg ></log-svg>
    <header>
      <nav>
        <div>
           <svg class="icon icon-icon-logo"><use xlink:href="#icon-icon-logo"></use></svg>
        </div>
        <div>
          <i class="fa fa-search"></i>
        </div>
        <div>
          <i class="fa fa-edit"></i>
        </div>
        <div>
          <i class="fa fa-user-o"></i>
        </div>
      </nav>
    </header>
  </div>

</template>
<script>
  import logSvg from "./logosvg"
 export default {
     data(){
         return{

         }

     },
   components:{
     logSvg
   }


 }

</script>
