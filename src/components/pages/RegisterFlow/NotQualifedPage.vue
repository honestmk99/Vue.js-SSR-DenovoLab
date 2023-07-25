<template>
    <section class="container validate-padding section-padding">
        <h2 class="m-0 font-3xl font-raleway text-primary text-center title">
            You are not qualify for the
            <span class="text-secondary">Affordable Connectivity Program</span>
            benefit!
        </h2>
        <div class="not-card d-flex flex-column">
            <div class="d-flex flex-column gap-32 shadow-primary rounded-32 px-32 py-24">
                <div class="d-flex flex-column gap-24">
                    <h1 class="m-0 text-primary text-center font-raleway font-title">
                        Best Choice for a 2nd line to protect your privacy and anonimity while surfing the Internet
                    </h1>
                    <h1 class="m-0 font-basic font-roboto text-primary text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua
                    </h1>
                </div>
                <div class="m-auto px-24 py-12 bg-primary text-white font-basic font-raleway rounded-8">Enroll now</div>
            </div>
            <div class="w-100 d-flex flex-sm-row flex-column gap-32">
                <div class="price-banner">
                    <h1 class="m-0 font-banner">
                        This service is provided by 1PSim Inc., an approved ACP service provider:
                    </h1>
                    <img :src="logo" alt="" />
                </div>
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
                        <h1 class="m-0 font-montserrat font-price text-secondary">$5<span>/mo</span></h1>
                        <ul class="font-detail m-0">
                            <li>Unlimited talk & text</li>
                            <li>Nationwide coverage</li>
                            <li>Uses 5G or 4G LTE,</li>
                            <li>whichever is strongest</li>
                        </ul>
                        <div class="m-auto font-basic font-raleway text-secondary border rounded-8 px-24 py-12">
                            Get this Plan
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
            logo: require('../../../assets/images/icons/1psimLogo.svg'),
        }
    },
}
</script>
<style>
@import '../../../assets/styles/components/pages/RegisterFlowPage/Quality.css';
</style>
<style scoped>
.title {
    padding: 0 274px 62px;
}

.not-card {
    padding-left: 225px;
    padding-right: 225px;
    gap: 42px;
}

.font-title {
    font-size: 30px;
    font-weight: 500;
    line-height: 35px;
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

.price-banner {
    padding: 61.5px 32px;
    border-radius: 24px;
    box-shadow: 0px 8px 16px -4px #000c201f;
    background-image: linear-gradient(#00091ce5, #00091ce5), url('../../../assets/images/pages/l_banner.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.price-banner img {
    width: 127px;
}

.font-banner {
    font-family: 'Raleway';
    font-size: 30px;
    font-weight: 500;
    line-height: 35px;
    color: white;
}

@media (max-width: 768px) {
    .not-card {
        padding-left: 0px;
        padding-right: 0px;
    }

    .title {
        padding: 0 0 80px;
    }
}

@media (max-width: 375px) {
    .title {
        padding-bottom: 60px;
    }

    .not-card {
        gap: 60px;
    }

    .font-banner {
        font-size: 25px;
        font-weight: 500;
        line-height: 29px;
    }
}
</style>
