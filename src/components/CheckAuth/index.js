import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const CheckAuth = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 0);
    }, [pathname]);
    return null;
};
