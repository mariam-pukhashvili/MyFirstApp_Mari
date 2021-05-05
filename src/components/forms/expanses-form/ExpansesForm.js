import PropTypes from 'prop-types'
import { useState } from 'react';
function ExpansesForm({onSubmit}){

    const [title,setTitle]=useState ("");
    const [amount,setAmount]=useState (0);
    const [date,setDate]=useState ("");


  const OnSubmitHandler=(event)=>{

    event.preventDefault();
    onSubmit({
    title,
    amount,
    date
  });

   setTitle('');
   setAmount(0);
   setDate('');

  }



    return (
        <form className="form d-flex justify-content-between flex-wrap" onSubmit={OnSubmitHandler}>
          <div className="mb-3 col-8">
            <label htmlFor="title" className="form-label">ხარჯის დასახელება </label>
            <input type="text" className="form-control" id="title" 
            onChange={({target})=>{
             setTitle(target.value);
            }}
            value={title}
            required
            />
          
          </div>
          <div className="mb-3 col-3">
            <label htmlFor="amount" className="form-label">გადახდილი თანხა</label>
            <input type="number" className="form-control" id="amount" 
            onChange={({target})=>{
              setAmount(target.value);
             }}
             value={amount}
             required
            />
         
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="date" className="form-label">თარიღი</label>
            <input type="date" className="form-control" id="date" 
            onChange={({target})=>{
              setDate(target.value);
             }}
             value={date}
             required
            />
          
          </div>

          <div className="mb-3 col-12">
          <button type="submit" className="btn btn-primary">ხარჯის შექმნა</button>
          
          </div>

        </form>
    );

}
ExpansesForm.prototype={

  onSubmit:PropTypes.func.isRequired,
}
export default ExpansesForm;