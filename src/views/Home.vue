<template>
  <div>
    <myheader></myheader>
    <body>
      <p v-if="msg.length > 0">
      {{msg}}
      </p>
      <p v-else>
        no text
      </p>
      <input type="text" v-model="msg">
      <button @click="clear()">clear</button>  
    </body>
    <APITest></APITest>
  </div>
</template>

<script>
import myheader from './myheader'
import APITest from './APITest'

export default{
  components:{
    myheader,
    APITest
  },
  data(){
    return{
      msg:"Hello World!"
    }
  },
  methods:{
    clear(){
      this.msg=""
    }
  }
}
</script>>