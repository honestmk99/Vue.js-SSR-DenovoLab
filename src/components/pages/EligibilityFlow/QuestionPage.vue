<template>
    <section class="container validate-padding section-padding">
        <div class="home-card">
            <h2 class="home-card-title text-secondary font-raleway m-0">Fill out your information</h2>
            <div class="d-flex align-items-start flex-column gap-32">
                <h3 class="m-0 font-2xl font-raleway text-primary">
                    Do you want us to check your identity with the last four digits of your Social Security Number?
                </h3>
                <div class="d-flex flex-column gap-24">
                    <div class="d-flex flex-column gap-16">
                        <div class="font-roboto text-primary font-basic">
                            <input type="radio" v-model="radio" name="data" /> Yes, use the last four digits of my
                            Social Security Number
                        </div>
                        <div class="font-roboto text-primary font-basic">
                            <input type="radio" v-model="radio" name="data" /> No, I Want to provide an official
                            document (Driver License, Taxpayer Identification Number, Passport, etc.) or use my Tribal
                            ID Number
                        </div>
                    </div>
                    <div>
                        <div class="d-flex flex-column gap-16">
                            <div>Last 4 digits of your Social Security Number</div>
                            <div>XXXX-XX- <input type="text" placeholder="XXXX" /></div>
                        </div>
                    </div>
                    <div v-if="a">
                        <div class="d-flex flex-column gap-24">
                            <div class="d-flex flex-column gap-8">
                                <h1 class="m-0 font-sm font-inter text-label">Other Government Identification</h1>
                                <select name="divelicence" id="licence">
                                    <option value="a">Select Here</option>
                                </select>
                            </div>
                            <div class="d-flex flex-column gap-8">
                                <h1 class="m-0 font-sm font-inter text-label">Attach photo of the ID</h1>
                                <h1 class="m-0 font-xm font-inter text-sublabel">
                                    Please attach a scanned copy or picture of your form of identification. Files must
                                    be less than 10 MB and one of the following file types: jpg, jpeg, png, pdf, or gif.
                                </h1>
                                <div>
                                    <router-link to="" class="blue-btn">Select Photo</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-100">
                    <div class="d-flex justify-content-between">
                        <router-link to="/" class="text-blue-btn">Back</router-link>
                        <router-link to="/PersonalInformationPage" class="blue-btn">Next</router-link>
                    </div>
                    <div class="text-error text-right">{{ error }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import checkValidation from '../../validation/checkValidation'

export default {
    components: {},
    methods: {
        success() {
            if (this.showHide === true) {
                const contactState = this.findShortCodeState(this.state)?.shortcode
                this.$store.dispatch('addToPeronal', ['contactState', contactState])
                this.$store.dispatch('addToPeronal', ['contactAddress', this.address])
                this.$store.dispatch('addToPeronal', ['contactZipCode', this.zipCode])
            }

            this.$router.push('/QuestionPage')
        },
        goNext() {
            const validation = {}

            if (this.radio === undefined) {
                this.error = 'Option is mandatory'
                return
            }

            checkValidation(validation) === true ? this.success() : (this.error = 'Zip code is mandatory')
        },
    },
    data() {
        return {
            error: '',
        }
    },
}
</script>
