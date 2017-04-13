declare interface IHelloPaladinoStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'helloPaladinoStrings' {
  const strings: IHelloPaladinoStrings;
  export = strings;
}
