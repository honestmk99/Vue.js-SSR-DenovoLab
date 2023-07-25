<template>
    <b :class="[this.currentValue == 'unlimited' ? 'd-none' : null]">{{ currentValue }}</b>
    <span :class="[this.currentValue == 'unlimited' ? 'd-none' : null]">/{{ maxValue }}</span>
    <div :class="[this.currentValue == 'unlimited' ? 'd-none' : 'customProgressBar']">
        <div
            :class="[this.currentValue == 'unlimited' ? 'd-none' : progressBarChecker(this.currentValue)]"
            :style="{
                width: (parseInt(this.currentValue) * 100) / parseInt(this.maxValue) + 'px',
            }"
        ></div>
    </div>
    <div class="position-relative">
        <div :class="[this.currentValue == 'unlimited' ? 'customProgressBar-unlimited' : 'd-none']"></div>
    </div>
</template>

<script>
export default {
    props: ['currentValue', 'maxValue'],
    methods: {
        progressBarChecker(currentValue) {
            if (parseInt(currentValue) > 0 && parseInt(currentValue) < 2000) {
                return 'customProgressBar-red'
            } else if (parseInt(currentValue) > 2000 && parseInt(currentValue) < 4000) {
                return 'customProgressBar-orange'
            } else {
                return 'customProgressBar-green'
            }
        },
    },
    data() {
        return {}
    },
}
</script>

<style>
@import './../../assets/styles/helpers/progressBar.css';
</style>
