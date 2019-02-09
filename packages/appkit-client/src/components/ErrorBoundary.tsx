import * as React from 'react'
import { observable, runInAction } from 'mobx'

export class ErrorBoundary extends React.Component {
  @observable hasError: boolean = false
  @observable errorMessage: string = ''

  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    runInAction(() => {
      this.hasError = true
      this.errorMessage = `React encountered an error
    ${error.toString()}
    ${info.componentStack}
    `
    })
  }

  render() {
    if (this.hasError) {
      return <p>{this.errorMessage}</p>
    }

    return this.props.children
  }
}
