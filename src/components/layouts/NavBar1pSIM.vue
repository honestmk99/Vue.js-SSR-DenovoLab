<template>
    <img :src="HamburgerLogo" alt="" class="float-right navbar-icon-hamburger" v-on:click="showNavbar = !showNavbar" />
    <div class="navbar-block" v-show="!showNavbar">
        <div class="position-relative">
            <div class="navbar-block--btn-sign-up-block">
                <router-link to="/" v-on:click="showNavbar = !showNavbar" class="btn-sign-up">Sign Up</router-link>
            </div>
        </div>
        <div class="navbar-block-closeIcon">
            <img :src="iconClose" alt="" v-on:click="showNavbar = !showNavbar" />
        </div>
        <div>
            <ul class="navbar-block-menu">
                <li class="desktop-hidden">
                    <router-link v-on:click="showNavbar = !showNavbar" to="/PrePaidPage" class="navbar-block-menu-link">
                        Prepaid Plan
                    </router-link>
                </li>
                <li class="desktop-hidden">
                    <router-link v-on:click="showNavbar = !showNavbar" to="/ACPPage" class="navbar-block-menu-link">
                        ACP Plan
                    </router-link>
                </li>
                <li class="desktop-hidden">
                    <router-link v-on:click="showNavbar = !showNavbar" to="/OwnPlanPage" class="navbar-block-menu-link">
                        Make Your Plan
                    </router-link>
                </li>
                <li class="desktop-hidden">
                    <router-link
                        v-on:click="showNavbar = !showNavbar"
                        to="/ActiveSimCardPage"
                        class="navbar-block-menu-link"
                    >
                        Activate Now
                    </router-link>
                </li>
                <li>
                    <router-link v-on:click="showNavbar = !showNavbar" to="#" class="navbar-block-menu-link">
                        About Us
                    </router-link>
                </li>
                <li>
                    <router-link
                        v-on:click="showNavbar = !showNavbar"
                        to="/CheckoutPage"
                        class="navbar-block-menu-link"
                    >
                        Features
                    </router-link>
                </li>
                <li>
                    <a href="/#sectionWorks" v-on:click="showNavbar = !showNavbar" class="navbar-block-menu-link">
                        How It Work
                    </a>
                </li>
                <li>
                    <a
                        v-on:click="showNavbar = !showNavbar"
                        href="http://portal.peeringhub.mobi"
                        class="navbar-block-menu-link"
                    >
                        Support
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div v-on:click="showNavbar = !showNavbar" class="position-absolute black-bg" v-show="!showNavbar"></div>
</template>

<script>
export default {
    data() {
        return {
            showNavbar: true,
            iconClose: require('../../assets/images/components/navbar/Cloes-icon.svg'),
            HamburgerLogo: require('../../assets/images/components/header/Hamburger-Black.svg'),
        }
    },
}
</script>

<style>
@import '../../assets/styles/components/layouts/Navbar.css';
</style>
