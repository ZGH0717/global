<template>
	<header id="head" class="textC">
		<slot name="iconL"></slot>
		<button v-if="isBack" class="iconL icon textC colorf" @click="$router.go(-1)"><i class="iconfont fs22">&#xe697;</i>
		</button>
		<span v-if="title" class="m-fs36 colorf title">{{title}}</span>
		<slot name="title"></slot>
		<slot name="iconR"></slot>
		<!--<div v-if="borderB" class="hr"></div>-->
	</header>
</template>

<script>

	export default {
		name: 'i-head',
		props: {
			imgL: {
				default() {
					return ''
				}
			},
			title: {
				default() {
					return ''
				}
			},
			isBack: {
				default() {
					return true
				}
			},
			showMsg: {
				default() {
					return true
				}
			},
			borderB: {
				default() {
					return true
				}
			}
		},
		data() {
			return {
				sideActive: false,
			}
		},
		computed: {

		}
	}
</script>
