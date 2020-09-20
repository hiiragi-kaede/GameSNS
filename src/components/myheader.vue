<style>
    .myheader{
        background-color: aqua;
    }
    .headertext{
        color:white;
         text-shadow:  2px  2px 5px #777 ,
               -2px  2px 5px #777 ,
                2px -2px 5px #777 ,
               -2px -2px 5px #777;
    }
</style>

<template>
    <div class="myheader">
        <p class="headertext" id="headertext">
        </p>
        <button v-if="b_state" @click="show" height="10">show</button>
        <button v-else @click="hide" height="10">hide</button>
    </div>
</template>

<script>
export default {
  data(){
    return{
        b_state:true
    }
  },
  methods:{
    show(){
        var h="aiueo<br>完成形";
        document.getElementById('headertext').innerHTML=h;
        this.b_state=false;
    },
    hide(){
        var h="";
        document.getElementById('headertext').innerHTML=h;
        this.b_state=true;
    }
  }  
}
</script>


