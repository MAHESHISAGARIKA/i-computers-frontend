import { useState } from "react"
import toast from "react-hot-toast"
import { FaTwitter } from "react-icons/fa";

export default function TestPage(){
    
    const [score,setScore] = useState(50)
    const [mood ,setMood] = useState("😐")
    const [isFollowed , setIsFollowed] = useState(false)
    
    return(
        <div className="w-full h-full bg-green-400  flex justify-center items-center">
            <div className="w-[450px] h-[450px] bg-white flex justify-center items-center flex-col">
                <h1 className="font-bold text-7xl">{score}</h1>
                <div className="w-full h-[100px] flex justify-center items-center">
                    <button className="w-[100px] bg-red-600 h-[40px] mx-5"
                    onClick={
                            ()=>{
                                setScore(score-1)
                            }
                        }>
                        Decrease
                    </button>
                    <button className="w-[100px] bg-green-600 h-[40px] mx-5"
                        onClick={
                            ()=>{
                                setScore(score+1)
                            }
                        }>
                        Increase
                    </button>
                </div>
                <h1 className="font-bold text-7xl">{mood}</h1>
                <div className="w-full h-[100px] flex justify-center items-center">
                    <button className="w-[100px] bg-red-600 h-[40px] mx-5"
                       onClick={
                             ()=>{
                                 setMood("☹️")
                                 toast.error("Oh no! You are sad")
                             }
                         }>
                         Sad
                    </button>
                     <button 
                         className="w-[100px] bg-green-600 h-[40px] mx-5"
                         onClick={
                             ()=>{
                                 setMood("😐")
                                 toast("You are neutral",{
                                     icon: "😐"
                                 })
                             }
                         }>
                         Neurtal
                     </button>
                      <button 
                         className="w-[100px] bg-blue-600 h-[40px] mx-5"
                         onClick={
                             ()=>{
                                 toast.success("Yay! You are happy")
                                 setMood("😀")
                             }
                         }>
                         Happy
                     </button>
                        
                </div>

                <FaTwitter onClick={
                     ()=>{
                         toast("Follow us on Twitter",{
                             icon: <FaTwitter className="text-blue-500"/>
                         })
                         setIsFollowed(!isFollowed)
                     }
                 } 
                 className={isFollowed ? "text-[75px] text-blue-600" : "text-[75px] text-gray-600"}/>
            </div>       
        </div>
    )
}