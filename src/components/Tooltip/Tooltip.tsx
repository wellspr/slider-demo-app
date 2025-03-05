import { IconClipboard } from "@tabler/icons-react";

export const Tooltip = ({text}: {text: string}) => {

    return (
        <div className="npm-install__tooltip">
            { text }
            <IconClipboard />
        </div>
    );
};