// creating custom hook 
import { useEffect, useState } from "react";

const useItems = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://perfume-inventory-management-website-server.vercel.app/perfume')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return [items, setItems];
}
export default useItems;