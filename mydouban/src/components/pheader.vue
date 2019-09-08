<template>
    <div id="header" >
            <span>{{title}}</span>
            <a v-if="href!=''" :href="href">更多</a>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        },
        href:{
            type:String,
            required:true
        }
    }
}
</script>
<style  scoped>
#header{
    width:100%;
    height:0.5rem;
    font-size:0.16rem;
    margin:0 auto;
    line-height:0.5rem;
   
}
#header span{
    float:left;
    color:#111111;
}
#header a{
    float:right;
    color:#42bd56;
}

</style>