import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { PropsWithChildren } from 'react'

function render(ui: React.ReactElement, renderOptions?: RenderOptions) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return (
      <Router>
        <>{children}</>
      </Router>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }
