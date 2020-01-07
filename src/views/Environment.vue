<template>
    <div>
        <div class="box">
            <div class="top">
                <span :class="{nav: true, active: active === 1}" @click="active = 1">
                    大气环境质量
                </span>
                <span class="nav" :class="{nav: true, active: active === 2}" @click="active = 2">
                    水环境质量
                </span>
                <span class="nav" :class="{nav: true, active: active === 3}" @click="active = 3">
                    声环境质量
                </span>
                <span class="nav" :class="{nav: true, active: active === 4}" @click="active = 4">
                    辐射环境质量
                </span>
                <span class="nav" :class="{nav: true, active: active === 5}" @click="active = 5">
                    生态环境质量
                </span>
                <span class="nav" :class="{nav: true, active: active === 6}" @click="active = 6">
                    环境质量公报
                </span>
            </div>
            <div class="content">
                <img v-if="active === 1" src="@/assets/images/atmosphericenvironment.png" style="height: 100%;width: 100%;">
                <img v-if="active === 2" src="@/assets/images/waterEnvironment.png" style="height: 100%;width: 100%;">
                <img v-if="active === 3" src="@/assets/images/Soundenvironment.png" style="height: 100%;width: 100%;">
                <img v-if="active === 4" src="@/assets/images/Radiationenvironment.png" style="height: 100%;width: 100%;">
                <img v-if="active === 5" src="@/assets/images/ecologicalenvironment.png" style="height: 100%;width: 100%;">
                <img v-if="active === 6" src="@/assets/images/Environmentalquality.png" style="height: 100%;width: 100%;">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            active: 1
        }
    },
}
</script>
<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    padding: 40px;
    .top {
        width: 100%;
        height: 50px;
        .nav {
            cursor: pointer;
            display: inline-block;
            width: 16.66%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: #333;
            font-size: 24px;
            border-right: 1px solid #fff;
            background-color: #eaeaea;
            &:last-child {
                border-right: none;
            }
        }
        .active {
            position: relative;
            background-color: #be1c2e;
            color: #fff;
            &::before {
                content: '';
                position: absolute;
                left: 50%;
                bottom: -30px;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-top: 15px solid #be1c2e;
                border-right: 15px solid transparent;
                border-bottom: 15px solid transparent;
                border-left: 15px solid transparent;
            }
        }
    }
    .content {
        margin-top: 15px;
        width: 100%;
        height: calc(100% - 65px);
    }
}
</style>