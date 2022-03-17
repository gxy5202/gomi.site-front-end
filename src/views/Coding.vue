<!--
 * @description: code
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:40:18
-->
<template>
    <div id="gomi-coding">
        <Head title="Coding" class="z-top"></Head>
        <ProjectList></ProjectList>
    </div>
</template>

<script lang="ts">
import Menu from "../components/Menu.vue";
import ProjectList from '../components/ProjectList.vue';
import { onMounted, ref, reactive, defineComponent } from "vue";
import Head from '../components/Head.vue';
import '@quasar/extras/ionicons-v5';
export default defineComponent({
    name: "Coding",
    props: {},
    setup: () => {
        // 获取列表
        // const list = await getCodeList();
    },
    components: {
        Menu,
        Head,
        ProjectList
    },
});
</script>

<style scoped lang="scss">
@import "../scss/var.scss";

#gomi-coding {
    background-color: $baseColor;
    height: 100%;
}
</style>
