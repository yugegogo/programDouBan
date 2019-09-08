<template>
    <div >
        <p>
             <span  id="touxiang" class="el-icon-user"></span>
            请先登录
        </p>
        <p >
            <span  class="el-icon-edit"></span>
            <span id="camera" class="el-icon-camera-solid"></span>
        </p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
div{
    width:100%;
    height:0.7rem;
    border-bottom:2px solid #e8e8e8;
    line-height: 0.7rem;
}
div p{
    font-size:0.14rem;
    color:#aaaaaa;
   
}
div p:nth-of-type(1){
   float:left;
}
div p:nth-of-type(2){
     font-size:0.3rem;
     float:right;
    
}
 p #touxiang{
    font-size:0.4rem;
    margin-right:0.1rem;
}
p #camera{
    margin:0 0.2rem;
}

</style>