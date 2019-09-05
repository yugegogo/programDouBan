<template>
    <div  id="box">
            <a  v-for="(v,i) in findgoodmovie" :key="i"  :style="{border:'1px solid '+v.color}" :href="v.href">{{v.title}}</a>
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
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    flex-wrap:nowrap;
    flex-shrink: 0;
}
a{
    padding:0.5 0.5rem;
    line-height: 0.6rem;
    border:1px solid red;
    font-size:0.16rem;
    border-radius: 0.1rem;
    text-decoration: none;
    margin:0.1rem;
    white-space: nowrap;
}

</style>