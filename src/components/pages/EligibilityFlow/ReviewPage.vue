<template>
    <section class="mt-42 mb-160">
        <div class="container">
            <div class="review-container">
                <div class="d-flex justify-content-between mb-32">
                    <div>
                        <h2 class="main-blue-color">Review your information</h2>
                    </div>
                    <router-link to="/PersonalInformationPage" class="edit-btn">Edit</router-link>
                </div>
                <div class="review-card">
                    <h3 class="mb-32">Your Information</h3>
                    <div class="mb-8">
                        <div>Name</div>
                        <div class="font-weight-bold">Joe Doe</div>
                    </div>
                    <div class="mb-8">
                        <div>Home Address</div>
                        <div class="font-weight-bold">1231qefdasdf 12 Odesa, AL 65078</div>
                    </div>
                    <div class="mb-8">
                        <div>Home Address</div>
                        <div class="font-weight-bold">RandomStreet Odesa, AL 65078</div>
                    </div>
                    <div class="mb-8">
                        <div>Mailing Address</div>
                        <div class="font-weight-bold">Same</div>
                    </div>
                    <div class="mb-8">
                        <div>Date of Birth</div>
                        <div class="font-weight-bold">1/12/1999</div>
                    </div>
                    <div class="mb-8">
                        <div>Phone (optional)</div>
                        <div class="font-weight-bold">Not Provided</div>
                    </div>
                    <div class="mb-8">
                        <div>Email Address</div>
                        <div class="font-weight-bold">mail@email.com</div>
                    </div>
                    <h3 class="mb-32 mt-32">Your ID</h3>
                    <div>
                        <div class="mb-8">Last four digits of your Social Security Number</div>
                        <div>XXX-XX-1234</div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between mt-32">
                <div>
                    <router-link to="/ConfirmProgrammPage" class="text-blue-btn">Back</router-link>
                </div>
                <div>
                    <button @click="goNext" class="blue-btn">Next</button>
                </div>
            </div>
            <div class="text-error text-right">{{ error }}</div>
        </div>
    </section>
</template>

<script>
import eligibilityService from '../../../common/services/checkEligibility'
import checkValidation from '../../validation/checkValidation'

export default {
    components: {},
    computed: {
        personalData: {
            get() {
                return this.$store.state.PersonalStore.personalData
            },
        },
    },
    created() {
        this.myComputedData = this.personalData
    },
    methods: {
        goNext() {
            const validation = {}

            checkValidation(validation) === true ? this.checkEligibility() : (this.error = 'All fields are mandatory')
        },
        async checkEligibility() {
            const data = await eligibilityService.postPersonalDataForCheckEligibility(this.myComputedData)

            if (data.data.status === 'PENDING_RESOLUTION') {
                window.location.href = String(data.data._links.resolution.href)
            }

            if (data.data.status === 'SUCCESSFUL') {
                this.$router.push('/TribalLandsPage')
            }

            if (data.data.status === 'FAILURE') {
                this.$router.push('/NotVerifedEligiblePage')
            }

            this.error = data.data.message
        },
    },
    data() {
        return {
            myComputedData: '',
            error: '',
        }
    },
}
</script>
<style>
.review-container {
    background: #ffffff;
    box-shadow: 0px 8px 16px -4px rgba(0, 12, 32, 0.12);
    border-radius: 32px;
    padding: 44px 84px;
    gap: 32px;
}
.review-card {
    background: #f1f5f9;
    border-top: 1px solid #003875;
    border-radius: 0px 0px 16px;
    padding: 32px 16px;
    gap: 32px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    /* or 22px */

    letter-spacing: 0.03em;
    font-feature-settings: 'liga' off;

    /* Text primary */

    color: #0f172a;
}

.edit-btn {
    margin-top: 16px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    /* or 22px */

    text-decoration-line: underline;
    font-feature-settings: 'liga' off;

    /* Main blue */

    color: #003875;
}

.edit-btn:hover {
    cursor: pointer;
}
</style>
