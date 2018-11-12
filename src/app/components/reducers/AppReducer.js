import { ACTION, STATUS, ALERT, MODAL} from '../constants/index'

const defaultState = {
    alert: {},
    modal: {},
    status: {}
}

const AlertReducer = (state=defaultState.alert, action) => {
    if(action.alert) {
        let newState = {};
        newState[action.alert] = {
            show: (action.status == STATUS.WARNING || action.status == STATUS.ERROR) ? true : false,
            status: action.status,
            message: action.message
        }
        return {...state, ...newState}
    }
    return state
}

const StatusReducer = (state=defaultState.status, action) => {
    if(action.status) {
        let newState = {};
        newState[action.type] = action.status
        return {...state, ...newState}
    }
    return state
}

const AppReducer = (state=defaultState, action) => {
    return {
        alert: AlertReducer(state.alert, action),
        status: StatusReducer(state.status, action),
    }
}

export default AppReducer