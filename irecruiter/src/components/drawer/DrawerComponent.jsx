import React from 'react'
import {Drawer, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import { useState } from 'react';





const DrawerComponent = ({showDrawer, setShowDrawer}) => {

    


  return (
      <>
          <Drawer open={showDrawer}
              onClose={() => setShowDrawer(false)}
              
              PaperProps={{
                sx: {
                  width: 200
                }
              }}>
              <List>
                  <ListItemButton>
                      <ListItemIcon>
                          <ListItemText>
                              Home
                          </ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
              </List>
              
      </Drawer>
      </>
  )
}

export default DrawerComponent