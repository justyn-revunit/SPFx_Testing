import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'helloPaladinoStrings';
import HelloPaladino from './components/HelloPaladino';
import { IHelloPaladinoProps } from './components/IHelloPaladinoProps';
import { IHelloPaladinoWebPartProps } from './IHelloPaladinoWebPartProps';

export default class HelloPaladinoWebPart extends BaseClientSideWebPart<IHelloPaladinoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHelloPaladinoProps > = React.createElement(
      HelloPaladino,
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
