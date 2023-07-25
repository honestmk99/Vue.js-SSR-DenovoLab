<template>
    <section class="container validate-padding section-padding">
        <div class="card-style rounded-32 shadow-primary d-flex flex-column">
            <h2 class="font-per m-0 text-center">Fill out your information</h2>
            <div class="d-flex flex-column gap-32">
                <h1 class="m-0 font-2xl font-ralewey text-primary">
                    Do you participate in Medicaid or the Supplemental Nutrition Assistance Program (SNAP)?
                </h1>
                <div class="d-flex flex-column gap-24">
                    <div class="d-flex flex-column gap-16 text-primary font-basic font-ralewey">
                        <div><input type="radio" name="data" /> Yes, i think i participate in Medicaid or SNAP</div>
                        <div><input type="radio" name="data" /> No, i dont think i participate</div>
                    </div>
                    <div class="d-flex flex-column gap-16 font-sm font-ralewey text-primary">
                        <div class="">Last 4 digits of your Social Security Number</div>
                        <div class="">XXXX-XX- <input type="text" placeholder="XXXX" /></div>
                    </div>
                </div>
                <div class="d-flex justify-content-between w-100">
                    <router-link to="/PersonalInformationPage" class="text-blue-btn">Back</router-link>
                    <router-link to="/ReviewPage" class="blue-btn">Next</router-link>
                </div>
                <!-- <div class="text-error text-right">{{ error }}</div> -->
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
            error: '',
        }
    },
}
</script>
<style scoped>
.card-style {
    padding: 44px 84px;
    gap: 32px;
}

.font-per {
    font-family: 'Raleway';
    font-size: 45px;
    font-weight: 600;
    line-height: 53px;
    color: #003875;
}

@media (max-width: 375px) {
    .card-style {
        padding: 24px 16px;
        gap: 16px;
    }

    .font-per {
        font-size: 25px;
        font-weight: 500;
        line-height: 29px;
    }
}
</style>
