<script setup>
import { ref } from "vue";
import SidebarButtonGroup from "./SidebarButtonGroup.vue";

const pathname = ref(window.location.pathname);
const refetchPath = () => {
    pathname.value = window.location.pathname;
};
</script>

<template>
    <el-scrollbar class="sidebar">
        <sidebar-button-group title="欢迎！">
            <el-link :type="pathname === '/intro' ? 'primary' : 'default'" @click="refetchPath()" href="/intro">
                项目简介
            </el-link>
        </sidebar-button-group>
        <sidebar-button-group title="Issues 大区">
            <el-link :type="pathname === '/issue/overview' ? 'primary' : 'default'" @click="refetchPath()" href="/issue/overview">
                总览
            </el-link>
            <el-link :type="pathname === '/issue/label' ? 'primary' : 'default'" @click="refetchPath()" href="/issue/label">
                标签分布
            </el-link>
            <el-link :type="pathname === '/issue/changetrend' ? 'primary' : 'default'" @click="refetchPath()" href="/issue/changetrend">
                变化趋势
            </el-link>
        </sidebar-button-group>   
        <sidebar-button-group title="Discussions 大区">
            <el-link :type="pathname === '/disc/overview' ? 'primary' : 'default'" @click="refetchPath()" href="/disc/overview">
                总览
            </el-link>
            <el-link :type="pathname === '/disc/catgory' ? 'primary' : 'default'" @click="refetchPath()" href="/disc/catgory">
                分区预览
            </el-link>
            <el-link :type="pathname === '/disc/changetrend' ? 'primary' : 'default'" @click="refetchPath()" href="/disc/changetrend">
                变化趋势
            </el-link>
        </sidebar-button-group>   
    </el-scrollbar>
</template>

<style scoped lang="less">
.sidebar {
    width: 220px;
    .el-link {
        margin-left: 36px;
        width: max-content;
    }
}
</style>
