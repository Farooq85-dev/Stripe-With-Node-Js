import { useNavigate } from "react-router-dom";

function CancelPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Cancel Icon */}
        <div className="flex justify-center items-center bg-red-500 w-16 h-16 rounded-full mx-auto mb-4">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* Cancel Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Cancelled
        </h1>
        <p className="text-gray-600 mb-6">
          Unfortunately, your payment was not completed. Please try again or
          contact support if you have any issues.
        </p>

        {/* Button to go back to homepage */}
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-red-700 transition duration-300 ease-in-out"
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
}

export default CancelPage;
