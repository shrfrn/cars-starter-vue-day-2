<template>
    <UserMsg />
	<header>
		<CarFilter @filter="onFilterBy" />
		<RouterLink to="/car/edit"><button>Add a Car</button></RouterLink>
	</header>
	<CarList @remove="removeCar" v-if="cars" :cars="cars" />
</template>

<script>
import { carService } from '@/services/car.service'
import { showSuccessMsg, showErrorMsg } from '@/services/eventBus.service.js'

import CarFilter from '@/cmps/CarFilter.vue'
import CarList from '@/cmps/CarList.vue'
import UserMsg from '@/cmps/UserMsg.vue'

export default {
	data() {
		return {
			cars: null,
		}
	},
	methods: {
		async removeCar(carId) {
            try {
                await carService.remove(carId)
    
                const idx = this.cars.findIndex(car => car._id === carId)
                this.cars.splice(idx, 1)
                showSuccessMsg(`Car ${carId} removed`)                
            } catch (err) {
                showErrorMsg(`Couldn't remove car ${carId}`)                
            }
		},
        async loadCars(filterBy = {})  {
            this.cars = await carService.query(filterBy)
        },
        onFilterBy(filterBy) {
            console.log(filterBy)
            this.loadCars(filterBy)
        }
	},
	async created() {
        this.loadCars()
	},
	components: {
		CarList,
		CarFilter,
		UserMsg,
	},
}
</script>

<style lang="scss"></style>
