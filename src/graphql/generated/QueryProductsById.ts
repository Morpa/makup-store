/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProductsById
// ====================================================

export interface QueryProductsById_productById_product_colors {
  __typename: "Colors";
  hex_value: string;
  colour_name: string;
}

export interface QueryProductsById_productById {
  __typename: "Product";
  id: string;
  name: string;
  brand: string;
  price: string | null;
  rating: string | null;
  api_featured_image: string;
  description: string;
  product_colors: (QueryProductsById_productById_product_colors | null)[] | null;
}

export interface QueryProductsById {
  productById: QueryProductsById_productById | null;
}

export interface QueryProductsByIdVariables {
  id: number;
}
