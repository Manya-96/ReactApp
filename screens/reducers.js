import { combineReducers } from 'redux';
import { ActionConst } from 'react-native-router-flux';



const sceneReducer = (state = {}, { type, scene }) => {
    switch (type) {
        // case ActionConst.FOCUS:
        //     return { ...state, scene };
        // case ActionTypes.TOKEN_DEPLOY
        //     return {DeployToken: state.DeployToken }
        // }
        default:
            return state;
    }
}

export const appReducer = combineReducers({
    sceneReducer,
});
