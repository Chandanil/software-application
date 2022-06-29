import "./Todo.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export const Todo = () => {
  return (
    <>
      <div className="emaillist todo-list">
       
          <Tabs className="cl-tabs">
          <div className="cl-header">
          <h5 className="title">
            <i className="fa fa-th-list icon"></i>To Do List
          </h5>
            <TabList>
              <Tab>Current Task</Tab>
              <Tab>Finish Task</Tab>
            </TabList>
          </div>
          <TabPanel>
          <div className=" todo-body">
          <ul>
            <li className="list-item">
              <i className="fa fa-list"></i>
              <input type="checkbox" />
              <span>Design a Nice Theme</span>
              <small><i className="fa fa-clock-o"></i>2 min</small>
            </li>
            <li className="list-item line">
              <i className="fa fa-list"></i>
              <input type="checkbox" />
              <span>Design a Nice Theme</span>
              <small><i className="fa fa-clock-o"></i>2 min</small>
            </li>
            <li className="list-item">
              <i className="fa fa-list"></i>
              <input type="checkbox" />
              <span>Design a Nice Theme</span>
              <small><i className="fa fa-clock-o"></i>2 min</small>
            </li>
          </ul>
        </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
