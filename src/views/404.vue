<template>
    <el-result
        icon="error"
        title="404 Not Found"
        sub-title="你所查找的页面不存在"
    >
        <template #extra>
            <el-button type="primary" plain @click="$router.go(-1)">返回</el-button>
        </template>
    </el-result>
</template>
