<template>
    <div class="administration">
        <div class="admin_left">
            <div class="admin_img_4">
                <img src="@/assets/images/admin_4.jpg" alt="">
            </div>
            <div class="admin_defa">
                <a-tabs defaultActiveKey="1">
                    <a-tab-pane tab="咨询答复" key="1">
                        <ul>
                            <li>
                                <span class="spot"></span>
                                <span class="title">
                                    关于拟对首都儿科研究所附属儿童医院涉嫌超标排放水污染物进行重大处罚一案
                                </span>
                                <span class="time">
                                    2019-12-08
                                </span>
                            </li>
                            <li>
                                <span class="spot"></span>
                                <span class="title">
                                    北京市生态环境局关于发布 《 建设项目环境影响评价分类
                                </span>
                                <span class="time">
                                    2019-12-08
                                </span>
                            </li>
                            <li>
                                <span class="spot"></span>
                                <span class="title">
                                    关于拟对北京晋味畅餐饮有限公司第一分公司涉嫌饮食服务
                                </span>
                                <span class="time">
                                    2019-12-08
                                </span>
                            </li>
                        </ul>
                    </a-tab-pane>
                    <a-tab-pane tab="生态保护" key="2" forceRender>
                        <ul>
                                                        <li>
                                <span class="spot"></span>
                                <span class="title">
                                    关于拟对首都儿科研究所附属儿童医院涉嫌超标排放水污染物进行重大处罚一案
                                </span>
                                <span class="time">
                                    2019-12-08
                                </span>
                            </li>
                            <li>
                                <span class="spot"></span>
                                <span class="title">
                                    北京市生态环境局关于发布 《 建设项目环境影响评价分类
                                </span>
                                <span class="time">
                                    2019-12-08
                                </span>
                            </li>
                            <li>
                                <span class="spot"></span>
                                <span class="title">
                                    关于拟对北京晋味畅餐饮有限公司第一分公司涉嫌饮食服务
                                </span>
                                <span class="time">
                                    2019-12-08
                                </span>
                            </li>
                        </ul>
                    </a-tab-pane>
                </a-tabs>
            </div>
            <div class="admin_defa">
                <a-tabs defaultActiveKey="1">
                    <a-tab-pane tab="访谈回顾" key="1">
                        <img src="@/assets/images/admin_one_w.jpg" alt="">
                    </a-tab-pane>
                    <a-tab-pane tab="意见征集" key="2" forceRender>
                        <img src="@/assets/images/admin_one_w.jpg" alt="">
                    </a-tab-pane>
                </a-tabs>
            </div>
        </div>
        <div class="admin_right">
            <img src="@/assets/images/admin_right.jpg" alt="">
        </div>
    </div>
</template>
<style lang="scss" scope>
    .administration{
        padding: 40px;
        width: 100%;
        height: 100%;
        .admin_left{
            float: left;
            width: 55%;
            display: inline-block;
            .admin_img_4{
                width: 100%;
                height: 265px;
                margin-bottom: 29px;
                img{
                    width: 100%;
                    height: 265px;
                }
            }
            .admin_defa {
                width: 100%;
                float: left;
                .ant-tabs-bar{
                    margin: 0 0 6px 0
                }
                ul {
                    margin-bottom: 1.5em;
                    li {
                        position: relative;
                        height: calc(250px / 6);
                        line-height: 49px;
                        padding: 10px;
                        &:nth-child(2n) {
                            background-color: #f0f0f0;
                        }
                        span {
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            color: #333;
                        }
                        .spot {
                            display: inline-block;
                            width: 5px;
                            height: 5px;
                            border-radius: 50%;
                            background-color: #333;
                        }
                        .title {
                            display: inline-block;
                            width: 71%;
                            left: 25px;
                            font-size: 18px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        .time {
                            right: 0;
                            font-size: 18px;
                            display: inline-block;
                            width: 18%;
                        }
                    }
                }
                .ant-tabs-nav-container {
                    line-height: 1;
                }
                .ant-tabs-nav .ant-tabs-tab {
                    color: #333;
                    font-weight: 700;
                    font-size: 24px;
                    padding: 0 16px 12px;
                }
                .ant-tabs-nav .ant-tabs-tab-active {
                    color: #bd1a2d;
                    font-weight: 700;
                    font-size: 24px;
                }
                .ant-tabs-ink-bar {
                    background-color: #bd1a2d;
                }
            }
        }
        .admin_right{
            float: right;
            width: 45%;
            display: inline-block;
            img{
                width: 100%;
                height: 640px;
            }
        }
    }
</style>