// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// export default function CancelPage() {
//   const [countdown, setCountdown] = useState(5);
//   const router = useRouter();

//   useEffect(() => {
//     // Shake animation
//     const el = document.getElementById("error-icon");
//     if (el) {
//       el.classList.add("animate-shake");
//       setTimeout(() => el.classList.remove("animate-shake"), 600);
//     }

//     // Countdown + auto-redirect
//     const timer = setInterval(() => {
//       setCountdown((prev) => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           router.push("/checkout"); // redirect to checkout
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [router]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
//       <div
//         id="error-icon"
//         className="w-20 h-20 flex items-center justify-center bg-red-600 rounded-full text-4xl font-bold"
//       >
//         ❌
//       </div>

//       <h1 className="text-3xl font-bold text-red-500 mt-4">Payment Failed</h1>
//       <p className="text-gray-400 mt-2">
//         Something went wrong with your payment. Please try again.
//       </p>

//       <a
//         href="/checkout"
//         className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-500 rounded-lg text-white font-semibold"
//       >
//         Try Again
//       </a>

//       <p className="mt-4 text-sm text-gray-500">
//         Redirecting in <span className="font-semibold">{countdown}</span> seconds...
//       </p>
//     </div>
//   );
// }



import React from 'react'

const index = () => {
    return (
        <div className='flex items-center justify-center bg-red-800 min-h-screen'>This is for showing all products...</div>
    )
}

export default index