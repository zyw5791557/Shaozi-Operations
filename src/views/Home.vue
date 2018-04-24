<script>
	export default {
		data() {
			return {
				sysName:'哨子运营',
				collapsed:false,
				sysUserName: 'zhongyiwei@shaozi.com',
				sysUserAvatar: '',
				isCollapse: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			triggerCollapse() {
				this.isCollapse = !this.isCollapse;
			}
		}
	}
</script>

<template>
	<el-container>
		<el-header id="header" height="50px">
			<a class="navbar-brand" href="javascript:;">
				<img class="logo" src="/static/images/logo.png" alt="哨子运营">
				{{ sysName }}
			</a>
			<el-dropdown class="navbar-user">
				<span class="el-dropdown-link">
					{{ sysUserName }}
					<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</el-header>
		<el-container>
			<el-aside id="aside" :width="isCollapse ? '55px' : '220px'">
				<el-menu
					default-active="1"
					class="el-menu-vertical"
					:collapse="isCollapse"
					@open="handleOpen"
					@close="handleClose"
					background-color="#41586e"
					text-color="#adbece"
					active-text-color="#fff">
					<el-menu-item index="1">
						<i class="el-icon-menu"></i>
						<span slot="title">工作台</span>
					</el-menu-item>
					<el-menu-item index="2">
						<i class="el-icon-edit"></i>
						<span slot="title">资讯推送</span>
					</el-menu-item>
					<el-menu-item index="3">
						<i class="el-icon-edit"></i>
						<span slot="title">资讯推送列表</span>
					</el-menu-item>
					<el-menu-item index="4">
						<i class="el-icon-edit"></i>
						<span slot="title">宣传内容推送</span>
					</el-menu-item>
					<el-menu-item index="5">
						<i class="el-icon-edit"></i>
						<span slot="title">工作台图标管理</span>
					</el-menu-item>
					<el-menu-item index="6">
						<i class="el-icon-edit"></i>
						<span slot="title">审批图标管理</span>
					</el-menu-item>
				</el-menu>
				<div class="aside-footer">
					<a 
						@click="triggerCollapse"
						:class="isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'" 
						href="javascript:;"></a>
				</div>
			</el-aside>
			<el-main id="main">
				<transition name="fade">
					<router-view></router-view>
				</transition>
			</el-main>
		</el-container>
	</el-container>
</template>


<style scoped lang="scss">
	@import '~scss_vars';
	a {
		color: #adbece;
	}
	 .el-header {
		background-color: $header-background-color;
		color: #333;
		text-align: center;
		line-height: 60px;
		padding: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.navbar-brand {
			font-size: 20px;
			display: inline-block;
			padding: 0 15px;
			font-weight: bold;
			.logo {
				max-height: 20px;
				margin-top: -4px;
				vertical-align: middle;
			}
		}
		.navbar-user {
			color: #adbece;
			line-height: 50px;
			padding: 0 15px;
		}
	}
	
	.el-aside {
		background-color: $aside-background-color;
		color: #333;
		text-align: center;
		line-height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transition: all .3s;
		.aside-footer {
			padding: 0 15px;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			height: 50px;
			background-color: $b-dark;
			a {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 30px;
				height: 30px;
				color: #fff !important;
    			background-color: $aside-collapse-background-color;
			}
		}
	}
	
	.el-main {
		color: #333;
		text-align: center;
		line-height: 160px;
		padding: 0 15px;
	}
	
	body .el-container {
		height: 100%;
	}
</style>

<style lang="scss">
@import '../styles/base-reset.scss';
@import '../styles/base-styles.scss';
@import '../styles/transition.scss';
@import '../styles/ui-reset.scss';
</style>
