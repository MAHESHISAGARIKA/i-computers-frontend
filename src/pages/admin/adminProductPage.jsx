import { FaPlus } from "react-icons/fa6";

export default function AdminProductsPage(){

    return(
        <div className="w-full h-full">
            
             <button className="bg-accent w-[80px] h-[80px] rounded-full text-white text-2xl flex justify-center items-center fixed bottom-4 right-4 shadow-2xl hover:bg-white hover:text-accent">
                < FaPlus/>

             </button>
        </div>
    )

}