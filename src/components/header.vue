<style scoped lang="less">
  @import "../assets/css/index.less";
  header{ height: 2.5rem;.positionffixed;top: 0; left: 0; border-bottom: #e7e7e7 solid 1px; z-index: 100; background: #434a54;
    nav{ margin:auto; width: 100%; height: 100%; .fixmiddle;
      a{ color:white;}
      div{ line-height: 2.0rem; font-size:0.8rem;
          &:nth-of-type(1){flex: 1;
            .icon-icon-jte{ width:1.5rem; height: 1.5rem; margin-top: 0.8rem; }
          }
          &:nth-of-type(2){flex: 6;color:#e7e7e7;}
          &:nth-of-type(3){flex: 1;color:#e7e7e7;}
      }
    }

  }


</style>
<template>
  <div>
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-icon-jte" viewBox="0 0 32 32">
          <title>icon-jte</title>
          <path fill="none" stroke="#e7e7e7" stroke-width="1.1287" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" style="stroke: var(--color1, #d0985e)" d="M18.173 7.788l-8.917 8.917 8.917 8.861"></path>
        </symbol>
      </defs>
    </svg>
    <header>
      <nav>
        <div @click="gouback"><svg class="icon icon-icon-jte"><use xlink:href="#icon-icon-jte"></use></svg></div>
        <div>{{toptitles}}</div>
        <router-link to="/registration">
        <div>{{righttit}}</div>
        </router-link>
      </nav>
    </header>
  </div>

</template>
<script>
 export default {
     data(){
         return{

         }

     },
   props:['toptitles','righttit'],
   methods:{
     gouback(){
         this.$router.go(-1);
     }

   }

 }

</script>
