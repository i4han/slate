import angular from 'angular'
import HTML from 'htmlable'


export let template = (
    "<div ng-controller=\"MainCtrl as main\">\n    <div>hello</div>\n    \n    <input ng-model=\"main.name\"/>\n    <button ng-click=\"main.click(main.name)\">ok</button> <br/>\n    Bind update: <span ng-bind=\"main.name\"></span><br/>\n    Bind submit: <span ng-bind=\"main.submittedName\"></span><br/>\n    Bind once: <span ng-bind=\"::main.name\"></span><br/>\n    Interpolate: <span>{{main.message}}</span><br/>  \n    Word: <span ng-bind=\"main.word\"></span><br/>\n    <button ng-click=\"main.show = !main.show\">peek</button><br/>\n    Show: <span ng-show=\"main.show\">Can you see me?</span>\n    <hr/>\n    <input ng-model=\"type\"/>\n    <div ng-class=\"type\">Look! Give me a class.</div><br/>\n    <div ng-class=\"[type, main.class]\">Look! Give me a class please.</div><br/>\n    <div ng-class=\"{red: true, green: main.classOps}\">Look! Give me some class please.</div><br/>\n\n    <div ng-repeat=\"note in main.notes\">\n        <span ng-class=\"$even ? 'red' : 'green'\" ng-bind=\"note.label\"></span>\n        <span class=\"status\" ng-bind=\"note.done\"></span>\n    </div>\n    <hr/>\n    <hr/>\n    <h1 ng-style=\"main.style\">Style</h1>\n</div>"
)


angular.module('app', []).controller('MainCtrl', function($scope) {
    this.message = 'Hello from controller.'
    this.word = "There is a word for you."
    this.classOps = true
    this.notes = [
        { id: 1, label: 'First Note', done: false },
        { id: 2, label: 'Second Note', done: false },
        { id: 3, label: 'Third Note', done: true },
        { id: 4, label: 'Last Note', done: false },
    ]
    this.click = ($event) => {
        this.submittedName = this.name
        console.log( 'click')
    }
    this.style = {
        color: 'blue'
    }
    // (function ($scope) {
        Meteor.setTimeout( () => {
            console.log($scope)
            $scope.$appy( () => {
                this.notes = [
                { id: 1, label: 'First word', done: false },
                { id: 2, label: 'Second word', done: false },
                { id: 3, label: 'Third word', done: true },
                ]
            })
        }, 5000)
    // })($scope)
    console.log( 'main controller:', this, $scope )
})
    

    
    
    
    
    
    