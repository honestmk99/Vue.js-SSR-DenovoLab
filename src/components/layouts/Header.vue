<template>
    <div class="header">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-2 col-5 my-4">
                    <div class="d-flex align-items-center gap-sm-4 gap-3 gap-lg-0">
                        <div class="d-block d-md-none">
                            <router-link to="/">
                                <img :src="iconBurger" alt="" class="icon-Burger" />
                            </router-link>
                        </div>
                        <router-link to="/">
                            <img :src="iconLogo" alt="" class="logo" />
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 justify-content-start d-lg-flex d-md-flex d-none align-items-center">
                    <ul class="header-menu d-flex m-0 p-0 gap-40">
                        <li>
                            <router-link to="/" active-class="header-menu-link--active" class="header-menu-link"
                                >Home</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/AboutACPPage"
                                active-class=" header-menu-link--active"
                                class="header-menu-link"
                            >
                                About ACP
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                to="/ContactUsPage"
                                active-class=" header-menu-link--active"
                                class="header-menu-link"
                            >
                                Contact us
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                to="/ResourcesPage"
                                active-class=" header-menu-link--active"
                                class="header-menu-link"
                                >Resources
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4 col-7 d-flex justify-content-end align-items-center">
                    <div class="d-flex gap-4 align-items-center">
                        <div class="dropdown dropdownHeader">
                            <button
                                class="btn dropdown-toggle roboto-font basic-400-font d-sm-block d-none"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                EN
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">FR</a>
                            </div>
                        </div>
                        <router-link
                            to="/EnterZipCodePage"
                            class="link ghost-btn white-color raleway-font basic-600-font"
                            >Validate your eligible</router-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)
const iconLogo = ref(require('../../assets/images/components/header/logo.png'))
const iconBurger = ref(require('../../assets/images/components/header/Hamburger.svg'))
const handleResize = () => {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<style>
@import '../../assets/styles/components/layouts/Header.css';
</style>
<style scoped>
@media (max-width: 768px) {
    .dropdownHeader {
        padding-top: 0;
    }
    .iconBurger {
        margin-right: 30px;
        width: 42px;
        height: 42px;
    }

    .ghost-btn {
        font-weight: 600 !important;
        font-size: 14px !important;
        line-height: 18px !important;
    }
}
@media (max-width: 376px) {
    .dropdownHeader {
        display: none;
    }
    .iconBurger {
        width: 30px;
        height: 30px;
        margin-right: 16px;
    }
}
</style>
