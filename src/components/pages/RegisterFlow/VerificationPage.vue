<template>
    <section class="container validate-padding section-padding">
        <h2 class="m-0 font-3xl font-raleway text-primary text-center title">
            Enter Verification <span class="text-secondary">code</span> to complete enrollment process
        </h2>
        <div class="per-card d-flex flex-column shadow-primary rounded-32">
            <div class="d-flex gap-16" ref="ref" v-bind="api.rootProps">
                <input ref="ref1" v-bind="api.getInputProps({ index: 0 })" />
                <input ref="ref2" v-bind="api.getInputProps({ index: 1 })" />
                <input ref="ref3" v-bind="api.getInputProps({ index: 2 })" />
                <input ref="ref4" v-bind="api.getInputProps({ index: 3 })" />
                <input ref="ref5" v-bind="api.getInputProps({ index: 4 })" />
                <input ref="ref6" v-bind="api.getInputProps({ index: 5 })" />
            </div>
            <div class="d-flex flex-column gap-30">
                <router-link
                    to="/EnrollmentResultPage"
                    class="bg-primary text-center text-white font-basic font-ralewey rounded-8 py-20 -py-sm-16"
                    >Continue</router-link
                >
                <router-link to="" class="text-secondary font-basic font-ralewey m-auto"
                    ><img :src="refreshIcon" /> Send again</router-link
                >
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
            refreshIcon: require('../../../assets/images/icons/refresh.svg'),
        }
    },
}
</script>
<script setup>
import * as pinInput from '@zag-js/pin-input'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

const [state, send] = useMachine(pinInput.machine({ id: '1', type: 'alphanumeric', placeholder: '' }))
const api = computed(() => pinInput.connect(state.value, send, normalizeProps))
</script>
<style scoped>
.title {
    padding: 0 274px 62px;
}

.per-card {
    margin-right: 345px;
    margin-left: 345px;
    padding: 40px 50px;
    gap: 60px;
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

input {
    width: 70px;
    height: 110px;
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    box-shadow: 0px 8px 16px -4px rgba(0, 12, 32, 0.12);
    border-radius: 15px;
    text-align: center;

    font-family: 'Open Sans';
    font-size: 45px;
    font-weight: 700;
    line-height: 61px;
    text-align: center;
    color: #282858;
}

input:focus {
    border: 1px solid #489651;
    outline: none;
}

@media (max-width: 768px) {
    .title {
        padding: 0 0 80px;
    }

    .per-card {
        margin-right: 45px;
        margin-left: 45px;
    }
}

@media (max-width: 375px) {
    .title {
        padding-bottom: 42px;
    }

    .per-card {
        margin-right: 0;
        margin-left: 0;
        padding: 40px 16px;
        gap: 32px;
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

    input {
        font-size: 35px;
        font-weight: 700;
        line-height: 48px;

        width: 38.5px;
        height: 59px;
    }
}
</style>
