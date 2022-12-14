import { arrTheme } from "../../Theme/ThemeManager";
import { ToDoListDarkTheme } from "../../Theme/ToDoListDarkTheme";
import {
  ADD_TASK,
  CHANGE_THEME,
  COMPLETE_TASK,
  DELETE_TASK,
  GET_TASKNAME,
  PUSH_TASKNAME,
  UPDATE_TASK,
} from "../constans/ToDoList_Constans";

const initialState = {
  themeToDoList: ToDoListDarkTheme,
  taskList: [
    { id: 1, taskName: "task 1", done: true },
    { id: 2, taskName: "task 2", done: false },
    { id: 3, taskName: "task 3", done: true },
    { id: 4, taskName: "task 4", done: false },
  ],
  // taskName: "",
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
      let task = payload;
      // console.log("task: ", task);

      if (task.taskName.trim() === "") {
        alert("TaskName khong duoc de trong");
        return { ...state };
      }
      //dua task object vao taskList
      let taskListClone = [...state.taskList];
      let index = taskListClone.findIndex((item) => {
        return item.taskName === task.taskName;
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
    // case GET_TASKNAME: {
    //   if (payload != null) {
    //     state.taskName = payload.target.value;
    //     console.log("state.taskName: ", state.taskName);
    //   }
    //   state.taskEdit.taskName = state.taskName;
    //   console.log("state.taskEdit.taskName: ", state.taskEdit.taskName);
    //   //   console.log("state.taskName: ", state.taskName);
    //   return { ...state };
    // }
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
    case UPDATE_TASK: {
      state.taskEdit.taskName = payload;

      let index = state.taskList.findIndex((item) => {
        return item.id == state.taskEdit.id;
      });

      let taskListClone = [...state.taskList];

      if (index !== -1) {
        taskListClone[index] = state.taskEdit;
      }

      state.taskList = taskListClone;
      state.taskEdit = { id: "-1", taskName: "", done: false };

      return { ...state };
    }
    default:
      return { ...state };
  }
};
