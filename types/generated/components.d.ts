import type { Schema, Struct } from '@strapi/strapi';

export interface SharedArray extends Struct.ComponentSchema {
  collectionName: 'components_shared_arrays';
  info: {
    description: '';
    displayName: 'Array';
    icon: 'hashtag';
    name: 'Array';
  };
  attributes: {
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.array': SharedArray;
    }
  }
}
