import React from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const param = useParams();
  const amt = Number(param.amt);
  const sc = Number(param.sc);
  const dc = Number(param.dc);
  const tax = 0.5 * (amt + sc + dc);
  const total = amt + sc + dc + tax;
  var path = "https://uat.esewa.com.np/epay/main";
  var params = {
    amt: 100, //Bill amount
    psc: sc, //service charge
    pdc: dc, //delivery charge
    txAmt: tax, //taxamount
    tAmt: total, //total amount
    pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
    scd: "EPAYTEST",
    su: "http://merchant.com.np/page/esewa_payment_success",
    fu: "http://merchant.com.np/pa ",
  };

  function post() {
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (var key in params) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  }
  return (
    <>
      <h3>Amount:{amt}</h3>
      <h3>Service charge:{sc}</h3>
      <h3>Delivery charge:{dc}</h3>
      <h3>Tax amount:{tax}</h3>
      <h3>Total amount:{total}</h3>
      <button className="btn btn-warning" onClick={post}>
        pay
      </button>
    </>
  );
};

export default Payment;
