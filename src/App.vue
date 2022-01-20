<!--
 * @description: app.vue
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:37:22
-->
<template>
	<suspense>
		<template #default>
			<router-view></router-view>
		</template>
		<template #fallback>...</template>
	</suspense>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, provide, readonly } from "vue";
import Menu from './components/Menu.vue';

export default defineComponent({
	name: "App",
	setup() {
		const searchValue = ref<string>('');
		const updateSearchValue = (value: string) => {
			searchValue.value = value;
		}
		provide('searchValue', searchValue);
		provide('updateSearchValue', updateSearchValue);
		return {
		}
	},
	components: {
		Menu
	},
});
</script>

<style lang="scss">
@import "./scss/var.scss";
html {
	font-size: 16px;
	widows: 100%;
	height: 100%;

	body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: $baseColor;
	}
}

@media screen and (min-width: 321px) and (max-width: 375px) {
	html {
		font-size: 11px;
	}
}
@media screen and (min-width: 376px) and (max-width: 414px) {
	html {
		font-size: 12px;
	}
}
@media screen and (min-width: 415px) and (max-width: 639px) {
	html {
		font-size: 15px;
	}
}
@media screen and (min-width: 640px) and (max-width: 719px) {
	html {
		font-size: 20px;
	}
}
@media screen and (min-width: 720px) and (max-width: 749px) {
	html {
		font-size: 22.5px;
	}
}
@media screen and (min-width: 750px) and (max-width: 799px) {
	html {
		font-size: 23.5px;
	}
}
@media screen and (min-width: 800px) {
	html {
		font-size: 25px;
	}
}
#app {
	width: 100%;
	height: 100%;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>