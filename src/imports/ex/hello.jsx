import angular from 'angular'

//* Template

export let template = (
    <div ng-controller="MainCtrl as main">
        <div>hello</div>        
        <input ng-model="main.name"/>
        <button ng-click="main.click(main.name)">ok</button> <br/>
        Bind update: <span ng-bind="main.name"></span><br/>

        {/** @desc ng-bind */}
        Bind submit: <span ng-bind="main.submittedName"></span><br/>
        Bind once: <span ng-bind="::main.name"></span><br/>
        Interpolate: <span>{{main.message}}</span><br/>  
        Word: <span ng-bind="main.word"></span><br/>
        <button ng-click="main.show = !main.show">peek</button><br/>
        Show: <span ng-show="main.show">Can you see me?</span>
        <hr/>

        {/** @desc ng-class */}
        <input ng-model="type"/>
        <div ng-class="type">Look! Give me a class.</div><br/>
        <div ng-class="[type, main.class]">Look! Give me a class please.</div><br/>
        <div ng-class="{red: true, green: main.classOps}">Look! Give me some class please.</div><br/>

        {/** @desc ng-repeat */}
        <div ng-repeat="note in main.notes">
            <span ng-class="$even ? 'red' : 'green'" ng-bind="note.label"></span>
            <span class="status" ng-bind="note.done"></span>
        </div>
        <hr/>
        <div> Amount as a number: {{main.amount | number}} </div>
        <div> Total Cost as a currency: {{main.cost | currency}} </div>
        <div> Total Cost in INR: {{main.cost | currency: 'INR'}} </div>
        <div> Print the name: {{main.name}} </div>
        <div> Shouting the name: {{main.name | uppercase}} </div>
        <div> Say the name: {{main.name | lowercase}} </div>
        <div> Start the time: {{main.time | date: 'medium'}} </div>
        <div> Start the time: {{main.time | date: 'M/dd, yyyy'}} </div>
        <div> Object to json: {{main.json | json}} </div>
        <div> Add world: {{main.name | addworld}} </div>
        <h1 ng-style="main.style">Style</h1>
    </div>
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
    

    
    
    
    
    
    