
const BACKEND_URL = 'http://localhost:3080';
export const REDUX_ACTIONS = {
    //saga action
    FETCHING:'FETCHING',
    FETCH_LATEST:'FETCH_LATEST',
    FETCHING_SUCCESS : 'FETCHING_SUCCESS',
    FETCHING_FAILURE:'FETCHING_FAILURE',
    //tutor redux action

    //Auth User Action
    SET_AUTH_USER:'SET_AUTH_USER',
    GET_AUTH_USER:'GET_AUTH_USER',

    //consults redux action
    HANDLE_CONSULTS_DATA_FETCH_FAILURE:"HANDLE_CONSULTS_DATA_FETCH_FAILURE",
    SET_CONSULTS_DATA:"SET_CONSULTS_DATA",

    //timeSlotAction
    CONSULTEE_TIME_SLOT_SELECT:'CONSULTEE_TIME_SLOT_SELECT',
    //select consultant
    SELECT_CONSULTANT:'SELECT_CONSULTANT',

    //set consultant id by admin
    SET_CONSULTANT_ID:'SET_CONSULTANT_ID',

    SET_CONSULTEES: 'SET_CONSULTEES',

    //user profile update
    PROFILE_UPDATED: 'PROFILE_UPDATED'

}
//user profile update action
export const USER_PROFILE ={
    UPDATE_FIRST_NAME:'UPDATE_FIRST_NAME',
    UPDATE_LAST_NAME:'UPDATE_LAST_NAME',
    UPDATE_EMAIL:'UPDATE_EMAIL',
    UPDATE_IMAGE:'UPDATE_IMAGE',
    UPDATE_ADDRESS:'UPDATE_ADDRESS',
    UPDATE_SCHOOL:'UPDATE_SCHOOL',
    UPDATE_DISTRICT:'UPDATE_DISTRICT',
    UPDATE_STREAM:'UPDATE_STREAM',
    UPDATE_SUBJECT:'UPDATE_SUBJECT'
}

export const SCHEDULAR_FORM = {
    UPDATE_STARTDATE:'UPDATE_STARTDATE',
    UPDATE_ENDDATE:'UPDATE_ENDDATE'
}


export const ACTION_KEY ={

    LOGIN:"LOGIN",
    SIGNUP:"SIGNUP",
    TUTOR :"TUTOR",
    CONSULTS:"CONSULTS"
}

export const ACTION_ATTR ={
    PAYLOAD:'payload',
    DATA:'data'
}
export const URLS = {
    TUTOR: BACKEND_URL+'/tutor',
    LOGIN:BACKEND_URL+'/login',
    SIGNUP:BACKEND_URL+'/signup',
    CONSULTS:BACKEND_URL+'/users'
};
export const HTTP_METHODS = {
    GET: "GET",
    POST: "POST"
};
export const FETCH_KEYS = {
    MERCHANT_ID: 'merchantId',
    REGISTER_NO: 'registerNo',
    MAC_ADDRESS: 'macAddress'
};

export const HTTP_CODES = {
    SUCCESS: 200,
    INTERNAL_ERROR: 500,
    BAD_REQUEST: 400,
    NOT_AUTHENTICATED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404
};
export const TIMEOUTS = {
    AUTH_REDIRECT: 1000,
    LOCAL_PROXY_SEND_RETRY: 1000,
    SECOND_IN_MILLIS: 1000
};

export const ROLE={
    ADMIN:0,
    CONSULTANT:1,
    CONSULTEE:2,


}
