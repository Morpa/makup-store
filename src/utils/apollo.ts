import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { useMemo } from 'react'

import apolloCache from './apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: process.env.NEXT_PUBLIC_API_URL }),
    cache: apolloCache
  })
}

export function initializeApollo(initialState = null) {
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  if (typeof window === 'undefined') return apolloClientGlobal

  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
