import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AllUsers from '../components/AllUsers';

const Users = () => {
  return (
    <div className='post_container'>
      <Tabs>
        <TabList>
          <Tab>All user</Tab>
        </TabList>

        <TabPanel>
          <AllUsers/>
        </TabPanel>

      </Tabs>
    </div>
  )
}

export default Users