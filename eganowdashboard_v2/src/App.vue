<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        timer_: null
      }
    },
    methods : {
      setorstartTimer : function() {
        console.log(" My timer start now : ")
        this.timer_ = setTimeout(this.handleInactive,300000) //300000
      },
      handleInactive : function(){
        window.location.href ="/"
      },
      resetTimer: function() {

          clearTimeout(this.timer_)
      },
       setupTimers : function() {
        console.log(" Timer :: reset ")
          document.addEventListener("keypress", this.resetTimer, false);
          document.addEventListener("mousemove", this.resetTimer, false);
          document.addEventListener("mousedown", this.resetTimer, false);
          document.addEventListener("touchmove", this.resetTimer, false);
           this.setorstartTimer()
        }



    },
    created() {

      this.$watch('$route', (router) => {

        if(router.path === '/business/login') {

          this.resetTimer()
          return
        }
        this.resetTimer()
        this.setupTimers()
      })
    },


  }
</script>

<style>
#bkcolor{
   background: #0078D4;
 }
#table{
  overflow-x:scroll;
  max-width: 100%;
  display: block;
  white-space: nowrap;
}
#changeOccordionHeaderBackgroudColor {
  background: #F8F9FA !important;
}

 body, a, h1, h2, h3, h4, h5, h6 , ul , li{

   /*font-family: 'Roboto', sans-serif !important;*/
   font-family: 'Quicksand', sans-serif !important;
   /*font-family: 'Quintessential', cursive;*/
 }

.nav-second-level li a {
  color: #000 !important;
}

 label {
   font-weight: 500 !important;
   color:  #000 !important;
 }
</style>
