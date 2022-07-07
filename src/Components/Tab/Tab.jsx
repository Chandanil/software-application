import "./Tab.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Institution } from "../Form/Institution/Institution";
import { Personal } from "../Form/Personal/Personal";
import { Join } from "../Form/Join/Join";

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
                <Institution />
              </TabPanel>
              <TabPanel>
                <Personal />
              </TabPanel>
              <TabPanel>
                <Join />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};
