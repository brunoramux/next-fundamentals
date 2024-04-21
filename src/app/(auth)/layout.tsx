import React, { ReactNode } from 'react'

export default function Auth({ children }: { children: ReactNode }) {
  return (
    <div>
      <p>Authenticate</p>
      <div>{children}</div>
    </div>
  )
}
