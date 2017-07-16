import api from 'incredibles'
import angular from 'angular'
import uiRouter from 'angular-ui-router'
import HTML from 'htmlable'

if (0) {

    import './imports/material'
    import './imports/slate'

} else {

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
}
