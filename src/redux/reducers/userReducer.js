import React from 'react';

const initialData = {
    list: []
}

const userReducer = (state = initialData, action) => {
    switch (action.type) {
        case "REGISTER_PAGE":
            const { data } = action.playload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        data: data
                    }]
            }
        case "LOGIN_PAGE":
            const user_login = action;
            return {
                data: user_login
            }
        case "UPDATE_USER":
            return {
                data: user_login
            }
        default: return state;
    }
}
export default userReducer;