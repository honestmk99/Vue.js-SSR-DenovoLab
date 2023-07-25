import ApiService from './api.service'

const eligibilityService = {
    postPersonalDataForCheckEligibility(data) {
        return ApiService.post(`${process.env.VUE_APP_API_LINK}/public/acp/eligibility-check`, data)
    },
    postEligibilityCheck(data, eligibilityCheckId) {
        return ApiService.post(
            `${process.env.VUE_APP_API_LINK}/public/acp/eligibility-check/${eligibilityCheckId}/status`,
            data
        )
    },
}

export default eligibilityService
