<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2021-12-13 15:53:20
-->
<template>
    <div class="gomi-security-info">
        <span class="gomi-copyright">Copyright © 2020-2021 Gomi &nbsp |</span>
        <span class="gomi-info">&nbsp 蜀ICP备18020532号-1</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "CopyRight",
    props: {
    },
    setup(props) {
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
}
</style>