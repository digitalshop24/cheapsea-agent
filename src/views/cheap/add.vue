<template>
	<div class="cheap">
		<div class="cheap__item">
			<div class="cheap__title">Тип предложения</div>
			<div class="cheap__offer-type">
				<el-radio v-model="offerType" label="airplane" class="cheap__offer-item">Самолет</el-radio>
				<el-radio v-model="offerType" disabled label="trane" class="cheap__offer-item">Поезд</el-radio>
				<el-radio v-model="offerType" disabled label="bus" class="cheap__offer-item">Автобус</el-radio>
				<el-radio v-model="offerType" disabled label="car_rent" class="cheap__offer-item">Аренда авто</el-radio>
			</div>
		</div>

		<div class="cheap__item">
			<div class="cheap__title">Название</div>
			<el-input placeholder="Название" v-model="name"></el-input>
		</div>

		<div class="cheap__item">
			<div class="cheap__title">Город отправления</div>
			<el-select
				v-model="cityFrom"
				filterable
				placeholder="Введите город">
				<el-option
					v-for="(item, key) in cityList"
					:key="key"
					:label="item.name"
					:value="cityId(item)">
				</el-option>
			</el-select>
		</div>

		<div class="cheap__item">
			<div class="cheap__title">Город прибытия</div>
			<el-select
				v-model="cityTo"
				filterable
				placeholder="Введите город">
				<el-option
					v-for="(item, key) in cityList"
					:key="key"
					:label="item.name"
					:value="cityId(item)">
				</el-option>
			</el-select>
		</div>

		<div class="cheap__item">
			<div class="cheap__title">Авиакомпания</div>
			<el-select
		    v-model="value9"
		    multiple
		    filterable
		    remote
		    reserve-keyword
		    placeholder="Please enter a keyword"
		    :remote-method="remoteMethod"
		    :loading="loading">
		    <el-option
		      v-for="item in options4"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select>
		</div>
	</div>
</template>
<script>
import _ from 'lodash'

export default {
	name: 'cheap-add',
	data() {
		return {
			offerType: null,
			name: '',
			cityFrom: null,
			cityTo: null,
			airline: null,

			options4: [],
	      value9: [],
	      list: [],
	      loading: false
		}
	},
	methods: {
		remoteMethod(query) {
			if (query !== '') {
			  this.loading = true;
			  this.$store.dispatch('getAirlines').then(response => {
			  	console.log(response)
			  })
			  // setTimeout(() => {
			  //   this.loading = false;
			  //   this.options4 = this.list.filter(item => {
			  //     return item.label.toLowerCase()
			  //       .indexOf(query.toLowerCase()) > -1;
			  //   });
			  // }, 200);
			} else {
	      	this.options4 = [];
	      }
		},
		cityId(item){
			if (item.airports.length) {
				return item.airports[0].city_id
			}
			return item.name
		}
	},
	computed: {
		cityList(){
			let city = this.$store.state.cheaps.cities
			if (city) {
				return city
			}
			return null
		},
		airlinesList(){
			let airline = this.$store.state.cheaps.airlines
			if (airline) {
				return airline
			}
			return null
		}
	}
}
</script>

<style lang="stylus" scoped>
.cheap
	padding 20px 40px
	max-width 600px
	margin 0 auto
	
.cheap__item
	margin-bottom 30px
	
.cheap__title
	font-size 18px
	font-weight bold
	color #333
	margin 10px auto
	
.cheap__text
	font-size 14px
	color #333
	
.cheap__offer-type
	width 200px
	display flex
	flex-direction column
	justify-content center
	align-items flex-start
	padding-left 15px

.cheap__offer-item
	margin-left 0
	margin-bottom 5px
</style>
