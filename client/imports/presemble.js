import api from 'incredibles'

Router.configure({
    layoutTemplate: 'ng'
})

Router.route( '/home', function () { this.render('home') }) 
Router.route( '/ng/:items', function () { this.render('ngMain') }) 

$(window).load( () => {       
    api.getNode("head").appendChild( api.createNode('base').add({ href: "/" }) )
    angular.bootstrap(document, ['main'])
    api.getNode('#ng-app').setAttribute('style', 'display:inline')
    console.log('window load')
})
