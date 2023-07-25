<template>
    <div :class="[showModal == true ? 'd-block modal' : 'd-none']" id="ExtendModal">
        <div :class="[showModal == true ? 'd-block modal-dialog' : 'd-none']" role="document">
            <div class="modal-content">
                <button type="button" class="btn-close" v-on:click="this.sentToParent()"></button>
                <div class="modal-header">
                    <h4>Extend Usage</h4>
                </div>
                <div class="modal-body">
                    <div>
                        <div class="mb-8">Call Minute</div>
                        <div class="d-flex mb-16 input-plus">
                            <input type="text" class="w-100 mr-8" placeholder="1000 Min" />
                            <div class="amountValue">$10.00 USD</div>
                        </div>
                    </div>
                    <div>
                        <div class="mb-8">SMS</div>
                        <div class="d-flex mb-16 input-plus">
                            <input type="text" class="w-100 mr-8" placeholder="100 Piece" />
                            <div class="amountValue">$10.00 USD</div>
                        </div>
                    </div>
                    <div>
                        <div class="mb-8">Data</div>
                        <div class="d-flex mb-16 input-plus">
                            <input type="text" class="w-100 mr-8" placeholder="100 MB" />
                            <div class="amountValue">$10.00 USD</div>
                        </div>
                    </div>
                    <div class="mt-24">
                        Total:
                        <div class="float-right font-weight-bold mr-24">$30.00 USD</div>
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
            this.$parent.$data.showModal = false
        },
        redirectToPaymnet() {
            this.$parent.setActiveItemId('3')
            this.$parent.$data.showModal = false
        },
    },
    data() {
        return {}
    },
}
</script>

<style>
@import '../../../assets/styles/helpers/Modals/ExtendModal.css';
</style>
