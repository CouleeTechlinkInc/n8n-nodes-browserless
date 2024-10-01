/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodePropertyOptions } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

import { properties as rawProperties } from './properties'
import { runHooks } from './hooks'

export const name = 'Chromium Screenshot'

const rawOption: INodePropertyOptions = {
  name: 'Chromium Screenshot',
  value: 'Chromium Screenshot',
  action: 'Chromium Screenshot',
  description:
    'A JSON-based API for getting a screenshot binary from either a supplied\n"url" or "html" payload in your request. Many options exist including\ncookies, user-agents, setting timers and network mocks',
  routing: {
    request: {
      method: 'POST',
      url: '=/screenshot /chromium/screenshot',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }