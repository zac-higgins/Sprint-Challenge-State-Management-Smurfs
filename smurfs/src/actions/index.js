import axios from "axios";

export const GET_SMURFS_LOADING = "GET_SMURFS_LOADING";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILED = "GET_SMURFS_FAILED";
export const PUSH_SMURF = "PUSH_SMURF";

export const smurfsLoading = () => ({
    type: GET_SMURFS_LOADING
});
export const smurfsLoadingSuccess = data => ({
    type: GET_SMURFS_SUCCESS,
    payload: data
});
export const smurfsLoadingFailed = error => ({
    type: GET_SMURFS_FAILED,
    payload: error
});
export const postingSmurf = data => ({
    type: PUSH_SMURF,
    payload: data
})

export function getThoseSmurfs() {
    return function (dispatch) {
        dispatch(smurfsLoading());

        return axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log("Here's thsoe Smurfs you asked for:", res.data);
                const info = res.data
                dispatch(smurfsLoadingSuccess(info))
            })
            .catch(err => dispatch(smurfsLoadingFailed(err)))
    }
}

// export function smurfAxios(data) {
//     return function (dispatch) {
//         // dispatchEvent(smurfsLoading());

//         return axios
//             .post('http://localhost:3333/smurfs', data)
//             .get('http://localhost:3333/smurfs')
//             .then(res => {
//                 dispatch(smurfsLoadingSuccess(res.data))
//             })
//             .catch(err => dispatch(smurfsLoadingFailed(err)))
//     }
// }