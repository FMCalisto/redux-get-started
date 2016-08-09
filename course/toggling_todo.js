/*
 * React TODO List Example: Toggling TODO.
 *
 * @author: Francisco Maria Calisto
 *
 */

 const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
};

const visibilityFilter = (

    state = "SHOW_ALL",
    action

) => {

    switch (action.type) {

        case 'SET_VISIBILITY_FILTER':
            return action.filter;

        default:
            return state;

    }

};

const { combineReducers } = Redux;
const todoApp = combineReducers({

    todos,
    visibilityFilter

});

const { Component } = React;

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href='#'
      onClick={e => {
        e.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </a>
  );
};

class FilterLink extends Component {  
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const { store } = context;
    const state = store.getState();

    return (
      <Link
        active={
          props.filter === state.visibilityFilter
        }
        onClick={() =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }
      >
      {props.children}
      </Link>
    );
  }
}

FilterLink.contextTypes = {
  store: React.PropTypes.object
};

const Footer = () => (
  <p>
    <FilterLink
      filter='SHOW_ALL'
    >
      All
    </FilterLink>
    {', '}
    <FilterLink
      filter='SHOW_ACTIVE'
    >
      Active
    </FilterLink>
      {', '}
    <FilterLink
      filter='SHOW_COMPLETED'
    >
      Completed
    </FilterLink>
  </p>
);

const Todo = ({
  onClick,
  completed,
  text
}) => (

  <li
    onClick={onClick}
    style={{
      textDecoration:
        todo.completed ?
          'line-through' :
          'none'
    }}
  >
    {text}
  </li>
);

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

const AddTodo = (props, { store }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text: input.value
          })
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};

AddTodo.contextTypes = {
  store: React.PropTypes.object
};

const getVisibleTodos = (

  todos,
  filter

) => {

  switch (filter) {

    case 'SHOW_ALL':
      return todos;

    case 'SHOW_COMPLETED':
      return todos.filter(

        t => t.completed

      );

    case 'SHOW_ACTIVE':
      return todos.filter(

        t => !t.completed

      );

  }

}

AddTodo.contextTypes = {
  store: React.PropTypes.object
};

class VisibleTodoList extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = props;
    const props = this.context;
    const state = store.getState();

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
            type: 'TOGGLE_TODO',
            id
          })
        }
      />
    );
  }
}

VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
}

let nextTodoId = 0;
const TodoApp = () => (
  <div>
    <AddTodo store={store} />
    <VisibleTodoList store={store} />
    <Footer store={store} />
  </div>
);

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
};

const { createStore } = Redux;

// This render does not belong to `TodoApp`
ReactDOM.render(
  <Provider store={createStore(todoApp)} />
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);

store.subscribe(render);
render();