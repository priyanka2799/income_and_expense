import React from 'react';
import './App.css';


var totalAmount = 0;
var positiveCurrency = 0;
var negativeCurrency =0;



const App = () => {
    //const [searchTerm]
    const list = [
      // {"income": 'dont have for now',
      //   "expenditure": "yeah everyone has to pay anyway",
      //   "costs": "very high",
      // },
      // {"income": ' have for now',
      //   "expenditure": "yeah everyone has to pay anyway",
      //   "costs": "very high",
      // }
      {
        amount: -300,
        description: "stationary",
      },
      {
        amount: 110,
        description: "pocket money",
      },
    ] 
    const[List, setList] = React.useState(list);

    const handleList = (item1, item2) => (event) => {
      
      console.log(item1,item2);
      const newList = [...list, {
        amount: item1,
        description: item2
      }]
      setList(newList);
      event.preventDefault();
    }

    const handleRemoveItem = (description) => {
      const newList = list.filter((item) => item.description!= description);

      setList(newList);
    }

    // const[totalAmount, setTotalAmount]= React.useState(totalAmount);
    // const[positiveCurrency, setPositiveCurrency] = React.useState(setPositiveCurrency);
    // const[negativeCurrency,setNegativeCurrency] = negativeCurrency
    return (
      <div >
        <div>Expense Card</div>
        <div>
          Amount ({totalAmount})
          <div>
            Income {positiveCurrency}
            Expenditure {negativeCurrency}
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
      <input id = "amount" /> 
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
            <button type="button" onClick = {() => {onRemoveItem(item.description)}}>
              Dismiss
            </button>
          </span>
          </div>   
        )
      )
    }
  </div>
);
export default App;
