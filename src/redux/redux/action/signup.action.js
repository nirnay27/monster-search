// Type Of Action
export const SIGNUP_USER="SIGNUP_USER"
// Action
// Parathensis()
// Curlybraces {}
// Block {}
// Object {}
// Destructing {}
// DataBinding {}
export const signupUser=(signupData)=>(
    {
        type:SIGNUP_USER,  //Mandatory
        payload:signupData //Optional
    }
)


