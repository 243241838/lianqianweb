import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/contactUs.scss';
import contactUs from './contactUs.vue'
var indexVue = new Vue({
    el: '#contactUs',
    template: '<div><headCommon></headCommon><contactUs></contactUs><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'contactUs': contactUs
    }
})
