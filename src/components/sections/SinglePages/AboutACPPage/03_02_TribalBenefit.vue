<template>
    <section class="container sm-section-padding validate-padding">
        <div class="qualify">
            <h2 class="qualify-title m-0">Enhanced Tribal Benefit</h2>
            <div class="qualify-acp__text">
                <div class="qualify-acp">
                    <h1 class="qualify-acp__title text-secondary m-0">
                        Households who qualify for the Affordable Connectivity Program (ACP) and are located on
                        qualifying Tribal lands can receive:
                    </h1>
                    <div class="qualify-acp__list">
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">Up to a $75/month discount on your internet service, and</h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">
                                A one-time discount of up to $100 for a laptop, tablet, or desktop computer (with a
                                co-payment of more than $10 but less than $50).
                            </h1>
                        </div>
                    </div>
                </div>
                <h1 class="qualify-acp__note m-0">
                    Only one monthly service discount and one device discount is allowed per household. Program rules
                    acknowledge there may be more than one eligible household residing at the same address.
                </h1>
            </div>
            <div class="qualify-acp__text">
                <h1 class="qualify-acp__title text-secondary m-0">Do I Qualify for the Enhanced Tribal Benefit?</h1>
                <h1 class="font-raleway font-lg text-primary m-0">
                    Your household can receive the enhanced benefit if:
                </h1>
                <div class="d-flex flex-column gap-18">
                    <div class="d-flex gap-4 align-items-center">
                        <h1 class="m-0 text-secondary font-xl px-10">1</h1>
                        <h1 class="font-lg font-raleway text-primary m-0">
                            Your household is located on
                            <span class="text-secondary text-decoration-underline text-underline-offset"
                                >qualifying Tribal lands</span
                            >, AND
                        </h1>
                    </div>
                    <div class="d-flex flex-column gap-16">
                        <div class="d-flex align-items-center gap-4">
                            <h1 class="m-0 text-secondary font-xl px-10">2</h1>
                            <h1 class="m-0 font-raleway font-lg text-primary">
                                Your household income is at or below 200% of the federal poverty guidelines OR any
                                member of your household:
                            </h1>
                        </div>
                        <div class="pl-36 d-flex flex-column gap-8">
                            <div class="d-flex align-items-start gap-12">
                                <img :src="InfoIcon" alt="" />
                                <h1 class="text-primary font-lg font-raleway m-0">
                                    Participates in the Lifeline program, or
                                </h1>
                            </div>
                            <div class="d-flex align-items-start gap-12">
                                <img :src="InfoIcon" alt="" />
                                <h1 class="text-primary font-lg font-raleway m-0">
                                    Participates in the Supplemental Nutrition Assistance Program (SNAP), Medicaid,
                                    Supplemental Security Income, Federal Public Housing Assistance (FPHA) (including
                                    Housing Choice Voucher (HCV) Program (Section 8 Vouchers), Project-Based Rental
                                    Assistance (PBRA)/202/811, Public Housing, and Affordable Housing Programs for
                                    American Indians, Alaska Natives or Native Hawaiians), or Veterans and Survivors
                                    Pension Benefit, or
                                </h1>
                            </div>
                            <div class="d-flex align-items-start gap-12">
                                <img :src="InfoIcon" alt="" />
                                <h1 class="text-primary font-lg font-raleway m-0">
                                    Participates in one of several
                                    <span class="text-secondary">Tribal specific programs:</span>
                                </h1>
                            </div>
                            <ul class="m-0 pl-56 d-flex flex-column gap-8">
                                <li class="font-lg font-raleway text-primary">
                                    Bureau of Indian Affairs General Assistance,
                                </li>
                                <li class="font-lg font-raleway text-primary">
                                    Tribal Head Start (only households meeting the relevant income qualifying standard
                                </li>
                                <li class="font-lg font-raleway text-primary">
                                    Tribal Temporary Assistance for Needy Families (Tribal TANF), or
                                </li>
                                <li class="font-lg font-raleway text-primary">
                                    Food Distribution Program on Indian Reservations,
                                </li>
                            </ul>
                            <div class="d-flex align-items-start gap-12">
                                <img :src="InfoIcon" alt="" />
                                <h1 class="text-primary font-lg font-raleway m-0">
                                    Receives Special Supplemental Nutrition Program for Women, Infants, and Children
                                    (WIC) assistance, or
                                </h1>
                            </div>
                            <div class="d-flex align-items-start gap-12">
                                <img :src="InfoIcon" alt="" />
                                <h1 class="text-primary font-lg font-raleway m-0">
                                    Received a federal Pell Grant in the current award year, or
                                </h1>
                            </div>
                            <div class="d-flex align-items-start gap-12">
                                <img :src="InfoIcon" alt="" />
                                <h1 class="text-primary font-lg font-raleway m-0">
                                    Received approval for benefits under the free and reduced-price school lunch program
                                    or the school breakfast program, including through the USDA Community Eligibility
                                    Provision, or
                                </h1>
                            </div>
                            <div class="d-flex align-items-start gap-12">
                                <img :src="InfoIcon" alt="" />
                                <h1 class="text-primary font-lg font-raleway m-0">
                                    Meets the eligibility criteria for a participating company’s existing low-income
                                    program, and that provider received FCC approval for its eligibility verification
                                    process.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 class="m-0 font-lg text-primary font-raleway">
                    Note: If you already participate in the Lifeline program, you are automatically qualified for the
                    ACP and you do not need to apply and prove your eligibility a second time. Talk to your internet
                    company about how to receive ACP discounts. If you qualify for both programs, you can choose to
                    receive the Lifeline benefit from one company and the ACP benefit from a different company. Find a
                    <span class="text-secondary text-decoration-underline text-underline-offset"
                        >participating company near you</span
                    >.
                </h1>
            </div>
            <div class="qualify-acp__text">
                <h1 class="qualify-acp__title text-secondary m-0">What are Qualifying Tribal Lands?</h1>
                <div div class="list-group">
                    <h1 class="qualify-acp__note m-0">
                        Your internet company can help determine whether your address is on Tribal lands. For
                        informational purposes, a <span>nationwide map</span> is available showing Tribal lands eligible
                        for enhanced support. The ACP uses the same definition for Tribal lands as the FCC’s Lifeline
                        program (as defined in 47 CFR §54.400 (e)). Tribal lands shown on the nationwide map include:
                    </h1>
                    <div class="qualify-acp__list">
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">Any federally recognized Indian tribe’s reservation, pueblo, or colony,</h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">Former reservations in Oklahoma,</h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">
                                Alaska Native regions established pursuant to the Alaska Native Claims Settlement Act
                                (view maps: <span>2010 U.S. Census American Indians and Alaska Natives Map</span> –
                                Alaska, <span>State of Alaska ANCSA Boundaries Map</span>),
                            </h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">Indian allotments,</h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">
                                Hawaiian Home Lands (view map: <span>2010 U.S. Census Hawaiian Homelands</span>), and
                            </h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">
                                Any land approved as Tribal for the purposes of the Lifeline program or the ACP by the
                                <span>FCC’s Office of Native Affairs and Policy</span> and Wireline Competition Bureau.
                            </h1>
                        </div>
                    </div>
                </div>
                <h1 class="qualify-acp__note m-0">For additional file formats, visit Lifeline’s Tribal Lands page.</h1>
            </div>
            <div class="qualify-acp__text">
                <h1 class="qualify-acp__title text-secondary m-0">Tips for Applicants</h1>
                <div class="d-flex gap-4 align-items-center">
                    <h1 class="m-0 text-secondary font-xl px-10">1</h1>
                    <h1 class="font-lg font-raleway text-primary m-0">
                        Remember to click the ‘Confirm Tribal Qualification’ button on the online application.
                    </h1>
                </div>
                <div class="d-flex gap-4 align-items-center">
                    <h1 class="m-0 text-secondary font-xl px-10">2</h1>
                    <h1 class="font-lg font-raleway text-primary m-0">
                        <span class="text-secondary text-decoration-underline text-underline-offset"
                            >On the paper application</span
                        >, check the ‘Tribal Lands’ box.
                    </h1>
                </div>
                <div class="d-flex gap-4 align-items-center">
                    <h1 class="m-0 text-secondary font-xl px-10">3</h1>
                    <h1 class="font-lg font-raleway text-primary m-0">
                        Prove your identity by providing the last four digits of your Social Security Number, your
                        Tribal ID, or identity documents. For examples of acceptable identity documents, look at the
                        “Identity Verification” section of our
                        <span class="text-secondary text-decoration-underline text-underline-offset"
                            >Show You Qualify</span
                        >
                        page.
                    </h1>
                </div>
                <div class="d-flex gap-4 align-items-center">
                    <h1 class="m-0 text-secondary font-xl px-10">4</h1>
                    <h1 class="font-lg font-raleway text-primary m-0">
                        Check the
                        <span class="text-secondary text-decoration-underline text-underline-offset"
                            >program’s definition of a household</span
                        >, as multiple households could reside at the same address.
                    </h1>
                </div>
                <div class="d-flex gap-4 align-items-center">
                    <h1 class="m-0 text-secondary font-xl px-10">5</h1>
                    <h1 class="font-lg font-raleway text-primary m-0">
                        If you do not have or know your street address, our online application has a pin-drop system.
                        You can also provide an address description.
                    </h1>
                </div>
                <div class="d-flex gap-4 align-items-center">
                    <h1 class="m-0 text-secondary font-xl px-10">6</h1>
                    <h1 class="font-lg font-raleway text-primary m-0">
                        If you qualify for the ACP but your household is not on qualifying Tribal lands, you can still
                        receive the non-Tribal discount of up to $30 per month on internet service and the one-time $100
                        device discount.
                    </h1>
                </div>
            </div>
            <div class="validate-section">
                <div class="validate-section-card gap-24 align-items-center justify-content-center">
                    <h1 class="subtitle m-0">Are you ready to get started with the Affordable Connectivity Program?</h1>
                    <h1 class="font-roboto font-basic text-primary m-0">
                        You can apply online or with the assistance of your internet company.
                    </h1>
                    <div class="font-basic-medium font-raleway validate-button">
                        <router-link to="/EnterZipCodePage">Apply now</router-link>
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
            InfoIcon: require('../../../../assets/images/icons/Info.png'),
        }
    },
}
</script>
<style>
@import '../../../../assets/styles/components/sections/SinglePages/AboutACPPage/04_TribalBenefit.css';
</style>
