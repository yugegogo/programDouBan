<template>
    <div id="outerbox">
         <h1>{{title}}</h1>
            <li v-for="(v,i) in houseobj" :key="i" >
                <div id="box">
                    <div id="innerbox">
                        <img :src="v.images.small">
                        <b>{{v.title}}</b>
                    </div>
                    <span>{{v.group_member}}人</span>
                </div>
                <p>{{v.group_topic.time}}{{v.group_topic.title}}</p>
            </li>
        <a :href="more">{{more}}</a>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        },
        houseobj:{
            type:Array,
            required:true
        },
        more:String
    }
    
}
</script>
<style scoped>
#outerbox{
    width:100%;
}
h1{
    font-size:0.16rem;
    color:#111111;
    line-height:0.16rem;
    padding:0.1rem;
}
#innerbox{
    margin-bottom:0.1rem;
}
 b{
    font-size:0.14rem;
    font-weight:100;
    line-height: 0.5rem;
    float:left;
    margin-left:0.1rem;
    width:2rem;
    height:0.32rem;
   white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
span{
    font-size:0.14rem;
    color:#cccccc;
    line-height:0.5rem;
    display:inline-block;
    width:0.8rem;
    overflow: hidden;
}
img{
    width:0.5rem;
    height:0.5rem;
    float:left;
}
#box{
    display:flex;
    justify-content:space-between;
}
p{
    font-size:0.12rem;
    color:#aaaaaa;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    margin-bottom:0.1rem;
}
    
a{
    font-size:0.16rem;
    color:#42bd56;
    display:block;
    text-align:center;
    margin:0.1rem 0;
}
li{
    list-style:none;
    border-bottom:1px solid #f2f2f2;
    padding:0.1rem;
}
</style>
