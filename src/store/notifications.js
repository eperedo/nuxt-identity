import Vue from 'vue';

export const state = () => ({
	type: 'danger',
	message: '',
});

export const getters = {
	status(state) {
		return state.message.length > 0;
	},
};

export const actions = {
	show({ commit }, payload) {
		commit('show', payload);
		setTimeout(() => {
			commit('show', { message: '' });
		}, 3000);
	},
};

export const mutations = {
	show(state, { message, type = 'danger' }) {
		Vue.set(state, 'message', message);
		Vue.set(state, 'type', type);
	},
};
