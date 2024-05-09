<script setup>
import { useTransition, TransitionPresets } from "@vueuse/core";
import { ref } from "vue";
// import * as echarts from "echarts";

const source = ref(0);
const outputValue = useTransition(source, {
    duration: 1500,
    transition: [0.62, 0, 0.5, 1],
});
source.value = 172000;
</script>

<template>
    <el-row class="topbar">
        <el-col :span="6">
            <el-statistic title="Daily active users" :value="268500" />
        </el-col>
        <el-col :span="6">
            <el-statistic :value="138">
                <template #title>
                    <div style="display: inline-flex; align-items: center">
                        Ratio of men to women
                        <el-icon style="margin-left: 4px" :size="12">
                            <Male />
                        </el-icon>
                    </div>
                </template>
                <template #suffix>/100</template>
            </el-statistic>
        </el-col>
        <el-col :span="6">
            <el-statistic title="Total Transactions" :value="outputValue" />
        </el-col>
        <el-col :span="6">
            <el-statistic title="Feedback number" :value="562">
                <template #suffix>
                    <el-icon style="vertical-align: -0.125em">
                        <ChatLineRound />
                    </el-icon>
                </template>
            </el-statistic>
        </el-col>
    </el-row>
</template>

<style scoped lang="less">
.topbar {
    width: 95%;
}
.el-col {
    text-align: center;
}
</style>
