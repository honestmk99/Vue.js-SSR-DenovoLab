<template>
    <div v-on:click="setItem()" class="section-questions-accordion">
        <div
            :class="accordionShow ? 'section-questions-accordion-upArrow' : 'section-questions-accordion-downArrow'"
        ></div>
        {{ this.textQuestion }}
        <div v-if="accordionShow" class="section-questions-accordion-body">
            {{ this.textDescription }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['accordionNumberCurrent', 'accordionNumber', 'textQuestion', 'textDescription'],
    methods: {
        setItem() {
            if (this.accordionNumber == this.accordionNumberCurrent) {
                this.accordionShow = !this.accordionShow
            }
        },
    },
    data() {
        return {
            accordionShow: false,
        }
    },
}
</script>
