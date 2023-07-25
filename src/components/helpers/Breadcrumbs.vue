<template>
    <div class="section section-breadcrumbs">
        <div class="container container-1170">
            <ul class="section-breadcumbs-menu">
                <li>
                    <router-link to="/"> Home </router-link>
                </li>
                <li>
                    <router-link to="#">
                        {{ currenPage }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['currenPage'],
}
</script>

<style>
@import './../../assets/styles/helpers/breadcrumbs.css';
</style>
