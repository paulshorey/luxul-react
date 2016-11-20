const SET_RADIO_ENABLED = 'wireless/SET_RADIO_ENABLED';
const SET_RADIO_CHANNEL = 'wireless/SET_RADIO_CHANNEL';
const SET_RADIO_WIDTH = 'wireless/SET_RADIO_WIDTH';
const ADD_PROFILE = 'wireless/ADD_PROFILE';
const DELETE_PROFILE = 'wireless/DELETE_PROFILE';

const initialState = {
    radios: {
        "2.4GHz": {
            enabled: true,
            channel: 6,
            width: 'Below'
        },
        "5GHz": {
            enabled: true,
            channel: 153,
            width: 'Above'
        }
    },
    profiles: [
        {
            radio: "2.4GHz",
            ssid: "Luxul1750",
            ssidBroadcast: true,
            clientIsolation: true,
            security: "wpa2"
        }
    ],
};


/*
    DEFINE ACTIONS
*/
export function setRadioEnabled(radio, enabled) {
    return {
        type: SET_RADIO_ENABLED,
        radio: radio,
        enabled: enabled,
    }
}

export function setRadioChannel(radio, channel) {
    return {
        type: SET_RADIO_CHANNEL,
        radio: radio,
        channel: channel,
    }
}

export function setRadioWidth(radio, width) {
    return {
        type: SET_RADIO_WIDTH,
        radio: radio,
        width: width,
    }
}

export function addProfile(profile) {
    return {
        type: ADD_PROFILE,
        profile
    }
}

export function deleteProfile(profileIndex) {
    return {
        type: DELETE_PROFILE,
        profileIndex
    }
}


/*
    REDUCER
*/
export default function wirelessReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_RADIO_WIDTH:
        {
            const { radio, width } = action;
            return {
                ...state,
                radios: {
                    ...state.radios,
                    [radio]: {
                        ...state.radios[radio],
                        width: width
                    }
                }
            }
        }
        case SET_RADIO_CHANNEL:
        {
            const { radio, channel } = action;
            return {
                ...state,
                radios: {
                    ...state.radios,
                    [radio]: {
                        ...state.radios[radio],
                        channel: channel
                    }
                }
            }
        }
        case SET_RADIO_ENABLED:
        {
            const { radio, enabled } = action;
            return {
                ...state,
                radios: {
                    ...state.radios,
                    [radio]: {
                        ...state.radios[radio],
                        enabled: enabled
                    }
                }
            }
        }
        case ADD_PROFILE:
        {
            const { profile } = action;
            return {
                ...state,
                profiles: [
                    ...state.profiles,
                    profile
                ]
            }
        }
        case DELETE_PROFILE:
        {
            const { profileIndex } = action;
            return {
                ...state,
                profiles: state.profiles.filter((x, i) => i !== profileIndex)
            }
        }
        default:
            return state;
    }
}

