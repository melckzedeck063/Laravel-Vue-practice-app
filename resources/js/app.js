import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import MainLayout from './Layouts/MainLayout.vue';
import '../css/app.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faBars, faArrowRight, faChartLine } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faBars, faArrowRight, faChartLine)

 
createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob('./Pages/**/*.vue')
    
        const page =  await pages[`./Pages/${name}.vue`]()
        page.default.layout = page.default.layout || MainLayout
        return  page
      },
  setup({ el, App, props, plugin }) {
    return createApp({ render: () => h(App, props) })
      .component('font-awesome-icon', FontAwesomeIcon)
      .use(plugin)
      .mount(el)
  },
});
