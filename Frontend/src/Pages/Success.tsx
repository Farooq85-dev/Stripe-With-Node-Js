import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SuccessPage() {
  const navigate = useNavigate();

  // Redirect to the homepage after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000); // Redirects after 5 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Success Icon */}
        <div className="flex justify-center items-center bg-green-500 w-16 h-16 rounded-full mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5 4a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your payment. Your transaction has been completed
          successfully.
        </p>

        {/* Button to go back to homepage */}
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Go to Homepage
        </button>
      </div>

      {/* Redirect message */}
      <p className="text-white mt-4">
        You will be redirected to the homepage in 5 seconds...
      </p>
    </div>
  );
}

export default SuccessPage;
