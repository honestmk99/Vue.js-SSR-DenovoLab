<template>
    <section class="container validate-padding section-padding">
        <div class="home-card">
            <h2 class="home-card-title text-secondary font-raleway m-0">Fill out your information</h2>
            <div class="d-flex align-items-start flex-column gap-32">
                <div class="d-flex flex-column gap-42">
                    <div class="d-flex flex-column gap-32">
                        <div class="d-flex flex-column gap-8">
                            <h3 class="m-0 font-2xl font-raleway text-primary">
                                Full name as it appears on your identification
                            </h3>
                            <h3 class="m-0 font-xm font-raleway text-primary">
                                Enter the name you have on your official documents like Social Security Card or
                                Government ID. This should be your full legal name, not a nickname.
                            </h3>
                        </div>
                        <div class="d-flex flex-md-row flex-column gap-16">
                            <div class="w-100">
                                <label
                                    >First Name
                                    <input class="w-100" v-model="firstName" type="text" placeholder="First Name" />
                                </label>
                            </div>
                            <div class="w-100">
                                <label
                                    >Middle Name (optional)
                                    <input class="w-100" v-model="middleName" type="text" placeholder="Middle Name" />
                                </label>
                            </div>
                            <div class="w-100">
                                <label
                                    >Last or Family Name
                                    <input class="w-100" type="text" placeholder="Last or Family Name" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column gap-32">
                        <h3 class="m-0 font-2xl font-raleway text-primary">Date of Birth</h3>
                        <div class="d-flex flex-md-row flex-column gap-16">
                            <div class="w-100">
                                <label
                                    >Month
                                    <CustomDropdown
                                        placeholder="Month"
                                        :modelValue="this.monthStr"
                                        :list="[
                                            'January',
                                            'February',
                                            'March',
                                            'April',
                                            'May',
                                            'June',
                                            'July',
                                            'August',
                                            'September',
                                            'October',
                                            'November',
                                            'December',
                                        ]"
                                        v-model="monthStr"
                                    />
                                </label>
                            </div>
                            <div class="w-100">
                                <label
                                    >Day
                                    <CustomDropdown placeholder="Day" :modelValue="this.day" :list="[]" v-model="day" />
                                </label>
                            </div>
                            <div class="w-100">
                                <label
                                    >Year
                                    <input class="w-100" type="text" placeholder="Year" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-100">
                    <div class="d-flex justify-content-between">
                        <router-link to="/QuestionPage" class="text-blue-btn">Back</router-link>
                        <button class="blue-btn">Next</button>
                    </div>
                    <div class="text-error text-right">{{ error }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import checkValidation from '../../validation/checkValidation'
import CustomDropdown from '../../../components/helpers/CustomDropdown.vue'
import { getDaysInMonth, generatYear } from '../../generation/date'

const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const monthNumber = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
}

export default {
    components: { CustomDropdown },
    methods: {
        getCurrrentMonthNumber() {
            const numberMonth =
                +(String(this.parseBOD('month', this.$store.state.PersonalStore?.personalData?.dob))[0] == '0'
                    ? +this.parseBOD('month', this.$store.state.PersonalStore?.personalData?.dob)[1] - 1
                    : +this.parseBOD('month', this.$store.state.PersonalStore?.personalData?.dob)) - 1 || ''
            return numberMonth < 0 ? 0 : numberMonth
        },
        parseBOD(period, value) {
            if (value.length < 2 && value === undefined) return

            const splitValue = value.split('-')

            if (period === 'year') return splitValue[0]
            if (period === 'month') return splitValue[1]
            if (period === 'day') return splitValue[2]
        },
        generatYearData() {
            return generatYear()
        },
        //
        generateDayData() {
            return getDaysInMonth(this.month, this.year)
        },
        success() {
            this.$router.push('/ConfirmProgrammPage')
        },
        goNext() {
            const validation = {}

            checkValidation(validation) === true ? this.success() : (this.error = 'All fields are mandatory')
        },
        setRegisterData() {
            const month = monthNumber[this.monthStr]

            this.$store.dispatch('addToPeronal', ['firstName', this.firstName])
            this.$store.dispatch('addToPeronal', ['lastName', this.lastName])
            this.$store.dispatch('addToPeronal', [
                'dob',
                this.year + '-' + this.zeroFill(month) + '-' + this.zeroFill(this.day),
            ])
        },
    },
    data() {
        return {
            monthStr: monthList[this.getCurrrentMonthNumber()],
            error: '',
        }
    },
}
</script>
