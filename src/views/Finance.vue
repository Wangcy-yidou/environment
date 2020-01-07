<template>
    <div class="finance">
        <div class="finance_left clearfix">
            <div class="fin_img">
                <img src="@/assets/images/finance_left.jpg" alt="">
            </div>
            <div class="fin_defa clearfix">
                <a-tabs defaultActiveKey="1">
                    <a-tab-pane tab="查询服务" key="1">
                        <div class="defa">
                            <div class="defa_color clearfix"><span>车型目录查询</span></div>
                            <div class="defa_color clearfix"><span>全国环境影响评价信用平台</span></div>
                            <div class="defa_color clearfix"><span>机动车超标、举报查询</span></div>
                            <div class="defa_color clearfix"><span>行政处罚结果查询</span></div>
                            <div class="defa_color clearfix"><span>辐射安全许可证查询</span></div>
                            <div class="defa_color clearfix"><span>机动车排放检验机构</span></div>
                        </div>
                        <div class="defas">
                            <div class="defa_color">
                                <span>机动车排放标准查询</span> 
                            </div>
                        </div>
                    </a-tab-pane>
                </a-tabs>
            </div>
            <div class="fin_boo">
                <h1><div class="fin_boo_s"><a-icon type="file-text" /></div> 建设项目环境影响评价审批</h1>
                <div class="fin_boo_w">
                    <div class="fin"><span>已受理项目</span></div>
                    <div class="fin"><span>拟审查项目</span></div>
                    <div class="fin"><span>已审查项目</span></div>
                </div>
            </div>
        </div>
        <div class="finance_right">
            <div class="rightBottom">
                <div class="box">
                    <div class="content">
                        <div class="text">
                            <span>环保项目管理</span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="content">
                        <div class="text">
                            <span>
                                机动车排放
                            </span>
                            <span>
                                检验机构
                            </span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="content">
                        <div class="text">
                            <span>
                                固体废物产生
                            </span>
                            <span>
                                单位管理
                            </span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="content">
                        <div class="text">
                            <span>
                                固体废物处置
                            </span>
                            <span>
                                利用单位管理
                            </span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="content">
                        <div class="text">
                            <span>
                                行政复议
                            </span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="content">
                        <div class="text">
                            <span>
                                环境污染损害
                            </span>
                            <span>
                                赔偿纠纷解调
                            </span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="content">
                        <div class="text">
                            <span>
                                强制性清洁生产
                            </span>
                            <span>
                                审核单位管理
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scope>
    .finance{
        padding: 40px;
        width: 100%;
        height: 100%;
        .finance_left{
            float: left;
            width: 30%;
            margin-right: 3%;
            .fin_img{
                width: 100%;
                display: inline-block;
                margin-bottom: 24px;
                img{
                    width: 100%;
                    height: 200px;
                }
            }
            .fin_defa{
                .defa{
                    width: 100%;
                    font-size: 17px;
                    .defa_color{
                        cursor: pointer;
                        position: relative;
                        float: left;
                        width: 47%;
                        height: 54px;
                        display: inline-block;
                        border: #d6d6d6 1px solid;
                        border-left: 5px #d6d6d6 solid;
                        background-color: #eaeaea;
                        margin-bottom: 19px;
                        &:nth-child(2n) {
                            float: right;
                        }
                        span{
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translateX(-50%) translateY(-50%);
                            width: 70%;
                            display: inline-block;
                            text-align: center;
                            margin: 0 auto;
                        }
                    }
                    .defa_color:hover{
                        background-color: #bb1e31;
                        color: #fff;
                        border: #bb1e31 1px solid;
                        border-left: 5px #bb1e31 solid;
                    }
                }
                .defas{
                    width: 100%;
                    font-size: 17px;
                    .defa_color{
                        float: left;
                        width: 100%;
                        height: 54px;
                        display: inline-block;
                        border: #d6d6d6 1px solid;
                        border-left: 5px #d6d6d6 solid;
                        background-color: #eaeaea;
                        margin-bottom: 15px;
                        position: relative;
                        span{
                            position: absolute;
                            top: 13px;
                            left: 50px;
                            width: 70%;
                            display: inline-block;
                            text-align: center;
                            margin: 0 auto;
                        }
                    }
                    .defa_color:hover{
                        background-color: #bb1e31;
                        color: #fff;
                        border: #bb1e31 1px solid;
                        border-left: 5px #bb1e31 solid;
                    }
                }
                width: 100%;
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
            .fin_boo{
                h1{
                    color: #bb1e32;
                    font-size: 19px;
                    font-weight: 600;
                    .fin_boo_s{
                        display: inline-block;
                    }
                }
                .fin_boo_w{
                     width: 100%;
                    .fin{
                        width: 30%;
                        height: 41px;
                        display: inline-block;
                        border: #d6d6d6 1px solid;
                        border-left: 5px #d6d6d6 solid;
                        background-color: #eaeaea;
                        &:nth-child(2) {
                            margin:0 4.8%;
                        }
                        span{
                            margin-left: 10%;
                            line-height: 38px;
                            font-size: 16px;
                        }
                    }
                    .fin:hover{
                        background-color: #bb1e31;
                        color: #fff;
                        border: #bb1e31 1px solid;
                        border-left: 5px #bb1e31 solid;
                    }
                }

            } 
        }
        .finance_right {
            width: 67%;
            float: left;
            .rightBottom {
                width: 100%;
                height: 135px;
                .box {
                    cursor: pointer;
                    position: relative;
                    width: 11%;
                    height: 135px;
                    margin-right: 3%;
                    float: left;
                    border: 1px solid #d8d8d8;
                    &:last-child {
                        margin-right: 0;
                    }
                    &:hover {
                        border-color: #bb1d31;
                        .content {
                            border-color: #bb1d31;
                            background-color: #bb1d31;
                            color: #fff;
                        }
                    }
                    .content {
                        position: absolute;
                        top: -5px;
                        left: -5px;
                        width: 100%;
                        height: 100%;
                        background-color: #eaeaea;
                        border: 1px solid #d8d8d8;
                        .text {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translateY(-50%) translateX(-50%);
                            width: 20%;
                            line-height: 1.1;
                            span {
                                position: absolute;
                                top: 50%;
                                transform: translateY(-50%);
                                display: inline-block;
                                width: 10px;
                                &:nth-child(2) {
                                    left: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }
    .clearfix{
        *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
    }
</style>