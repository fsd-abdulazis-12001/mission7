/* eslint-disable react-hooks/rules-of-hooks */
 import { useNavigate } from "react-router-dom"
const index = (props) => {

   const {children,btntype,redirect, variant ,opacity ,hasLogo} = props
  const navigate = useNavigate()
  return (
   
   <button type={btntype} onClick={redirect && (() => navigate(redirect))} className={`w-full ${variant} hover:bg-gray-600 text-white py-2 rounded-full font-lato border border-gray-700 ${opacity} text-white py-2 px-4 rounded-full flex items-center justify-center w-full`}>
     {hasLogo && hasLogo[0] && <img src={hasLogo[0].img} alt={hasLogo[0].alt} className="w-5 mr-2" />}
     
     {children}</button>
            
    
  )
}

export default index
