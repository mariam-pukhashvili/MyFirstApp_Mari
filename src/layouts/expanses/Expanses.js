import ExpansesForm from '../../components/forms/expanses-form';
import {ExpansesList} from '../../data/Expanses';

import { useState } from 'react';

import { Expanseslist } from '../../components/list/Expanseslist';


function Expanses(props){

const [expansesData,setExpansesData]=useState(ExpansesList);

const onExpansesSubmit = (data) =>{  

        setExpansesData(
            [
                ...expansesData,
                data
            ]
        );
    
    } 

    const onSortHandler=(value) => {
       
     
        let sorted=[...expansesData];
        if(value==="1"){
           sorted=sorted.sort((a,b)=> a.amount- b.amount)
        }
        else if(value==="2"){
            sorted=sorted.sort((a,b)=> new Date(a.date).getTime()-new Date(b.date).getTime())
        }
        setExpansesData(sorted);
    }

    return (
        <div className="expanses container">
            <div className="row mt-5">
                 <h2 className="col-4 mx-auto text-muted text-center"> ჩემი ხარჯები </h2>
            </div>
            <hr/>
            <div className="row">
                <div className="col-6 mx-auto">
                    <ExpansesForm onSubmit={onExpansesSubmit}/>
                </div>
                
            </div>
            <div className="row mb-5">

                <div className="col-8 mx-auto">
                    {/*<div className="btn-group">
                         <button className="btn btn-outline-primary" onClick={onSortHandler.bind(null,'ASC')}>დალაგება ზრდადობით</button>
                        <button className="btn btn-primary" onClick={onSortHandler.bind(null,'DESC')}>დალაგება კლებადობით</button> </div>*/}
                    <div className="col-2 mb-1">დალაგება:</div> 
                      <div className="col-6">  
                         <select className="form-select mb-2" aria-label="Default select example"   onChange={e => onSortHandler(e.currentTarget.value)} >
                                <option defaultValue>აირჩიეთ</option>
                                <option value="1">თანხით</option>
                                <option value="2">თარიღით</option>
                            </select>
                      </div> 
                </div>
                <div className="col-8 mx-auto"> 
                    <Expanseslist data={expansesData}/>
           
            </div>
            </div>
           
        </div>
    );
}

export default Expanses;