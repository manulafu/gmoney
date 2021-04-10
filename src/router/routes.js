
const routes = [
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{ path: '', component: () => import('pages/Index.vue'), name: 'index' },
			{ path: 'help/', component: () => import('pages/Help.vue'), name: 'help' },
			{ path: 'servicios/', component: () => import('pages/Services.vue'), name: 'servicios' },
			{ path: 'balance/', component: () => import('pages/Balance.vue'), name: 'balance' },
			{ path: 'red/', component: () => import('pages/Red.vue'), name: 'red' },
			{ path: 'cat/', component: () => import('pages/Categories.vue'), name: 'cat' },
			{ path: 'user/', component: () => import('pages/User.vue'), name: 'user' },
			{ path: 'pay/', component: () => import('pages/Payment.vue'), name: 'payment' },
			{ path: 'friend/', component: () => import('pages/FriendProfile.vue'), name: 'friend'},
			{ path: 'pay/complete/', component: () => import('pages/CompletePay.vue'), name: 'payment_complete'},
			{ path: 'map/', component: () => import('pages/Map.vue'), name: 'map' },
		]
		
	},
	
	// Always leave this as last one,
	// but you can also remove it
	{
		path: '*',
		component: () => import('pages/Error404.vue')
	}
]

export default routes
