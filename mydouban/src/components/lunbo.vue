<template>
    <div  class="container">
        
        <ul>
            <li v-for="(v,i) in movieObj" :key="i">
                <img :src="v.img">
                <h5>{{v.movieName}}</h5>
                <p v-if="v.num">星星星星星<span>{{v.num}}</span></p>
                <p v-else>暂无评分</p>
            </li>
           
        </ul>
    </div>
</template>
<script>

export default {
    props:{
        
        movieObj:{
            type:Array,
            required:true
        }
    }
    
}
</script>
<style scoped>

ul{
    width:100%;
    overflow: auto;
    display: flex;
    flex-wrap: nowrap;
}
li{
    flex:1;
    margin-right:1%;
    text-align:center;
}
img{
    width:1.27rem;
    height:1.79rem;
}
h5{
    font-size:0.16rem;
    color:#111111;
    line-height:0.16rem;
    margin-top:0.1rem;
    overflow: hidden;
}
p{
    font-size:0.12rem;
    color:#aaaaaa;
    line-height:0.24rem;
}
a{
    text-decoration:none;
}
</style>