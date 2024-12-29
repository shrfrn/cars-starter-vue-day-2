<template>
    <section class="car-list">
        <ul>
            <li v-for="car in cars" :key="car._id">
                <CarPreview :car="car" />
                <div class="actions">
                    <RouterLink :to="`/car/${car._id}`"><button>Details</button></RouterLink>
                    <RouterLink :to="`/car/edit/${car._id}`"><button>Edit</button></RouterLink>
                    <button @click="onRemoveCar(car._id)">x</button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import CarPreview from './CarPreview.vue';

export default {
    props: {
        cars: {
            type: Array,
            required: true,
        }
    },
    methods: {
        async onRemoveCar(carId) {
            this.$emit('remove', carId)
        }
    },
    components: {
        CarPreview,
    }
}
</script>

<style lang="scss">

.car-list ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;

    padding: 0;
    list-style: none;

    li {
        display: grid;
        justify-items: start;
        background-color: lightsteelblue;
        padding: 1rem;
        
        .actions {
            display: flex;
            gap: .3rem;
            justify-self: end;
        }
    }
}
</style>