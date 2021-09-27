import { UserType } from "../HW8"

export type sortUp = {
    type: 'sort'
    payload: 'up'
}
export type sortDown = {
    type: 'sort'
    payload: 'down'
}
export type checkNum = {
    type: 'check'
    payload: number
}

type ActionsType =
    checkNum |
    sortDown |
    sortUp

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort':
            let copyState = [...state]
            copyState = copyState.sort(function (a, b) {
                if (a.age > b.age) {
                    return 1;
                }
                if (a.age < b.age) {
                    return -1;
                }
                return 0;
            })
            return action.payload === "up" ? copyState : copyState.reverse()
        case 'check': {
            let copyState = [...state]
            copyState = copyState.filter(e => e.age >= action.payload)

            return copyState
        }
        default: return state
    }
}
