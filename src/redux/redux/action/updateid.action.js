export const USER_ID="USER_ID"

export const userID=(userid)=>(
    {
        type:USER_ID,  //Mandatory
        payload:userid //Optional
    }
)