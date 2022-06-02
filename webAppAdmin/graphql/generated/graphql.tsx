import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['ID'];
  orderIds: Array<Maybe<Order>>;
  userId: User;
};

export type CartInput = {
  orderIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  userId: Scalars['ID'];
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Menu = {
  __typename?: 'Menu';
  id: Scalars['ID'];
  name: Scalars['String'];
  productIds?: Maybe<Array<Maybe<Product>>>;
};

export type MenuInput = {
  name: Scalars['String'];
  productIds: Array<InputMaybe<Scalars['ID']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addOrderToOrder?: Maybe<Order>;
  addViewed?: Maybe<Product>;
  createCart?: Maybe<Cart>;
  createMenu?: Maybe<Menu>;
  createOrder?: Maybe<Order>;
  createProduct?: Maybe<Product>;
  deleteMenu?: Maybe<Menu>;
  deleteProduct?: Maybe<Product>;
  login?: Maybe<User>;
  register?: Maybe<User>;
  updateMenu?: Maybe<Menu>;
  updateOrder?: Maybe<Order>;
  updateProduct?: Maybe<Product>;
};


export type MutationAddOrderToOrderArgs = {
  input?: InputMaybe<OrderInput>;
};


export type MutationAddViewedArgs = {
  id: Scalars['ID'];
};


export type MutationCreateCartArgs = {
  input?: InputMaybe<CartInput>;
};


export type MutationCreateMenuArgs = {
  input?: InputMaybe<MenuInput>;
};


export type MutationCreateOrderArgs = {
  input?: InputMaybe<OrderInput>;
};


export type MutationCreateProductArgs = {
  input?: InputMaybe<ProductInput>;
};


export type MutationDeleteMenuArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationRegisterArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationUpdateMenuArgs = {
  input?: InputMaybe<MenuInput>;
};


export type MutationUpdateOrderArgs = {
  input?: InputMaybe<OrderInput>;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<ProductInput>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  productId: Product;
  quantity: Scalars['String'];
  userId: User;
};

export type OrderInput = {
  productId?: InputMaybe<Scalars['ID']>;
  quantity?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type Product = {
  __typename?: 'Product';
  createdAt: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  price: Scalars['String'];
  status: Scalars['String'];
};

export type ProductInput = {
  description: Scalars['String'];
  image: Array<InputMaybe<Scalars['String']>>;
  name: Scalars['String'];
  price: Scalars['String'];
};

export type ProductStoreInput = {
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Query = {
  __typename?: 'Query';
  getAllCarts?: Maybe<Array<Maybe<Cart>>>;
  getAllMenu?: Maybe<Array<Maybe<Menu>>>;
  getAllOrders?: Maybe<Array<Maybe<Order>>>;
  getAllProducts?: Maybe<Array<Maybe<Product>>>;
  getAllProductsWithPagination?: Maybe<Array<Maybe<Product>>>;
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getCartById?: Maybe<Cart>;
  getLastCartByUserId?: Maybe<Cart>;
  getLastOrderByUserId?: Maybe<Order>;
  getMenuById?: Maybe<Menu>;
  getOrderById?: Maybe<Order>;
  getProductById?: Maybe<Product>;
  getProductByUuid?: Maybe<Product>;
  getUserById?: Maybe<User>;
  hello?: Maybe<Scalars['String']>;
};


export type QueryGetAllProductsWithPaginationArgs = {
  inputs?: InputMaybe<Pagination>;
};


export type QueryGetCartByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetLastCartByUserIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetLastOrderByUserIdArgs = {
  userId: Scalars['ID'];
};


export type QueryGetMenuByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetOrderByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductByUuidArgs = {
  uuid: Scalars['String'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID'];
};

export enum Role {
  Seller = 'SELLER',
  User = 'USER'
}

export type Subscription = {
  __typename?: 'Subscription';
  productAdded?: Maybe<Product>;
  productDeleted?: Maybe<Product>;
  productUpdated?: Maybe<Product>;
  productViewed?: Maybe<Product>;
  userAdded?: Maybe<User>;
  userDeleted?: Maybe<User>;
  userLoggedIn?: Maybe<User>;
  userUpdated?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  role: Role;
  token: Scalars['String'];
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
};

export type Pagination = {
  cursor?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type CreateMenuMutationVariables = Exact<{
  input?: InputMaybe<MenuInput>;
}>;


export type CreateMenuMutation = { __typename?: 'Mutation', createMenu?: { __typename?: 'Menu', id: string, name: string, productIds?: Array<{ __typename?: 'Product', id: string, image: Array<string | null>, name: string } | null> | null } | null };

export type CreateProductMutationVariables = Exact<{
  input?: InputMaybe<ProductInput>;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct?: { __typename?: 'Product', name: string, description: string, image: Array<string | null>, price: string } | null };

export type GetAllMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMenuQuery = { __typename?: 'Query', getAllMenu?: Array<{ __typename?: 'Menu', id: string, name: string, productIds?: Array<{ __typename?: 'Product', id: string, name: string, image: Array<string | null> } | null> | null } | null> | null };

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductsQuery = { __typename?: 'Query', getAllProducts?: Array<{ __typename?: 'Product', id: string, name: string, description: string, image: Array<string | null>, price: string, status: string, createdAt: string } | null> | null };


export const CreateMenuDocument = gql`
    mutation CreateMenu($input: MenuInput) {
  createMenu(input: $input) {
    id
    name
    productIds {
      id
      image
      name
    }
  }
}
    `;
export type CreateMenuMutationFn = Apollo.MutationFunction<CreateMenuMutation, CreateMenuMutationVariables>;

/**
 * __useCreateMenuMutation__
 *
 * To run a mutation, you first call `useCreateMenuMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMenuMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMenuMutation, { data, loading, error }] = useCreateMenuMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMenuMutation(baseOptions?: Apollo.MutationHookOptions<CreateMenuMutation, CreateMenuMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMenuMutation, CreateMenuMutationVariables>(CreateMenuDocument, options);
      }
export type CreateMenuMutationHookResult = ReturnType<typeof useCreateMenuMutation>;
export type CreateMenuMutationResult = Apollo.MutationResult<CreateMenuMutation>;
export type CreateMenuMutationOptions = Apollo.BaseMutationOptions<CreateMenuMutation, CreateMenuMutationVariables>;
export const CreateProductDocument = gql`
    mutation createProduct($input: ProductInput) {
  createProduct(input: $input) {
    name
    description
    image
    price
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const GetAllMenuDocument = gql`
    query getAllMenu {
  getAllMenu {
    id
    name
    productIds {
      id
      name
      image
    }
  }
}
    `;

/**
 * __useGetAllMenuQuery__
 *
 * To run a query within a React component, call `useGetAllMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMenuQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMenuQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMenuQuery, GetAllMenuQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMenuQuery, GetAllMenuQueryVariables>(GetAllMenuDocument, options);
      }
export function useGetAllMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMenuQuery, GetAllMenuQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMenuQuery, GetAllMenuQueryVariables>(GetAllMenuDocument, options);
        }
export type GetAllMenuQueryHookResult = ReturnType<typeof useGetAllMenuQuery>;
export type GetAllMenuLazyQueryHookResult = ReturnType<typeof useGetAllMenuLazyQuery>;
export type GetAllMenuQueryResult = Apollo.QueryResult<GetAllMenuQuery, GetAllMenuQueryVariables>;
export const GetAllProductsDocument = gql`
    query getAllProducts {
  getAllProducts {
    id
    name
    description
    image
    price
    status
    createdAt
  }
}
    `;

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
      }
export function useGetAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
        }
export type GetAllProductsQueryHookResult = ReturnType<typeof useGetAllProductsQuery>;
export type GetAllProductsLazyQueryHookResult = ReturnType<typeof useGetAllProductsLazyQuery>;
export type GetAllProductsQueryResult = Apollo.QueryResult<GetAllProductsQuery, GetAllProductsQueryVariables>;