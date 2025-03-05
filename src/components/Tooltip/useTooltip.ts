import { useCallback, useState } from "react";

export const useTooltip = () => {

    const [showTooltip, setShowTooltip] = useState<boolean>(false);

    const toggleTooltip = useCallback(() => {
        setShowTooltip(true);
        setTimeout(() => {
            setShowTooltip(false);
        }, 2000);
    }, []);

    return { showTooltip, toggleTooltip };
};