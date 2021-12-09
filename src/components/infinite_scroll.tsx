import React, { useRef, useEffect } from 'react';
import { useOnScreen } from '../utils/hooks/intersectionHook';

/*

loaderJSX --> the jsx to render loading state at the end of the list
onBottomReached --> function that is triggered on reaching the bottom of the list
isEnded --> boolean to specify whether user have reached the end of list or not
listJSX --> the list JSX to render

*/

type ScrollProps = {
    loaderJSX: JSX.Element,
    onBottomReached: () => void,
    isEnded: boolean,
    listJSX: JSX.Element
};

const InfiniteScroll = ({
    loaderJSX, isEnded, 
    onBottomReached, listJSX = <></>
}: ScrollProps) => {
    
    const loaderRef = useRef<HTMLDivElement | null>(null);
    const visible = useOnScreen(loaderRef);
  
    useEffect(() => {
        if(visible) onBottomReached();    
    }, [visible]);
  
  return <div>
        {listJSX}
        {!isEnded ? <div className="infinite-load" ref={loaderRef}>
            {loaderJSX}
        </div> : <span className="infinite-load">
            You have reached the end of list.</span>}
    </div>
};

export default InfiniteScroll;
