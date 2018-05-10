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
				remote
				reserve-keyword
				placeholder="Введите город"
				:remote-method="getCities"
				:loading="loading">
				<el-option
					v-for="(item, key) in cityOptions"
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
				remote
				reserve-keyword
				placeholder="Введите город"
				:remote-method="getCities"
				:loading="loading">
				<el-option
					v-for="(item, key) in cityOptions"
					:key="key"
					:label="item.name"
					:value="cityId(item)">
				</el-option>
		  </el-select>
		</div>

		<div class="cheap__item">
			<div class="cheap__title">Авиакомпания</div>
			<el-select
				v-model="airline"
				filterable
				remote
				reserve-keyword
				placeholder="Введите Авиакомпанию"
				:remote-method="getAirlines"
				:loading="loading">
				<el-option
					v-for="(item, key) in airlineOptions"
					:key="key"
					:label="item.name"
					:value="item.id">
				</el-option>
		  </el-select>
		</div>

		<div class="cheap__item">
			<div class="cheap__title">Прямой</div>
			<el-switch
			  v-model="direct"
			  active-color="#13ce66"
			  inactive-color="#cccccc">
			</el-switch>
		</div>

		<div class="cheap__item">
			<div class="cheap__title">Город пересадки</div>
			<el-select
				v-model="cityTransplant"
				filterable
				remote
				reserve-keyword
				placeholder="Введите пересадки"
				:remote-method="getCities"
				:loading="loading">
				<el-option
					v-for="(item, key) in cityOptions"
					:key="key"
					:label="item.name"
					:value="cityId(item)">
				</el-option>
		  </el-select>
		</div>

		<div class="cheap__item">
			<div class="cheap__title">Авиакомпания</div>
			<el-select
				v-model="airlineTransplant"
				filterable
				remote
				reserve-keyword
				placeholder="Введите Авиакомпанию"
				:remote-method="getAirlines"
				:loading="loading">
				<el-option
					v-for="(item, key) in airlineOptions"
					:key="key"
					:label="item.name"
					:value="item.id">
				</el-option>
		  </el-select>
		</div>

		<div class="cheap__item">
			<div class="cheap__title">Цена</div>
			<el-input placeholder="Название" v-model="price"></el-input>
		</div>

		<div class="cheap__item">
			<div class="cheap__title">Даты предложения</div>
			<el-date-picker
				v-model="date1"
				type="daterange"
				range-separator="To"
				start-placeholder="Дата начала"
				end-placeholder="Дата завершения">
			</el-date-picker>
		</div>

		<div class="cheap__item">
			<div class="cheap__title">Дата конца спец.предложения:</div>
			<el-date-picker
				v-model="date2"
				type="date"
				placeholder="Укажите дату">
			</el-date-picker>
		</div>

		<div class="cheap__item">
			<div class="cheap__title">Описание</div>
			<el-input
			  type="textarea"
			  :rows="2"
			  placeholder="Опишите особенности предложения если они есть."
			  v-model="text">
			</el-input>
		</div>

		<div class="cheap__item">
			<div class="cheap__title">Добавить фото</div>
			<el-upload
			  action="https://jsonplaceholder.typicode.com/posts/"
			  list-type="picture-card"
			  :on-preview="handlePictureCardPreview"
			  :on-remove="handleRemove">
			  <i class="el-icon-plus"></i>
			</el-upload>
		</div>

		<div class="cheap__item">
			<el-button type="primary">Предпросмотр</el-button>
			<el-button type="success">Опубликовать</el-button>
		</div>

	</div>
</template>
<script>
import _ from 'lodash'
import { fetchCity, fetchAirlines } from '@/api/cheaps'

export default {
	name: 'cheap-add',
	data() {
		return {
			offerType: null,
			name: '',
			cityFrom: null,
			cityTo: null,
			airline: null,
			direct: false,
			cityTransplant: null,
			airlineTransplant: null,
			price: null,
			date1: null,
			date2: null,

			dialogImageUrl: '',
      	dialogVisible: false,

			airlineOptions: [],
			cityOptions: [],
	      loading: false
		}
	},
	methods: {
		getAirlines(query) {
			if (query !== '') {
			  this.loading = true;
			  fetchAirlines(query).then(response => {
			  	this.loading = false;
			  	this.airlineOptions = response.data.filter(item => {
			      return item.name.toLowerCase()
					.indexOf(query.toLowerCase()) > -1
			   })
			  })
			} else {
	      	this.airlineOptions = [];
	      }
		},
		getCities(query) {
			if (query !== '') {
			  this.loading = true;
			  fetchCity(query).then(response => {
			  	this.loading = false;
			  	this.cityOptions = response.data.filter(item => {
			      return item.name.toLowerCase()
					.indexOf(query.toLowerCase()) > -1
			   })
			  })
			} else {
	      	this.cityOptions = [];
	      }
		},
		cityId(item){
			if (item.airports.length) {
				return item.airports[0].city_id
			}
			return item.name
		},
		handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
	},
	computed: {
		
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
	

.cheap__uploader .el-upload {
	border: 1px dashed #d9d9d9;
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
}

.cheap__uploader .el-upload:hover {
	border-color: #409EFF;
}
.cheap__uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 178px;
	height: 178px;
	line-height: 178px;
	text-align: center;
}
.avatar {
	width: 178px;
	height: 178px;
	display: block;
}
</style>
