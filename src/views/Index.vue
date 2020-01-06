<template>
    <div style="min-width: 1920px;height: 100%;position: relative;">
        <div class="top">
            <div class="content">
                <img src="@/assets/images/top_text.jpg">
                <a-input-search placeholder="请输入关键字" style="margin-left: 150px;width: 500px;height: 50px;" @search="onSearch" />
                <img src="@/assets/images/top_logo.jpg" style="margin-left: 165px;">
            </div>
        </div>
        <div id="footer">
            <img src="@/assets/images/footer.jpg">
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        onSearch (value) {
            console.log(value);
        }
    }
}
</script>
<style lang="scss" scoped>
    .top {
        height: 100px;
        background-color: #bd1a2d;
        .content {
            width: 1355px;
            height: 100%;
            margin: 0 auto;
            .ant-input-search {
                /deep/
                .ant-input {
                    border-radius: 10px;
                    font-size: 16px;
                }
                /deep/
                span {
                    font-size: 24px;
                }
            }
        }
    }
    #footer {
        position: absolute;
        bottom: 0;
        height: 140px;
    }
</style>