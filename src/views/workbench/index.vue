<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<template>
    <div class="workbench-container">
        <el-row>
            <el-col :span="24" class="breadcrumb-container b-b b-light">
                <el-breadcrumb class="breadcrumb" separator="/">
                    <el-breadcrumb-item>
                        <i class="el-icon-menu"></i>
                        首页
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>数据看板</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <svg width='60' height='60' xmlns='http://www.w3.org/2000/svg'>
            <circle r='26' cy='30' cx='30' stroke-width='1' stroke='#333' fill='none' />
            <circle id="progress" r='26' cy='30' cx='30' stroke-width='1' stroke='red' fill='none' />
        </svg>
    </div>
</template>

<style lang="scss" scoped>
    @import '~scss_vars';
    .breadcrumb {
        min-height: 34px;
        padding: 10px 0;
        background-color: $breadcrumb-background-color;
        font-size: 12px;
    }
    #progress {
        stroke-dasharray: 100px;
        stroke-dashoffset: 100px;
        animation: progressAnimaton 1000ms linear infinite;
    }
    @keyframes progressAnimaton {
        from {
            stroke-dashoffset: 300px; 
        }
        to {
            stroke-dashoffset: 100px;
        }
    }
</style>
