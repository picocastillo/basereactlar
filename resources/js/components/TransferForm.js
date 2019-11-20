import React from 'react';


const TransferForm = ({form, onChange, onSubmit}) => (
  <form  className="form-inline justify-content-center" onSubmit={onSubmit}>
    <div className="form-group ">
      <input type="text" className="form-control" placeholder="Description" value={form.description} name="description" onChange={onChange}/>
    </div>
    <div className="input-group ">
      <div className="input-group-prepend">
          <div className="input-group-text">$</div>
      </div>
      <input type="text" className="form-control" name="amount"  value={form.amount} onChange={onChange} />
      <button type="submit" className="btn btn-primary "  >Add </button>
    </div>
  </form>
)

export default TransferForm;
