import React, { useState } from "react";
import { Tab,Tabs,TabList,TabPanel } from "react-tabs";

function ContactUs( ){
    // const [selectedTabIndex,SetselectedTabIndex] = useState(0)
    // const handleTabSelect =(index) =>{
    //     SetselectedTabIndex(index)
    // };
    const [ShowText,SetShowText] = useState(false)
    const ToogleText =() =>{
        SetShowText(!ShowText)
    }


    return(
        <div className="Tabs-Content">
            {/* <h1>Tabs Content</h1> //Tabat
            <Tabs selectedIndex={selectedTabIndex} onSelect={handleTabSelect}>
              <TabList>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>

                </TabList>  
                <TabPanel>
                <h2>Title of  Tab1</h2>
                <p>Content of Tab1</p>
                </TabPanel>
                <TabPanel>
                <h2>Title of  Tab2</h2>
                <p>Content of Tab2</p>
                <p>SubContent of Tab2</p>
                </TabPanel>
                <TabPanel>
                <h2>Title of  Tab3</h2>
                <p>Content of Tab3</p>
                <p>SubContent of Tab3</p>   
                </TabPanel>

            </Tabs> */}
<button onClick={ToogleText}>Show Text</button>
{
    ShowText &&<p>this Is Text</p>
}

        </div>
    )
}
export default ContactUs