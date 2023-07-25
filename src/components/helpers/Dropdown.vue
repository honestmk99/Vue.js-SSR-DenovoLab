<template>
    <div
        :class="[
            IsDropdownListActive == false ? 'dropdown dropdown-input' : 'dropdown dropdown-input dropdown-input--open',
        ]"
    >
        <input
            @click="showDropdownList()"
            :value="this.itemValueSelected"
            class=""
            id="list"
            list="countryList"
            :placeholder="placeholder"
        />
        <div :class="[IsDropdownListActive == false ? 'd-none' : 'dropdown-list']">
            <div @click="selectItem('Ukraine')">Ukraine</div>
            <div @click="selectItem('Poland')">Poland</div>
            <div @click="selectItem('USA')">USA</div>
            <div @click="selectItem('Canada')">Canada</div>
            <div @click="selectItem('USA')">USA</div>
            <div @click="selectItem('USA')">USA</div>
            <div @click="selectItem('USA')">USA</div>
            <div @click="selectItem('USA')">USA</div>
            <div @click="selectItem('USA')">USA</div>
            <div @click="selectItem('USA')">USA</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['list', 'placeholder'],
    methods: {
        selectItem(itemValueSelected) {
            this.itemValueSelected = itemValueSelected
            this.IsDropdownListActive = false
        },
        showDropdownList() {
            this.IsDropdownListActive = !this.IsDropdownListActive
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
