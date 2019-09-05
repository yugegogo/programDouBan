<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,hr,input,td,select,textarea{
	margin:0;
	padding: 0;
}
body{
    font-family: "微软雅黑";
    font-size:0.2rem;
    display:flex;
    flex-direction:column;
}
a{
  text-decoration: none;
  color:black;
}
ul,ol{
	list-style: none;
}
img{
	border:none;
}
html{
	font-size: 26.67vw;
}


#app {
  
  
}
</style>
