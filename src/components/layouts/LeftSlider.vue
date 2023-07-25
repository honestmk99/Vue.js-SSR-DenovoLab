<template>
    <div class="leftSlider">
        <div class="leftSlider-burger">
            <img :src="iconBurger" alt="" />
        </div>
        <div class="leftSlider-logo">
            <img :src="iconLogo" alt="" />
        </div>
        <div class="mb-88">
            <router-link to="/" class="btn-round btn-left-arrow"> Back </router-link>
        </div>
        <h3 class="mb-32">Check Application Status</h3>
        <div class="mb-16">
            <label> Email Address </label>
            <input class="w-100" type="text" placeholder="Enter Email" />
        </div>
        <div>
            <label> Label Placeholder </label>
            <input class="w-100" type="text" placeholder="Value Placeholder" />
        </div>
        <div class="mt-32">
            <router-link to="/" class="btn-round btn-green"> Check Status </router-link>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            iconLogo: require('../../assets/images/components/header/Peering-Color-Logo.svg'),
            iconBurger: require('../../assets/images/components/header/Peering-Color-Logo.svg'),
        }
    },
}
</script>

<style>
@import '../../assets/styles/components/layouts/LeftSlider.css';
</style>
