import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'helloJustynStrings';
import HelloJustyn from './components/HelloJustyn';
import { IHelloJustynProps } from './components/IHelloJustynProps';
import { IHelloJustynWebPartProps } from './IHelloJustynWebPartProps';

export default class HelloJustynWebPart extends BaseClientSideWebPart<IHelloJustynWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHelloJustynProps > = React.createElement(
      HelloJustyn,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
