<template>
    <div  id="box">
            <a  v-for="(v,i) in findgoodmovie" :key="i"  :style="{color:v.color}" :href="v.href" :class="v.line?'as':''">{{v.title}}</a>
            
    </div>
</template>
<script>
export default {
    props:{
        findgoodmovie:{
            type:Array,
            required:true
        }
    }
}
</script>
<style  scoped>
#box{
    width:100%;
    /* display: flex; */
    overflow: auto;
    white-space:nowrap;
}
a{
    padding:0.1rem;
    border:1px solid red;
    font-size:0.16rem;
    border-radius: 0.1rem;
    text-decoration: none;
    margin:0.1rem;
    white-space: nowrap;
    display:inline-block; 
    text-align: center;
    border:1px solid #ffac2d;
}
#box .as{
    display:block;
    padding:0;
    margin: 0;
    border:0px solid red;
}

</style>