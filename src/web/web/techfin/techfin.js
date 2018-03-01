import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/techfin.scss';
import techfin from './techfin.vue'
var indexVue = new Vue({
    el: '#techfin',
    template: '<div><headCommon></headCommon><techfin></techfin><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'techfin': techfin
    }
})
