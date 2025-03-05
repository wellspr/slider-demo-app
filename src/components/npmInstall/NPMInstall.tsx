import { useRef } from "react";
import { useTooltip } from "../Tooltip/useTooltip";
import { IconCopy } from "@tabler/icons-react";
import { Tooltip } from "../Tooltip/Tooltip";

export const NPMInstall = () => {

    const codeRef = useRef<string>("npm install @wellspr/slider");
	const { showTooltip, toggleTooltip } = useTooltip();

    return (
        <div className="npm-install">
            <pre><code>{codeRef.current}</code></pre>
            <button className="npm-install__copy-button"
                onClick={() => {
                    navigator.clipboard.writeText(codeRef.current)
                        .then(() => toggleTooltip())
                }}>
                <IconCopy />
            </button>
            {
                showTooltip &&
                <Tooltip text="Copied to clipboard" />
            }
        </div>
    );
}