'use strict';

/* 全局定义了 $, app, socket, define */

define('admin/plugins/quickstart', ['settings'], function (Settings) {
	var ACP = {};

	ACP.init = function () {
		Settings.load('quickstart', $('.quickstart-settings'));

		$('#save').on('click', function () {
			Settings.save('quickstart', $('.quickstart-settings'), function () {
				app.alert({
					type: 'success',
					alert_id: 'quickstart-saved',
					title: 'Settings Saved',
					message: '点击以重启你的 NodeBB 使变动生效。',
					clickfn: function () {
						socket.emit('admin.reload');
					},
				});
			});
		});
	};

	return ACP;
});
