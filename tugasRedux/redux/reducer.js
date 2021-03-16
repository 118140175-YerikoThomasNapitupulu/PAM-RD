import { ON, OFF } from './tipe'

const iniData = {
    counter: 'yellow'
}

export const reducerCounter = (state = iniData, action) => {
    switch (action.type) {
        case ON:
            console.log('ON TO GREEN');
            return { ...state, counter: action.data }
        case OFF:
            console.log('OFF TO YELLOW');
            return { ...state, counter: action.data }
        default: return state;
    }
}