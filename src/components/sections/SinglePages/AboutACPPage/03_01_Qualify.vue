<template>
    <section class="container sm-section-padding">
        <div class="qualify">
            <h2 class="qualify-title m-0">Do you <span>Qualify</span>?</h2>
            <div class="qualify-acp">
                <h1 class="qualify-acp__title text-secondary m-0">
                    Here are the ways your household can qualify for the Affordable Connectivity Program (ACP):
                </h1>
                <div class="qualify-acp__text">
                    <div class="qualify-acp__list">
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">Based on your <span>household</span> income</h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">
                                If you or your child or dependent participate in certain government assistance programs
                                such as SNAP, Medicaid, WIC, or <span>other programs</span>
                            </h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">
                                If you or anyone in your household already receives a
                                <span>Lifeline benefit</span>
                            </h1>
                        </div>
                    </div>
                    <div class="qualify-acp__note">
                        Note: You may qualify for the ACP through a participating provider’s existing low-income
                        program. Visit our
                        <span>How to Apply</span> page to learn more.
                    </div>
                </div>
            </div>
            <div class="qualify-acp__text">
                <h1 class="qualify-acp__title text-secondary m-0">Based on your income</h1>
                <div class="qualify-income_explain">
                    <h1 class="qualify-acp__note m-0">
                        You are eligible for the ACP if your income is 200% or less than the Federal Poverty Guidelines
                        (see the table below). The guideline is based on your household size and state.
                    </h1>
                    <h1 class="qualify-acp__note m-0">
                        The table below reflects the income limit by household size, which is 200% of the 2023 Federal
                        Poverty Guidelines.
                    </h1>
                </div>
            </div>
            <div class="table-box">
                <table>
                    <thead>
                        <tr>
                            <th>Household Size</th>
                            <th>48 Contiguous States, D.C.</th>
                            <th>Alaska</th>
                            <th>Hawaii</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>$101,120</td>
                            <td>$113,580</td>
                            <td>$116,280</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>$101,120</td>
                            <td>$113,580</td>
                            <td>$116,280</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>$101,120</td>
                            <td>$113,580</td>
                            <td>$116,280</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>$101,120</td>
                            <td>$113,580</td>
                            <td>$116,280</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>$101,120</td>
                            <td>$113,580</td>
                            <td>$116,280</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>$101,120</td>
                            <td>$113,580</td>
                            <td>$116,280</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>$101,120</td>
                            <td>$113,580</td>
                            <td>$116,280</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>$101,120</td>
                            <td>$113,580</td>
                            <td>$113,580</td>
                        </tr>
                        <tr>
                            <td style="white-space: nowrap">For each additional person, add:</td>
                            <td>$10,280</td>
                            <td>$12,860</td>
                            <td>$11,820</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h1 class="qualify-acp__note m-0">
                You may have to show proof of income, like a tax return or three consecutive pays stubs, when you apply
                for the ACP.
            </h1>
            <div class="qualify-acp__text">
                <h1 class="qualify-acp__title text-secondary m-0">
                    If you participate in certain government assistance programs such as SNAP, Medicaid, WIC, or other
                    programs
                </h1>
                <h1 class="subtitle m-0 text-primary">Federal Assistance Programs</h1>
                <div class="list-group">
                    <h1 class="qualify-acp__note m-0">
                        You are eligible for the ACP if you (or someone in your household) participate in one of these
                        programs:
                    </h1>
                    <div class="qualify-acp__list">
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">
                                Supplemental Nutrition Assistance Program (SNAP), formerly known as Food Stamps
                            </h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">Medicaid</h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">Supplemental Security Income (SSI)</h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">
                                Federal Public Housing Assistance (FPHA) (including Housing Choice Voucher (HCV) Program
                                (Section 8 Vouchers), Project-Based Rental Assistance (PBRA)/202/811, Public Housing,
                                and Affordable Housing Programs for American Indians, Alaska Natives or Native
                                Hawaiians)
                            </h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">Veterans Pension and Survivors Benefit</h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">
                                Free and Reduced-Price School Lunch Program or School Breakfast Program, including at
                                U.S. Department of Agriculture (USDA) Community Eligibility Provision schools
                            </h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">Received a Federal Pell Grant in the current award year</h1>
                        </div>
                    </div>
                </div>
                <h1 class="qualify-acp__note m-0">
                    You may need to show a card, letter, or official document as
                    <span>proof that you participate</span> in one of these programs when you apply for the ACP.
                </h1>
            </div>
            <div class="qualify-acp__text">
                <h1 class="qualify-acp__title text-secondary m-0">Tribal Assistance Programs</h1>
                <div div class="list-group">
                    <div class="qualify-acp__note m-0">
                        If you live on qualifying Tribal lands, you are eligible for the ACP if your household income is
                        at or below 200% of the Federal Poverty Guidelines, or if you (or someone in your household)
                        participate in:
                    </div>
                    <div class="qualify-acp__list">
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">Any of the federal assistance programs listed above</h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">Bureau of Indian Affairs General Assistance</h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">Head Start (only households meeting the income qualifying standard)</h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">Tribal Temporary Assistance for Needy Families (Tribal TANF</h1>
                        </div>
                        <div class="qualify-acp__list__item">
                            <img :src="InfoIcon" alt="" />
                            <h1 class="m-0">Food Distribution Program on Indian Reservations</h1>
                        </div>
                    </div>
                </div>
                <h1 class="qualify-acp__note m-0">
                    You may have to show
                    <span>proof of participation</span>, like a benefit benefit letter or official document, when you
                    apply for the ACP. Learn more about the Tribal Benefit.
                </h1>
            </div>
            <div class="qualify-acp__text">
                <h1 class="qualify-acp__title text-secondary m-0">If You Already Receive a Lifeline Benefit</h1>
                <h1 class="qualify-acp__note m-0">
                    Lifeline is a
                    <span>Federal Communications Commission program</span>
                    help make communications services more affordable for low-income consumers. If you currently receive
                    a Lifeline benefit, you automatically qualify for the ACP, and you can receive both benefits at the
                    same time. You can apply your ACP benefit and your Lifeline benefit to the same or separate
                    services. Talk to your internet company to learn how to start receiving ACP discounts.
                </h1>
            </div>
            <div class="qualify-acp__text">
                <h1 class="qualify-acp__title text-secondary m-0">Qualify Through Your Child or Dependent</h1>
                <h1 class="qualify-acp__note m-0">
                    Any member of your household can make your household eligible if they participate in one of the
                    programs above. For example, if your child or dependent participates in the Free and Reduced-Price
                    School Lunch Program or is enrolled in a USDA Community Eligibility Provision school, your household
                    qualifies for the ACP benefit.
                </h1>
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
@import '../../../../assets/styles/components/sections/SinglePages/AboutACPPage/03_Qualify.css';
</style>
