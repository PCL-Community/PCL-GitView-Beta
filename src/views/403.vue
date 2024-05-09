<template>
    <el-result
        icon="warning"
        title="403 Forbidden"
        sub-title="抱歉，你无权访问该页面"
    >
        <template #extra>
            <el-button type="primary" plain @click="$router.go(-1)">返回</el-button>
        </template>
    </el-result>
</template>