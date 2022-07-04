import { useLayoutEffect, useState } from "react";

export type idComponent = {
    id: string
}


export default function useWindowPosition({id}:idComponent) {
    const [animation, setAnimation] = useState(false);

    useLayoutEffect(() => {
        function updatePosition() {
            const offetSetHeight = window.document.getElementById(id)?.getBoundingClientRect().height;
            if (offetSetHeight && window.pageYOffset > offetSetHeight * 0.7) {
                setAnimation(true);
        }       
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
    }, [id]);
    return animation;
}