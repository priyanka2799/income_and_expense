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
      <div >
        <div>Expense Card</div>
        <div>
          Amount ${totalAmount}
          <div>
            Income ${positiveCurrency}
            Expenditure ${negativeCurrency}
          </div>
          <div>
            <SearchBox handleList = {handleList}/>
          </div>
          <div>
            <ListDisplay list = {List} onRemoveItem = {handleRemoveItem}/>
          </div>
        </div>
      </div>
    ); 
}

const SearchBox = ({handleList}) => {
  return(
    <form>
      <label htmlFor ="amount">cost</label>
      <input id = "amount" type = "number"/> 
      <label htmlFor = 'description'>
        Description:
      </label>
      <input id='description' />
      <button onClick = {(event) => handleList(document.getElementById("amount").value,document.getElementById("description").value )(event)}> Add</button>
    </form>
  );
}

const ListDisplay = ({list, onRemoveItem}) => (
  <div>
    {console.log(list)}
    {list.map(item=>( 
        <div key={item.description}>
          <span>{item.amount}</span>      
          <span>{item.description}</span>
          <span >
            <button type="button" onClick = {() => {onRemoveItem(item.description, item.amount)}}>
              Dismiss
            </button>
          </span>
        </div>   
        ))
    }
  </div>
);

export default App;

