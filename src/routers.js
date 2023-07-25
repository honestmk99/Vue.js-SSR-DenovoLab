import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './components/pages/HomePage.vue'
import AboutACPPage from './components/pages/SinglePages/AboutACPPage.vue'
import ContactUsPage from './components/pages/SinglePages/ContactUsPage.vue'
import ResourcesPage from './components/pages/SinglePages/ResourcesPage.vue'
import QualityPlanPage from './components/pages/RegisterFlow/QualityPlanPage.vue'
import QualityACPPage from './components/pages/RegisterFlow/QualityACPPage.vue'
import LatestBlogPage from './components/pages/LatestBlogPage.vue'
import NotQualifedPage from './components/pages/RegisterFlow/NotQualifedPage.vue'
import BlogPage from './components/pages/BlogPage.vue'
import RegistrationPage from './components/pages/RegisterFlow/RegistrationPage.vue'
import ShippigDetailsPage from './components/pages/RegisterFlow/ShippigDetailsPage.vue'
import VerificationPage from './components/pages/RegisterFlow/VerificationPage.vue'
import EnrollmentResultPage from './components/pages/RegisterFlow/EnrollmentResultPage.vue'
import ConfirmProgrammPage from './components/pages/EligibilityFlow/ConfirmProgrammPage.vue'
import HomeAdressPage from './components/pages/EligibilityFlow/HomeAdressPage.vue'
import PersonalInformationPage from './components/pages/EligibilityFlow/PersonalInformationPage.vue'
import QuestionPage from './components/pages/EligibilityFlow/QuestionPage.vue'
import ReviewPage from './components/pages/EligibilityFlow/ReviewPage.vue'
import EnterZipCodePage from './components/pages/EligibilityFlow/EnterZipCodePage.vue'

const routes = [
    {
        path: '/',
        component: HomePage,
        meta: { hideNavigation: false },
    },
    {
        path: '/AboutACPPage',
        component: AboutACPPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/ContactUsPage',
        component: ContactUsPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/ResourcesPage',
        component: ResourcesPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/QualityACPPage',
        component: QualityACPPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/QualityPlanPage',
        component: QualityPlanPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/QualityPlanPage',
        component: QualityPlanPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/NotQualifedPage',
        component: NotQualifedPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/BlogPage',
        component: BlogPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/LatestBlogPage',
        component: LatestBlogPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/RegistrationPage',
        component: RegistrationPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/ShippigDetailsPage',
        component: ShippigDetailsPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/VerificationPage',
        component: VerificationPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/EnrollmentResultPage',
        component: EnrollmentResultPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/ConfirmProgrammPage',
        component: ConfirmProgrammPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/HomeAdressPage',
        component: HomeAdressPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/PersonalInformationPage',
        component: PersonalInformationPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/QuestionPage',
        component: QuestionPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/ReviewPage',
        component: ReviewPage,
        meta: { hideNavigation: false },
    },
    {
        path: '/EnterZipCodePage',
        component: EnterZipCodePage,
        meta: { hideNavigation: false },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
