<template>
    <div class="car-filter">
        <input @input="onFilterBy" v-model="filterBy.txt" type="text" placeholder="Search">
    </div>
</template>

<script>
import { debounce } from '@/services/util.service.js'

export default {
    data() {
        return {
            filterBy: { txt: '' }
        }
    },
    methods: {
        filter() {
            console.log('Emitting')
            this.$emit('filter', this.filterBy)
        }
    },
    computed: {
        onFilterBy() {
            return debounce(this.filter, 400)
        }
    }
}
</script>

<style lang="scss">

</style>