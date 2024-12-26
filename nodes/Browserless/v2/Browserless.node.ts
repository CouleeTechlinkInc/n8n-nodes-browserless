import {
  INodeType,
  INodeTypeBaseDescription,
  INodeTypeDescription,
  NodeConnectionType,
} from 'n8n-workflow'

import { properties } from './Browserless.properties'
import { methods } from './Browserless.methods'

export class Browserless implements INodeType {
  description: INodeTypeDescription

  methods = methods

  constructor (baseDescription: INodeTypeBaseDescription) {
    this.description = {
      ...baseDescription,
      displayName: 'CT Browserless',
      name: 'ctBrowserless',
      icon: 'file:browserless.svg',
      group: ['transform'],
      version: 2,
      subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
      description: 'Browserless API',
      defaults: {
        name: 'Browserless',
      },
      inputs: [{
        type: NodeConnectionType.Main,
        required: true,
      }],
      outputs: [{
        type: NodeConnectionType.Main,
        required: true,
      }],
      credentials: [
        {
          displayName: 'CT Browserless API',
          name: 'ctBrowserlessApi',
          required: true,
        },
      ],
      requestDefaults: {
        headers: {
          'Content-Type': 'application/json',
        },
        baseURL: '={{$credentials.url}}',
      },

      properties,
    }
  }
}
