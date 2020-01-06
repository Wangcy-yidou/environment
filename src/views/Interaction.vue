<template>
    <div class="interaction">
        <div class="words">
            <a-tabs defaultActiveKey="1" @change="callback">
                <a-tab-pane tab="污染防治攻坚战" key="1">Content of Tab Pane 1</a-tab-pane>
                <a-tab-pane tab="生态保护" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
            </a-tabs>
        </div>
    </div>
</template>
<style lang="scss" scope>
    .interaction{
        padding: 40px;
        box-sizing: border-box;
        .words{
            float: left;
            width: 49%;
            .ant-tabs-tab{
                color: #333;
                font-size: 22px;
                font-weight: 600;
            }
            .ant-tabs-tab-active{
                color: #bd1a2d;
                font-size: 22px;
                font-weight: 600;
            }
            .ant-tabs-ink-bar{
                background-color: #bd1a2d;
            }
            .ant-tabs-tab:hover{
                color: #bd1a2d
            }

        }
    }
</style>
<script>
export default {
    data(){
        return {

        }
    },
    mounted:{
    callback(key) {
        console.log(key);
    },
    }
}
</script>