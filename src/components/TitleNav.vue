<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2021-04-18 12:12:32
-->

<template>
    <div id="gomi-titleNav">
        <ul>
            <li
                v-for="(item, index) in navList"
                :class="{ 'title-nav-active': target === String(index), 'title-nav-item': true }"
                :key="index"
                :data-name="index"
                @click="toTarget(index)"
            >{{ item.name }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { onMounted, ref, nextTick, reactive, defineComponent, PropType, watchEffect, inject } from "vue";
export default defineComponent({
    name: "TitleNav",
    props: {
        navList: {
            type: Array as PropType<any[]>,
            default: []
        },
        target: {
            type: String,
            default: "0"
        }
    },
    setup(props) {
        const toTarget = (name) => {
            (document.querySelector(`[data-name='${name}']`) as HTMLElement).scrollIntoView({ behavior: 'smooth' });
        };

        return {
            toTarget
        }
    },
    components: {
    },
});
</script>

<style scoped lang="scss">
@import "../scss/var.scss";

#gomi-titleNav {
    color: #fff;
    position: sticky;
    top: 70px;

    .title-nav-item {
        cursor: pointer;
    }
}

.title-nav-active {
    color: $highLightColor;
}
</style>