<template>
    <div class="container con">
        <p id="pOne">
              <router-link to="shouye">豆瓣</router-link>
        </p>
        <p id="pTwo">
            <router-link to="/movie">电影</router-link>
            <router-link to="book">图书</router-link>
            <router-link to="/radio">广播</router-link>
            <router-link to="/xiaozu">小组</router-link>
            <router-link class="el-icon-s-operation" to="/daohang"></router-link>
        </p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.con{
    position: fixed;
    top:0;
    left: 0;
    background:white;
    width:100%;
    z-index: 99;
}
div{
    height:0.58rem;
    line-height:0.58rem;
    border-bottom:1px solid #f3f3f3;
    padding:0 0.1rem;
}
#pOne{
    font-size:0.2rem;
    float:left;
}
#pOne a{
    color:#05b512;
    text-decoration: none;
}
#pTwo{
    float:right;
    font-size:0.16rem;
   
}
#pTwo a{
    padding:0 0.07rem;
     text-decoration: none;
}
#pTwo a:nth-of-type(1){
    color:#2384e8;

}
#pTwo a:nth-of-type(2){
    color:#9f7860;
    
}
#pTwo a:nth-of-type(3){
    color:#e4a813;
}
#pTwo a:nth-of-type(4){
    color:#2ab8cc;
}
#pTwo a:nth-of-type(5){
    color:#00b600;
    font-size:0.2rem;
    margin-right:0.1rem;
}


</style>