/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import Router from './router'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <Router />, document.getElementById('root')!)
