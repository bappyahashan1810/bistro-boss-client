import { useEffect, useState } from "react"

const useMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true);
    const getmenudata = () => {

        fetch('http://localhost:3000/menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            })
            .catch((error) => console.log('Error -->', error))
    }
    useEffect(() => {
        getmenudata();
    }, [])

    return [menu, loading];
}

export default useMenu;