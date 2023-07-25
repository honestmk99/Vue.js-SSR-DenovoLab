<template>
    <Header v-if="!$route.meta.hideNavigation" />
    <div class="body">
        <router-view />
    </div>
    <Footer v-if="!$route.meta.hideNavigation" />
</template>

<script>
import Header from './components/layouts/Header.vue'
import Footer from './components/layouts/Footer.vue'

export default {
    name: 'App',
    components: {
        Header,
        Footer,
    },
}
</script>

<style>
@import './assets/styles/libraries/bootstrap.min.css';
@import './assets/styles/libraries/flicking.css';
@import './assets/styles/libraries/flicking-inline.css';
@import './assets/styles/libraries/animate.min.css';

@import './assets/styles/libraries/normalize.css';
@import './assets/styles/fonts.css';

@import './assets/styles/icons.css';
@import './assets/styles/inputs.css';
@import './assets/styles/spaces.css';
@import './assets/styles/colors.css';
@import './assets/styles/title.css';
@import './assets/styles/buttons.css';
@import './assets/styles/general.css';
@import './assets/styles/optimize.css';
</style>
