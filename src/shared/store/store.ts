import { create } from 'zustand';

interface DataProps {
  id: number;
  value: string;
  status: string;
}

interface TodoState {
  todos: DataProps[];
  fiteredTodos: DataProps[];
  addTodo: (value: string) => void;
  updateTodo: (id: number, type: string, value: string) => void;
  removeTodo: (id: number) => void;
}

interface filterState {
  filter: string;
  setFilter: (value: string) => void;
  updateFilterData: () => void;
}

export const useTodos = create<TodoState>((set, get) => ({
  todos: [],
  fiteredTodos: [],
  addTodo: (value) => {
    const newTodo = { id: Date.now(), value, status: 'active' };
    set({ todos: [...get().todos, newTodo] });
    useFilter.getState().updateFilterData();
  },
  updateTodo: (id, type, value) => {
    const indexCheckedItem = get().todos.findIndex((item) => item.id === id);
    const newTodo = [...get().todos];
    if (type === 'text') {
      newTodo[indexCheckedItem].value = value;
    } else {
      newTodo[indexCheckedItem].status = value === 'active' ? 'done' : 'active';
    }
    set({ todos: newTodo });
    useFilter.getState().updateFilterData();
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
    useFilter.getState().updateFilterData();
  },
}));

export const useFilter = create<filterState>((set, get) => ({
  filter: 'all',
  setFilter: (value: string) => {
    set({ filter: value });
    get().updateFilterData();
  },
  updateFilterData: () => {
    let filteredData: DataProps[];
    switch (get().filter) {
      case 'active':
        filteredData = useTodos
          .getState()
          .todos.filter((item) => item.status === 'active');
        break;
      case 'done':
        filteredData = useTodos.getState().todos.filter((item) => item.status === 'done');
        break;
      default:
        filteredData = useTodos.getState().todos;
        break;
    }
    useTodos.setState({ fiteredTodos: filteredData });
  },
}));
