import * as React from 'react'
import '../index.css'

export interface HelloProps {
  compiler: string
  framework: string
}

export const Hello = (props: HelloProps) => (
  <h1 className="custom-header">
    Hello from {props.compiler} and {props.framework}!
  </h1>
)
