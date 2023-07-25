<template>
    <div class="section section-profileBreadcrumbs">
        <div>
            <div
                :class="[
                    stepNum == 1
                        ? 'section-profileBreadcrumbs-item--not-active'
                        : 'section-profileBreadcrumbs-item--active',
                ]"
            >
                Personal Info
            </div>
            <div
                :class="[
                    stepNum > 1 ? 'section-profileBreadcrumbs-item--not-active' : 'section-profileBreadcrumbs-item',
                    stepNum > 3 && 'section-profileBreadcrumbs-item--active',
                ]"
            >
                Household information
            </div>
            <div
                :class="[
                    stepNum > 2 ? 'section-profileBreadcrumbs-item--not-active' : 'section-profileBreadcrumbs-item',
                    stepNum > 4 && 'section-profileBreadcrumbs-item--active',
                ]"
            >
                Eligibility
            </div>
            <div
                :class="[
                    stepNum > 4 ? 'section-profileBreadcrumbs-item--not-active' : 'section-profileBreadcrumbs-item',
                ]"
            >
                Agreement
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stepNum'],
}
</script>

<style>
@import './../../assets/styles/helpers/profileBreadcrumbs.css';
</style>
