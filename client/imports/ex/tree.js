
import angular from 'angular'


export let template = (
    "<div ng-controller=\"MainCtrl as main\">\n    <tree val=\"main.tree\"></tree>\n</div>"  
)

let withChildren = (
    "<div>\n    <span>{{ val.text }}</span>\n    <button ng-click=\"deleteSubtree()\">delete</button>\n    <ul ng-if=\"hasChilren\" style=\"margin-left:10px\">\n        <li ng-repeat=\"item in val.items\">\n            <tree val=\"item\" children=\"val.items\"></tree>\n        </li>\n    </ul>\n</div>"
)

angular.module( 'app', [])
.service('Data', function () {
    this.tree = {
        text: 'Primates',
        items: [
            {
                text: 'Anthropoidea',
                items: [
                    { text: 'New World Anthropoids' },
                    {
                        text: 'Old World Anthropoids',
                        items: [
                            {
                                text: 'Apes',
                                items: [
                                    { text: 'Lesser Apes' },
                                    { text: 'Greater Apes' }
                                ]
                            },
                            { text: 'Monkeys' }
                        ]
                    }
                ]
            },
            { text: 'Prosimii' }
        ]
    }
}) 
.controller('MainCtrl', function (Data) {
    this.tree = Data.tree
    console.log('main controller', Data)
})
.directive('tree', function ($compile) {
    console.log('create directive.')
    return {
        restrict: 'E',
        scope: {
            val: '=', // or '@' for {{}}
            children: '='
        },
        link: function(scope, element, attrs) {
            console.log(1, element)
            scope.hasChilren = angular.isArray(scope.val.items)
            scope.deleteSubtree = function() {
                if(scope.children) 
                    scope.children.splice( scope.children.indexOf(scope.val), 1 )
                scope.val={}
            }   
            element.replaceWith(
                $compile( withChildren )(scope)
            )
        }
    }
})
