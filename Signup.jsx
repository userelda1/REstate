import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Signup = () => {
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center min-h-screen bg-blue-300 pt-20">

        <div className="bg-white p-8 rounded shadow-md w-[400px]">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Create an Account
          </h2>

          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 mb-4 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-4 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-6 rounded"
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Sign Up
          </button>

        </div>

      </div>

      <Footer />
    </>
  )
}

export default Signup