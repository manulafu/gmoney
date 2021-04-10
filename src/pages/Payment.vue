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
		</q-card>
		
		<div class="row test justify-around">
			<div class="col-5 row justify-center items-end">
				<div class="col-auto bg-white q-pa-xs row justify-center content-center"
				     id="circle">
					<div id="inner-circle" class="text-center">
						<div>
							<br>
							<span class="text-grey-7 text-uppercase">importe</span><br>
							<span class="text-green-6">{{new Intl.NumberFormat('es-ES').format(payer.amount)}}<br>
							<strong>{{payer.currency}}</strong></span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-6 column items-end q-pa-sm">
				<span class="text-white text-right col-6" style="font-size: 9px">
					Se le cobrará una comisión del 5%
				</span>
				<div class="col text-right text-white">
					<span style="font-size: 12px">Límite de dinero </span><br>
					<span style="font-size: 17px">{{new Intl.NumberFormat('es-ES').format(payer.limit)}} {{payer.currency}}</span>
				</div>
				<div class="col-2 bg-white custom-border-div row justify-around items-center q-px-md">
					<span class="col-12 text-grey-7">5.000.000</span>
				</div>
			</div>
		</div>
		<q-card class="my-card q-mt-lg q-mx-xs">
			<q-card-section class="row no-wrap items-center">
				<q-avatar size="xl">
					<img :src="payer.img" :alt="payer.first_name + ' photo profile image'"/>
				</q-avatar>
				<div class="col q-pl-sm" style="color: #21BA45">
					<strong>{{receiver.first_name}}<br>{{receiver.last_name}}</strong>
				</div>
				<div class="col-3 custom-border-div row justify-around items-center q-pa-xs">
					<q-avatar size="sm">
						<img src="https://i.ebayimg.com/images/g/AbQAAOSwqU9cs8Pb/s-l640.jpg" alt="bandera europea"/>
					</q-avatar>
					<div style="color: #21BA45">{{payer.currency}}</div>
				</div>
			
			</q-card-section>
			<q-space/>
			<q-card-section class="row items-center justify-center">
				<q-input rounded outlined v-model="pin"
				         type="password" color="green" dense
				         class="col-5"
				         placeholder="Introducir pin"
				/>
			</q-card-section>
			<q-card-section class="row justify-center items-center">
				<q-btn unelevated rounded color="green" no-caps label="Transferir"
				       class="text-center col-7"
				/>
			</q-card-section>
			<q-space/>
			<q-card-section class="row justify-center items-center">
				<q-btn unelevated rounded color="green" no-caps label="Ir al perfil"
				       class="col-5"
				/>
			</q-card-section>
			
			
		</q-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: 'manu',
			pin: '',
			payer: {
				first_name: 'Manuel',
				last_name: 'Esquivias',
				amount: 9520000,
				currency: 'EUR',
				limit: 10000000,
				img: '//d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'
			},
			receiver: {
				first_name: 'Alberto',
				last_name: 'Arzuaga',
				img: '//d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'
			}
		}
	}
}
</script>

<style>
#img-fondo{
	background-image: linear-gradient(90deg, #00C3C0 15%, #34495E 100%);
	height: 70vh;
}
.custom-border-div{
	border: 1px #21BA45 solid;
	border-radius: 25px;
}
.test{
	height: 30vh;
}
#circle{
	border-radius: 50%;
	height: 110px;
	width: 110px;
}

#inner-circle {
	border-radius: 50%;
	height: 95px;
	width: 95px;
	box-shadow: 0 0 2px 1px #21BA45;
}

</style>