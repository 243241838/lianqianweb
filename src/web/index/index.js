import { Vue } from 'js/base'
import headCommon from '../../components/indexHead/headCommon.vue';
import footerCommon from '../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/index.scss';
import index from './index.vue'
var indexVue = new Vue({
    el: '#index',
    template: '<div><headCommon></headCommon><index></index><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'index': index
    }
})
