import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/fintech.scss';
import fintech from './fintech.vue'
var indexVue = new Vue({
    el: '#fintech',
    template: '<div><headCommon></headCommon><fintech></fintech><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'fintech': fintech
    }
})
