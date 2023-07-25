<template>
    <section class="container section-padding">
        <div class="connect-section">
            <div class="connect-section__explain">
                <h2 class="connect-section__explain__title">What is the Affordable Connectivity Program?</h2>
                <div class="d-flex flex-column gap-4">
                    <p>
                        The Affordable Connectivity Program (ACP) is a U.S. government program run by the
                        <span class="connect-section-link">Federal Communications Commission (FCC)</span>
                        to help low-income households pay for internet service and connected devices like a laptop or
                        tablet.
                    </p>
                    <p>
                        You are likely eligible if your household’s income is below 200% of the Federal Poverty Line, or
                        if you or someone you live with currently receives a government benefit like SNAP, Medicaid,
                        SSI, WIC, Pell Grant, or Free and Reduced-Price Lunch.
                    </p>
                    <div class="d-flex flex-column gap-3">
                        <p>If your household is eligible, you could receive:</p>
                        <div class="connect-section-list">
                            <div class="connect-section-list__item">
                                <span>•</span>
                                <h1>Up to a $30/month discount on your internet service</h1>
                            </div>
                            <div class="connect-section-list__item">
                                <span>•</span>
                                <h1>Up to a $75/month discount if your household is on qualifying Tribal lands</h1>
                            </div>
                            <div class="connect-section-list__item">
                                <span>•</span>
                                <h1>
                                    A one-time discount of up to $100 for a laptop,tablet, or desktop computer (with a
                                    co-payment of more than $10 but less than $50)
                                </h1>
                            </div>
                            <div class="connect-section-list__item">
                                <span>•</span>
                                <h1>A low cost service plan that may be fully covered through the ACP*</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider-container about-video">
                <div class="video-button">
                    <img :src="videoButton" alt="" />
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
            videoButton: require('../../../../assets/images/icons/video.png'),
        }
    },
}
</script>
<style>
@import '../../../../assets/styles/components/sections/SinglePages/AboutACPPage/02_Afordable.css';
</style>
