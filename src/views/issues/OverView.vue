<script setup>
import { onMounted, reactive, ref } from "vue";
import { applyAnimation } from "@/common/public";
import CustomLoading from "../../components/CustomLoading.vue";

const loadData = (data) => {
    const dataLabel = data[0],
        dataStatus = data[1],
        dataVaild = data[2];
    const issueBug = dataLabel["· Bug"];
    issueTypeBug.value = issueBug;
    const issueFeat = dataLabel["· 优化"];
    issueTypeFeat.value = issueFeat;
    const issueNew = dataLabel["· 新功能"];
    issueTypeNew.value = issueNew;
    const issueOpen = dataStatus["◼️open"];
    issueTypeOpen.value = issueOpen;
    const issueClosed = dataStatus["◼️closed"];
    issueTypeClosed.value = issueClosed;
    const issueTotal = issueOpen + issueClosed;
    issueTypeTotal.value = issueTotal;
    const issueVaild = dataVaild["◼️valid"];
    issueTypeVaild.value = issueVaild;
    const issueInvaild = dataVaild["◼️invalid"];
    issueTypeInvaild.value = issueInvaild;
};

const issueData = reactive({
    data: null,
    isLoadingFinish: false,
});
const issueTypeBug = ref(0);
const issueTypeBugT = applyAnimation(issueTypeBug);
const issueTypeFeat = ref(0);
const issueTypeFeatT = applyAnimation(issueTypeFeat);
const issueTypeNew = ref(0);
const issueTypeNewT = applyAnimation(issueTypeNew);
const issueTypeTotal = ref(0);
const issueTypeTotalT = applyAnimation(issueTypeTotal);
const issueTypeOpen = ref(0);
const issueTypeOpenT = applyAnimation(issueTypeOpen);
const issueTypeClosed = ref(0);
const issueTypeClosedT = applyAnimation(issueTypeClosed);
const issueTypeVaild = ref(0);
const issueTypeVaildT = applyAnimation(issueTypeVaild);
const issueTypeInvaild = ref(0);
const issueTypeInvaildT = applyAnimation(issueTypeInvaild);

// Loading Data
onMounted(() => {
    if (
        localStorage.getItem("X-Data") === "[]" ||
        localStorage.getItem("X-Data") === undefined ||
        localStorage.getItem("X-Data") === null
    ) {
        fetch(
            // "http://localhost:3001/getList"
            "http://154.7.177.68:3101/getList"
        ).then(async (res) => {
            const data = await res.json();
            localStorage.setItem("X-Data", JSON.stringify(data));
            loadData(data);
            issueData.data = data;
            issueData.isLoadingFinish = true;
        });
    } else {
        const data = JSON.parse(localStorage.getItem("X-Data"));
        loadData(data);
        issueData.data = data;
        issueData.isLoadingFinish = true;
    }
});
</script>

<template>
    <div class="OverView">
        <div class="data" v-if="issueData.isLoadingFinish">
            <el-card shadow="hover">
                <el-row
                    style="height: 120px; display: flex; align-items: center">
                    <el-col :span="8">
                        <el-statistic :value="`/`">
                            <template #title>
                                <span style="color: #e5b456">总计</span> /
                                <span style="color: #48bc91">开启</span> /
                                <span style="color: #cd5c64">关闭</span>
                            </template>
                            <template #prefix>
                                <span style="color: #e5b456">
                                    {{ Number.parseInt(issueTypeTotalT) }}
                                </span>
                                /
                                <span style="color: #48bc91">
                                    {{ Number.parseInt(issueTypeOpenT) }}
                                </span>
                            </template>
                            <template #suffix>
                                <span style="color: #cd5c64">
                                    {{ Number.parseInt(issueTypeClosedT) }}
                                </span>
                            </template>
                        </el-statistic>
                    </el-col>
                    <el-col :span="8">
                        <el-statistic :value="`/`">
                            <template #title>
                                <span style="color: #43a047">有效</span> /
                                <span style="color: #ed407a">无效</span>
                            </template>
                            <template #prefix>
                                <span style="color: #43a047">
                                    {{ Number.parseInt(issueTypeVaildT) }}
                                </span>
                            </template>
                            <template #suffix>
                                <span style="color: #ed407a">
                                    {{ Number.parseInt(issueTypeInvaildT) }}
                                </span>
                            </template>
                        </el-statistic>
                    </el-col>
                    <el-col :span="8">
                        <el-statistic :value="`/`">
                            <template #title>
                                <span style="color: #ff7043">Bug</span> /
                                <span style="color: #42a5f5">优化</span> /
                                <span style="color: #ab47bc">新功能</span>
                            </template>
                            <template #prefix>
                                <span style="color: #ff7043">
                                    {{ Number.parseInt(issueTypeBugT) }}
                                </span>
                                /
                                <span style="color: #42a5f5">
                                    {{ Number.parseInt(issueTypeFeatT) }}
                                </span>
                            </template>
                            <template #suffix>
                                <span style="color: #ab47bc">
                                    {{ Number.parseInt(issueTypeNewT) }}
                                </span>
                            </template>
                        </el-statistic>
                    </el-col>
                </el-row>
            </el-card>
        </div>
        <custom-loading v-if="!issueData.isLoadingFinish" />
    </div>
</template>

<style scoped lang="less">
div.OverView {
    width: 100%;
    height: 100%;
}

.el-col {
    text-align: center;
}
</style>
