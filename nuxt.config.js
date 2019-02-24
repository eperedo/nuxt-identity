'use strict';

const config = {
	generate: {
		dir: './../dist',
	},
	head: {
		title: 'Nuxt Identity',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'A fun way to integrate nuxt with netlify identity service',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	mode: 'spa',
	rootDir: './src',
};

module.exports = config;
