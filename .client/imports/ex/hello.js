import angular from 'angular'
import HTML from 'htmlable'


export let template = (
    <div ng-controller="MainCtrl as main">
        <div>hello</div>
        
        <input ng-model="main.name"/>
        <button ng-click="main.click(main.name)">ok</button> <br/>
        Bind update: <span ng-bind="main.name"></span><br/>
        Bind submit: <span ng-bind="main.submittedName"></span><br/>
        Bind once: <span ng-bind="::main.name"></span><br/>
        Interpolate: <span>{{main.message}}</span><br/>  
        Word: <span ng-bind="main.word"></span><br/>
        <button ng-click="main.show = !main.show">peek</button><br/>
        Show: <span ng-show="main.show">Can you see me?</span>
        <hr/>
        <input ng-model="type"/>
        <div ng-class="type">Look! Give me a class.</div><br/>
        <div ng-class="[type, main.class]">Look! Give me a class please.</div><br/>
        <div ng-class="{red: true, green: main.classOps}">Look! Give me some class please.</div><br/>

        <div ng-repeat="note in main.notes">
            <span ng-class="$even ? 'red' : 'green'" ng-bind="note.label"></span>
            <span class="status" ng-bind="note.done"></span>
        </div>
        <hr/>
        <hr/>
        <h1 ng-style="main.style">Style</h1>
    </div>
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
    

    
    
    
    
    
    