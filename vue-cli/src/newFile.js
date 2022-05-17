import AppHeader from './components/AppHeader.vue';

export default (await import('vue')).defineComponent({
data: function () {
return {
str: 'hi'
};
},
components: {
'app-header': AppHeader
}
});
