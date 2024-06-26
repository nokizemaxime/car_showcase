"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParam } from "@/utils";

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter();
    const handleNavigation = () =>{
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParam("limit",`${newLimit}`);

        router.push(newPathName);
    }
    return(
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton title="Shore More" btnType='button' 
                containerStyles="bg-primary-bleu rounded-full text-white" handleClick={handleNavigation}/>
            )}
        </div>
    )
}

export default ShowMore;