export const SHOW_MODAL="SHOW_MODAL"

export const showModal=(showmodal)=>(
    {
        type:SHOW_MODAL,  //Mandatory
        payload:showmodal //Optional
    }
)