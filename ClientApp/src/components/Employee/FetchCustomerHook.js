import { useState, useEffect } from 'react';

        /* Not Working part */
export function FetchCustomerHook() {
    const [data, setData] = useState([]);
    useEffect(() => {
    fetch('/customer', { credentials: 'same-origin' })
        .then(response => response.json())
        .then(dat => {
            console.log("Data", dat);
            console.log("data", dat);
            //data = dat;
            setData(dat);
        })
            .catch(error => console.error(error))
    }, []);
    
    return (
        <div className="FetchCustomerHook">
            {JSON.stringify(data)}

            {data.map((num) => (
                <div key={num.id}>{num.name}</div>
            ))}
        </div>
    );
}
