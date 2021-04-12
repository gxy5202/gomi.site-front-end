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
    <div id="gomi-blog">
        <q-btn label="My Button" />
        <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg">
            <h1 class="text-white">Basic</h1>
        </q-parallax>
    </div>
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

<style scoped lang="scss">
@import "../scss/var.scss";
</style>
