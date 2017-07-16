import api from 'incredibles'

api.define( 'navbar', (v, f)=>v
    .class( 'navbar navbar-primary navbar-fixed-top', v=>v
        .class( 'container', v=>v
            .DIV( {class:'collapse navbar-collapse', id:'ba-example-navbar-collapse-1'}, v=>v
                .UL( {class: 'nav navbar-nav'}, f )  )  )  )  )

api.define( 'menuHeader', (v, name) => v
    .class('navbar-header', v=>v
        .class('navbar-text', v=>v.B(name)) ) )

api.define( 'menu', (v, menu, link) => v 
    .LI( v=>v.A( {href: link, class: 'ok', ng_click: 'reload()'}, menu ) ) )

api.define( 'attrMenu', (v, attr, menu )=>v 
    .LI( v=>v.A( attr, menu ) ) )
    
api.define( 'dropdown', (v, name, subMenu)=>v
    .LI( {class:'dropdown'}, v=>v       //  role:'button', 'aria-expanded':'false'
        .A( {href:'#', class:'dropdown-toggle', 'data-toggle':'dropdown', 'aria-haspopup':'true'}, name, v=>v
            .SPAN( {class:'caret'} )  )
        .UL( {class:'dropdown-menu'}, subMenu )  )  )
        
api.define( 'divider', v=>v
    .LI( {role:'seperator', class:'divider'} ) )

let addPx = (a, n) => undefined === n ? a.map(v=>isNaN(v) ? v : v+'px').join(' ') : a.map(v=>v * n +'px').join(' ')

api.define( 'icon', (v, name, size)=>v
    .SPAN( {class: 'glyphicon glyphicon-' + name, style:'font-size:'+ addPx([size || 10])}, '' )  )
    
api.define( 'linefeed', (v, a) => v
    .DIV({style:'height:' + addPx([a]) }, '') )
    
api.define( 'line',  (v, ...a) => v
    .class( 'flex-space',  v=> a
        .reduce(((b, w) => b.class('word', w)), v) )  )
        
api.define( 'hr',    (v, w) => v
    .class( 'flex-space',  v=>v
        .class('hr')
        .class('hr-text', w)
        .class('hr') )  )
