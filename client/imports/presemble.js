import api from 'incredibles'

Router.configure({
    layoutTemplate: 'app'
})

Router.route( '/home', 
    function () { this.render('ngMain') }) 
Router.route( '/ng/:items', 
    function () { this.render('ngMain') }) 

$(window).load( () => {       
    api.getNode("head").appendChild( api.createNode('base').add({ href: "/" }) )
    angular.bootstrap(document, ['main'])
    api.getNode('#ng-app').setAttribute('style', 'display: flex')
    console.log('window load')
})
