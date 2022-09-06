import { arrTheme } from "../../Theme/ThemeManager";
import { ToDoListDarkTheme } from "../../Theme/ToDoListDarkTheme";
import {
  ADD_TASK,
  CHANGE_THEME,
  COMPLETE_TASK,
  DELETE_TASK,
  GET_TASKNAME,
  PUSH_TASKNAME,
} from "../constans/ToDoList_Constans";

const initialState = {
  themeToDoList: ToDoListDarkTheme,
  taskList: [
    { id: 1, taskName: "task 1", done: true },
    { id: 2, taskName: "task 2", done: false },
    { id: 3, taskName: "task 3", done: true },
    { id: 4, taskName: "task 4", done: false },
  ],
  taskName: "",
  taskEdit: { id: "", taskName: "", done: false },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_THEME: {
      let themeID = payload.target.value * 1;
      //   console.log("themeID: ", themeID);
      let index = arrTheme.findIndex((item) => {
        return item.id == themeID;
      });
      //   console.log("index: ", index);
      let theme = arrTheme[index].theme;
      state.themeToDoList = theme;
      return { ...state };
    }
    case ADD_TASK: {
      //lay thong tin tu input
      let taskName = state.taskName;
      //tao 1 projact moi
      if (taskName === "") {
        alert("Task name khong de trong");
        return { ...state };
      }
      let task = {
        id: Date.now(),
        taskName: taskName,
        done: false,
      };
      //   console.log("task: ", task);
      //dua task object vao taskList
      let taskListClone = [...state.taskList];
      let index = taskListClone.findIndex((task) => {
        return task.taskName === taskName;
      });
      if (index !== -1) {
        alert("Task da ton tai, moi nhap task khac");
        return { ...state };
      }
      taskListClone.push(task);

      // xu ly trong gan state.taskList= taskListClone
      state.taskList = taskListClone;

      return { ...state };
    }
    case GET_TASKNAME: {
      if (payload != null) state.taskName = payload.target.value;
      //   console.log("state.taskName: ", state.taskName);
      return { ...state };
    }
    case DELETE_TASK: {
      //   let taskListClone = [...state.taskList];
      //   let index = taskListClone.findIndex((item) => {
      //     return item.id == payload;
      //   });
      //   //   console.log("index: ", index);

      //   taskListClone.splice(index, 1);

      //   state.taskList = taskListClone;
      //   return { ...state };
      return {
        ...state,
        taskList: state.taskList.filter((item) => {
          return item.id != payload;
        }),
      };
    }
    case COMPLETE_TASK: {
      let taskListClone = [...state.taskList];
      let index = taskListClone.findIndex((item) => {
        return item.id == payload;
      });

      if (index !== -1) {
        taskListClone[index].done = true;
      }
      return { ...state, taskList: taskListClone };
    }
    case PUSH_TASKNAME: {
      return { ...state, taskEdit: payload };
    }
    default:
      return { ...state };
  }
};
