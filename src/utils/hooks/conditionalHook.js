import { useEffect } from 'react';


// hooks that binds conventional useeffect
// but only triggers on certain specified conditions
export const useConditionalEffect = (cb = () => {}, condition = true, depsArray = []) => {
    useEffect(() => {
        if(condition) cb();
    }, [depsArray]);
};