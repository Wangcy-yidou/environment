<template>
    <div class="science">
        <a-tabs defaultActiveKey="1">
            <a-tab-pane tab="大气环境质量" key="1">Content of Tab Pane 1</a-tab-pane>
            <a-tab-pane tab="水环境质量" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
            <a-tab-pane tab="声环境质量" key="3">Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane tab="辐射环境质量" key="4">Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane tab="生态环境状况" key="5">Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane tab="环境质量公报" key="6">Content of Tab Pane 3</a-tab-pane>
        </a-tabs>
    </div>
</template>
<style lang="scss" scope>
    .science{
        padding: 40px;
        .ant-tabs-tab{
            margin: 0 calc(100% / 16)
        }
    }
    
</style>