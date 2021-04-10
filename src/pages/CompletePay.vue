<template>
 <div class="column self-center">
	 <q-btn dense unelevated padding="none">
		 <q-icon color="grey-8" name="more_vert" size="md">
			 <q-popup-proxy transition-show="flip-up" transition-hide="flip-down"
			                style="transform: translateX(50px)"
			 >
				<q-card style="min-height: 80vh">
					<q-card-section class="row justify-center q-pa-sm">
						<q-btn unelevated dense padding="none"
						       icon="mdi-chevron-down-circle-outline" text-color="green"
						       class="col-auto"
						/>
					</q-card-section>
					<q-card-section style="text-align: center">
						<span style="font-size: 20px">Pago Realizado</span> <br><br>
						<span style="font-size: 14px; color: slategrey">
							El comercio ha recibido correctamente tu pago,
							tu comprobante es: <u>#{{receipt}}</u>
						</span>
					</q-card-section>
					<q-card-section>
						<div style="text-align: center">
							<span style="font-size: 16px; text-align: center"><strong>Detalles</strong></span>
						</div>
						<div class="row justify-center">
							<div class="col-12 row"
							     v-for="(item, index) in payment"
							     :key="index"
							>
								<div class="col-4 q-pr-xs"
								     style="text-align: end; font-size: 10px">
									<span>{{ item.label }}: </span>
								</div>
								<div class="col-8" style="font-size: 11px">
									<strong style="color: #1D1D1D"
											:style="Number.isInteger(item.info) ? item.info >= 0 ? 'color: green' : 'color: red' : 'color: black'"
									>
										{{item.info}}
										<span v-if="Number.isInteger(item.info)">{{currency}}</span>
									</strong>
								</div>
							</div>
							
							<div class="col-8 row justify-center">
								<q-btn unelevated dense padding="none"
								       icon="email" text-color="grey"
								       class="col-2"
								/>
								<h4 class="col-auto">Logo</h4>
								<q-btn unelevated dense padding="none"
								       icon="mdi-close-circle-outline" text-color="grey"
								       class="col-2"
								/>
							</div>
						</div>
						
					</q-card-section>
					
					
				</q-card>
			 </q-popup-proxy>
		 </q-icon>
	 </q-btn>
 </div>
</template>

<script>
export default {
	data() {
		return {
			currency: 'EUR',
			receipt: '123UOP6984',
			payment: [
				{
					info: '14/03/2020 14:25',
					label: 'Fecha'
				},
				{
					info: -5200000,
					label: 'Cantidad'
				},
				{
					info: '25635412 (Tú)',
					label: 'Pagador'
				},
				{
					info: '65942316 (Nombre_Comercio)',
					label: 'Receptor',
				},
				{
					info: 5000000,
					label: 'Recibe'
				}
			]
		}
	}
}
</script>

<style lang="stylus">

</style>