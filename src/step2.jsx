import { useState } from "react";

const Step2=({formData, setFormData})=>{
    const[confirmPassword, setConfirmPassword]=useState("");
    const passwordmatch= formData.password.length > 6 && formData.password === confirmPassword;
    return(
        
        <div className="flex flex-col  p-5 g-3">
            <div className="flex flex-row gap-3 w-full ">
                <label className="w-32">password</label>
                <input type="password"
                 className="border-2 border-gray-300 rounded-md p-1 w-30"
                 value={formData.password}
                 onChange={(e)=>{setFormData({...formData,password:e.target.value})}}
                 />
            </div>
            <div className="flex flex-row gap-3 py-4">
                <label className="w-32">confirm Password</label>
                <input type="password" className="border-2 border-gray-300 rounded-md p-1 w-30"
                value={confirmPassword}
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
                />
            </div>
            {confirmPassword&& !passwordmatch && (
                <p className="text-red-500">password do not match</p>
            )}
        </div>
        
    )
}
export default Step2;