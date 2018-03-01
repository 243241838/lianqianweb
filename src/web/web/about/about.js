import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/about.scss';
import about from './about.vue'
var indexVue = new Vue({
    el: '#about',
    template: '<div><headCommon></headCommon><about></about><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'about': about
    }
})
