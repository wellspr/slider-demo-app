import { IconBrandGithub } from "@tabler/icons-react";

export const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__copy">
                &copy; 2025 by Slider - All rights reserved
            </div>
            <div className="footer__links">
                <div className="footer__links__github-link">
                    <a href="https://github.com/wellspr/slider">
                        View on Github
                        <IconBrandGithub size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}