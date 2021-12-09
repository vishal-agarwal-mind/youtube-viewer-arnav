import { useState, useEffect } from 'react';

// hook that binds intersection observer
// takes in the reference to DOM node and
// returns visibility status
export const useOnScreen = ref => {
      
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const valueForCleanup = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, { threshold: .5 });

        if(ref.current) observer.observe(ref.current);

        return () => {
            if(valueForCleanup) observer.unobserve(valueForCleanup);
        };

    }, [ref]);

    return visible;
};