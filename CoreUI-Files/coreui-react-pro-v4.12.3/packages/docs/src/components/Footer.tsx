import React, { FC } from 'react'

import { CContainer, CFooter } from '@coreui/react-pro/src/index'

// @ts-expect-error json file
import pkg from './../../package.json'

const Footer: FC = () => {
  return (
    <CFooter className="docs-footer p-3 p-md-5 mt-5 text-center text-sm-start">
      <CContainer>
        <ul className="docs-footer-links ps-0 mb-3">
          <li className="d-inline-block">
            <a href="https://github.com/coreui">GitHub</a>
          </li>
          <li className="d-inline-block ms-3">
            <a href="https://twitter.com/core_ui">Twitter</a>
          </li>
          <li className="d-inline-block ms-3 ps-3 border-start border-2">
            <a href="https://coreui.io/">CoreUI (Vanilla)</a>
          </li>
          <li className="d-inline-block ms-3">
            <a href="https://coreui.io/angular/">CoreUI for Angular</a>
          </li>
          <li className="d-inline-block ms-3">
            <a href="https://coreui.io/vue/">CoreUI for Vue.js</a>
          </li>
        </ul>
        <p className="mb-0">CoreUI for React is Open Source UI Components Library for React.js.</p>
        <p className="mb-0">
          CoreUI code licensed{' '}
          <a
            href="https://github.com/coreui/coreui/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
          >
            MIT
          </a>
          , docs{' '}
          <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noreferrer">
            CC BY 3.0
          </a>
          .{' '}
          <strong>
            {' '}
            CoreUI PRO requires a{' '}
            <a href="https://coreui.io/pricing/?framework=react&docs=footer">commercial license</a>.
          </strong>
        </p>
      </CContainer>
    </CFooter>
  )
}

Footer.displayName = 'Footer'

export default Footer
