<template>
    <div class="container" id="box">
        <router-link v-for='(v,i) in objfl' :key='i' to="/">{{v.wz}}<span class="el-icon-arrow-right"></span></router-link>
    </div>
</template>
<script>
export default {
    props:{
        objfl:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
#box{
    display:flex;
    flex-wrap: wrap;
}
a{
    width:50%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    border: 1px solid #eeeeee;
    font-size:0.16rem;
    line-height:0.3rem;
    color:#42bd56;
    text-decoration: none;
    cursor: pointer;
    border-left:none;
    padding-right:0.1rem;
}
#box a:nth-of-type(2n+1){
    padding-left:0.1rem;
}
#box a:nth-of-type(2n){
    padding-left:0.1rem;
}
span{
    display:inline-block;
    margin-top:0.1rem;
}

    
</style>