import React from 'react';
import './App.css';


const App = () => {
  
    const list = [
      // {
      //   amount: -300,
      //   description: "stationary",
      // },
      // {
      //   amount: 110,
      //   description: "pocket money",
      // },
    ] 

    const[List, setList] = React.useState(list);
    const[totalAmount, setTotalAmount] = React.useState(0)
    const[positiveCurrency, setPositiveCurrency] = React.useState(0)
    const[negativeCurrency, setNegativeCurency] = React.useState(0)

    const handleList = (item1, item2) => (event) => {
      
      console.log(item1,item2);
      const newList = [...List, {
        amount: item1,
        description: item2
      }]

      setList(newList);
      setTotalAmount (totalAmount + parseInt(item1))
      if(item1>0){ setPositiveCurrency(positiveCurrency + parseInt(item1))}
      else if(item1<0){ setNegativeCurency(negativeCurrency - parseInt(item1))}
      event.preventDefault();
    }

    const handleRemoveItem = (description, amount) => {
      const newList = List.filter((item) => item.description!= description);

      setList(newList);

      setTotalAmount (totalAmount - parseInt(amount))
      if(amount>0){ setPositiveCurrency(positiveCurrency - parseInt(amount))}
      else if(amount<0){ setNegativeCurency(negativeCurrency + parseInt(amount))}
    }

    return (
      <div className='container'>
        <h1 className='headline'>Expense Card</h1>
        <div className='values-container'>
          <div>
            Amount ${totalAmount}
          </div>
          <div>
            Income ${positiveCurrency}
          </div>
          <div>
            Expenditure ${negativeCurrency}
          </div>
        </div>
        <div className='add-to-list'>
          <SearchBox handleList = {handleList}/>
        </div>
        <div>
          <ListDisplay list = {List} onRemoveItem = {handleRemoveItem}/>
        </div>
      </div>
    ); 
}

const SearchBox = ({handleList}) => {
  return(
    <form >
      <div>
        <label className='label' htmlFor ="amount">
          cost :
        </label>
        <input className='input' id = "amount" type = "number"/> 
      </div>
      <div>
        <label className='label' htmlFor = 'description'>
          Description :
        </label>
        <input className='input' id='description' />
      </div>
      
      
      <button className='button button-add' onClick = {(event) => handleList(document.getElementById("amount").value,document.getElementById("description").value )(event)}> Add</button>
    </form>
  );
}

const ListDisplay = ({list, onRemoveItem}) => (
  <div>
    {console.log(list)}
    {list.map(item=>( 
        <div className='item' key={item.description}>
          <span style={{width:'30%'}}>${item.amount}/-</span>      
          <span style={{width:'50%'}}>{item.description}</span>
          <span style={{width:'20%'}}>
            <button className='button button-dismiss' type="button" onClick = {() => {onRemoveItem(item.description, item.amount)}}>
              Dismiss
            </button>
          </span>
        </div>   
        ))
    }
  </div>
);

export default App;

