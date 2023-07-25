<script setup>
import * as pinInput from '@zag-js/pin-input'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

const [state, send] = useMachine(pinInput.machine({ id: '1' }))
const api = computed(() => pinInput.connect(state.value, send, normalizeProps))
</script>

<template>
    <div>
        <div ref="ref" v-bind="api.rootProps">
            <input v-bind="api.getInputProps({ index: 0 })" />
            <input v-bind="api.getInputProps({ index: 1 })" />
            <input v-bind="api.getInputProps({ index: 2 })" />
            <input v-bind="api.getInputProps({ index: 3 })" />
            <input v-bind="api.getInputProps({ index: 4 })" />
            <input v-bind="api.getInputProps({ index: 5 })" />
        </div>
    </div>
</template>
