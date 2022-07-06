import { Form } from "./Form/Form";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


export const AllForm = ()=> {
    return(
        <>
        <div className="cl-allform step-form">
        <div className="container-fluid">
            <div className="cl-form">
            <h5 className="title">Customer Creation Form</h5>
            <Tabs className="cl-tabs">
            <TabList>
              <Tab><div className="group-item">
                  <input type="radio" />
                  <label>Institution</label>
                </div></Tab>
              <Tab><div className="group-item">
                  <input type="radio" checked />
                  <label>Personal</label>
                </div></Tab>
                <Tab>
                  <div className="group-item">
                  <input type="radio" />
                  <labeel>Join</labeel>
                  </div>
                  </Tab>
                  <TabPanel>
                    hi chandani  
                    </TabPanel>
            </TabList>
              </Tabs>
              {/* <div className="input-group">
                <div className="group-item">
                  <input type="radio" />
                  <label>Institution</label>
                </div>
                <div className="group-item">
                  <input type="radio" checked />
                  <label>Personal</label>
                </div>
                <div className="group-item">
                  <input type="radio" />
                  <label>Join</label>
                </div>
              </div> */}
              {/* <ul>
                  <li className="active">
                    <i className="fa fa-user-circle icon"></i>
                  </li>
                  <li>
                    <i className="fa fa-file-o icon"></i>
                    Account Detail
                  </li>
                  <li>
                    <i className="fa fa-file-o icon"></i>
                    Document
                  </li>
                </ul> */}
                < Form />
            </div>
        </div>
        </div>
        </>
    )
}