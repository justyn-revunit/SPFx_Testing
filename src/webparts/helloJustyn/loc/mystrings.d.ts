declare interface IHelloJustynStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'helloJustynStrings' {
  const strings: IHelloJustynStrings;
  export = strings;
}
