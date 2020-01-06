<template>
    <div style="min-width: 1920px;height: 100%;position: relative;">
        <!-- 头部 -->
        <div class="top">
            <div class="content">
                <img src="@/assets/images/top_text.jpg">
                <a-input-search placeholder="请输入关键字" style="margin-left: 150px;width: 500px;height: 50px;" @search="onSearch" />
                <img src="@/assets/images/top_logo.jpg" style="margin-left: 165px;">
            </div>
        </div>
        <!-- 内容 -->
        <main>
            <div class="mainBox">
                <router-view style="width: 1195px;height: 100%;background-color: #fff;" />
                <div class="mainNav">
                    <ul>
                        <li>
                            <div>
                                <a-icon type="home" />
                            </div>
                            <span>
                                首页
                            </span>
                        </li>
                        <li>
                            <div></div>
                            <span></span>
                        </li>
                        <li>
                            <div></div>
                            <span></span>
                        </li>
                        <li>
                            <div></div>
                            <span></span>
                        </li>
                        <li>
                            <div></div>
                            <span></span>
                        </li>
                        <router-link to="Interaction">
                            <li>
                                <div><a-icon type="message" /></div>
                                <span>政民互动</span>
                            </li>
                        </router-link>
                        <router-link to="Special">
                            <li>
                                <div><a-icon type="snippets" /></div>
                                <span>专题专栏</span>
                            </li>
                        </router-link>
                    </ul>
                </div>
            </div>
        </main>
        <!-- 底部 -->
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
    main {
        width: 100%;
        height: calc(100vh - 100px - 140px);
        background-image: linear-gradient(#bd1a2d, #fff, #fff);
        .mainBox {
            position: relative;
            width: 1355px;
            height: 100%;
            margin: 0 auto;
            .mainNav {
                border-left: 1px solid #bd1a2d;
                position: absolute;
                top: 0;
                right: -1px;
                width: 160px;
                height: 100%;
                background-color: #f1f1f1;
                ul {
                    padding: 0;
                    margin: 0;
                    height: 100%;
                    li {
                        overflow: hidden;
                        display: block;
                        height: calc(100% / 7);
                        border-bottom: 1px solid #c6c6c6;
                        color: #bd1a2d;
                        text-align: center;
                        font-size: 26px;
                        &:last-child {
                            border-bottom: none;
                        }
                        div {
                            margin-top: 10px;
                        }
                        span {
                            font-size: 20px;
                        }
                    }
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