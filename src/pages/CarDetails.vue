<template>
    <section class="car-details">
        <h2>{{ car.vendor }}</h2>
        <h3>{{ car.speed }}</h3>
        <RouterLink to="/car"><button>Back</button></RouterLink>
    </section>
</template>

<script>
import { carService } from '@/services/car.service';

export default {
    data() {
        return {
            car: null,
        }
    },
    async created() {
        const { id: carId } = this.$route.params
        this.car = await carService.get(carId)
    },
}
</script>

<style lang="scss">
.car-details {
    display: grid;
    gap: .5rem;
    align-items: start;

    padding: 1rem;
    background-color: rgb(245, 203, 124);

    a {
        justify-self: end;
    }
}
</style>