import angular from 'angular'

//* Template

export let template = (
    "<div ng-controller=\"MainCtrl as main\">\n    <div>hello</div>        \n    <input ng-model=\"main.name\"/>\n    <button ng-click=\"main.click(main.name)\">ok</button> <br/>\n    Bind update: <span ng-bind=\"main.name\"></span><br/>\n\n    \n    Bind submit: <span ng-bind=\"main.submittedName\"></span><br/>\n    Bind once: <span ng-bind=\"::main.name\"></span><br/>\n    Interpolate: <span>{{main.message}}</span><br/>  \n    Word: <span ng-bind=\"main.word\"></span><br/>\n    <button ng-click=\"main.show = !main.show\">peek</button><br/>\n    Show: <span ng-show=\"main.show\">Can you see me?</span>\n    <hr/>\n\n    \n    <input ng-model=\"type\"/>\n    <div ng-class=\"type\">Look! Give me a class.</div><br/>\n    <div ng-class=\"[type, main.class]\">Look! Give me a class please.</div><br/>\n    <div ng-class=\"{red: true, green: main.classOps}\">Look! Give me some class please.</div><br/>\n\n    \n    <div ng-repeat=\"note in main.notes\">\n        <span ng-class=\"$even ? 'red' : 'green'\" ng-bind=\"note.label\"></span>\n        <span class=\"status\" ng-bind=\"note.done\"></span>\n    </div>\n    <hr/>\n    <div> Amount as a number: {{main.amount | number}} </div>\n    <div> Total Cost as a currency: {{main.cost | currency}} </div>\n    <div> Total Cost in INR: {{main.cost | currency: 'INR'}} </div>\n    <div> Print the name: {{main.name}} </div>\n    <div> Shouting the name: {{main.name | uppercase}} </div>\n    <div> Say the name: {{main.name | lowercase}} </div>\n    <div> Start the time: {{main.time | date: 'medium'}} </div>\n    <div> Start the time: {{main.time | date: 'M/dd, yyyy'}} </div>\n    <div> Object to json: {{main.json | json}} </div>\n    <div> Add world: {{main.name | addworld}} </div>\n    <h1 ng-style=\"main.style\">Style</h1>\n</div>"
)


angular.module('app', [])
.controller('MainCtrl', function($scope) {
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
    this.name = 'Isaac Han'
    this.amout = 1024
    this.cost = 12343822
    this.time = new Date()
    this.json = { name: 'Isaac', word: 'Hello'}

    // (function ($scope) {
        Meteor.setTimeout( () => {
            console.log($scope)
            // $scope.$appy( () => {
            //     this.notes = [
            //         { id: 1, label: 'First word', done: false },
            //         { id: 2, label: 'Second word', done: false },
            //         { id: 3, label: 'Third word', done: true },
            //     ]
            // })
        }, 5000)
    // })($scope)
    console.log( 'main controller:', this, $scope )
})
.filter('addworld', function () {
    return function(str) {
        return str + ' world'
    }
})
    

    
    
    
    
    
    