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

export default class ToDoList extends Component {
  render() {
    return (
      <ThemeProvider theme={ToDoListDarkTheme}>
        <Container className="w-50">
          <Heading3>ToDoList</Heading3>
          <Dropdown>
            <option>Dark theme</option>
            <option>Light theme</option>
            <option>primary theme</option>
          </Dropdown>
          <TextField label="Task name" className="w-50"></TextField>
          <Button className="ml-2">
            <i class="fa fa-plus"></i> Add task
          </Button>
          <Button className="ml-2">
            <i class="fa fa-upload"></i> Add task
          </Button>
          <hr />
          <Heading3>Task to do</Heading3>
          <Table>
            <Thead>
              <Tr>
                <Th style={{ verticalAlign: "middle" }}>Task name</Th>
                <Th className="text-right">
                  <Button className="ml-1">
                    <i className="fa fa-edit"></i>
                  </Button>
                  <Button className="ml-1">
                    <i className="fa fa-check"></i>
                  </Button>
                  <Button className="ml-1">
                    {" "}
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
              <Tr>
                <Th style={{ verticalAlign: "middle" }}>Task name</Th>
                <Th className="text-right">
                  <Button className="ml-1">
                    <i className="fa fa-edit"></i>
                  </Button>
                  <Button className="ml-1">
                    <i className="fa fa-check"></i>
                  </Button>
                  <Button className="ml-1">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
            </Thead>
          </Table>
          <Heading3>Task Complete</Heading3>
          <Table>
            <Thead>
              <Tr>
                <Th style={{ verticalAlign: "middle" }}>Task name</Th>
                <Th className="text-right">
                  <Button className="ml-1">
                    {" "}
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
              <Tr>
                <Th style={{ verticalAlign: "middle" }}>Task name</Th>
                <Th className="text-right">
                  <Button className="ml-1">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
            </Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }
}
