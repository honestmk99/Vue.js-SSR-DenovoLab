<template>
    <section>
        <div class="text-center mb-24">
            <div>Test link:</div>
            <div>
                <router-link to="/QualityACPPage">QualityACPPage</router-link>
            </div>
            <div>
                <router-link to="/LatestBlogPage">LatestBlogPage</router-link>
            </div>
            <div>
                <router-link to="/BlogPage">BlogPage</router-link>
            </div>
            <div>
                <router-link to="/QualityPlanPage">QualityPlanPage</router-link>
            </div>
            <div>
                <router-link to="/NotQualifedPage">NotQualifedPage</router-link>
            </div>
            <div>
                <router-link to="/RegistrationPage">RegistrationPage</router-link>
            </div>
            <div>
                <router-link to="/ShippigDetailsPage">ShippigDetailsPage</router-link>
            </div>
            <div>
                <router-link to="/VerificationPage">VerificationPage</router-link>
            </div>
            <div>
                <router-link to="/EnrollmentResultPage">EnrollmentResultPage</router-link>
            </div>
            <div>
                <router-link to="/ConfirmProgrammPage">ConfirmProgrammPage</router-link>
            </div>
        </div>

        <div class="container d-flex flex-column slider-gap section-padding">
            <div class="slider">
                <div class="slider-container home-slider-container">
                    <div
                        class="d-flex flex-column align-items-center justify-content-center raleway-font slider-image slider-image"
                    >
                        <div class="slider-title text-white">Stay Connected</div>
                        <div class="basic-500-font text-white text-center">
                            The Affordable Connectivity Program (ACP) is a U.S. government program that helps many low
                            income households pay for broadband service and internet connected devices
                        </div>
                        <div class="d-flex justify-content-center flex-sm-row flex-column slider-button">
                            <router-link to="/EnterZipCodePage" class="btn-style white-btn home-slider"
                                >Apply now</router-link
                            >
                            <div class="btn-style transparent-btn home-slider">Learn more</div>
                        </div>
                    </div>
                </div>
                <div class="slider-bottom">
                    <img :src="receiptDiscount" alt="" />
                    <div>Get the benefits for broadband service and internet connected devices</div>
                </div>
            </div>
            <div class="slider-content">
                <div class="slider-content__status">
                    <div class="d-flex flex-column text-center gap-2">
                        <div class="slider-content__status__count">1M+</div>
                        <div class="slider-content__status__explain">over a million registered members</div>
                    </div>
                    <div class="d-flex flex-column text-center gap-2">
                        <div class="slider-content__status__count">$136M+</div>
                        <div class="slider-content__status__explain">saved money across the country</div>
                    </div>
                    <div class="d-flex flex-column text-center gap-2">
                        <div class="slider-content__status__count">2M+</div>
                        <div class="slider-content__status__explain">vacancies across the country</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    components: {},
    methods: {},
    data() {
        return {
            receiptDiscount: require('../../../assets/images/icons/receiptDiscount.svg'),
        }
    },
}
</script>
<style>
@import '../../../assets/styles/components/sections/HomePage/01_Slider.css';
</style>
