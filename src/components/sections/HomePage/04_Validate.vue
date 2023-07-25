<template>
    <section>
        <div class="container section-padding validate-padding">
            <div class="validate-card">
                <h2 class="validate-title">Validate your eligible section</h2>
                <div class="validate-section">
                    <div class="validate-section-card gap-32">
                        <div class="validate-section-card__title">Before you get started</div>
                        <div class="validate-section-card__detail">
                            The personal information you enter will be used to see if you qualify for a discount on your
                            internet. This information will only be used to find out if you qualify.
                            <ul class="m-0">
                                <li>
                                    Verify your identity using the
                                    <a href="#">last four digits of your Social Security Number</a>, a Tribal ID number,
                                    or other government ID (Driver's License, Passport, etc.). Providing a Social
                                    Security Number may reduce the need to provide extra documentation.
                                </li>
                                <li>Enter an <a href="#">email address</a> so we can contact you.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end font-basic-medium font-raleway">
                        <div class="validate-button">
                            <router-link to="/EnterZipCodePage">Next</router-link>
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
        return {}
    },
}
</script>
<style>
@import '../../../assets/styles/components/sections/HomePage/04_Validate.css';
</style>
