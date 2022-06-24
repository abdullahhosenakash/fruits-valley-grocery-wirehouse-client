import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://pure-atoll-61316.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setLoading(false);
            })
    }, [])
    return [items, setItems, loading];
}

export default useItems;