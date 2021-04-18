<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2021-04-18 12:12:32
-->

<template>
    <div id="gomi-articalContent" class="markdown-body" v-html="content"></div>
</template>

<script lang="ts">
import { onMounted, ref, reactive, defineComponent } from "vue";
// import { QIcon } from 'quasar';
import '@quasar/extras/ionicons-v5';
export default defineComponent({
    name: "ArticalCard",
    props: {
        content: {
            type: String,
            default: ""
        }
    },
    setup() {

    },
    components: {
    },
});
</script>

<style scoped lang="scss">
@import "../scss/var.scss";

#gomi-articalContent {
    width: 100%;
    // color: #fff;
    h1 {
        color: red !important;
    }
}
</style>