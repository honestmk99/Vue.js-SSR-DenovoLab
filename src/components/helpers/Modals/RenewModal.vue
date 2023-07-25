<template>
    <div :class="[showModal == true ? 'd-block modal' : 'd-none']" id="RenewModal">
        <div :class="[showModal == true ? 'd-block modal-dialog' : 'd-none']" role="document">
            <div class="modal-content">
                <button type="button" class="btn-close" v-on:click="this.sentToParent()"></button>
                <div class="modal-header">
                    <h4>Renew</h4>
                </div>
                <div class="modal-body">
                    <div class="mb-24">
                        <label>Year(s)</label>
                        <input class="w-100" type="text" placeholder="1" />
                    </div>
                    <div class="mb-24">
                        <label>Month(s)</label>
                        <input class="w-100" type="text" placeholder="10" />
                    </div>
                    <div class="mb-24">
                        Total:
                        <div class="float-right font-weight-bold">$00.00</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button v-on:click="this.redirectToPaymnet()" type="button" class="btn-round btn-green">
                        Pay Now
                    </button>
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
            this.$parent.$data.showModalRenew = false
        },
        redirectToPaymnet() {
            this.$parent.$data.showModalRenew = false
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
