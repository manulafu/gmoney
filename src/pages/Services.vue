<template>
	<div>
		
		<div class="q-my-xl q-mx-md" id="my-search">
			<q-input v-model="text" outlined
			         placeholder="Search"
			         rounded color="grey-1"
			         dense
			
			>
				<template v-slot:append>
					<q-icon name="search"/>
				</template>
			</q-input>
		</div>
		<div class="q-ma-md">
			<q-card class="card q-my-md q-pa-xs"  v-for="(servicio, index) in servicios" :key="index">
				<q-card-section class="row justify-between content-center">
					<q-icon class="col-2" :name="servicio.icon"
					        :color="servicio.color" size="sm"
					/>
					<div class="col-5"><strong>{{servicio.name}}</strong></div>
					<q-btn icon-right="keyboard_arrow_right"
					       class="col-auto"
					       unelevated
					       rounded
					       label="Listado" size="8px" color="primary"/>
				</q-card-section>
				
			</q-card>
		</div>
		<div class="fixed-top" id="img-fondo" style="z-index: -1"></div>
		<div class="row justify-center">
			<q-btn color="green-5"
			       size="10px"
			       rounded
			       label="Ir al perfil"
	        />
		</div>
		
	
	</div>
</template>

<script>
export default {
	data () {
		return{
			text: '',
			servicios: [
				{
					name: 'Agua',
					icon: 'opacity',
					color: 'blue',
					listado: []
				},{
					name: 'Electricidad',
					icon: 'emoji_objects',
					color: 'yellow',
					listado: []
				},{
					name: 'Antena',
					icon: 'tv',
					color: 'black',
					listado: []
				},{
					name: 'Internet',
					icon: 'wifi',
					color: 'blue',
					listado: []
				},{
					name: 'Coche',
					icon: 'directions_car',
					color: 'black',
					listado: []
				},
			],
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