import { createStore } from 'vuex'
import PersonalStore from '../store/Store/PersonalStore'

const store = createStore({
    modules: {
        PersonalStore,
    },
})

export default store
