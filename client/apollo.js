import api from 'incredibles'
import apolloClient from 'apollo-client'
import { meteorClientConfig } from 'meteor/apollo'
const client = new apolloClient(meteorClientConfig())

// import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import App from '/imports/ui/App'

api.module( 'app', {path: '/'}, v=>v.id('app', 'ok') )
.onRendered(() => {
    '/'=== document.location.pathname && Meteor.setTimeout((() =>render(
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>, document.getElementById('app'))), 600)
})
