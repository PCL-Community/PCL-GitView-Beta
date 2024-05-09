<script setup>
import LogoCard from "@/components/LogoCard.vue";

const emit = defineEmits(["logoClick"]);

const handleClick = () => {
    emit("logoClick");
    // document.getElementById("logoc").classList.toggle("shake")
    // setTimeout(() => {
    //     document.getElementById("logoc").classList.toggle("shake")
    // }, 700);
};
</script>

<template>
    <div class="custom-header">
        <div class="logo">
            <logo-card
                :shadow="false"
                style="
                    transform: translateX(-330px) scale(0.08);
                    cursor: pointer;
                "
                id="logoc"
                @click="handleClick()" />
        </div>
        <h1>PCL GitView</h1>
    </div>
</template>

<style scoped lang="less">
div.custom-header {
    display: flex;
    justify-content: center;
    align-items: center;
    /* &.shake {
    //     animation: shake 0.7s forwards ease-in-out;
    } */
    div.logo {
        width: 50px;
    }
    h1 {
        margin-left: 24px;
    }
}
</style>
