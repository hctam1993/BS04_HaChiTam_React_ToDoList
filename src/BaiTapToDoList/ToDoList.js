import React, { Component } from "react";
import { Container } from "../Components/Container";
import { Dropdown } from "../Components/Dropdown";
import { ThemeProvider } from "styled-components";
import { ToDoListDarkTheme } from "../Theme/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../Theme/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "../Theme/ToDoListPrimaryTheme";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../Components/Heading";
import { Input, Label, TextField } from "../Components/TextField";
import { Button } from "../Components/Button";
import { Table, Td, Th, Tbody, Thead, Tr } from "../Components/Table";
import { connect } from "react-redux";
import {
  ADD_TASK,
  CHANGE_THEME,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  GET_TASKNAME,
  PUSH_TASKNAME,
} from "../redux/constans/ToDoList_Constans";
import { arrTheme } from "../Theme/ThemeManager";

export class ToDoList extends Component {
  // state = {
  //   taskName: "",
  // };
  renderTaskToDo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                className="ml-1"
                onClick={() => {
                  this.props.handlePushTaskName(task);
                }}
              >
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                className="ml-1"
                onClick={() => {
                  this.props.handleCompleteTask(task.id);
                }}
              >
                <i className="fa fa-check"></i>
              </Button>
              <Button
                className="ml-1"
                onClick={() => {
                  this.props.handleDeleteTask(task.id);
                }}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  renderTaskComplete = () => {
    return this.props.taskList
      .filter((task) => task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                className="ml-1"
                onClick={() => {
                  this.props.handleDeleteTask(task.id);
                }}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  renderTheme = () => {
    return arrTheme.map((theme, index) => {
      return <option value={theme.id}>{theme.name}</option>;
    });
  };
  render() {
    return (
      <ThemeProvider theme={this.props.themeToDoList}>
        <Container className="w-50">
          <Heading3>ToDoList</Heading3>
          <Dropdown
            onChange={(e) => {
              this.props.handleChangeTheme(e);
            }}
          >
            {this.renderTheme()}
          </Dropdown>
          <TextField
            value={this.props.taskEdit.taskName}
            onChange={(e) => {
              this.props.handleOnChange(e);
            }}
            label="Task name"
            className="w-50"
          ></TextField>
          <Button className="ml-2" onClick={this.props.handleAddTask}>
            <i className="fa fa-plus"></i> Add task
          </Button>
          <Button className="ml-2">
            <i className="fa fa-upload"></i> Edit task
          </Button>
          <hr />
          <Heading3>Task to do</Heading3>
          <Table>
            <Thead>{this.renderTaskToDo()}</Thead>
          </Table>
          <Heading3>Task Complete</Heading3>
          <Table>
            <Thead>{this.renderTaskComplete()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    themeToDoList: state.ToDoList_Reducer.themeToDoList,
    taskList: state.ToDoList_Reducer.taskList,
    taskEdit: state.ToDoList_Reducer.taskEdit,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeTheme: (e) => {
      dispatch({
        type: CHANGE_THEME,
        payload: e,
      });
    },
    handleAddTask: () => {
      dispatch({
        type: ADD_TASK,
      });
    },
    handleOnChange: (e) => {
      dispatch({
        type: GET_TASKNAME,
        payload: e,
      });
    },
    handleDeleteTask: (idTask) => {
      dispatch({
        type: DELETE_TASK,
        payload: idTask,
      });
    },
    handleEditTask: (idTask) => {
      dispatch({
        type: EDIT_TASK,
        payload: idTask,
      });
    },
    handleCompleteTask: (idTask) => {
      dispatch({
        type: COMPLETE_TASK,
        payload: idTask,
      });
    },
    handlePushTaskName: (task) => {
      dispatch({
        type: PUSH_TASKNAME,
        payload: task,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
