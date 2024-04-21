import React, { ReactNode } from 'react'

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div>
      <p>Admin</p>
      <div>{children}</div>
    </div>
  )
}
