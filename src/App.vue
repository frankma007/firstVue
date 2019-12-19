<template>
	<div id="app">
    <!-- 除了Detail组件不做缓存 -->
    <keep-alive exclude="Detail">
		  <router-view />
    </keep-alive>
	</div>
</template>
<script></script>
<style></style>