<!--
 * @description: 导航菜单
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:40:18
-->
<template>
	<q-btn
		   :class="{ 'gomi-menuBtn': true, 'gomi-menuBtn-fixed': isFixed, 'z-max': true }"
		   flat
		   round
		   @click="handleMenu">
		<q-icon v-show="!state.isMenuShow">
			<svg class="icon-menu" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
				<path
					  d="M682.666667 768v85.333333H213.333333v-85.333333h469.333334z m213.333333-298.666667v85.333334H128v-85.333334h768z m-85.333333-298.666666v85.333333H341.333333V170.666667h469.333334z"
					  fill="#ffffff" />
			</svg>
		</q-icon>

		<q-icon v-show="state.isMenuShow">
			<svg class="icon-menu" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
				<path
					  d="M512 451.669333l211.2-211.2 60.330667 60.330667-211.2 211.2 211.2 211.2-60.330667 60.330667-211.2-211.2-211.2 211.2-60.330667-60.330667 211.2-211.2-211.2-211.2L300.8 240.469333z"
					  fill="#ffffff" />
			</svg>
		</q-icon>
	</q-btn>
	<div
		 :class="{
		 	'gomi-menuBox': true,
		 	'gomi-menuBox-show': state.isMenuShow,
		 	'gomi-menuBox-hide': !state.isMenuShow
		 }">
		<ul class="gomi-menuBoxUl">
			<li class="gomi-menuItem" v-for="(item, index) in list" :key="index" @click="toPage(item)">
				<span class="gomi-menuItemText">{{ item.name }}</span>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { onMounted, reactive, inject, defineComponent, PropType } from "vue";
import { useRouter } from 'vue-router';
interface MenuItem {
	id: string;
	name: string;
	path: string;
}

export default defineComponent({
	name: "Menu",
	props: {
		list: {
			type: Array as PropType<MenuItem[]>,
			default: [
				{
					id: "0",
					name: "Blog",
					path: 'blog'
				},
				{
					id: "1",
					name: "Coding",
					path: 'coding'
				},
				{
					id: "2",
					name: "Power Point",
					path: 'powerpoint'
				},
				{
					id: "3",
					name: "Video",
					path: 'video'
				},
				{
					id: "4",
					name: "Music",
					path: 'music'
				},
				{
					id: "5",
					name: "About Me",
					path: 'about'
				},
			]
		},
		isFixed: {
			type: Boolean as PropType<Boolean>,
			default: false
		}
	},
	setup: () => {
		const state: any = reactive({
			isMenuShow: false
		})

		const router = useRouter();

		const handleMenu = () => {
			state.isMenuShow = !state.isMenuShow;
		}

		const toPage = (item: MenuItem) => {
			router.push({
				name: item.path,
			})

			state.isMenuShow = false;
		}

		onMounted(() => { });

		return {
			state,
			handleMenu,
			toPage
		};
	},
	methods: {

	},
	components: {
		// MenuOutlined
	},
});
</script>

<style scoped lang="scss">
@import "../scss/var.scss";

.icon-menu {
	width: 100%;
	height: 100%;
}

.gomi-menuBtn-fixed {
	position: fixed;
	width: 30px;
	height: 30px;
	right: 30px;
	top: 30px;
}

.gomi-menuBtn {
	cursor: pointer;
	@include flex-center-center;
}

.gomi-menuBox {
	position: fixed;
	margin: auto;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	transition: 0.5s ease-in-out;
	background-color: rgba(16, 16, 16, 0.9);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);

	.gomi-menuBoxUl {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		padding-top: 30px;

		.gomi-menuItem {
			display: flex;
			justify-content: center;
			align-items: center;
			list-style-type: none;
			color: #fff;
			font-family: CAIBOJOGRegular;
			font-size: 3rem;
			margin: 5px;
			cursor: pointer;

			.gomi-menuItemText {
				&:hover {
					color: $highLightColor;
				}
			}

		}
	}
}

.gomi-menuBox-show {
	visibility: visible;
	opacity: 1;
	z-index: 99;
	// transform: translateY(0);
}

.gomi-menuBox-hide {
	visibility: hidden;
	opacity: 0;
	// transform: translateY(-100%);
}
</style>
