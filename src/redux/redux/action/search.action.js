// Type Of Action
export const SEARCH_USER="SEARCH_USER"

export const searchUser=(searchfield)=>(
    {
        type:SEARCH_USER,  //Mandatory
        payload:searchfield //Optional
    }
)


