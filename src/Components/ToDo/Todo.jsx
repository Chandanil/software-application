import "./Todo.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";

export const Todo = () => {
  const [isChecked, setIsChecked] = useState();
  const [checkeditems, setCheckedItem] = useState([]);
  const [activeIndex, setActiveIndex] = useState();

  console.log("checkeditems", checkeditems);
  const FormTitle = ["Personal Details", "Account Detail", "Document"];

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
                {FormTitle.map((item, index) => {
                  return (
                    <li className="list-item" key={index}>
                      <i className="fa fa-list"></i>
                      <input
                        type="checkbox"
                        value={item}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setIsChecked(true);
                            setCheckedItem([...checkeditems, e.target.value]);
                          } else {
                            setCheckedItem(
                              checkeditems.filter((f) => f !== item)
                            );
                          }
                        }}
                      />
                      <span
                        className={`${
                          checkeditems.includes(item) && "line-through"
                        }`}
                      >
                        {item}
                      </span>
                      <small>
                        <i className="fa fa-clock-o"></i>2 min
                      </small>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
