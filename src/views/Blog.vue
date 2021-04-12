<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2021-04-12 09:09:42
-->
<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:40:18
-->
<template>
    <div id="gomi-blog"></div>
</template>

<script lang="ts">
import Menu from "../components/Menu.vue";
import { onMounted, reactive, defineComponent } from "vue";

export default defineComponent({
    name: "Home",
    props: {},
    setup: () => {
    },
    components: {
        Menu,
    },
});
</script>

<style scoped lang="less">
@import "../less/var.less";
</style>
