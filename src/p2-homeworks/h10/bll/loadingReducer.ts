const initState = {
    isLoading: false
}


const SHOW_LOADING = 'SHOW_LOADING'

export type showLoadingACType = {
    type: typeof SHOW_LOADING
    isLoading: boolean

}

type initStateType = {
    isLoading: boolean
}





export const loadingReducer = (state: initStateType = initState, action: showLoadingACType): initStateType => { // fix any
    switch (action.type) {
        case SHOW_LOADING: {
            let copyState = { ...state, isLoading: action.isLoading }
            return copyState
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): showLoadingACType => {
    return { type: SHOW_LOADING, isLoading }
} // fix any