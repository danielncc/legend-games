import React from 'react'
import {ClipLoader} from "react-spinners";

export const Loader = ({ loading=true, message='', size= 80 }) => {
    return loading ? (
        <div className='p-20 '>
            <div className='h-full'>
                <ClipLoader
                        size={size}
                        color={"#FFF"}
                        loading={loading}
                    />
                <span className='message'>
                    {message}
                </span>
            </div>
        </div>
    ) : null
};

export default Loader;