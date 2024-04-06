"use client"
import { signOut } from "next-auth/react";

export const ButtonSignOut = () => {
  return <button className="border-slate-200 bg-white hover:bg-slate-100 shadow px-4 py-2 border rounded font-semibold text-slate-800" onClick={() => signOut( { callbackUrl: "/login" } )}>Cerrar Sesión</button>;
}