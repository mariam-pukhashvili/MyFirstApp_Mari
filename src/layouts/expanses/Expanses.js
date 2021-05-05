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

    const onSortHandler=(sortby) => {
        

        let sorted=[...expansesData];
        if(sortby==="ASC"){
           sorted=sorted.sort((a,b)=> a.amount- b.amount)
        }
        else if(sortby==="DESC"){
            sorted=sorted.sort((a,b)=> b.amount - a.amount)
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
            <div className="row">
                <div className="col-8 mx-auto">
                    <div className="btn-group">
                        <button className="btn btn-outline-primary" onClick={onSortHandler.bind(null,'ASC')}>დალაგება ზრდადობით</button>
                        <button className="btn btn-primary" onClick={onSortHandler.bind(null,'DESC')}>დალაგება კლებადობით</button>
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