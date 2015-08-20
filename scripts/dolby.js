var Dolby = Dolby || {};

(function () {
	'use strict';

	Dolby.init = function () {
		var title = document.getElementById('video-title');
		var videoContainer = document.getElementById('video-container');

		if (!Dolby.supportDDPlus) {
			title.textContent = 'Dolby Digital Plus is not supported on this Browser';
			videoContainer.style.display = 'none';
		} else {
			title.textContent = 'This Browser supports Dolby Digital Plus, Cool!'
		}
	}
}());