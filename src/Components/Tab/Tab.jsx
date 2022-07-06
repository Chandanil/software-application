import "./Tab.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  CompanyDetail,
  InstitutionForm,
} from "../Form/Institution/CompanyDetail";
import { Partial } from "../Partial/Partial";

export const ClTab = () => {
  return (
    <>
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
                <CompanyDetail />
              </TabPanel>
              <TabPanel>
                <Partial />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};
