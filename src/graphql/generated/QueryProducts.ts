/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProducts
// ====================================================

export interface QueryProducts_products_product {
  __typename: "Product";
  id: number;
  name: string;
  brand: string;
  price: string | null;
  rating: string | null;
  api_featured_image: string;
}

export interface QueryProducts_products {
  __typename: "ProductConnection";
  product: QueryProducts_products_product[];
}

export interface QueryProducts {
  products: QueryProducts_products;
}

export interface QueryProductsVariables {
  limit?: number | null;
  offset?: number | null;
  productType?: string | null;
}
