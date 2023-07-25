<template>
    <section class="container validate-padding section-padding">
        <div class="home-card">
            <h2 class="home-card-title text-secondary font-raleway m-0">Fill out your information</h2>
            <div class="d-flex align-items-start flex-column gap-32">
                <h3 class="m-0 font-2xl font-raleway text-primary">Home address where you will get internet</h3>
                <div class="d-flex flex-column gap-16">
                    <label
                        >Street Number and Name
                        <input v-model="street" class="home-input" type="text" placeholder="Street Number and Name" />
                    </label>
                    <label
                        >Apartment, Unit, etc.
                        <input v-model="appartment" class="" type="text" placeholder="Apartment, Unit, etc." />
                    </label>
                    <label
                        >State or Territory
                        <input v-model="state" class="" type="text" placeholder="State or Territory" />
                    </label>
                    <div>
                        <input v-model="showHide" type="checkbox" /> My mailing address is different than my home
                        address
                    </div>
                    <div v-if="showHide">
                        <div class="mb-32">
                            <h3>Contact information</h3>
                        </div>
                        <div class="mb-16">
                            <label>Adress <span class="label-required">*</span></label>
                            <input class="w-100" placeholder="Adress" type="text" v-model="contactAddress" />
                        </div>
                        <div class="mb-16">
                            <label>City <span class="label-required">*</span></label>
                            <input class="w-100" placeholder="City" type="text" v-model="contactCity" />
                        </div>
                        <div class="mb-16">
                            <CustomDropdownSearch
                                label="State"
                                placeholder="State"
                                :list="states"
                                v-model="contactState"
                            />
                        </div>
                        <div class="mb-16">
                            <label>Zip Code <span class="label-required">*</span></label>
                            <input class="w-100" placeholder="Zip Code" type="text" v-model="contactZipCode" />
                        </div>
                    </div>
                </div>
                <div class="w-100">
                    <div class="d-flex justify-content-between">
                        <router-link to="/EnterZipCodePage" class="text-blue-btn">Back</router-link>
                        <button @click="goNext" class="blue-btn">Next</button>
                    </div>
                    <div class="text-error text-right">{{ error }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { checkString } from '../../validation/value'
import checkValidation from '../../validation/checkValidation'
import CustomDropdownSearch from '../../../components/helpers/CustomDropdown.vue'

export default {
    components: {
        CustomDropdownSearch,
    },
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
            const validation = {
                contactState: this.showHide === true ? checkString(this.contactState) : true,
                contactAddress: this.showHide === true ? checkString(this.contactAddress) : true,
                contactZipCode: this.showHide === true ? checkString(this.contactZipCode) : true,
            }
            checkValidation(validation) === true ? this.success() : (this.error = 'Zip code is mandatory')
        },
    },
    data() {
        return {
            showHide: '',
            state: '',
            error: '',
        }
    },
}
</script>
<style>
.home-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    box-shadow: 0px 8px 16px -4px rgba(0, 12, 32, 0.12);
    border-radius: 32px;
    padding: 44px 84px;
    gap: 32px;
}

.home-card-title {
    font-size: 45px;
    font-weight: 600;
    line-height: 53px;
}

.home-card input {
    padding: 16px 12px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
}

.home-input {
    width: 1122px;
}

@media (max-width: 786px) {
    .home-input {
        width: 522px;
    }
}

@media (max-width: 375px) {
    .home-card-title {
        font-size: 25px;
        font-weight: 500;
        line-height: 29px;
    }

    .home-card {
        padding: 24px 16px;
    }
}
</style>
