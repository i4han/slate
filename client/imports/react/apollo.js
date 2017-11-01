
import angular from 'angular'
import api from 'incredibles'
import apolloClient, { createNetworkInterface } from 'apollo-client'
import { meteorClientConfig } from 'meteor/apollo'
import { render } from 'react-dom'
import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import App from '/imports/ui/App'
import expect from 'expect'

const client = new apolloClient(
  Object.assign({}, meteorClientConfig(), {
    networkInterface: createNetworkInterface({ 
      uri: 'http://localhost:3001/graphql' 
    }) 
  })  
) // network


export const startup = () => {
  render(
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>, document.getElementById('app')
  )
}

