<template>
    <div style="min-width: 1920px;height: 100%;position: relative;overflow-x: hidden;">
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
                        <li class="active">
                            <div>
                                <a-icon type="home" />
                            </div>
                            <span>
                                首页
                            </span>
                        </li>
                        <li>
                            <div>
                                <a-icon type="star" />
                            </div>
                            <span>
                                政务公开
                            </span>
                        </li>
                        <li>
                            <div>
                                <a-icon type="heart" />
                            </div>
                            <span>
                                财政服务
                            </span>
                        </li>
                        <li>
                            <div>
                                <a-icon type="message" />
                            </div>
                            <span>
                                政民互动
                            </span>
                        </li>
                        <li>
                            <div>
                                <a-icon type="rest" />
                            </div>
                            <span>
                                环境质量
                            </span>
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
                        list-style: none;
                        position: relative;
                        float: left;
                        width: 100%;
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
                    .active {
                        background-color: #ac1325;
                        color: #fff;
                        &::before {
                            content: '';
                            position: absolute;
                            left: -82px;
                            width: 0;
                            height: 0;
                            border-top: 50px solid transparent;
                            border-right: 30px solid #ac1325;
                            border-bottom: 50px solid transparent;
                            border-left: 50px solid transparent;
                        }
                    }
                }
            }
        }
    }
    #footer {
        height: 140px;
    }
</style>