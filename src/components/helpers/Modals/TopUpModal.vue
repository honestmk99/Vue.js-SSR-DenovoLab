<template>
    <div :class="[showModal == true ? 'd-block modal' : 'd-none']" id="RenewModal">
        <div :class="[showModal == true ? 'd-block modal-dialog' : 'd-none']" role="document">
            <div class="modal-content">
                <button type="button" class="btn-close" v-on:click="this.sentToParent()"></button>
                <div class="modal-header">
                    <h4>Top Up</h4>
                </div>
                <div class="modal-body">
                    <div class="input-dollar">
                        <label>Amount</label>
                        <input class="w-100" type="text" placeholder="10.00" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button v-on:click="this.redirectToPaymnet()" class="btn-round btn-green">Pay Now</button>
                </div>
            </div>
        </div>
    </div>
    <div :class="[showModal == true ? 'modal-bg' : 'd-none']"></div>
</template>

<script>
export default {
    props: ['showModal'],
    methods: {
        sentToParent() {
            this.$parent.$data.showModalTopUp = false
        },
        redirectToPaymnet() {
            this.$parent.$data.showModalTopUp = false
            this.$parent.$data.isActiveIndex = 3
        },
    },
    data() {
        return {
            icon: require('../../../assets/images/helpers/Modals/Alert-Icon.svg'),
        }
    },
}
</script>
