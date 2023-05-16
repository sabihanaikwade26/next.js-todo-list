import {create} from "zustand";
import {persist} from "zustand/middleware";

const useGlobalStore = create(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (params) => {
        set((state) => ({
          tasks: [...state.tasks, {id: state.tasks.length + 1, ...params}],
        }));
      },
      deleteTask: (params) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== params),
        }));
      },
      markTaskAsDone: (params) => {
        set((state) => ({
          tasks: state.tasks.map((task) => {
            if (task.id === params) {
              return {...task, isDone: true};
            }
            return task;
          }),
        }));
      },
      markTaskAsUndone: (params) => {
        set((state) => ({
          tasks: state.tasks.map((task) => {
            if (task.id === params) {
              return {...task, isDone: false};
            }
            return task;
          }),
        }));
      },
      clearTasks: () => {
        set(() => ({
          tasks: [],
        }));
      }
    }),
    {name: "global"}
  )
);

export default useGlobalStore;