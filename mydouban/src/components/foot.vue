<template>
    <div id="box">
        <div id="f1">
            <img src="../../static/img/logo.png" >
             <p>豆瓣<span>我们的精神角落</span></p>
        </div>
        <a href="#">去App Store 免费下载 iOS客户端</a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
#box{
    width:100%;
    padding:0.3rem 0;
    text-align:center;
}
img{
    width:0.5rem;
    height:0.5rem;
    float:left;
}
#f1{
  overflow: hidden;
  margin-bottom:0.1rem;
  margin-left:1rem;
}
p{
    font-size:0.22rem;
    color:#111111;
     float:left;
     margin-left:0.1rem;
     text-align: left;
  
}
p span{
    display: block;
    font-size:0.16rem;
}
a{
    display: block;
    text-decoration: none;
    color:#42bd56;
    font-size:0.14rem;
   
   
    
}

</style>