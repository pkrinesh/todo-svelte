import { nanoid } from 'nanoid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { onDestroy } from 'svelte';

const TODO_LOCAL_KEY = 'st-todo-list';

type TTodo = {
  id: string;
  text: string;
  complete: boolean;
};

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === null ? undefined : JSON.parse(value);
  } catch {
    console.log('parsing error on', { value });
    return undefined;
  }
}

export function todoStore() {
  const data = browser
    ? parseJSON<TTodo[]>(window.localStorage.getItem(TODO_LOCAL_KEY)) ?? [
        {
          id: nanoid(),
          text: 'This is first todo',
          complete: false
        }
      ]
    : [];

  const todo = writable<TTodo[]>(data);

  const unsubscribe = todo.subscribe((store) => {
    if (browser) {
      window.localStorage.setItem(TODO_LOCAL_KEY, JSON.stringify(store));
    }
  });

  onDestroy(unsubscribe);

  class TodoAction {
    static add() {
      todo.update((prev) => [...prev, { id: nanoid(), text: '', complete: false }]);
    }

    static edit(id: string, text: string) {
      todo.update((prev) => prev.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
    }

    static toggle_complete(id: string) {
      todo.update((prev) =>
        prev.map((todo) => (todo.id === id ? { ...todo, complete: !todo.complete } : todo))
      );
    }

    static delete(id: string) {
      todo.update((prev) => prev.filter((todo) => todo.id !== id));
    }
  }

  return { todo, action: TodoAction };
}
