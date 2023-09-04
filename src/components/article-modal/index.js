import { useEffect, useState } from "react";

const ArticleModal = (props) => {

    const [shouldDisplay, setShouldDisplay] = useState(false);
    useEffect(()=>{
        setShouldDisplay(props.shouldDisplay);
    }, [props.shouldDisplay])

    const closeModal = () => {
        setShouldDisplay(false);
        props.onDismiss();
    }
    return (
        <div className={`w-full h-full flex absolute items-center justify-center bg-black bg-opacity-60 z-0 ${shouldDisplay ? 'block' : 'hidden'}`}
            onClick={closeModal}>
            <div className="w-5/12 h-5/6 bg-white opacity-100 text-black rounded-md z-10">
                    testing modal
            </div>
        </div>
    )
}

export default ArticleModal;