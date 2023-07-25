<template>
    <Slider />
    <Afordable />
    <Eligible />
    <Validate />
</template>
<script>
import Slider from '../sections/HomePage/01_Slider.vue'
import Afordable from '../sections/HomePage/02_Afordable.vue'
import Eligible from '../sections/HomePage/03_Eligible.vue'
import Validate from '../sections/HomePage/04_Validate.vue'

export default {
    components: {
        Slider,
        Afordable,
        Eligible,
        Validate,
    },
    methods: {},
    data() {
        return {}
    },
}
</script>
<style></style>
