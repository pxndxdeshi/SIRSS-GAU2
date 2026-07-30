'use client'

import React from 'react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { Leaf, LogOut } from 'lucide-react'

export function CitizenLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800 dark:bg-zinc-950 dark:text-zinc-50">
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md z-50 shadow-sm border-b border-slate-200 dark:border-zinc-800">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-tr from-[#86efac] to-[#7dd3fc] p-2 rounded-xl text-slate-900">
                <Leaf size={24} />
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">CleanCity</span>
            </Link>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => signOut({ callbackUrl: '/' })}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 font-semibold hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-colors"
              >
                <LogOut size={18} />
                <span className="hidden sm:inline">Cerrar Sesión</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-24 pb-12">
        {children}
      </main>
    </div>
  )
}
