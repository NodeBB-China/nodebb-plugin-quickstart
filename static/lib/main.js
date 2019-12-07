'use strict';

/* globals document, $ */

$(document).ready(function () {
	/*
		这个文件告诉我们：如何引入一个客户端 js 脚本
		在 `plugin.json` 中，你可以发现本文件列在 "scripts" 字段中。
		那个数组的意义是告知 NodeBB 构建时，需要引入并优化的客户端 js 脚本。

		这些方法你很可能会用到：

		$(document).ready();	  当 DOM 加载完毕时会触发。
		$(window).on('action:ajaxify.end', function(data) { ... });		注："data" 包含 "url" 
		Ajax 请求完成后触发，更明确的表述： Ajax操作完成， 并切换路由后触发。
	*/

	console.log('nodebb-plugin-quickstart: 已载入');
	// 注意：这个会在着陆页触发。
});
