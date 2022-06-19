import VueRouter from 'vue-router'

import HomePage from '../components/HomePage'
import CareerPage from '../components/CareerPage'
import NotePage from '../components/NotePage'
import TechPage from '../components/TechPage'
import MusicPage from '../components/MusicPage'
import SharingPage from '../components/SharingPage'

/* Career Articles */
import Article01 from '../components/Article/Page/Article01'
import Article02 from '../components/Article/Page/Article02'
import Article03 from '../components/Article/Page/Article03'

/* Music Article */
import MusicArticle01 from '../components/Article/Page/MusicArticle01'

export default new VueRouter({
	routes:[
		{
			path:'/',
			component: HomePage,
			children:[
				{
					path:'/',
					component: CareerPage,
				},
				{
					name: 'CareerPage',
					path:'career',
					component: CareerPage,
				},
				{
					name: 'NotePage',
					path:'note',
					component: NotePage,
				},
				{
					name: 'TechPage',
					path:'tech',
					component: TechPage,
				},
				{
					name: 'MusicPage',
					path:'music',
					component: MusicPage,
				},
				{
					name: 'SharingPage',
					path:'sharing',
					component: SharingPage,
				}
			]
		},
        {
            name: 'Article-01',
			path:'/Article-01',
			component: Article01
		},
		{
            name: 'Article-02',
			path:'/Article-02',
			component: Article02
		},
		{
            name: 'Article-03',
			path:'/Article-03',
			component: Article03
		},
		{
            name: 'MusicArticle-01',
			path:'/MusicArticle-01',
			component: MusicArticle01
		}
	]
})

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
