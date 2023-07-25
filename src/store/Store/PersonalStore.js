import { SET_AddPersonalData } from '../actions.type'
export const state = {
    personalData: {
        firstName: '',
        middleName: '',
        lastName: '',
        address: '',
        state: '',
        city: '',
        zipCode: '',
        urbanizationCode: '',
        dob: '',
        ssn4: '',
        tribalId: '',
        bqpFirstName: '',
        bqpLastName: '',
        bqpDob: '',
        bqpSsn4: '',
        bqpTribalId: '',
        alternateId: '',
        bqpAlternateId: '',
        eligibilityProgramCode: '',
        publicHousingCode: '',
        consentInd: '',
        contactPhoneNumber: '',
        contactEmail: '',
        contactAddress: '',
        contactCity: '',
        contactState: '',
        contactZipCode: '',
        contactUrbCode: '',
        carrierUrl: '',
    },
}
export const actions = {
    addToPeronal(context, value) {
        return context.commit(SET_AddPersonalData, {
            ...context.state.personalData,
            [value[0]]: value[1],
        })
    },
}
export const mutations = {
    SET_AddPersonalData(state, payload) {
        state.personalData = payload
    },
}
const getters = {
    getPersonalData: function (state) {
        return `${state.personalData}`
    },
}
export default {
    state,
    actions,
    mutations,
    getters,
}
