import { DataSourceObjectResponse, PageObjectResponse, PartialDataSourceObjectResponse, PartialPageObjectResponse, QueryDataSourceParameters } from '@notionhq/client'

export type NotionFilter = Extract<NonNullable<QueryDataSourceParameters['filter']>, { and: unknown }>['and']
export type NotionResult = PageObjectResponse | PartialPageObjectResponse | PartialDataSourceObjectResponse | DataSourceObjectResponse