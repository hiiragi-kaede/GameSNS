<template>
  <div id="app">
    <div id="nav">
      <ul class="menu">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/friend">Friend</router-link></li>
            <li><router-link to="/search">Search</router-link></li>
            <li><router-link to="/logout">Logout</router-link></li>
        </ul>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  background-color: powderblue;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 30px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

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
    width: 600px;
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
