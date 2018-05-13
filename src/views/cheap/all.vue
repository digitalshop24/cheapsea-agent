<template>
	<div class="offers">
		<el-dialog :title="offer.name" :visible.sync="modalInfo">
			<div class="offers__row"><b>id:</b>{{offer.id}}</div>
			<div class="offers__row"><b>offer_type:</b>{{offer.offer_type}}</div>
			<div class="offers__row"><b>discount_type:</b>{{offer.discount_type}}</div>
			<div class="offers__row"><b>name:</b>{{offer.name}}</div>
			<div class="offers__row"><b>airline_id:</b>{{offer.airline_id}}</div>
			<div class="offers__row"><b>is_direct:</b>{{offer.is_direct}}</div>
			<div class="offers__row"><b>transfers_count:</b>{{offer.transfers_count}}</div>
			<div class="offers__row"><b>date_from:</b>{{offer.date_from}}</div>
			<div class="offers__row"><b>date_to:</b>{{offer.date_to}}</div>
			<div class="offers__row"><b>date_end:</b>{{offer.date_end}}</div>
			<div class="offers__row"><b>discount_rate:</b>{{offer.discount_rate}}</div>
			<div class="offers__row"><b>description:</b>{{offer.description}}</div>
			<div class="offers__row"><b>status:</b>{{offer.status}}</div>
			<div class="offers__row"><b>user_id:</b>{{offer.user_id}}</div>
			<div class="offers__row"><b>price:</b>{{offer.price}}</div>
			<div class="offers__row"><b>price_currency:</b>{{offer.price_currency}}</div>
			<div class="offers__row"><b>two_sides:</b>{{offer.two_sides}}</div>
			<div class="offers__row"><b>flight_number:</b>{{offer.flight_number}}</div>
			<div class="offers__row"><b>gate:</b>{{offer.gate}}</div>
			<div class="offers__row"><b>origin_id:</b>{{offer.origin_id}}</div>
			<div class="offers__row"><b>destination_id:</b>{{offer.destination_id}}</div>
			<div class="offers__row"><b>from_airport_id:</b>{{offer.from_airport_id}}</div>
			<div class="offers__row"><b>to_airport_id:</b>{{offer.to_airport_id}}</div>
			<div class="offers__row"><b>visits_count:</b>{{offer.visits_count}}</div>
			<div class="offers__row"><b>name_auto:</b>{{offer.name_auto}}</div>
			<div class="offers__row"><b>created_at:</b>{{offer.created_at}}</div>
			<div class="offers__row"><b>updated_at:</b>{{offer.updated_at}}</div>
			<div class="offers__row"><b>images_countries_square_id:</b>{{offer.images_countries_square_id}}</div>
			<div class="offers__row"><b>images_countries_rectangular_id:</b>{{offer.images_countries_rectangular_id}}</div>
			<div class="offers__row"><b>quality:</b>{{offer.quality}}</div>
		</el-dialog>


		<el-table :data="offers" style="width: 100%">
			<el-table-column
				fixed
				prop="id"
				label="id"
				width="70">
			</el-table-column>
			<el-table-column
				prop="attributes.name"
				label="Название"
				width="220">
			</el-table-column>
			<el-table-column
				prop=""
				label="Статус"
				width="120">
			</el-table-column>
			<el-table-column
				prop="attributes.offer_type"
				label="Тип"
				width="120">
			</el-table-column>
			<el-table-column
				prop="attributes.discount_type"
				label="Тип скидки"
				width="120">
			</el-table-column>
			<el-table-column
				prop="attributes.quality"
				label="Качество"
				width="120">
			</el-table-column>
			<el-table-column
				prop="attributes.airline.data.attributes.name"
				label="Авиакомпания"
				width="150">
			</el-table-column>
			<el-table-column
				fixed="right"
				label="Операции"
				width="120">
				<template slot-scope="scope">
					<el-button @click="modalInfo = true" type="text" size="small"><i class="el-icon-view"></i></el-button>
					<el-button type="text" size="small"><i class="el-icon-edit"></i></el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
export default {
	name: 'cheap-all',
	mounted() {
	},
	data() {
		return {
			modalInfo: false,
			offer: {
				"id": 33623,
				"offer_type": "airplane",
				"discount_type": null,
				"name": "From Тайчжун to Амстердам for 61692 RUB.",
				"airline_id": 1723,
				"is_direct": true,
				"transfers_count": null,
				"date_from": "2018-05-16T07:40:00.000Z",
				"date_to": "2018-05-20T18:45:00.000Z",
				"date_end": "2018-05-12T08:17:59.000Z",
				"discount_rate": null,
				"description": null,
				"status": "draft",
				"user_id": 3,
				"price": 61692,
				"price_currency": "RUB",
				"two_sides": true,
				"flight_number": null,
				"gate": null,
				"origin_id": 9239,
				"destination_id": 250,
				"from_airport_id": null,
				"to_airport_id": null,
				"visits_count": 1,
				"name_auto": "Тайчжун - Амстердам. Май, 61692руб., прямой.",
				"created_at": "2018-05-11T20:29:02.930Z",
				"updated_at": "2018-05-11T20:29:02.930Z",
				"images_countries_square_id": null,
				"images_countries_rectangular_id": null,
				"quality": "unknown",
				"statistic": "{}"
			}
		}
	},
	methods: {
		getOffer (id) {
			
		},
		discount_type(type){
			return type ? type : 'Нет'
		}
	},
	computed: {
		offers(){
			return this.$store.state.offers.items
		}
	}
}
</script>

<style lang="stylus" scoped>
.offers
	padding 20px 40px
	// max-width 600px
	margin 0 auto
.offers__row
	height: 50px
	border-bottom 1px solid #ccc
	display flex
	align-items center
	b
		margin-right: 20px
.offers__title
	font-size 18px
	font-weight bold
	color #333
	margin 10px auto
	
.offers__text
	font-size 14px
	color #333
	
.offers__offer-type
	width 200px
	display flex
	flex-direction column
	justify-content center
	align-items flex-start
	padding-left 15px

.offers__offer-item
	margin-left 0
	margin-bottom 5px
</style>
