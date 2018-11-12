import { ACTION, STATUS, ALERT, MODAL} from '../constants/index'
import massPeople from '../../data/massPeople'

const defaultState = {
    people: massPeople()
}

const DataReducer = (state=defaultState, action) => {
    return state
}

export default DataReducer