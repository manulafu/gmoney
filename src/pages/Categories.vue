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
		
		<div class="row">
			<div class="col-6" v-for="(item, index) in categories" :key="index">
				<q-input v-model="text" outlined
				         placeholder="Categorías"
				         rounded color="grey-1"
				         dense
				         class="q-ma-sm"
				         v-if="index === 0"
				>
					<template v-slot:append>
						<q-icon name="search" color="white"/>
					</template>
				</q-input>
				<q-card  class="column items-center q-ma-sm">
					<q-card-section>
						<q-icon color="grey-7" :name="item.icon"
						        size="50px"
						/>
					</q-card-section>
					<q-card-section>
						<q-btn icon-right="keyboard_arrow_right"
						       class="col"
						       unelevated
						       rounded
						       label="Detalles" size="8px" color="primary"/>
					</q-card-section>
				</q-card>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			text: '',
			categories: [
				{
					name: 'Agua',
					icon: 'opacity',
				},{
					name: 'Electricidad',
					icon: 'emoji_objects',
				},{
					name: 'Antena',
					icon: 'tv',
				},{
					name: 'Internet',
					icon: 'wifi',
				},{
					name: 'Coche',
					icon: 'directions_car',
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
</style>