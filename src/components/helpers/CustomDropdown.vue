<template>
    <div>
        <label> {{ label }} <span v-if="required" class="label-required">*</span></label>
        <div class="position-relatve">
            <div :class="[IsDropdownListActive == false ? 'dropdown-text' : 'dropdown-text dropdown-input-text--open']">
                <div class="position-relatve">
                    <input
                        @click="showDropdownList()"
                        :value="this.itemValueSelected"
                        class="input-dropdown-text"
                        id="list"
                        list="countryList"
                        :placeholder="placeholder"
                    />
                    <div :class="[IsDropdownListActive == false ? 'd-none' : 'dropdown-list']">
                        <template v-for="(name, index) in list" :key="index">
                            <div @click="clickselect(name)">
                                {{ name }}
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['list', 'placeholder', 'label', 'required', 'modelValue'],
    emits: ['update:modelValue'],
    methods: {
        selectItem(itemValueSelected) {
            this.itemValueSelected = itemValueSelected
            this.IsDropdownListActive = false
        },
        showDropdownList() {
            this.IsDropdownListActive = !this.IsDropdownListActive
        },
        clickselect(name) {
            this.selectItem(name)
            // eslint-disable-next-line no-undef
            $emit('update:modelValue', this.itemValueSelected)
        },
    },
    data() {
        return {
            IsDropdownListActive: false,
            itemValueSelected: '',
        }
    },
}
</script>

<style>
@import './../../assets/styles/helpers/dropdown.css';
</style>
