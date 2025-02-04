"use cleint"

import { BounceLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
    return ( 
        <Box className="h-full flex items-center justify-center">
            <BounceLoader color="#ff69b4" size={40} />
        </Box>
     );
}
 
export default Loading;