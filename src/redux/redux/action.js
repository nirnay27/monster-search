import axios from "axios"

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"

export const fetchDataRequest=()=>{
    type:FETCH_DATA_REQUEST
}
export const fetchDataSuccess=(data)=>({
    type:FETCH_DATA_SUCCESS,
    payload:data
})

export const fetchDataFailure=(error)=>({
    type:FETCH_DATA_FAILURE,
    payload:error
})

export const fetchData=()=>{
    return (dispatch)=>{
      dispatch(fetchDataRequest())
      axios.get("http://localhost:8085/user/getusers")
      .then(response=>{
        const data= response.data
        dispatch(fetchDataSuccess(error))
      })
    }
}

