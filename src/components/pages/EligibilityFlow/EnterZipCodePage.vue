<template>
    <section class="container validate-padding">
        <div class="zip-card">
            <h1 class="m-0 font-3xl font-raleway text-secondary">Please Enter you ZIP code</h1>
            <div class="card-content d-flex flex-column gap-32">
                <h3 class="m-0 font-2xl font-raleway text-primary">
                    Please Enter you ZIP code to make sure you can participate in the program
                </h3>
                <label
                    >Zip Code
                    <input @keypress="this.onlyNumber($event)" v-model="zipCode" type="text" placeholder="00000" />
                </label>
                <div>
                    <div class="d-flex justify-content-between">
                        <router-link to="/" class="text-blue-btn">Back</router-link>
                        <button @click="goNext" class="blue-btn">Next</button>
                    </div>
                    <div class="text-error text-right">{{ error }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { checkString, onlyNumberKey } from '../../validation/value'
import checkValidation from '../../validation/checkValidation'

export default {
    components: {},
    methods: {
        success() {
            this.$store.dispatch('addToPeronal', ['zipCode', this.zipCode])

            this.$router.push('/HomeAdressPage')
        },
        onlyNumber(event) {
            return onlyNumberKey(event)
        },
        goNext() {
            const validation = {
                zipCode: checkString(this.zipCode),
            }
            checkValidation(validation) === true ? this.success() : (this.error = 'Zip code is mandatory')
        },
    },
    data() {
        return {
            zipCode: '',
            error: '',
        }
    },
}
</script>
<style>
.zip-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    max-width: 690px;
    padding: 44px 30px;
    gap: 32px;
    background: #ffffff;
    box-shadow: 0px 8px 16px -4px rgba(0, 12, 32, 0.12);
    border-radius: 32px;
}

.zip-card input {
    padding: 16px 12px;
    gap: 8px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
}

.card-content {
    padding-left: 54px;
    padding-right: 54px;
}

@media (max-width: 375px) {
    .zip-card {
        max-width: 343px;
        padding: 24px 16px;
    }

    .card-content {
        padding: 0;
    }
}
</style>
