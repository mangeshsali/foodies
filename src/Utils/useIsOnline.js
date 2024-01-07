import { useEffect, useState } from "react";

const useIsOnline = () => {
    const [isOnline, setOnline] = useState(true);
    function HandlerTrue() {
    setOnline(true)
}
    function HandlerFalse() {
        setOnline(false);
}
    useEffect(() => {
    window.addEventListener("online",()=>{HandlerTrue()})
        window.addEventListener("offline", () => { HandlerFalse() })
        return () => {
            window.removeEventListener("online",()=>{HandlerTrue()})
            window.removeEventListener("offline",()=>{HandlerFalse()})
        }
},[])
    return isOnline;
}
export default useIsOnline;