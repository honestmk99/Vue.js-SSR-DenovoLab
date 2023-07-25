<template>
    <section class="container px-75 -px-md-0 -px-sm-16 pb-160 -pb-md-80 -pb-sm-60">
        <div class="d-flex flex-column gap-56 -gap-sm-42">
            <h1 class="m-0 font-h2 -font-sm-h3 font-ralewey text-primary text-center px-210 -px-md-25 -px-sm-0">
                You qualify for the <span class="text-secondary">Affordable Connectivity Program</span> benefit!
            </h1>
            <div class="d-flex flex-column gap-84 -gap-md-64 -gap-sm-40">
                <div class="d-flex flex-column gap-32 px-32 py-24 -px-md-24 -px-sm-16 shadow-primary rounded-24">
                    <div class="d-flex flex-column gap-24">
                        <h1
                            class="m-0 font-h2 -font-sm-h3 font-medium font-ralewey text-center text-black px-234 -px-md-0"
                        >
                            Great! Your are eligible for the following benefit:
                        </h1>
                        <div class="d-flex flex-column gap-48 -gap-md-56 -gap-sm-48">
                            <div class="d-flex flex-column gap-24 px-314 -px-md-82 -px-sm-0">
                                <div class="d-flex gap-8 align-items-start justify-content-center">
                                    <img :src="marker" alt="" />
                                    <h1 class="m-0 font-free font-ralewey font-medium text-black">
                                        Free Special plan and Android tablet
                                    </h1>
                                </div>
                                <div class="d-flex gap-p align-items-start justify-content-center">
                                    <img :src="checker" alt="" />
                                    <h1 class="m-0 font-free-sub font-roboto font-nomal text-primary">
                                        Check if you are eligible for additional
                                        <span class="text-secondary">Tribal Benefit</span>
                                    </h1>
                                </div>
                                <div
                                    class="d-flex flex-column gap-18 px-24 py-24 -px-sm-4 -py-sm-0 shadow-primary -shadow-sm-none"
                                >
                                    <h1 class="m-0 font-submit text-black text-center">
                                        Please enter your Tribal number
                                    </h1>
                                    <div class="d-flex flex-sm-row flex-column gap-24 -gap-sm-12">
                                        <label
                                            for=""
                                            class="font-sm text-secondary font-inter d-flex flex-column gap-8 w-100"
                                            >Tribal number
                                            <input type="text" placeholder="Tribal number" />
                                        </label>
                                        <div class="d-flex justify-content-end align-items-end">
                                            <div
                                                class="px-24 py-8 rounded-8 text-secondary font-ralewey font-h6 font-medium bg-white border -w-sm-100 text-center"
                                            >
                                                Submit
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="d-flex flex-sm-row flex-column gap-48 -gap-md-24 -gap-sm-16 px-38 -px-md-0 -px-sm-16"
                            >
                                <div class="d-flex flex-column rounded-24 shadow-primary">
                                    <div
                                        class="bg-primary rounded-top-24 py-16 px-80 d-flex flex-column align-items-center justify-content-center text-white"
                                    >
                                        <h1 class="m-0 font-date font-inter">5G LTE DATA</h1>
                                        <h1 class="m-0 font-storage font-montserrat">15GB<span>/mo</span></h1>
                                    </div>
                                    <div
                                        class="pt-24 pb-32 rounded-bottom-24 d-flex flex-column gap-24 align-items-center justify-content-center"
                                    >
                                        <h1 class="m-0 font-montserrat font-price text-secondary">
                                            $5<span>/mo</span>
                                        </h1>
                                        <ul class="font-detail m-0">
                                            <li>Unlimited talk & text</li>
                                            <li>Nationwide coverage</li>
                                            <li>Uses 5G or 4G LTE,</li>
                                            <li>whichever is strongest</li>
                                        </ul>
                                        <div
                                            class="m-auto font-basic font-raleway text-secondary border rounded-8 px-24 py-12"
                                        >
                                            Get this Plan
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="d-flex flex-md-row flex-column gap-32 -gap-md-24 -gap-sm-16 shadow-primary rounded-16 px-32 -px-md-24 -px-sm-16 py-24 w-100"
                                >
                                    <img :src="phone" alt="" />
                                    <div class="d-flex flex-column justify-content-between -gap-md-24 py-16">
                                        <div class="d-flex flex-column gap-24">
                                            <div class="mr-120">
                                                <h1 class="m-0 font-montserrat font-semibold font-title text-primary">
                                                    Android Tablet for
                                                    <span class="text-secondary font-bold">$10.01</span> only
                                                </h1>
                                            </div>
                                            <div class="d-flex gap-8 align-items-center">
                                                <input type="checkbox" name="" id="" />I want to pay $10.01 for an
                                                Android Pad
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-start">
                                            <div
                                                class="rounded-8 px-24 py-12 text-secondary font-ralewey font-basic-medium border"
                                            >
                                                See Characterirstics
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
                </div>
                <div class="d-flex flex-column gap-42">
                    <div
                        class="d-flex flex-sm-row flex-column gap-80 -gap-md-56 -gap-sm-32 rounded-32 bg-primary pl-56 -px-sm-16 py-66 overflow-hidden"
                    >
                        <div class="d-flex flex-column gap-32 -gap-sm-16">
                            <h1 class="m-0 font-table text-white text-md-nowrap">
                                Get This Tablet at <span class="text-sky">$10.01</span>
                            </h1>
                            <div class="d-flex flex-column gap-24 w-471 -w-md-276 -w-sm-100">
                                <h1 class="m-0 text-white font-inter font-h4-sub font-se">Characterirstics</h1>
                                <div class="d-flex flex-column gap-16">
                                    <div class="border-bottom d-flex gap-12 pb-16">
                                        <h1 class="text-white font-table-sub w-140 m-0">Platform</h1>
                                        <h1 class="text-white font-table-sub w-100 m-0">Qualcomm Quad Core</h1>
                                    </div>
                                    <div class="border-bottom d-flex gap-12 pb-16">
                                        <h1 class="text-white font-table-sub w-140 m-0">OS</h1>
                                        <h1 class="text-white font-table-sub w-100 m-0">Info</h1>
                                    </div>
                                    <div class="border-bottom d-flex gap-12 pb-16">
                                        <h1 class="text-white font-table-sub w-140 m-0">Size</h1>
                                        <h1 class="text-white font-table-sub w-100 m-0">Info</h1>
                                    </div>
                                    <div class="border-bottom d-flex gap-12 pb-16">
                                        <h1 class="text-white font-table-sub w-140 m-0">Display</h1>
                                        <h1 class="text-white font-table-sub w-100 m-0">Info</h1>
                                    </div>
                                    <div class="border-bottom d-flex gap-12 pb-16">
                                        <h1 class="text-white font-table-sub w-140 m-0">Camara</h1>
                                        <h1 class="text-white font-table-sub w-100 m-0">Info</h1>
                                    </div>
                                    <div class="border-bottom d-flex gap-12 pb-16">
                                        <h1 class="text-white font-table-sub w-140 m-0">Battery</h1>
                                        <h1 class="text-white font-table-sub w-100 m-0">Info</h1>
                                    </div>
                                    <div class="border-bottom d-flex gap-12 pb-16">
                                        <h1 class="text-white font-table-sub w-140 m-0">Wifi</h1>
                                        <h1 class="text-white font-table-sub w-100 m-0">Info</h1>
                                    </div>
                                    <div class="border-bottom d-flex gap-12 pb-16">
                                        <h1 class="text-white font-table-sub w-140 m-0">Bands</h1>
                                        <h1 class="text-white font-table-sub w-100 m-0">Info</h1>
                                    </div>
                                    <div class="border-bottom d-flex gap-12 pb-16">
                                        <h1 class="text-white font-table-sub w-140 m-0">Certification</h1>
                                        <h1 class="text-white font-table-sub w-100 m-0">Info</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-100 position-relative">
                            <img
                                :src="phone"
                                alt=""
                                class="position-sm-absolute w-523 -h-md-570 -left-md-130 -top-md-65 -w-sm-100 -h-sm-321"
                            />
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
                                    Check if you are eligible for additional
                                    <spa class="text-secondary">Tribal Benefit</spa>
                                </h1>
                                <h1 class="m-0 font-raleway font-basic text-primary text-center banner-explain__sub">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                </h1>
                            </div>
                            <button class="bg-primary px-24 py-12 rounded-8 text-white m-auto">Check now</button>
                        </div>
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
            marker: require('../../../assets/images/icons/check.png'),
            checker: require('../../../assets/images/icons/Checkbox.png'),
            phone: require('../../../assets/images/pages/phone.png'),
            bannerLogo: require('../../../assets/images/pages/banner_logo.png'),
        }
    },
}
</script>
<style scoped>
.font-table-sub {
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}
.font-table {
    font-family: 'Montserrat';
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -1.100000023841858px;
}
.font-free {
    font-size: 24px;
    line-height: 34px;
}

.font-title {
    font-size: 24px;
    line-height: 34px;
}

.font-free-sub {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.03em;
}

input {
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.03em;
    color: #727b8b;
    padding: 8px 12px;
    box-shadow: 0 0 0 1px inset #e5e7eb;
    border-width: 0;
    border-radius: 8px;
}

.font-date {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
}

.font-storage {
    font-size: 40px;
    font-weight: 600;
    line-height: 49px;
}

.font-storage span {
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
}

.font-price {
    font-size: 40px;
    font-weight: 700;
    line-height: 49px;
}

.font-price span {
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
}

.font-detail {
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #39404d;
}

@media (max-width: 375px) {
    .font-table {
        font-size: 30px;
    }
}
</style>

<!-- <template>
    <section class="container validate-padding acp-padding">
        <div class="acp-title">
            <h2 class="m-0 font-3xl font-raleway text-primary text-center">
                You qualify for the
                <span class="text-secondary">Affordable Connectivity Program</span>
                benefit!
            </h2>
        </div>
        <div class="d-flex flex-column card-section">
            <div class="acp-benefit-card shadow-primary rounded-24">
                <div class="d-flex flex-column gap-24 align-items-center">
                    <h1 class="m-0 font-acp font-raleway text-primary text-center card-title">
                        Great! Your are eligible for the following benefit:
                    </h1>
                    <div class="d-flex flex-column gap-48">
                        <div class="d-flex flex-column gap-24 align-items-center">
                            <div class="special-plan">
                                <img :src="okIcon" alt="" /> Free Special plan and Android tablet
                            </div>
                            <div class="d-flex gap-8 align-items-center">
                                <input type="checkbox" />
                                <h1 class="m-0 font-basic text-primary font-roboto">
                                    Check if you are eligible for additional
                                    <span class="text-secondary">Tribal Benefit</span>
                                </h1>
                            </div>
                            <div>
                                <div
                                    class="d-sm-flex d-none flex-column shadow-primary gap-18 align-self-center p-24 rounded-16"
                                >
                                    <h1 class="m-0 font-submit text-black font-relaway">
                                        Please enter your Tribal number
                                    </h1>
                                    <label for="" class="font-sm font-inter text-primary"
                                        >Tribal number
                                        <div class="d-flex gap-24 w-100">
                                            <input
                                                type="text"
                                                placeholder="Tribal number"
                                                class="px-12 py-8 rounded-8"
                                            />
                                            <button
                                                class="font-basic-medium bg-white text-secondary py-8 px-28 rounded-8 border-0 border"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </label>
                                </div>
                                <div class="d-sm-none d-flex flex-column gap-18 align-self-center">
                                    <h1 class="m-0 font-submit text-black font-relaway text-center">
                                        Please enter your Tribal number
                                    </h1>
                                    <div class="d-flex flex-column gap-12 w-100">
                                        <label for="" class="font-sm font-inter text-primary"
                                            >Tribal number
                                            <input
                                                type="text"
                                                placeholder="Tribal number"
                                                class="px-12 py-8 rounded-8"
                                            />
                                        </label>
                                        <button
                                            class="font-basic-medium bg-white text-secondary py-12 rounded-8 border-0 border"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="benefit-price">
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
                            <div
                                class="d-flex flex-md-row flex-column justify-content-center shadow-primary phone-card"
                            >
                                <div class="mr-32">
                                    <img :src="miniTablet" alt="" />
                                </div>
                                <div class="pt-24">
                                    <div class="buy_title mb-24">
                                        Android Tablet for
                                        <span class="main-blue-color">$10.01</span> only
                                    </div>
                                    <div class="mb-148">
                                        <input type="checkbox" /> Include tablet for
                                        <span class="main-blue-color">$10.1</span> only
                                    </div>
                                    <div>
                                        <router-link class="ghost-blue-btn" to="/">See Characterirstics</router-link>
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
        </div>
        <div class="quality-banner">
            <div class="quality-title">
                This service is provided by Peeringhub Inc., an approved ACP service provider:
            </div>
            <div>
                <img class="quality-banner-image" :src="logo" alt="" />
            </div>
        </div>
        <div class="check-card">
            <h2 class="mb-24 w-770">Check if you are eligible for additional Tribal Benefit</h2>
            <div class="mb-32 w-770 d-inline-block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua
            </div>
            <div>
                <div class="blue-btn">Check now</div>
            </div>
        </div>
        <div class="row section-tablet-black">
            <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="section-tablet-h1 mb-32">
                    Get This Tablet at
                    <span class="sky-color">$10.01</span>
                </div>
                <div class="section-tablet-h2 mb-24">Characterirstics</div>
                <table class="section-tablet-table">
                    <tr>
                        <td>Platform</td>
                        <td>Qualcomm Quad Core</td>
                    </tr>
                    <tr>
                        <td>OS</td>
                        <td>Info</td>
                    </tr>
                    <tr>
                        <td>Size</td>
                        <td>Info</td>
                    </tr>
                    <tr>
                        <td>Display</td>
                        <td>Info</td>
                    </tr>
                    <tr>
                        <td>Camera</td>
                        <td>Info</td>
                    </tr>
                    <tr>
                        <td>Battery</td>
                        <td>Info</td>
                    </tr>
                    <tr>
                        <td>WiFi</td>
                        <td>Info</td>
                    </tr>
                    <tr>
                        <td>Bands</td>
                        <td>Info</td>
                    </tr>
                    <tr>
                        <td>Certification</td>
                        <td>Info</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
                <img :src="tabletImg" class="img-fluid mt-80" alt="" />
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
        }
    },
}
</script>
<style>
@import '../../../assets/styles/components/pages/RegisterFlowPage/Quality.css';
</style> -->
