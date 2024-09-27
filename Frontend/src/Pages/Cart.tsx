import axios from "axios";
import { useState } from "react";

function CartPage() {
  const [processing, setProcessing] = useState(false);

  const handleCheckout = async () => {
    setProcessing(true);
    let data = JSON.stringify({
      pdName: "Rc Car",
      pdPrice: 170,
      pdQty: 1,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/create-payment",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        const { url } = response.data;
        if (url) {
          window.location.href = url;
        } else {
          console.log("No URL returned from the server");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setProcessing(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Your Order Summary
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-700">Product Name</h3>
            <p className="text-lg font-semibold text-gray-900">Rc Car</p>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-700">Quantity</h3>
            <p className="text-lg font-semibold text-gray-900">01</p>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-700">Subtotal</h3>
            <p className="text-lg font-semibold text-gray-900">$120</p>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-700">Delivery Fee</h3>
            <p className="text-lg font-semibold text-gray-900">$50</p>
          </div>
          <div className="flex justify-between items-center border-t pt-4">
            <h3 className="text-xl font-bold text-gray-800">Total</h3>
            <p className="text-xl font-bold text-gray-900">$170</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleCheckout}
          disabled={processing}
          className={`mt-6 w-full py-3 rounded-lg text-lg font-semibold text-white 
            ${processing ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"} 
            transition duration-200`}
        >
          {processing ? "Processing..." : "Proceed to Checkout"}
        </button>
      </div>
    </div>
  );
}

export default CartPage;
