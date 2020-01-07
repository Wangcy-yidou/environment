<template>
    <div style="min-width: 1920px;height: 100%;position: relative;overflow-x: hidden;">
        <!-- 头部 -->
        <div class="top">
            <div class="content">
                <img src="@/assets/images/top_text.jpg" style="height: 80%;;">
                <a-input-search placeholder="请输入关键字" style="margin-left: 150px;width: 500px;height: 50px;" @search="onSearch" />
                <img src="@/assets/images/top_logo.jpg" style="margin-left: 165px;">
            </div>
        </div>
        <!-- 内容 -->
        <main>
            <div class="mainBox">
                <div class="mianContent">
                    <router-view style="width: 1299px;height: 100%;background-color: #fff;" />
                </div>
                <div class="mainNav">
                    <ul>
                        <li :class="{active: $route.name === 'index2'}" @click="go('index2')" @mouseenter="go('index2')">
                            <div><a-icon type="home" /></div>
                            <span>首页</span>
                        </li>
                            <li :class="{active: $route.name === 'government2'}" @click="go('government2')" @mouseenter="go('government2')">
                                <div>
                                    <a-icon type="star" />
                                </div>
                                <span>
                                    政务公开
                                </span>
                            </li>
                            <li :class="{active: $route.name === 'finance2'}" @click="go('finance')" @mouseenter="go('finance2')">
                                <div><a-icon type="heart" /></div>
                                <span>政务服务</span>
                            </li>
                            <li :class="{active: $route.name === 'administration2'}" @click="go('administration2')" @mouseenter="go('administration2')">
                                <div><a-icon type="message" /></div>
                                <span>政民互动</span>
                            </li>
                            <li :class="{active: $route.name === 'environment2'}" @click="go('environment2')" @mouseenter="go('environment2')">
                                <div>
                                    <a-icon type="rest" />
                                </div>
                                <span>
                                    环境质量
                                </span>
                            </li>
                            <li :class="{active: $route.name === 'quality2'}" @click="go('quality2')" @mouseenter="go('quality2')">
                                <div><a-icon type="pic-left" /></div>
                                <span>环境管理</span>
                            </li>
                            <li :class="{active: $route.name === 'special2'}" @click="go('special2')" @mouseenter="go('special2')">
                                <div><a-icon type="snippets" /></div>
                                <span>专题专栏</span>
                            </li>
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
    watch: {
        '$route' (to, from) {
            console.log(to, from);
        }
    },
    methods: {
        onSearch (value) {
            console.log(value);
        },
        go (name) {
            this.$router.push({
                name: name
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    .top {
        height: 100px;
        background-color: #bd1a2d;
        .content {
            width: 1460px;
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
        position: relative;
        width: 100%;
        height: auto;
        min-height: 697px;
        background-image: linear-gradient(#bd1a2d, #fff, #fff);
        .mainBox {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 1460px;
            height: 100%;
            background-color: #ac1325;
            .mianContent {
                height: 100%;
                overflow: auto;
                &::-webkit-scrollbar {display:none}
            }
            .mainNav {
                border-left: 1px solid #bd1a2d;
                // position: fixed;
                // top: 10.6%;
                // right: 15.3%;
                position: absolute;
                top: 0;
                right: 0px;
                width: 160px;
                height: 697px;
                background-color: #f1f1f1;
                ul {
                    padding: 0;
                    margin: 0;
                    height: 100%;
                    li {
                        &:last-child {
                            border-bottom: none;
                        }
                        cursor: pointer;
                        list-style: none;
                        position: relative;
                        float: left;
                        width: 100%;
                        height: calc(100% / 7);
                        border-bottom: 1px solid #c6c6c6;
                        color: #bd1a2d;
                        text-align: center;
                        font-size: 26px;
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
                            left: -80px;
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