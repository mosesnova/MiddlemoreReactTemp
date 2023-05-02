import { useState, useEffect } from 'react';

const names = ["whale", "squid", "turtle", "coral", "starfish"];

export function FetchCustomer()
{
    
    const dat = {};
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    let text="";
    var url = 'https://localhost:44406/customer';
    const useApi = (url) => {
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        //const [data, setData] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    const json = await response.json();
                    setData(json);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }, [url]);

        return { data, loading, error };
    };
    console.log("effect", data);
    console.log("o zero", data[0]);


    //useEffect(() => {
    //    fetch('/customer')
    //        .then((response) => response.json()
    //            .then(({ data }) => console.log("Effect:", data))
    //            .catch((error) => console.log(error))
    //        )
    //}, [])

    function handleClick() {
        setCount(count + 1);
        //this.state = {
        //    customer: [],
        //    id: '',
        //    name: '',
        //    address: '',
        //};
        /* Not Working part */
        fetch('/customer')
            .then(response => response.json())
            .then(data => {
                console.log("Data", data);
                for (let x of data) {
                    text += x.address + "";
                }
                console.log(text);
                //setData((data) => [
                //    ...data,
                //    {
                //        id: object.id,
                //        name: object.name,
                //        address: object.address
                //    }
                //]);
                //console.log(object);
                console.log("data", data);
            })
            .catch(error => console.error(error))
        /* Not Working part */





    }



    return (
        <ul>
        <button onClick={handleClick}>
            Effect Hook for AJAX data retrieval.
            You pressed me {count} times
            {/*{*/}
            {/*    this.state.customer.map(member =>*/}
            {/*        <tr key={member.id}>*/}
            {/*            <td>{member.id}</td>*/}
            {/*            <td>{member.name}</td>*/}
            {/*            <td>{member.address}</td>*/}
            {/*        </tr>)*/}
            {/*}*/}
            {/*{this.data.address}*/}
            {/*   {data}*/}
            {/*    {data.customer}*/}
            {/*  {data.customer.id }*/}
            {/*<ul>*/}
            {/*    {object.map((d) => (*/}
            {/*        <li key={d.id}>{d}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            </button>
           <ul>{text.name}</ul>
            <ul>{names.map(name => <li key={name}> {name} </li>)}</ul>
           {/* <ul>{dat.map(d => <li key={d.address}> {d.name} </li>)}</ul>*/}
            {data.map(t => t.address)}
            Test
            {
                data.map(member =>
                    <tr key={member.id}>
                        <td>{member.id}</td>
                        <td>{member.name}</td>
                        <td>{member.address}</td>
                    </tr>)
            }
        </ul>
    );

};

