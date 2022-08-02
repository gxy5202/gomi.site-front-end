<!--
 * @description: 导航菜单
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:40:18
-->
<template>
    <div class="gomi-headerBox">
        <div class="gomi-headerPlaceholder">
            <q-toolbar></q-toolbar>
        </div>
        <header class="gomi-header gomi-fix-top z-top">
            <q-toolbar class="text-white">
                <q-toolbar-title>{{ title }}</q-toolbar-title>
                <slot></slot>
                <q-input
                         v-if="search"
                         rounded
                         dark
                         dense
                         debounce="400"
                         standout
                         placeholder="search"
                         v-model="searchValue"
                         @update:model-value="updateSearchValue"
                         input-class="text-left"
                         class="gomi-input-s"
                         type="search">
                    <template v-slot:append>
                        <q-icon v-if="searchValue === ''" name="search" />
                        <q-icon
                                v-else
                                name="clear"
                                class="cursor-pointer"
                                @click="searchValue = ''" />
                    </template>
                </q-input>
                <Menu></Menu>
            </q-toolbar>
        </header>
    </div>
</template>

<script lang="ts">
import { onMounted, ref, inject, defineComponent, PropType } from "vue";
import { useRouter } from 'vue-router';
import Menu from './Menu.vue';
export default defineComponent({
    name: "Head",
    props: {
        title: {
            type: String,
            default: ""
        },
        search: {
            type: Boolean,
            default: true
        }
    },
    setup: () => {
        const searchValue = ref('');
        const updateSearchValue = inject('updateSearchValue');

        return {
            searchValue,
            updateSearchValue
        };
    },
    methods: {

    },
    components: {
        Menu
    },
});
</script>

<style scoped lang="scss">
@import "../scss/var.scss";

.gomi-headerBox {
    .gomi-header {
        width: 100%;
        background-color: rgba($headColor, 0.99);
        // backdrop-filter: blur(10px);
        // -webkit-backdrop-filter: blur(10px);
        font-family: CAIBOJOGRegular;

        .q-toolbar {
            padding: 0 20px;
        }
    }
}

.gomi-fix-top {
    position: fixed;
    top: 0;
}

.gomi-input-s {
    width: 8.5rem;
    max-width: 200px;
    min-width: 150px;
    margin-right: 5px;
    height: 50%;
}
</style>
