<template>
	<div>
		<div class="fixed-top" id="img-fondo" style="z-index: -1"></div>
		<div class="row justify-around q-ma-md">
			<q-btn class="col-auto" no-caps rounded outline style="color: white">
				Servicios
			</q-btn>
			<q-btn class="col-auto" no-caps rounded outline style="color: white">
				Viaje
			</q-btn>
			<q-btn class="col-auto" no-caps rounded outline style="color: white">
				Puntos
			</q-btn>
		</div>
		
		<div class="q-mt-lg q-mx-md" id="my-search">
			<q-input v-model="text" outlined
			         placeholder="Nombre, Teléfono o Email"
			         rounded color="white"
			         dense
			>
				<template v-slot:append>
					<q-icon name="search" color="white"/>
				</template>
			</q-input>
		</div>
		<div class="row justify-center">
			<div class="col items-center q-ma-sm"
			     v-for="(item, index) in people.slice(0,6)" :key="index"
			>
				<div class="row justify-center">
					<q-avatar size="lg">
						<img :src="item.img" :alt="item.first_name + ' photo profile image'">
					</q-avatar>
				</div>
				<div class="text-center text-white">{{item.first_name}}</div>
			</div>
		</div>
		<div class="column q-mx-sm">
			<q-card class="q-pa-sm q-my-xs"
			        v-for="(item, index) in people" :key="index"
			>
				<div class="row justify-between items-center" style="font-size: 10px">
					<q-avatar size="xl">
						<img :src="item.img" :alt="item.first_name + ' photo profile image'">
					</q-avatar>
					<div class="column">
						<span class="text-subtitle1">{{item.first_name}}</span>
						<span class="text-subtitle2" style="color: #21BA45">{{item.last_name}}</span>
					</div>
					<div class="column">
						<div class="col q-mb-sm">
							<q-icon name="place" color="grey" size="xs"/>
							{{item.city}}, {{item.country}}
						</div>
						<div class="col q-pl-sm q-mt-sm">
							<span>ID: {{item.id}}</span>
						</div>
						
					</div>
					<q-btn dense unelevated padding="none" @click="alert = true">
						<q-icon color="grey-8" name="more_vert" size="md">
							<q-popup-proxy transition-show="flip-up" transition-hide="flip-down"
							               style="transform: translateX(50px)"
							>
								<q-list class="bg-white text-grey-7">
									<q-item clickable v-ripple
									        v-for="(item, index) in dialog_options"
									        :key="index"
									>
										<q-item-section avatar>
											<q-icon color="grey-7" :name="item.icon" />
										</q-item-section>
										
										<q-item-section>{{item.name}}</q-item-section>
									</q-item>
								</q-list>
							</q-popup-proxy>
						</q-icon>
					</q-btn>
					
				</div>
				
			</q-card>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: '',
			alert: false,
			dialog_options: [
				{
					name: 'Tansferir',
					icon: 'sync_alt'
				},
				{
					name: 'Recargar',
					icon: 'mobile_screen_share',
				},
				{
					name: 'Ver Perfil',
					icon: 'account_circle',
				},
				{
					name: 'Eliminar',
					icon: 'delete'
				}
			],
			people: [
				{
					first_name: 'Manuel',
					last_name: 'Esquivias Lafuente',
					img: '//d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg',
					city: 'Madrid',
					country: 'Spain',
					id: 516186161,
				},{
					first_name: 'Manuel',
					last_name: 'Esquivias Lafuente',
					img: '//d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg',
					city: 'Madrid',
					country: 'Spain',
					id: 516186161,
				},{
					first_name: 'Manuel',
					last_name: 'Esquivias Lafuente',
					img: '//d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg',
					city: 'Madrid',
					country: 'Spain',
					id: 516186161,
				},{
					first_name: 'Manuel',
					last_name: 'Esquivias Lafuente',
					img: '//d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg',
					city: 'Madrid',
					country: 'Spain',
					id: 516186161,
				},{
					first_name: 'Manuel',
					last_name: 'Esquivias Lafuente',
					img: '//d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg',
					city: 'Madrid',
					country: 'Spain',
					id: 516186161,
				},{
					first_name: 'Manuel',
					last_name: 'Esquivias Lafuente',
					img: '//d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg',
					city: 'Madrid',
					country: 'Spain',
					id: 516186161,
				},{
					first_name: 'Manuel',
					last_name: 'Esquivias Lafuente',
					img: '//d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg',
					city: 'Madrid',
					country: 'Spain',
					id: 516186161,
				},{
					first_name: 'Manuel',
					last_name: 'Esquivias Lafuente',
					img: '//d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg',
					city: 'Madrid',
					country: 'Spain',
					id: 516186161,
				},
			]
		}
	}
}
</script>

<style lang="stylus">
#img-fondo
	background linear-gradient(90deg,#00C3C0 15%,#34495E 100%)
	height 70vh
#my-search
	border white 2px solid
	border-radius 30px
	background rgba( 255, 255, 255, 0.5)
</style>