import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TransferForm from './TransferForm';
import TransferList from './TransferList';

export default class Example extends Component {
  constructor(props){
    super(props)

    this.state = {
      money: 0.0,
      transfers: [],
      error:null,
      form: {
        description: '',
        amount: '',
        wallet_id: 1
      }
    }
    this.handlerChange = this.handlerChange.bind(this)
    this.handlerSubmit = this.handlerSubmit.bind(this)
  }
  async handlerSubmit(e){
    e.preventDefault();
    try {
      let config= {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.form)
      }
      let res = await fetch('/api/transfer',config)

      let data = await res.json()
      console.log(data);
      this.setState({
        transfers: this.state.transfers.concat(data),
        money: data.money
      })

    } catch (e) {
    }
  }
  async componentDidMount(){
    try {
      let res = await fetch('/api/wallet')
      let data = await res.json()
      this.setState({
        money: data.money,
        transfers: data.transfers
      })

    } catch (e) {
      this.setState({
        error: e
      })
    }
  }
  handlerChange(e){
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="col-md-12 mt-5 mb-5">
                          <h1 className="title text-center"> {this.state.money} </h1>
                        </div>
                        <div className="col-md-12">
                        <TransferForm form={this.state.form} onChange={this.handlerChange} onSubmit={this.handlerSubmit}/>
                        </div>
                        <div className="col-md-12 mt-5">
                        <TransferList transfers={this.state.transfers}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
