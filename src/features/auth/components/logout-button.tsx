'use client'

import React from 'react'
import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'

interface LogoutButtonProps {
  className?: string
}

export function LogoutButton({ className }: LogoutButtonProps) {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: '/' })}
      className={className || "flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 text-rose-400 font-semibold hover:bg-rose-500/20 transition-colors"}
    >
      <LogOut size={18} />
      <span className="hidden sm:inline">Cerrar Sesión</span>
    </button>
  )
}
