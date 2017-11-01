import api from 'incredibles'
import angular from 'angular'
import uiRouter from 'angular-ui-router'
import HTML from 'htmlable'

switch (2) {

    case 0:
        // production
        import './imports/material'
        import './imports/slate'
        break
    case 1:
        // angularjs
        // import { template } from './imports/ex/tree'
        import { template } from './imports/ex/hello'
        // console.log('test started.', template)
        Router.route('/', function() {
            console.log('in the route.')
            this.render('ex')
        })

        angular.element(document).ready( () => {
            Meteor.setTimeout( () => {
                angular.bootstrap(document, ['app'])
                console.log('window is loaded.')
            }, 0)
        })

        api.module( 'ex', {}, v=>v .raw( template ) )
        break    
    case 2:
        // localhost:3000/app
        // react
        // import { startup } from './imports/react/apollo'
        import { startup } from './imports/react/redux'
        angular.element(document).ready( () => {
            Meteor.setTimeout( () => {
                angular.bootstrap(document, ['app'])
                console.log('starting up.')
                startup()
                console.log('window is loaded.')
            }, 0)
        })
        const name = 'app'
        angular.module(name, [])
        api.module( name, {path: name}, v=>v.id(name, '') )
}
