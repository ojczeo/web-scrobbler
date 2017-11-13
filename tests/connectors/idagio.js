'use strict';

module.exports = function(driver, connectorSpec) {
	connectorSpec.shouldBehaveLikeMusicSite(driver, {
		url: 'https://www.idagio.com/recordings/11182604',
		playButtonSelector: '*[class^=\'common-PlayAllButton__component--\''
	});
};
