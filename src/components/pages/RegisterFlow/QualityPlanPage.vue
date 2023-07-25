<template>
    <section class="container validate-padding section-padding">
        <h2 class="m-0 font-3xl font-raleway text-primary text-center title">
            You qualify for the
            <span class="text-secondary">Affordable Connectivity Program</span>
            benefit!
        </h2>
        <div class="card-section">
            <div class="acp-benefit-card shadow-primary rounded-24">
                <div class="d-flex flex-column gap-24 align-items-center">
                    <h1 class="m-0 banner-explain__title font-raleway text-primary text-center card-title">
                        Great! Your are eligible for the following benefit:
                    </h1>
                    <div class="d-flex flex-column gap-48">
                        <div class="d-flex flex-column gap-24 align-items-center">
                            <div class="special-plan"><img :src="okIcon" alt="" /> Free Special plan</div>
                            <h1 class="m-0 font-basic font-roboto text-primary card-subtitle text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </h1>
                            <div class="card-price">
                                <div class="section-plan-card shadow-primary">
                                    <div class="section-plan-card-header">
                                        <h1 class="section-plan-card-title m-0">5G LTE DATA</h1>
                                        <h1 class="section-plan-card-size m-0">15GB<span>/mo</span></h1>
                                    </div>
                                    <div>
                                        <div class="section-plan-card-price black-color">$25<span>/mo</span></div>
                                        <div>
                                            <ul class="section-plan-card-list">
                                                <li>Unlimited talk & text</li>
                                                <li>Nationwide coverage</li>
                                                <li>Uses 5G or 4G LTE</li>
                                                <li>whichever is strongest</li>
                                            </ul>
                                        </div>
                                        <div class="text-center mt-24 mb-10">
                                            <router-link class="ghost-blue-btn" to="/">Get this plan</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-auto font-basic-medium font-raleway px-24 py-12 bg-primary text-white rounded-8">
                    Enroll now
                </div>
            </div>
            <div class="d-flex flex-column gap-42">
                <div class="last-banner">
                    <h1 class="m-0 text-white font-last-banner banner-title">
                        This service is provided by Peeringhub Inc., an approved ACP service provider:
                    </h1>
                    <img :src="bannerLogo" alt="" class="banner-logo" />
                </div>
                <div class="d-flex flex-column gap-32 banner-explain rounded-24 shadow-primary">
                    <div class="d-flex flex-column gap-24">
                        <h1 class="m-0 font-acp font-raleway text-primary text-center">
                            Check if you are eligible for additional <spa class="text-secondary">Tribal Benefit</spa>
                        </h1>
                        <h1 class="m-0 font-raleway font-basic text-primary text-center banner-explain__sub">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua
                        </h1>
                    </div>
                    <button class="bg-primary px-24 py-12 rounded-8 text-white m-auto">Check now</button>
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
            logo: require('../../../assets/images/icons/logo.svg'),
            tabletImg: require('../../../assets/images/icons/tablet.svg'),
            okIcon: require('../../../assets/images/icons/okIcon.svg'),
            miniTablet: require('../../../assets/images/icons/miniTablet.svg'),
            bannerLogo: require('../../../assets/images/pages/banner_logo.png'),
        }
    },
}
</script>
<style>
@import '../../../assets/styles/components/pages/RegisterFlowPage/Quality.css';
</style>
<style scoped>
.title {
    padding-right: 275px;
    padding-left: 275px;
    padding-bottom: 56px;
}

.card-subtitle {
    padding: 0 294px;
}

.card-section {
    padding-left: 60px;
    padding-right: 60px;
    display: flex;
    flex-direction: column;
    gap: 88px;
}

.card-price {
    display: flex;
    align-items: center;
    justify-content: center;
}

.benefit-card-subtitle,
.check-card-text {
    font-size: 40px;
    font-weight: 500;
    line-height: 46px;
}
.check-card-text {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.benefit-card-subtitle {
    width: 637px;
}
.section-plan-card-size,
.section-plan-card-title {
    font-family: Montserrat;
}
.quality-banner {
    background: url('../../../assets/images/pages/NotQualifedPage/mainscreen.png');
    height: 254px;
    background-repeat: no-repeat;
    width: 100%;
    background-position-y: 34%;
    background-size: cover;
}
@media (min-width: 768px) and (max-width: 1024px) {
    .check-card-text {
        display: block;
    }
}

@media (max-width: 768px) {
    .title {
        padding-right: 0;
        padding-left: 0;
    }

    .card-section {
        gap: 80px;
        padding-left: 0;
        padding-right: 0;
    }

    .card-subtitle {
        padding: 0;
    }
}

@media (max-width: 375px) {
    .benefit-card-subtitle,
    .check-card-text,
    .benefit-header-title {
        font-size: 30px;
        line-height: 35.22px;
        font-weight: 500;
    }
    .benefit-card-subtitle,
    .check-card-text {
        width: 311px;
    }
    .benefit-header-title {
        width: 351px;
    }

    .card-section {
        gap: 30px;
    }
}
</style>
