<template>
    <section>
        <div class="eligible container section-padding eligible-gap d-flex flex-column">
            <h2 class="m-0 text-center eligible-title">How to eligible</h2>
            <div class="eligible-explain">
                <div class="eligible-content">
                    <div class="eligible-icon">
                        <img :src="QualifyImage" alt="" />
                        <div class="eligible-icon__line"></div>
                    </div>
                    <div class="d-flex flex-column gap-sm-3 gap-2">
                        <div class="eligible-content__title">Check if You Qualify</div>
                        <p class="eligible-content__detail">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua
                        </p>
                    </div>
                </div>
                <div class="eligible-content">
                    <div class="eligible-icon">
                        <img :src="EnrollImage" alt="" />
                        <div class="eligible-icon__line"></div>
                    </div>
                    <div class="d-flex flex-column gap-sm-3 gap-2">
                        <div class="eligible-content__title">Enroll in ACP</div>
                        <p class="eligible-content__detail">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua
                        </p>
                    </div>
                </div>
                <div class="eligible-content">
                    <div class="eligible-icon">
                        <img :src="ReceiveImage" alt="" />
                    </div>
                    <div class="d-flex flex-column gap-sm-3 gap-2">
                        <div class="eligible-content__title">Receive FREE Mobile Service and Tablet</div>
                        <p class="eligible-content__detail">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua
                        </p>
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
            QualifyImage: require('../../../assets/images/sections/HomePage/03_Eligible/Qualify.png'),
            EnrollImage: require('../../../assets/images/sections/HomePage/03_Eligible/Enroll.png'),
            ReceiveImage: require('../../../assets/images/sections/HomePage/03_Eligible/Receive.png'),
            LineImage: require('../../../assets/images/sections/HomePage/03_Eligible/line.png'),
        }
    },
}
</script>
<style>
@import '../../../assets/styles/components/sections/HomePage/03_Eligible.css';
</style>
