<template>
    <form v-if="car" @submit.prevent="onSave" class="car-edit">
        <input v-model="car.vendor" type="text">
        <input v-model.number="car.speed" type="number">
        <button>Save</button>
    </form>
</template>

<script>
import { carService } from '@/services/car.service.js'

export default {
    data() {
        return {
            car: null,
        }
    },
    methods: {
        async onSave() {
            await carService.save(this.car)
            this.$router.push('/car')
        }
    },
    async created() {
        const { id: carId } = this.$route.params

        if (carId) {
            this.car = await carService.get(carId)
        } else {
            this.car = carService.getEmptyCar()
        }
    },
}
</script>

<style lang="scss">
.car-edit {
    display: grid;
    justify-items: start;
    gap: .5rem;
    
    padding: 1rem;
    background-color: rgb(102, 148, 148);

    button {
        justify-self: end;
    }
}
</style>