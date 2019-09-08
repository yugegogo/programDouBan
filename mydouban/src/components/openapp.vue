<template>
    <div id="box">
        <img src="../../static/img/2.jpg" alt="">
        <div class="innerbox">
            <p id="aa">打开App 浏览更多</p>
            <div id="bb">
                <el-button type="success">极速下载</el-button>
                <el-button type="success" plain>打开</el-button>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
#box{
    position:relative;
}
img{
    width:100%;
    height:1rem;
    position:relative;
    left:0;
    top:0;
}
.innerbox{
    position: absolute;
    left:0rem;
    top:0;
    height:1rem;
    line-height:1rem;
    font-size:0.14rem;
    display: flex;
    justify-content: space-between;
    padding-left:0.1rem;

}

.innerbox #aa{
   margin-right:0.5rem;
   color:#2ca532;
} 


</style>