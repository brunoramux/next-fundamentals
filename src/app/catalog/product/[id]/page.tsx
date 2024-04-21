import React from 'react'

export interface PageProps {
  params: {
    id: number
  }
}
export default function Product({ params }: PageProps) {
  return <h1>{params.id}</h1>
}
