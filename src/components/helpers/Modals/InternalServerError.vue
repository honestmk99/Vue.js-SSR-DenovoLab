<template>
    <div :class="[showModal == true ? 'd-block modal' : 'd-none']" id="InternalServerError">
        <div :class="[showModal == true ? 'd-block modal-dialog' : 'd-none']" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4>Internal Server Error</h4>
                </div>
                <div class="modal-body">
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-green">Try Again</button>
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
    },
    data() {
        return {
            icon: require('../../../assets/images/helpers/Modals/Alert-Icon.svg'),
        }
    },
}
</script>
