"use client"

import { signIn } from "next-auth/react"

 const page = () => {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={ async() => await signIn("github",{redirect: false , callbackUrl: "/dashboard"})} className="border-slate-200 bg-white hover:bg-slate-100 shadow px-4 py-2 border rounded font-semibold text-slate-800" >
        Accede a tu cuenta
      </button>
    </div>
  )
}

export default page