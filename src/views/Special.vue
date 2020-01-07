<template>
    <div class="special">
        <div class="special1" >
            <img src="@/assets/images/special1.jpg">
        </div>
        <div class="special2">
            <img src="@/assets/images/special2.jpg">
        </div>
    </div>
</template>
<style lang="scss" scope>
    .special {
        padding: 40px;
        width: 100%;
        box-sizing: border-box;
        .special1{
            float: left;
            width: 73%;
            img{
                height: 620px;
                width: 100%;
            }
        }
        .special2{
            float: right;
            width:25%;
            img{
                width: 100%;
                height: 620px
            }
        }
    }
</style>