// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";

// import axios from "axios";

// import GeneralContext from "./GeneralContext";

// import "./BuyActionWindow.css";

// const BuyActionWindow = ({ uid , mode }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);
//   const generalContext = useContext(GeneralContext);

//   const handleActionClick = () => {
//     if (mode === "SELL") {
//       const holding = generalContext.allHoldings.find(h => h.name === uid);
//       if (!holding || stockQuantity > holding.qty) {
//         // alert("Insufficient quantity to sell");
//         // Instead of alert("Insufficient quantity to sell");
//         generalContext.showNotification("Insufficient quantity to sell");
//         return;
//       }
//     }
//     axios.post("http://localhost:5000/newOrder", {
//       name: uid,
//       qty: Number(stockQuantity),
//       price: Number(stockPrice),
//       mode: mode,
//     })
//     .then(() => {
//       // SUCCESS POPUP
//       const actionVerb = mode === "BUY" ? "Bought" : "Sold";
//       generalContext.showNotification(`${actionVerb} ${stockQuantity} qty of ${uid} successfully!`, "success");
//       generalContext.refreshHoldings();
//       generalContext.closeBuyWindow();
//     })
//     .catch(err => {
//       console.error('order request failed', err);
//       // ERROR POPUP
//       generalContext.showNotification("Order failed. Please try again.", "error");
//     });
//   };

//   const handleCancelClick = () => {
//     generalContext.closeBuyWindow();
//   };

//   return (
//     <div className="container" id="buy-window" draggable="true">
//       <div className="regular-order">
//         <div className="inputs">
//           <fieldset>
//             <legend>Qty.</legend>
//             <input
//               type="number"
//               name="qty"
//               id="qty"
//               onChange={(e) => setStockQuantity(e.target.value)}
//               value={stockQuantity}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Price</legend>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               step="0.05"
//               onChange={(e) => setStockPrice(e.target.value)}
//               value={stockPrice}
//             />
//           </fieldset>
//         </div>
//       </div>

//       <div className="buttons">
//         <span>Margin required ₹140.65</span>
//         <div>
//           {/* <Link className="btn btn-blue" onClick={handleActionClick}>
//             {mode === "BUY" ? "Buy" : "Sell"}
//           </Link>
//           <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
//             Cancel
//           </Link> */}
//           <button className="btn btn-blue" onClick={handleActionClick}>
//             {mode === "BUY" ? "Buy" : "Sell"}
//           </button>
//           <button className="btn btn-grey" onClick={handleCancelClick}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;


import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid , mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const generalContext = useContext(GeneralContext);

  const handleActionClick = () => {
    if (mode === "SELL") {
      const holding = generalContext.allHoldings.find(h => h.name === uid);
      if (!holding || stockQuantity > holding.qty) {
        generalContext.showNotification("Insufficient quantity to sell", "error");
        return;
      }
    }
    axios.post("https://zerodha-backend-hm17.onrender.com/newOrder", {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: mode,
    })
    .then(() => {
      const actionVerb = mode === "BUY" ? "Bought" : "Sold";
      generalContext.showNotification(`${actionVerb} ${stockQuantity} qty of ${uid} successfully!`, "success");
      generalContext.refreshHoldings();
      generalContext.closeBuyWindow();
    })
    .catch(err => {
      console.error('order request failed', err);
      generalContext.showNotification("Order failed. Please try again.", "error");
    });
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    /* Added dynamic mode class here */
    <div className={`container ${mode === "SELL" ? "sell-mode" : "buy-mode"}`} id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          {/* Changed action button color class based on mode */}
          <button 
            className={`btn ${mode === "BUY" ? "btn-blue" : "btn-orange"}`} 
            onClick={handleActionClick}
          >
            {mode === "BUY" ? "Buy" : "Sell"}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;