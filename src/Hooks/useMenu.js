import { useEffect, useState } from "react"

const useMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true);
    const getmenudata = () => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            })
    }
    useEffect(() => {
        getmenudata();
    }, [])
    return [menu, loading];
}

export default useMenu;