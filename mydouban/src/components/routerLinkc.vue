<template>
        <div>
            <router-link to="/movie">影院热映</router-link>
            <router-link to="/radio">欧美新碟榜</router-link>
            <router-link to="/zhuce">注册账号</router-link>
             <router-link to="/login">登录豆瓣</router-link>
        </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

div{
    width:100%;
    height:1.4rem;
}

a{
   float:left;
    width:1.63rem;
    height:0.3rem;
    line-height: 0.3rem;
    background: #f6f6f6;
    font-size:0.14rem;
    text-align:center;
    padding:0.12rem 0;
    margin-right: 0.1rem;
    margin-bottom:0.1rem;
    text-decoration: none;
}
a:nth-of-type(1){
     margin-left:0.2rem;
}
a:nth-of-type(2){
    margin-right:0;
}
a:nth-of-type(3){
   margin-bottom:0;
    margin-left:0.2rem;
}
a:nth-of-type(4){
    margin-right:0;
    margin-bottom:0;
}
    


</style>