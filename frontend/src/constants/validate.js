export const Emailvalidate =(Email, Password)=>{
    const emailError=/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email);
    if(!emailError) return "Email is not valid";
    //if(!passwordError) return "Password is not valid";
    return null;
};
export const Passwordvalidate = (Password)=>{
    const passwordError=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);
    if(!passwordError) return "Password is not valid";
    return null;
}