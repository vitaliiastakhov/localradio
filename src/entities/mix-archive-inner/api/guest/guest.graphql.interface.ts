import type * as Types from '@/shared/api/graphql/__generated__/schema.graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export type GuestsQueryVariables = Types.Exact<{
  filters?: Types.InputMaybe<Types.GuestFiltersInput>;
  limit?: Types.Scalars['Int']['input'];
  start?: Types.Scalars['Int']['input'];
}>;

export interface GuestsQuery {
  __typename?: 'Query';
  guests?: {
    __typename?: 'GuestEntityResponseCollection';
    data: Array<{
      __typename?: 'GuestEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Guest';
        name: string;
        slug?: string | null;
        descriptionRu?: string | null;
        descriptionEn?: string | null;
        mixes?: {
          __typename?: 'MixRelationResponseCollection';
          data: Array<{
            __typename?: 'MixEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Mix';
              date: any;
              slug?: string | null;
            } | null;
          }>;
        } | null;
        socials?: {
          __typename?: 'ComponentLinksToSocialsLinksToSocials';
          id: string;
          SCLink?: string | null;
          VKLink?: string | null;
          TGLink?: string | null;
          IGLink?: string | null;
          BCLink?: string | null;
        } | null;
        image?: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              width?: number | null;
              height?: number | null;
              formats?: any | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
    meta: {
      __typename?: 'ResponseCollectionMeta';
      pagination: { __typename?: 'Pagination'; total: number };
    };
  } | null;
}

export const GuestsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Guests' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filters' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'GuestFiltersInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
          defaultValue: { kind: 'IntValue', value: '12' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'start' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'guests' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filters' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'StringValue', value: 'name:asc', block: false },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'limit' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'start' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'start' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attributes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'mixes' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'sort' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'date:desc',
                                    block: false,
                                  },
                                },
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'pagination' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: 'limit' },
                                        value: {
                                          kind: 'IntValue',
                                          value: '-1',
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'data' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'attributes',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'date',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'slug',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'socials' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'SCLink' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'VKLink' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'TGLink' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'IGLink' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'BCLink' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'descriptionRu' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'descriptionEn' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'data' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'FragmentSpread',
                                          name: {
                                            kind: 'Name',
                                            value: 'Image',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'meta' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pagination' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'total' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UploadFileEntity' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attributes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                { kind: 'Field', name: { kind: 'Name', value: 'formats' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GuestsQuery, GuestsQueryVariables>;