<template>
    <div :class="[showModal == true ? 'd-block modal' : 'd-none']" id="LoginModal">
        <p>Please Sign in to your account to continue</p>
        <div :class="[showModal == true ? 'd-block modal-dialog' : 'd-none']" role="document">
            <div class="modal-content">
                <div class="modal-body">
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
                                    <input placeholder="Enter email" type="text" class="input-form w-100" />
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input placeholder="Enter password" type="password" class="input-form w-100" />
                                </div>
                            </div>
                            <div :class="[showButton == true ? 'd-none' : '']">
                                <div class="form-group">
                                    <label>First Name</label>
                                    <input placeholder="John" type="text" class="input-form w-100" />
                                </div>
                                <div class="form-group">
                                    <label>Last Name</label>
                                    <input placeholder="Doe" type="text" class="input-form w-100" />
                                </div>
                            </div>
                            <div class="mt-18">
                                <div class="form-group text-center">
                                    <router-link
                                        to="/DashboardPage"
                                        :class="[
                                            showButton == false
                                                ? 'd-none'
                                                : 'd-block btn-round btn-round--inverse w-100 mb-0',
                                        ]"
                                        >Log in</router-link
                                    >
                                    <router-link
                                        to="/RegistrationPage"
                                        :class="[
                                            showButton == true
                                                ? 'd-none'
                                                : 'd-block btn-round btn-round--inverse w-100 mb-0',
                                        ]"
                                        >Continue</router-link
                                    >
                                </div>
                                <div class="text-center mt-12">
                                    <router-link class="forgot-link" to="/ForgotPasswordPage"
                                        >Forgot Password</router-link
                                    >
                                </div>
                            </div>
                            <div class="text-center">
                                <router-link to="">Close</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div :class="[showModal == true ? 'modal-bg' : 'd-none']"></div>
</template>

<script>
export default {
    props: ['showModal'],
    methods: {
        setActiveButton(value) {
            this.showButton = value
        },
        sentToParent() {
            this.$parent.$data.showModal = false
        },
    },
    data() {
        return {
            showButton: true,

            icon: require('../../../assets/images/helpers/Modals/Alert-Icon.svg'),
        }
    },
}
</script>
