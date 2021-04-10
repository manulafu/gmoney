<template>
	<div>
		<div class="fixed-top" id="img-fondo" style="z-index: -1"></div>
		<div style="text-align: center" class="q-my-xl">
			<span id="big-balance" class="text-weight-thin">990.280.900 CFA</span><br>
			<span style="color: white" class="q-mt-sm">Balance</span>
		</div>
		<q-card class="card q-my-sm q-mx-xs q-pa-md row items-end justify-around">
			<div class="col-5 q-gutter-xs q-pb-xs">
				<span>
					<strong style="color: black; font-weight: bold; font-size: 20px">Filtros</strong>
				</span><br>
				<q-btn-dropdown label="Servicios" dropdown-icon="keyboard_arrow_down"
				                style="background: #009b00" rounded dense size="sm"
				                no-caps text-color="white" class="mybtn"
				>
					<q-list>
						<q-item clickable v-close-popup @click="onItemClick">
							<q-item-section>
								<q-item-label>Photos</q-item-label>
							</q-item-section>
						</q-item>
						
						<q-item clickable v-close-popup @click="onItemClick">
							<q-item-section>
								<q-item-label>Videos</q-item-label>
							</q-item-section>
						</q-item>
						
						<q-item clickable v-close-popup @click="onItemClick">
							<q-item-section>
								<q-item-label>Articles</q-item-label>
							</q-item-section>
						</q-item>
					</q-list>
				</q-btn-dropdown>
			</div>
			<div class="col-7 relative-position row justify-around"
			     style="border: darkgreen 1px solid"
			>
				<p class="absolute" id="date"
				>
					Fecha
				</p>
				<q-btn-dropdown class="col-auto q-mt-lg mybtn" dropdown-icon="keyboard_arrow_down"
				       rounded color="blue" text-color="white" dense size="sm"
				       no-caps label="Inicio"
				>
					<q-date v-model="initial_date"></q-date>
				</q-btn-dropdown>
				<q-btn-dropdown class="col-auto q-mt-lg mybtn" dropdown-icon="keyboard_arrow_down"
				       rounded color="blue" text-color="white" dense size="sm"
				       no-caps label="Fin"
				>
					<q-date v-model="final_date"></q-date>
				</q-btn-dropdown>
			</div>
		</q-card>
		<q-card class="card q-mt-lg q-mx-xs"
		        v-for="(item, index) in transactions"
		        :key="index"
		>
			<q-expansion-item switch-toggle-side>
				<template v-slot:header>
					
					<q-item-section class="column">
						<span class="text-subtitle2 col"
						      v-text="item.amount >= 0 ? 'Pago recibido de ' + item.name : 'Pago a ' + item.name"
						></span>
						<span class="col text-caption">
							{{item.date}} {{item.time}}
						</span>
					</q-item-section>
					
					<q-item-section side :style="item.amount >= 0 ? 'color: green' : 'color: red'">
						<span v-text="item.amount >= 0 ? '+' + item.amount + ' ' + item.currency : item.amount + ' ' + item.currency"></span>
					</q-item-section>
				</template>
				
				<q-card>
					<q-card-section>
						<ul>
							<li>{{item.details.det1}}</li>
							<li>{{item.details.det2}}</li>
						</ul>
					</q-card-section>
				</q-card>
			</q-expansion-item>
		</q-card>
	</div>
</template>

<script>

export default {
	data() {
		return {
			initial_date: '2000/01/01',
			final_date: '',
			transactions: [
				{
					name: '21654989',
					amount: 9845,
					currency: 'CFA',
					date: '13/03/2017',
					time: '12:51',
					details: {
						det1: 58,
						det2: 87,
					}
				},{
					name: 'GETESA ORANGE',
					amount: -4.12,
					currency: 'EUR',
					date: '13/03/2017',
					time: '12:51',
					details: {
						det1: 34,
						det2: 64,
					}
				},
			],
		}
	},
	methods: {
		onItemClick() {
			console.log('Item clicked!!');
		}
	}
}
</script>

<style lang="stylus">
#img-fondo
	background linear-gradient(90deg,#00C3C0 15%,#34495E 100%)
	height 70vh
#big-balance
	color #f3f1f1
	font-size 2rem
#date
	text-align center
	margin 0
	padding 2px 5px
	background-color white
	transform translateY(-50%)
.mybtn
	margin-bottom 5px
	padding 0 5px
</style>