import VueRouter from 'vue-router'

import HomePage from '../components/HomePage'

/* Articles */
import Article01 from '../components/Article/Page/Article01'

export default new VueRouter({
	routes:[
		{
            name: 'HomePage',
			path:'/',
			component: HomePage
		},
        {
            name: 'Article-01',
			path:'/Article-01',
			component: Article01
		}
	]
})
