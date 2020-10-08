<style>
    /* .myheader{
        background-color:powderblue;
    } */
    .headertext{
        color:white;
         text-shadow:  2px  2px 5px #777 ,
               -2px  2px 5px #777 ,
                2px -2px 5px #777 ,
               -2px -2px 5px #777;
    }

    ul.menu{
        display: table;
        table-layout: fixed;
        width: 400px;
        padding-bottom: 10px;
    }
    ul.menu li{
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        background-color: powderblue;
        border-left: 2px solid white;
    }
    ul.menu li a{
        display: block;
        text-decoration: none;
        color: white;
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


