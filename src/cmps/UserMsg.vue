<template>
    <div v-if="msg" class="user-msg" :class="msg.type">
        <p>{{ msg.txt }}</p>
    </div>
</template>

<script>
import { eventBus } from '@/services/eventBus.service'
export default {
    data() {
        return {
            msg: null,
        }
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => this.msg = null, 2000)
        }
    },
    created() {
        this.unsubscribe = eventBus.on('user-msg', this.showMsg)
    },
    unmounted() {
        this.unsubscribe()
    }
}
</script>

<style lang="scss">
.user-msg {
    position: absolute;
    top: 45px;
    right: 1rem;

    min-width: 200px;

    padding: 0.5rem;
    background-color: lightgray;
    border-radius: .5rem;

    font-size: .9rem;

    &.success {
        background-color: darkseagreen;
    }

    &.error {
        background-color: orangered;
        color: whitesmoke;
    }
}
</style>