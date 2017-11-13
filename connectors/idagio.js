'use strict';

const parse = function(data) {
	return $(data).text().replace(/ *\([^)]*\) */g, '');
};

Connector.playerSelector = '*[class^=\'player-PlayerBar__bar--\']';

Connector.getArtist = () => {
	const composer = $('section.content *[class*=\'__composer--\']')[0];
	const composerText = parse(composer) || '';
	const interpreters = $('section.content *[class*=\'__interpreter--\']')[0];
	const interpretersText = parse(interpreters) || '';
	const artists = [composerText, interpretersText].join(', ');
	return artists;
};

Connector.trackSelector = 'section.content *[class*=\'__title--\']';

Connector.currentTimeSelector = 'section.content *[class^=\'player-PlayerProgress__progress--\'';

Connector.durationSelector = 'section.content *[class^=\'player-PlayerProgress__timeTotal--\'';

Connector.isPlaying = () => $('label.c-icon__label').text === 'Play';
