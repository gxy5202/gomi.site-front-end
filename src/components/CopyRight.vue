<template>
    <div class="gomi-security-info">
        <span class="gomi-copyright">Copyright © 2019-{{ new Date().getFullYear() }} Gomi &nbsp |</span>
        <span class="gomi-info" @click="toICP">&nbsp 蜀ICP备18020532号-1</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "CopyRight",
    props: [],
    setup(props) {
        const toICP = () => {
            window.open('https://beian.miit.gov.cn/#/Integrated/index', '_blank');
        }

        return {
            toICP
        }
    }
});
</script>

<style scoped lang="scss">
@import "../scss/var.scss";

.gomi-security-info {
    width: 100%;
    margin-top: 5px;
    color: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    .gomi-info {
        &:hover {
            cursor: pointer;
            color: $highLightColor;
        }
    }
}
</style>