import React, { useEffect, useState } from 'react'
import {columns, rows} from "../../data"

const DataTable = () => {
    const[search,setSearch] = useState("");
    const [res, setRes] = useState(rows);
    
    useEffect(()=> {
        let a = rows.filter((item, index) =>{
            if(
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.gender.toLowerCase().includes(search.toLowerCase())
                ) {
                return true;
            }
        });
        setRes(a);
    }, [search])

  return (
    <div className='datatable'>
        <p align="center">
            Search Here :   
            <input type='text'
            placeholder='Search Here'
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>
        </p>
        <table border={1} rules='all' cellPadding={5} cellSpacing={5}>
            <thead>
                <tr>
                    {columns.map((item,index) => (
                        <th key={index}>{item.charAt(0).toUpperCase() + item.slice(1)}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {res.map((item, index) => {
                    return (
                        <tr key={index}>
                            {columns.map((col) => (
                                <td key={col}>{item[col]}</td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default DataTable