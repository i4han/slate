import api        from 'incredibles'
import angular    from 'angular'
import ngMaterial from 'angular-material'
import ngAnimate  from 'angular-animate'
import ngAria     from 'angular-aria'
import ngSanitize from 'angular-sanitize'
import ngMessages from 'angular-messages'
import uiRouter   from 'angular-ui-router'

import ngApollo from 'angular1-apollo'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import gql from 'graphql-tag'

import './imports/presemble.js'
import {DemoCtrl} from './imports/ctrl.js'

let ngModule = angular
.module('main', ['ngSanitize', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'angular-apollo', uiRouter])
.config( function (apolloProvider, $stateProvider, $locationProvider, $urlRouterProvider) { 
    $locationProvider.html5Mode(true)
    apolloProvider.defaultClient(new ApolloClient({
        networkInterface: createNetworkInterface({ uri: 'http://localhost:3001/graphql' })
    }))
    let div
    $stateProvider
        .state('home', {
            url: '/home',
            template: 'I am Home'
        })
        .state('ng', {
            url: '/ng',
            template: `<ui-view></ui-view>`
        })
        .state('ng.item', {
            url: '/:item',
            template: `<div class="{{content}}-content"></div>`,
            // template: `<div id="item-content"></div>`,
            controller: function ($scope, $element, $stateParams) {
                console.log(0, $stateParams.item)
                
                $scope.content = $stateParams.item
                // angular.element(document).injector().invoke(function($compile) {
                //     $compile($element)( $scope )
                // })
            }
            // controller: function ($scope, $stateParams, $compile, $sce) {
            //     console.log(777, $stateParams.item)
            //     $('#item-content').append( $compile(
            //         HTML.toHTML(Blaze.Template[$stateParams.item].renderFunction().value)
            //     )($scope) )
            // }
        })
        .state('list', {
            url: '/list',
            template: 'I am list'
        })
    // $urlRouterProvider.otherwise("/")
})

let mdElements = 'md-autocomplete md-button md-checkbox ng-apollo'.split(' ')
console.log(mdElements)
mdElements.forEach( v =>
    ngModule.directive(api.camelize(v + '-content'), function ($log) {
        console.log(api.camelize(v + '-content'))
        return {
            restrict: 'C',
            // replace: true,
            template: HTML.toHTML(Blaze.Template[v].renderFunction().value)
        }
    })
)



ngModule
.controller('ApolloCtrl', apollo => {
    apollo.query({
        query: gql`
            query test {
                say
            }`
    }).then(result => {
        console.log('got data', result.data)
    })
})
.controller('MainCtrl', $scope => {
    Object.assign($scope, {
        name: 'World',
        text: "<strong>this is html</strong>",
        select: ($event) => {
            // api.getNode('.selected').if(v=> undefined !== v).thenSelf(v=>v.removeClassName('selected'))
            console.log('select', $event.target.innerText)
            // api.getNodeById($event.target.innerText).addClassName('selected')
        }
    })
})
.controller('Select', ['$scope', $scope => console.log($scope)])
.controller('DemoCtrl', DemoCtrl)
.controller('AppCtrl', $scope => {
    $scope.title1 = 'Button'
    $scope.title4 = 'Warn'
    $scope.isDisabled = true
    $scope.googleUrl = 'http://google.com'
})
.controller('checkCtrl', $scope => {
    $scope.data = {}
    $scope.data.cb1 = true
    $scope.data.cb2 = false
    $scope.data.cb3 = false
    $scope.data.cb4 = false
    $scope.data.cb5 = false
})


api.css({
    '#ng-app': {display:'none', padding: 0, margin: 0, width: '100%', 'min-height': '100%'}
})

api.module( 'ng', v=>v.DIV({id:'ng-app', 'ng-app': 'main'}, v=>v.include('yield')) )

api.css({
    '.container': { padding: 0, margin: 0 }
  , '.item': { width: '100%', padding: 20 }
  , '#content > .selected': { display: 'inline' }
  , '#sidebar-button': {
        'text-align':'left'
      , 'text-transform': 'lowercase'
      , 'border-radius':0
      , width:'100%', margin:0, padding:'6px 30px'
    }
})
api.module( 'home', null, v=>v
    .DIV('Home:')
    .DIV({ui_view: ''})
)

api.module( 'md-autocomplete', {layout: 'ng'}, v=>v
    .DIV({id: 'md-autocomplete', class:'item selected'}, v=>v
        .LEGEND('Using <md-autocomplete>')
        .DIV({'ng-controller':'DemoCtrl as ctrl'}, v=>v
            .mdContent({class:'md-padding'}, v=>v
                .FORM({'ng-submit':"$event.preventDefault()"}, v=>v
                    .mdAutocomplete({
                        ng_disabled: "ctrl.isDisabled"
                      , md_no_cache: "ctrl.noCache"
                      , md_selected_item: "ctrl.selectedItem"
                      , md_search_text_change: "ctrl.searchTextChange(ctrl.searchText)"
                      , md_search_text: "ctrl.searchText"
                      , md_selected_item_change: "ctrl.selectedItemChange(item)"
                      , md_items: "item in ctrl.querySearch(ctrl.searchText)"
                      , md_item_text: "item.display"
                      , md_min_length: "0"
                      , pl_ceholder: "What is your favorite US state?" }, v=>v
                        .mdItemTemplate(v=>v // , 'md-highlight-text':'ctrl.searchText','md-highlight-flags':"^i" doesn't work.
                            .SPAN({}, '{{item.display}}')  )
                        .mdNotFound(
                            'No states matching "{{ctrl.searchText}}" were found.', v=>v
                            .A({'ng-click':'ctrl.newState(ctrl.searchText)'}, " Create a new one!")
            )  )  )  )  )
        .DIV({'ng-controller':'DemoCtrl as ctrl', layout:'column', 'ng-cloak':''}, v=>v
            .mdContent({class:'md-padding'}, v=>v
                .FORM({'ng-submit':"$event.preventDefault()", name:'searchForm'}, v=>v
                    .P('The following example demonstrates floating labels being used as a normal form element.')
                    .DIV({'layout-gt-sm':'row'}, v=>v
                        .mdInputContainer({flex:''}, v=>v
                            .LABEL('Name')
                            .INPUT({type:'text'})  )
                        .mdAutocomplete({flex:'', required:''
                          , 'md-input-name':"autocompleteField"
                          , 'md-input-minlength':"2"
                          , 'md-input-maxlength':"18"
                          , 'md-no-cache':"ctrl.noCache"
                          , 'md-selected-item':"ctrl.selectedItem"
                          , 'md-search-text':"ctrl.searchText"
                          , 'md-items':"item in ctrl.querySearch(ctrl.searchText)"
                          , 'md-item-text':"item.display"
                          , 'md-require-match': ''
                          , 'md-floating-label':"Favorite state"
                        }, v=>v
                            .mdItemTemplate(v=>v  //'md-highlight-text':'ctrl.searchText'
                                .SPAN({}, '{{item.display}}')  )
                            .DIV({'ng-messages':"searchForm.autocompleteField.$error", 'ng-if':"searchForm.autocompleteField.$touched"}, v=>v
                                .DIV({'ng-message':'required'}, "You must have a favorite state.")
                                .DIV({'ng-message':'md-require-match'}, "Please select an existing state.")
                                .DIV({'ng-message':'minlength'}, "Your entry is not long enough.")
                                .DIV({'ng-message':'maxlength'}, "Your entry is too long.")

    )  )  )  )  )  )  )
)

api.module( 'ng-apollo', {layout:'ng'}, v=>v
    .DIV({id:'ng-apollo', class:'item', 'ng-controller':'ApolloCtrl'}, v=>v
        .LEGEND('Using <md-button>')
    )
)

api.module( 'md-button', {layout:'ng'}, v=>v
    .DIV({id:'md-button', class:'item', 'ng-controller':'AppCtrl', 'ng-cloak':''}, v=>v
        .LEGEND('Using <md-button>')
        .mdContent(v=>v
            .SECTION({layout:'row', 'layout-sm':'column', 'layout-align':'center center', 'layout-wrap':''}, v=>v
                .mdButton('{{title1}}')
                .mdButton({'md-no-ink':'', class:'md-primary'}, 'Primary (md-no-ink)')
                .mdButton({'ng-disabled':true, class:'md-primary'}, 'Disabled')
                .mdButton({class:'md-warn'}, '{{title4}}')
                .DIV({class:'label'}, 'Flat')  )
            .SECTION({layout:'row', 'layout-sm':'column', 'layout-align':'center center', 'layout-wrap':''}, v=>v
                .mdButton({class:'md-raised'},'Button')
                .mdButton({class:'md-raised md-primary'}, 'Primary')
                .mdButton({'ng-disabled':true, class:'md-raised md-primary'}, 'Disabled')
                .mdButton({class:'md-warn'}, '{{title4}}')
                .DIV({class:'label'}, 'Raised')  )
        )  )
)

api.module( 'md-checkbox', {layout: 'ng'}, v=>v
    .DIV({id:'md-checkbox', class:'item md-padding', 'ng-controller':'checkCtrl', 'ng-cloak':''}, v=>v
        .DIV(v=>v.FIELDSET({class:'standard'},v=>v
            .LEGEND('Using <ng-mode>')
            .DIV({'layout-wrap':'', 'layout-gt-sm':'row'}, v=>v
                .DIV({'flex-gt-sm':'50'}, v=>v.mdCheckbox({'ng-model':'data.cb1', 'aria-label':'Checkbox 1'}, 'Checkbox 1: {{data.cb1}}')  )
                .DIV({'flex-gt-sm':'50'}, v=>v.DIV(v=>v
                    .mdCheckbox({'ng-model':'data.cb2', 'aria-label':"Checkbox 2", class:"md-warn md-align-top-left", flex:''}, "Checkbox 2: (md-warn)", v=>v.BR(), v=>v
                        .SPAN({class:'ipsum'}, 'Duis placerat lectus et justo mollis, nec sodales orci congue. Vestibulum semper non urna ac suscipit. sit amet dapibus tortor ligula non nibh.')
                        .BR()
                      , '{{data.cb2}}')  )  )
                .DIV({'flex-gt-sm':'50'}, v=>v.mdCheckbox({'ng-disabled':true, 'aria-label':"Disabled checkbox", 'ng-model':'data.cb3'}, 'Checkbox: Disabled'))
                .DIV({'flex-gt-sm':'50'}, v=>v.mdCheckbox({'ng-disabled':true, 'aria-label':"Disabled checked checkbox", 'ng-model':'data.cb4', 'ng-init':'data.cb4=true'}, 'Checkbox: Disabled checked'))
                .DIV({'flex-gt-sm':'50'}, v=>v.mdCheckbox({'md-no-ink':'', 'aria-label':"Checkbox No Ink", 'ng-model':'data.cb5', class:'md-primary'}, 'Checkbox: md-primary (no ink)'))
                .DIV({'flex-gt-sm':'50'}, v=>v.mdCheckbox({'md-indeterminate':'', 'aria-label':"Checkbox Indeterminate", class:'md-primary'}, 'Checkbox: Indeterminate'))
                .DIV({'flex-gt-sm':'50'}, v=>v.mdCheckbox({'md-indeterminate':'', 'aria-label':"Checkbox Disabled Indeterminate", 'ng-disabled':true, class:'md-primary'}, 'Checkbox: Disabled, Indeterminate'))
            )  ))  )
)

            // Blaze.Template[v.innerText].renderFunction().value

//
// main
//

api.module( 'ngMain', {path: '/ng', layout: 'ng'}, v=>v
    .mdToolbar(v=>v.H2({style:'padding: 15px; margin: 0'}, 'Angular Material Demo'))
    .DIV({class:'container', 'ng-controller': 'MainCtrl', layout:'row', flex:''}, v=>v
        .mdSidenav({'md-is-locked-open':true, class:'md-whiteframe-4dp', flex:''}, v=>v
            .mdList(v=>v
                .for(mdElements, (v,name)=>v
                    .mdListItem({style: 'padding: 0'}, v=>v
                        .mdButton({
                            id:'sidebar-button', 
                            ng_href: '/ng/' + name,
                            ng_click: 'select($event)'}, name))  )
            )  )
        .mdContent({id:'content', flex:'', layout:'column'}, v=>v
            .DIV({'ui-view': ''})
            // .include('md-autocomplete')
            // .include('md-button')
            // .include('md-checkbox')
            // .include('ng-apollo')
        )
    )  )
.onRendered( o=> () => {
    // Meteor.setTimeout((()=> {
    // }), 0)
})


