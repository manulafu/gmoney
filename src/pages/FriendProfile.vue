<template>
<div>
	<div class="fixed-top" id="img-fondo" style="z-index: -1"></div>
	<q-card class="my-card q-mt-lg q-mx-xs">
		<q-card-section class="row no-wrap items-center">
			<q-avatar size="xl">
				<img :src="payer.img" :alt="payer.first_name + ' photo profile image'"/>
			</q-avatar>
			<div class="col q-pl-sm" style="color: #21BA45">
				<strong>{{payer.first_name}}<br>{{payer.last_name}}</strong>
			</div>
			<div class="col-3 custom-border-div row justify-around items-center q-pa-xs">
				<q-avatar size="sm">
					<img src="https://i.ebayimg.com/images/g/AbQAAOSwqU9cs8Pb/s-l640.jpg" alt="bandera europea"/>
				</q-avatar>
				<div style="color: #21BA45">{{payer.currency}}</div>
			</div>
		
		</q-card-section>
		<q-card-section class="row justify-between">
			<q-btn unelevated rounded color="green" no-caps label="Transferir"
			       class="col-5" icon-right="sync_alt" text-color="white"
			       padding="xs" size="md" style="font-size: 12px"
			/>
			<q-btn unelevated rounded color="green" no-caps label="Recargar Móvil"
			       class="col-6" icon-right="delete" text-color="white"
			       padding="xs" size="md" style="font-size: 12px"
			/>
		</q-card-section>
	</q-card>
	<q-card class="card q-mt-lg q-mx-xs"
	        v-for="(item, index) in transactions"
	        :key="index"
	>
		<q-expansion-item switch-toggle-side>
			<template v-slot:header>
				
				<q-item-section class="column">
					<span class="col"
					      v-text="item.amount >= 0 ? 'Pago recibido de ' + item.name : 'Pago a ' + item.name"
					      style="font-size: 11px"
					>
					</span>
					<span class="col" style="font-size: 10px">
						{{item.date}} {{item.time}}
					</span>
				</q-item-section>
				
				<q-item-section side :style="item.amount >= 0 ? 'color: green' : 'color: red'"
				                style="font-size: x-small"
				>
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
			name: 'manu',
			payer: {
				first_name: 'Manuel',
				last_name: 'Esquivias',
				amount: 9520000,
				currency: 'EUR',
				limit: 10000000,
				img: '//d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'
			},
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
	}
}
</script>

<style lang="stylus">
#img-fondo
	background linear-gradient(90deg,#00C3C0 15%,#34495E 100%)
	height 70vh
.custom-border-div
	border 1px #21BA45 solid
	border-radius 25px
</style>