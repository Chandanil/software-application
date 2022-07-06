import "./Form.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Partial } from "../Partial/Partial";

export const Stepper = () => {
  return (
    
    <div className="parent-div body-section">
      <div className="container-fluid">
        <div className="cl-form">
          <h5 className="title">Customer Creation Form</h5>
          <Tabs className="cl-tabs">
            <TabList>
              <Tab>Institution</Tab>
              <Tab>Personal</Tab>
                <Tab>Join</Tab>
                </TabList>
                  <TabPanel>
            {/* <InstitutionForm /> */}
                    </TabPanel>
            
              </Tabs>
        </div>
      </div>
    </div>
  );
};
