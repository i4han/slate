
import React, { Component } from 'react'
import { render } from 'react-dom'
import expect from 'expect'


export const startup = () => {
  ex5()
  expect(1).toEqual(1)
}

import { createStore, combineReducers } from 'redux'

const ADD_TODO    = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const SHOW_ALL    = 'SHOW_ALL'
const SHOW_ACTIVE = 'SHOW_ACTIVE'
const SHOW_COMPLETED = 'SHOW_COMPLETED'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

//
// Extracting Presentational Components
//
function ex5() {
  console.log('ex5')
  const store = getStore()

  const AddTodo = ({
    onAddClick
  }) => {
    let input
    this.keyPress = e => {  
      if (e.key === 'Enter') {
        store.dispatch({
          type: ADD_TODO, 
          id: nextTodoId++, 
          text:e.target.value
        }) 
        e.target.value = ""
      }
    }
    return (
      <div>
        <input 
          ref={node => {input = node}} // ref passes the Dome node
          onKeyPress={this.keyPress}/>
        <button onClick={() => {
          store.dispatch({
            type: ADD_TODO,
            id: nextTodoId++,
            text: input.value
          })
          input.value = ''
        }}>
          Add Todo
        </button>
      </div>
    )
  }
  

  
  const Todo = ({
    onClick,
    completed,
    text
  }) => (
    <li 
      onClick={onClick}
      style= {{ textDecoration: completed ? 'line-through' : 'none' }}
    >
        {text}
    </li>
  )

  const TodoList = ({
    todos,
    onTodoClick
  }) => (
    <ul>
      {todos.map(v =>
        <Todo 
          key={v.id} 
          {...v} 
          onClick={() => onTodoClick(v.id)} />
      )}
    </ul>
  )

  const getVisibleTodos = (
    todos,
    filter
  ) => {
    switch (filter) {
      case SHOW_ALL:
        return todos
      case SHOW_ACTIVE:
        return todos.filter(v => !v.completed)
      case SHOW_COMPLETED:
        return todos.filter(v => v.completed)
    }
  }
  
  class VisibleTodoList extends Component {
    componentDidMount() {
      this.unsubscribe = store.subscribe(() =>
        this.forceUpdate() )
    }
    compoenetWillUnmount() {
      this.unsubscribe()
    }  
    render() {
      const props = this.props
      const state = store.getState()

      return (
        <TodoList
          todos={
            getVisibleTodos(
              state.todos,
              state.visibilityFilter
            )
          }
          onTodoClick={id =>
            store.dispatch({
              type: TOGGLE_TODO,
              id
            })
          }
        />  
      )
    }
  }
  
  const Link = ({
    active,
    onClick,
    children
  }) => {
    return active
      ? <span>{children}</span>
      : (
          <a href="#"
            onClick={e => {
              e.preventDefault()
              onClick()
            }}
          >
            {children}
          </a>
        )
  }

  class FilterLink extends Component {
    componentDidMount() {
      this.unsubscribe = store.subscribe(() =>
        this.forceUpdate() )
    }
    compoenetWillUnmount() {
      this.unsubscribe()
    }
    render() {
      const props = this.props
      const state = store.getState()
      return(
        <Link
          active={props.filter === state.visibilityFilter}
          onClick={() =>
            store.dispatch({
              type: SET_VISIBILITY_FILTER,
              filter: props.filter
            })
          }
        >
          {props.children}
        </Link>
          
      )
    }
  }
  const Footer = () => (
    <p>
      Show:
      {' '}
      <FilterLink filter="SHOW_ALL"> All </FilterLink>
      <FilterLink filter="SHOW_ACTIVE"> Active </FilterLink>
      <FilterLink filter="SHOW_COMPLETED"> Completed </FilterLink>
    </p>
  )


  let nextTodoId = 0
  const TodoApp = () => (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
  console.log('render')
  console.log(document.getElementById('app'))
  render(
    <TodoApp />,
    document.getElementById('app')
  )
  console.log('render finished')
}

//
// Extracting Presentational Components
//
function ex4() {
  
  const store = getStore()

  const AddTodo = ({
    onAddClick
  }) => {
    let input
    return (
      <div>
        <input ref={node => { input = node}} />
        <button onClick={() => {
          store.dispatch({
            type: ADD_TODO,
            id: nextTodoId++,
            text: input.value
          })
          input.value = ''
        }}>
          Add Todo
        </button>
      </div>
    )
  }
  
  const Todo = ({
    onClick,
    completed,
    text
  }) => (
    <li 
      onClick={onClick}
      style= {{ textDecoration: completed ? 'line-through' : 'none' }}
    >
        {text}
    </li>
  )

  const TodoList = ({
    todos,
    onTodoClick
  }) => (
    <ul>
      {todos.map(v =>
        <Todo 
          key={v.id} 
          {...v} 
          onClick={() => onTodoClick(v.id)} />
      )}
    </ul>
  )

  const getVisibleTodos = (
    todos,
    filter
  ) => {
    switch (filter) {
      case SHOW_ALL:
        return todos
      case SHOW_ACTIVE:
        return todos.filter(v => !v.completed)
      case SHOW_COMPLETED:
        return todos.filter(v => v.completed)
    }
  }
  
  class VisibleTodoList extends Component {
    componentDidMount() {
      this.unsubscribe = store.subscribe(() =>
        this.forceUpdate() )
    }
    compoenetWillUnmount() {
      this.unsubscribe()
    }  
    render() {
      const props = this.props
      const state = store.getState()

      return (
        <TodoList
          todos={
            getVisibleTodos(
              state.todos,
              state.visibilityFilter
            )
          }
          onTodoClick={id =>
            store.dispatch({
              type: TOGGLE_TODO,
              id
            })
          }
        />  
      )
    }
  }
  
  const Link = ({
    active,
    onClick,
    children
  }) => {
    return active
      ? <span>{children}</span>
      : (
          <a href="#"
            onClick={e => {
              e.preventDefault()
              onClick()
            }}
          >
            {children}
          </a>
        )
  }

  class FilterLink extends Component {
    componentDidMount() {
      this.unsubscribe = store.subscribe(() =>
        this.forceUpdate() )
    }
    compoenetWillUnmount() {
      this.unsubscribe()
    }
    render() {
      const props = this.props
      const state = store.getState()
      return(
        <Link
          active={props.filter === state.visibilityFilter}
          onClick={() =>
            store.dispatch({
              type: SET_VISIBILITY_FILTER,
              filter: props.filter
            })
          }
        >
          {props.children}
        </Link>
          
      )
    }
  }
  const Footer = () => (
    <p>
      Show:
      {' '}
      <FilterLink filter="SHOW_ALL"> All </FilterLink>
      <FilterLink filter="SHOW_ACTIVE"> Active </FilterLink>
      <FilterLink filter="SHOW_COMPLETED"> Completed </FilterLink>
    </p>
  )


  let nextTodoId = 0
  const TodoApp = () => (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )

  render(
    <TodoApp />,
    document.getElementById('app')
  )
}

//
// Extracting Presentational Components
//
function ex3() {
  
  const store = getStore()

  const AddTodo = ({
    onAddClick
  }) => {
    let input
    return (
      <div>
        <input ref={node => { input = node}} />
        <button onClick={() => {
          onAddClick(input.value)
          input.value = ''
        }}>
          Add Todo
        </button>
      </div>
    )
  }
  
  const Todo = ({
    onClick,
    completed,
    text
  }) => (
    <li 
      onClick={onClick}
      style= {{ textDecoration: completed ? 'line-through' : 'none' }}
    >
        {text}
    </li>
  )

  const TodoList = ({
    todos,
    onTodoClick
  }) => (
    <ul>
      {todos.map(v =>
        <Todo 
          key={v.id} 
          {...v} 
          onClick={() => onTodoClick(v.id)} />
      )}
    </ul>
  )

  const FilterLink = ({
    filter,
    currentFilter,
    onClick,
    children
  }) => {
    return filter === currentFilter
      ? <span>{children}</span>
      : (
          <a href="#"
            onClick={e => {
              e.preventDefault()
              onClick(filter)
            }}
          >
            {children}
          </a>
        )
  }

  const Footer = ({
    visibilityFilter,
    onFilterClick
  }) => (
    <p>
      Show:
      {' '}
      <FilterLink onClick={onFilterClick} currentFilter={visibilityFilter} filter="SHOW_ALL"> All </FilterLink>
      <FilterLink onClick={onFilterClick} currentFilter={visibilityFilter} filter="SHOW_ACTIVE"> Active </FilterLink>
      <FilterLink onClick={onFilterClick} currentFilter={visibilityFilter} filter="SHOW_COMPLETED"> Completed </FilterLink>
    </p>
  )

  const getVisibleTodos = (
    todos,
    filter
  ) => {
    switch (filter) {
      case SHOW_ALL:
        return todos
      case SHOW_ACTIVE:
        return todos.filter(v => !v.completed)
      case SHOW_COMPLETED:
        return todos.filter(v => v.completed)
    }
  }
  
  let nextTodoId = 0
  const TodoApp = ({
    todos,
    visibilityFilter
  }) => (
    <div>
      <AddTodo 
        onAddClick={text =>
          store.dispatch({
            type: ADD_TODO,
            id: nextTodoId++,
            text
          })
        }
      />
      <TodoList
        todos={getVisibleTodos(
          todos,
          visibilityFilter
        )}
        onTodoClick={id =>
          store.dispatch({type: TOGGLE_TODO, id})
        }
      />
      <Footer
        visibilityFilter={visibilityFilter}
        onFilterClick={filter =>
          store.dispatch({
            type: SET_VISIBILITY_FILTER,
            filter
          })
        }
      />
    </div>
  )

  const appRender = () => render(
    <TodoApp {...store.getState()}/>,
    document.getElementById('app')
  )
  store.subscribe(appRender)
  appRender()
}

//
// store has been done.
//
function getStore () {

  const todo = (state = {}, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          id: action.id,
          text: action.text,
          completed: false
        }
      case TOGGLE_TODO:
        return state.id !== action.id
          ? state
          : { ...state, completed: !state.completed }
      default:
        return state
    }
  }

  const todos = (state = [], action) => {
    switch (action.type) {
      case ADD_TODO:
        return [ ...state, todo(undefined, action) ]
      case TOGGLE_TODO:
        return state.map( v => todo(v, action) )
      default:
        return state
    }
  }

  const visibilityFilter = (
    state = SHOW_ALL,
    action
  ) => {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return action.filter
      default:
        return state
    }
  }
  
  return createStore(
    combineReducers({
      todos,
      visibilityFilter
    }), 
    {}, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

//
// todo app using redux and react
//
function ex2() {

  const store = getStore()

  const getVisibleTodos = (
    todos,
    filter
  ) => {
    switch (filter) {
      case SHOW_ALL:
        return todos
      case SHOW_ACTIVE:
        return todos.filter(v => !v.completed)
      case SHOW_COMPLETED:
        return todos.filter(v => v.completed)
    }
  }
  
  const FilterLink = ({
    filter,
    currentFilter,
    children
  }) => {
    return filter === currentFilter
      ? <span>{children}</span>
      : (
          <a href="#"
            onClick={e => {
              e.preventDefault()
              store.dispatch({
                type: SET_VISIBILITY_FILTER,
                filter
              })
            }}
          >
            {children}
          </a>
        )
  }

  let nextTodoId = 0
  class TodoApp extends Component {
    render() {
      const {
        todos,
        visibilityFilter
      } = this.props
      const visibleTodos = getVisibleTodos(
        todos,
        visibilityFilter
      )
      return (
        <div>
          <input ref={node => { this.input = node}} />
          <button onClick={() => {
            store.dispatch({
              type: ADD_TODO,
              text: this.input.value,
              id: nextTodoId++
            })
            this.input.value = ''
          }}>
            Add Todo
          </button>
          <ul>
            {visibleTodos.map(v =>
              <li key={v.id}
                onClick={() => { store.dispatch({ type: TOGGLE_TODO, id: v.id }) }}
                style= {{ textDecoration: v.completed ? 'line-through' : 'none' }}
              >
                  {v.text}
              </li>
            )}
          </ul>
          <p>
            Show:
            {' '}
            <FilterLink currentFilter={visibilityFilter} filter="SHOW_ALL"> All </FilterLink>
            <FilterLink currentFilter={visibilityFilter} filter="SHOW_ACTIVE"> Active </FilterLink>
            <FilterLink currentFilter={visibilityFilter} filter="SHOW_COMPLETED"> Completed </FilterLink>
          </p>
        </div>
      )
    }
  }

  const appRender = () => render(
    <TodoApp {...store.getState()}/>,
    document.getElementById('app')
  )
  store.subscribe(appRender)
  appRender()
}

//
// simple counter reducer
//
function ex1() { 

  const counter = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state;
    }
  }
  const store = createStore(counter)
  
  const Counter = ({
    value,
    onIncrement,
    onDecrement
  }) => (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  )

  const appRender = () => render(
    <Counter 
      value={store.getState()} 
      onIncrement={() => store.dispatch({type: 'INCREMENT'}) }
      onDecrement={() => store.dispatch({type: 'DECREMENT'}) }
    />,
    document.getElementById('app')
  )

  store.subscribe(appRender)
  appRender()
}