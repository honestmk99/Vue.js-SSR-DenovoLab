<template>
    <section class="container validate-padding section-padding">
        <h2 class="m-0 font-3xl font-raleway text-primary text-center title">
            Please fill in the information to get
            <span class="text-secondary">benefits</span>
        </h2>
        <div class="per-card d-flex flex-column shadow-primary rounded-32">
            <h1 class="m-0 font-ralewey font-pre text-secondary text-center">Fill out your information</h1>
            <div class="d-flex flex-column gap-32">
                <div class="d-flex flex-column gap-8">
                    <h1 class="m-0 text-primary font-ralewey font-title">Registration</h1>
                    <h1 class="m-0 text-primary font-ralewey font-subtitle">Enter the mail and confirm password</h1>
                </div>
                <div class="d-flex flex-column gap-16">
                    <label for=""
                        >Email
                        <input type="email" placeholder="Email" />
                    </label>
                    <div class="d-flex flex-md-row flex-column gap-16 w-100">
                        <label for=""
                            >Password
                            <input type="email" placeholder="Password" />
                        </label>
                        <label for=""
                            >Confirm Password
                            <input type="email" placeholder="Confirm Password" />
                        </label>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between w-100">
                <router-link to="/" class="text-blue-btn">Back</router-link>
                <router-link to="/ShippigDetailsPage" class="blue-btn">Next</router-link>
            </div>
            <!-- <div class="text-error text-right">{{ error }}</div> -->
        </div>
    </section>
</template>
<script>
export default {
    components: {},
    methods: {},
    data() {
        return {}
    },
}
</script>
<style scoped>
.title {
    padding: 0 274px 62px;
}

.per-card {
    margin-right: 65px;
    margin-left: 65px;
    padding: 44px 84px;
    gap: 32px;
}

.font-pre {
    font-size: 45px;
    font-weight: 600;
    line-height: 53px;
}

.font-title {
    font-size: 30px;
    font-weight: 500;
    line-height: 35px;
}

.font-subtitle {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
}

label {
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #39404d;
    width: 100%;
}

input {
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.03em;
    color: #727b8b;
    padding: 16px 12px;
    box-shadow: 0 0 0 1px inset #e5e7eb;
    border-width: 0;
    border-radius: 8px;
}

@media (max-width: 768px) {
    .title {
        padding: 0 0 80px;
    }

    .per-card {
        margin-right: 0;
        margin-left: 0;
    }
}

@media (max-width: 375px) {
    .title {
        padding-bottom: 42px;
    }

    .per-card {
        padding: 24px 16px;
        gap: 16px;
    }

    .font-pre {
        font-size: 25px;
        font-weight: 500;
        line-height: 29px;
    }

    .font-title {
        font-size: 25px;
        font-weight: 500;
        line-height: 29px;
    }
}
</style>
