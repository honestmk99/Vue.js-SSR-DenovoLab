<template>
    <footer>
        <div class="container section-padding footer">
            <div class="footer-body">
                <router-link to="/" class="footer-logo">
                    <img :src="footerLogo" alt="" />
                </router-link>
                <div class="footer-link">
                    <router-link to="/">Home</router-link>
                    <router-link to="/AboutACPPage">About ACP</router-link>
                    <router-link to="/ContactUsPage">Contact us</router-link>
                    <router-link to="/ResourcesPage">Resources</router-link>
                </div>
                <div class="footer-button">
                    <router-link to="/EnterZipCodePage">Validate your eligible</router-link>
                </div>
            </div>
            <div class="footer-liner"></div>
            <div class="footer-footer">
                <div>© Copyright 2023, All Rights Reserved by Affordable Connectivity Program</div>
                <div class="white-space">Privacy policy</div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            footerLogo: require('../../assets/images/components/header/logo.png'),
        }
    },
}
</script>
<style>
@import '../../assets/styles/components/layouts/Footer.css';
</style>
