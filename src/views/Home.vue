<template>
  <div>
    <body>
      <h1>
        This is a Home Page
      </h1>
      <p v-if="msg.length > 0">
      {{msg}}
      </p>
      <p v-else>
        no text
      </p>
      <input type="text" v-model="msg">
      <button @click="clear()">clear</button>
    </body>
  </div>
</template>

<script>

export default{
  components:{
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