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
                        float: left;
                        width: 47%;
                        height: 54px;
                        display: inline-block;
                        border: #d6d6d6 1px solid;
                        border-left: 5px #d6d6d6 solid;
                        background-color: #eaeaea;
                        margin-bottom: 19px;
                        position: relative;
                        &:nth-child(2n) {
                            float: right;
                        }
                        span{
                            position: absolute;
                            top: 0px;
                            left: 23px;
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