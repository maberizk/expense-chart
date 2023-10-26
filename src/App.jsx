import "./style.css";
import data from "../data.json";

function App() {
  const maxExpenseItem = data.reduce((max, item) =>
    item.amount > max.amount ? item : max
  );

  return (
    <>
      <div className="app">
        <div className="balanceSection">
          <div>
            <p>My balance</p>
            <h2 className="balance">$921.48</h2>
          </div>
          <div className="circles">
            <div className="circle white"></div>
            <div className="circle black"></div>
          </div>
        </div>
        <div className="graphSection">
          <div>
            <h2 className="spendingTitle">Spending - Last 7 days</h2>
          </div>
          <div className="graph">
            {data.map((item) => (
              <div
                className={`dayBar ${
                  item === maxExpenseItem ? "maxExpense" : ""
                }`}
                key={item.day}
              >
                <div className="amount">${item.amount} </div>
                <div
                  className="bar"
                  style={{ height: `${item.amount * 2.5}px ` }}
                ></div>
                <p>{item.day}</p>
              </div>
            ))}
          </div>
          <div className="line"></div>
          <div className="total">
            <div>
              <h4>Total this month</h4>
              <h1>$478.33</h1>
            </div>
            <div className="lastMonth">
              <p className="bold">+2.4%</p>
              <p className="fromLM">from last month</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
