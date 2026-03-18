const Step1=({formData, setFormData})=>{

    return(
        <div className="flex flex-col p-3 items-center gap-4">
           <div className="flex gap-4  ">
            <label className="w-20">name</label>
            <input type="text" className="border-2 border-gray-300 rounded-md p-1 w-full"
            value={formData.name}
            onChange={(e)=> setFormData({...formData,name:e.target.value})}
            />
           </div >
           <div className="flex gap-4  p-2">
            <label className="w-20">email</label>
            <input type="email" className="border-2 border-gray-300 rounded-md p-1 w-full" 
            value={formData.email}
            onChange={(e)=> setFormData({...formData,email:e.target.value})}
            />
           </div>
        </div>
        
    )
}
export default Step1