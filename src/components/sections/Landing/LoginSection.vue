<template>
    <section class="pt-100 section section-main pb-10" :class="[backgroundurl]">
        <div class="container section-main-container">
            <div class="row mt-72">
                <div class="col-md-6 col-sm-6">
                    <div class="main-title-block">
                        <div v-if="isActiveIndex == 1">
                            <span class="main-title-block-bigNumber">01</span><span>/04</span>
                            <div class="main-title-block-title">FREE 20GB ACP Plan</div>
                            <p class="mt-23">
                                - Unlimited Call <br />- Unliited Text <br />- 20 GB unlimited <br />- 5G/LTE Data
                            </p>
                            <button class="btn-round btn-round--ghost btn-round--main">Apply Now</button>
                        </div>
                        <div v-if="isActiveIndex == 2">
                            <span class="main-title-block-bigNumber">02</span><span>/04</span>
                            <div class="main-title-block-title">True PayGo Plan 1 USD/month ONLY</div>
                            <p class="mt-23">
                                - Penny per call <br />- Penny per sms, <br />- Penny per MB of premium 5G/LTE data
                            </p>
                            <button class="btn-round btn-round--ghost btn-round--main">Buy Now</button>
                        </div>
                        <div v-if="isActiveIndex == 3">
                            <span class="main-title-block-bigNumber">03</span><span>/04</span>
                            <div class="main-title-block-title">Best 2nd line Plan 3 USD/month ONLY</div>
                            <p class="mt-23">
                                - 100 Minute <br />- 100 SMS <br />- 100 MB of Data <br />- Penny per call <br />- Penny
                                per sms <br />- Penny per MB of premium 5G/LTE data
                            </p>
                            <button class="btn-round btn-round--ghost btn-round--main">Buy Now</button>
                        </div>
                        <div v-if="isActiveIndex == 4">
                            <span class="main-title-block-bigNumber">04</span><span>/04</span>
                            <div class="main-title-block-title">Best Affordable Plan 5 USD/month</div>
                            <p class="mt-23">- 1000 Calls <br />- Unlimited Textv <br />- premium 5G/LTE data</p>
                            <button class="btn-round btn-round--ghost btn-round--main">Read More</button>
                        </div>
                        <div class="main-title-block-slider mt-150">
                            <span
                                :class="[isActiveIndex == 1 ? 'main-title-block-slider-active' : '']"
                                @click="setActiveItemId('1')"
                                >01</span
                            >
                            <span
                                :class="[isActiveIndex == 2 ? 'main-title-block-slider-active' : '']"
                                @click="setActiveItemId('2')"
                                >02</span
                            >
                            <span
                                :class="[isActiveIndex == 3 ? 'main-title-block-slider-active' : '']"
                                @click="setActiveItemId('3')"
                                >03</span
                            >
                            <span
                                :class="[isActiveIndex == 4 ? 'main-title-block-slider-active' : '']"
                                @click="setActiveItemId('4')"
                                >04</span
                            >
                        </div>
                    </div>
                </div>
                <div class="col-md-1 d-sm-none d-md-block"></div>
                <div class="col-md-5 col-sm-6">
                    <div class="login-register-block">
                        <div class="login-register-block-radios form-group mb-31">
                            <input
                                type="radio"
                                class="btn-check"
                                name="options-outlined"
                                id="success-outlined"
                                autocomplete="off"
                                checked
                            />
                            <label
                                @click="setActiveButton(true)"
                                class="btn btn-gray w-50 text-center"
                                for="success-outlined"
                                >Sign In</label
                            >
                            <input
                                type="radio"
                                class="btn-check"
                                name="options-outlined"
                                id="dark-outlined"
                                autocomplete="off"
                            />
                            <label
                                @click="setActiveButton(false)"
                                class="btn btn-gray w-50 text-center"
                                for="dark-outlined"
                                >Sign up</label
                            >
                        </div>
                        <div>
                            <div :class="[showButton == false ? 'd-none' : '']">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input
                                        placeholder="Enter email"
                                        type="text"
                                        class="input-form w-100"
                                        v-model="email"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input
                                        placeholder="Enter password"
                                        type="password"
                                        class="input-form w-100"
                                        v-model="password"
                                    />
                                </div>
                            </div>
                            <div :class="[showButton == true ? 'd-none' : '']">
                                <div class="form-group">
                                    <label>First Name</label>
                                    <input
                                        placeholder="John"
                                        type="text"
                                        class="input-form w-100"
                                        v-model="firstName"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Last Name</label>
                                    <input placeholder="Doe" type="text" class="input-form w-100" v-model="lastName" />
                                </div>
                                <div class="text-error mt-18">
                                    {{ this.errorRegister }}
                                </div>
                            </div>
                            <div :class="[showButton == false ? 'd-none' : 'text-error mt-18']">
                                {{ this.errorLogin }}
                            </div>
                            <div class="mt-18">
                                <div class="form-group text-center">
                                    <button
                                        v-on:click="logIn()"
                                        :class="[
                                            showButton == false
                                                ? 'd-none'
                                                : 'd-block btn-round btn-round--inverse w-100 mb-0',
                                        ]"
                                    >
                                        Log in
                                    </button>
                                    <button
                                        v-on:click="Register()"
                                        :class="[
                                            showButton == true
                                                ? 'd-none'
                                                : 'd-block btn-round btn-round--inverse w-100 mb-0',
                                        ]"
                                    >
                                        Continue
                                    </button>
                                </div>
                                <div class="text-center mt-12">
                                    <a class="forgot-link" href="https://portal.peeringhub.mobi/#/ResetPasswordPage/">
                                        Forgot Password
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="owl-arrow">
            <img
                :src="owlLeftArrow"
                alt=""
                class="owl-arrow-right"
                @click="changeCurretnItem(this.isActiveIndex, 'plus')"
            />
            <img
                :src="owlRightArrow"
                alt=""
                class="owl-arrow-left"
                @click="changeCurretnItem(this.isActiveIndex, 'minus')"
            />
        </div>
        <div :class="[isActiveIndex == 0 ? 'section-main-bg' : '']"></div>
        <div :class="[isActiveIndex == 1 ? 'section-main-bg animate__bounceInLeft' : '']"></div>
        <div :class="[isActiveIndex == 2 ? 'section-main-bg-2 animate__bounceInLeft' : '']"></div>
        <div :class="[isActiveIndex == 3 ? 'section-main-bg-3 animate__bounceInLeft' : '']"></div>
        <div :class="[isActiveIndex == 4 ? 'section-main-bg-4 animate__bounceInLeft' : '']"></div>
    </section>
</template>

<script>
import AuthorizationService from '../../../common/services/authorization'
import { checkString } from '../../../components/validation/value'

export default {
    methods: {
        Register() {
            if (this.checkIsNullFirstNameOrLastName() === false) return
            sessionStorage.setItem('firstName', this.firstName)
            sessionStorage.setItem('lastName', this.lastName)
            this.$router.push('RegistrationPage')
        },
        checkIsNullFirstNameOrLastName() {
            if (checkString(this.firstName)) {
                this.errorRegister = 'First name is empty'
                return false
            }

            if (checkString(this.lastName)) {
                this.errorRegister = 'Last name is empty'
                return false
            }
            return true
        },
        async logIn() {
            const { errorSubsrciber } = await AuthorizationService.logInAsSubsrciber(this.email, this.password)
            errorSubsrciber ? (this.errorLogin = errorSubsrciber) : (this.errorLogin = '')

            const { errorReseller } = await AuthorizationService.logInAsReseller(this.email, this.password)
            errorReseller ? (this.errorLogin = errorReseller) : (this.errorLogin = '')

            const { errorAdministrator } = await AuthorizationService.logInAsAdministrator(this.email, this.password)
            errorAdministrator ? (this.errorLogin = errorAdministrator) : (this.errorLogin = '')
        },
        setActiveItemId(number) {
            this.isActiveIndex = number
            this.getBackgroundUrl(number)
        },
        setActiveButton(value) {
            this.showButton = value
        },
        changeCurretnItem(number, operation) {
            operation == 'plus' ? number++ : number--

            if (number == 1) this.setActiveItemId('1')
            if (number == 2) this.setActiveItemId('2')
            if (number == 3) this.setActiveItemId('3')
            if (number == 4) this.setActiveItemId('4')
        },
        getBackgroundUrl(number) {
            switch (number) {
                case '1':
                    this.backgroundurl = 'section-main'
                    break
                case '2':
                    this.backgroundurl = 'section-main-2'
                    break
                case '3':
                    this.backgroundurl = 'section-main-3'
                    break
                case '4':
                    this.backgroundurl = 'section-main-4'
                    break
            }
        },
    },
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',

            errorLogin: '',
            errorRegister: '',

            showButton: true,
            isActiveIndex: 1,
            backgroundurl: 'section-main',

            owlRightArrow: require('../../../assets/images/sections/MainSection/owl-left.svg'),
            owlLeftArrow: require('../../../assets/images/sections/MainSection/owl-right.svg'),
        }
    },
}
</script>

<style>
@import '../../../assets/styles/components/sections/Landing/LoginSection.css';
</style>
