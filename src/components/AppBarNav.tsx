import React, { useState, useCallback } from 'react'
import { AppBar, Tabs, Toolbar, Tab, IconButton, Drawer, ListItem, List } from '@material-ui/core'
import useWindowWidth from '../utils/useWindowWidth'
import MenuIcon from '@material-ui/icons/Menu';
//@ts-ignore
import logo from '../assets/logo05.png'
const labels = [
  "凌高编程",
  "为何学习",
  "课程体系",
  "课程预览",
  "创始团队"
];

const AppBarNav: React.FC<{
  appBarColor: string,
  textColor: string,
  scrollPage: any,
  page: number

}> = props => {

  const windowWidth = useWindowWidth();
  const [openDrawer, setOpenDrawer] = useState(false);

  const drawerScrollPage = useCallback((i: number) => {
    props.scrollPage(i);
    setOpenDrawer(false);

  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={"select-none transition-250 change-opacity bg-blur" + ((windowWidth > 1024) ? "" : " px-3")}
      style={{ backgroundColor: props.appBarColor, color: props.textColor }}
    >

      {windowWidth > 1024 ? (
        <>
          <div className='w-24 h-6 absolute' style={{ left: '35px' }}>
            <div className='w-full'>
              <img src={logo} className='w-full h-full' />
            </div>
          </div>
          <Toolbar variant="dense" style={{ maxWidth: 1280 }} className="mx-auto">
            <Tabs
              value={props.page}
              onChange={(ev, val) => props.scrollPage(val)}
              indicatorColor="none"
            >
              {labels.map((label, i) => (
                <Tab label={label} key={i} />
              ))}
            </Tabs>
          </Toolbar>
        </>
      ) : (
          <>
          <div className='w-24 h-6 absolute text-center' style={{ left: '50%',transform:'translateX(-50%)' }}>
            <div className='w-full'>
              <img src={logo} className='w-full h-full' />
            </div>
          </div>
            <Toolbar variant="dense" className="w-full" onClick={() => setOpenDrawer(true)}>
              <IconButton>
                <MenuIcon style={{ color: props.textColor, opacity: 0.5 }} />
              </IconButton>
            </Toolbar>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
              <List style={{ width: 200, minHeight: "100%", background: "#276cad", color: 'white' }}>
                {labels.map((label, i) => (
                  <ListItem key={i} button onClick={() => drawerScrollPage(i)}>
                    {label}
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        )}
    </AppBar>
  )
}

export default AppBarNav