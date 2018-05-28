
// startup by appWindow.js in system app.
'use strict';

var debug = function(msg) {
console.log('=== * === gAppwin: ' + msg);
};

var GappWindow = function () {
	var gworigin = window.location.origin.replace('system', 'gtest_reactjs_v1.0') + '/';
	debug('constructor origin = ' + gworigin);
	this.config = {
		manifestURL: gworigin + 'manifest.webapp',
		url: gworigin + 'index.html',
		origin: gworigin
	};

	this.reConfig(this.config);
	this.render();
	this.publish('created');
}

GappWindow.prototype = Object.create(AppWindow.prototype);
GappWindow.prototype.constructor = GappWindow;

GappWindow.prototype.openAnimation = 'slide-from-top';
GappWindow.prototype.closeAnimation = 'slide-to-top';

GappWindow.SUB_COMPONENTS = {
  'transitionController': window.AppTransitionController,
  'childWindowFactory': window.ChildWindowFactory
};

GappWindow.REGISTERED_EVENTS =
  AttentionWindow.REGISTERED_EVENTS;

GappWindow.prototype._DEBUG = true;
GappWindow.prototype.CLASS_LIST =
  'appWindow GappWindow';
GappWindow.prototype.CLASS_NAME = 'GappWindow';

window.addEventListener('holdstar', {handleEvent: (evt) => {
	debug('handle holdstar');
	var gw = new GappWindow();
	gw.requestOpen();
}});





