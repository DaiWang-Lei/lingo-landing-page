import React from 'react'
import { AppBar, Tabs, Toolbar, Tab, IconButton } from '@material-ui/core'
import useWindowWidth from '../hooks/useWindowWidth'
import MenuIcon from '@material-ui/icons/Menu';

const AppBarNav: React.FC<{ appBarColor: any, scrollPage: any, page: any }> = (props) => {
  const windowWidth = useWindowWidth();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className="px-10 sm:px-15 md:px-20 bg-blur"
      style={{
        backgroundColor: props.appBarColor,
        color: "black",
        transition: "background-color 250ms ease"
      }}
    >
      <div className="w-full flex justify-center">
        {windowWidth > 1024 ? (
          <Toolbar variant="dense" style={{ maxWidth: 1000 }}>
            <Tabs
              value={props.page}
              onChange={(ev, val) => props.scrollPage(val)}
            >
              <Tab label="凌高编程" />
              <Tab label="Why 编程？" />
              <Tab label="课程体系" />
              <Tab label="课程预览" />
              <Tab label="创始团队" />
            </Tabs>
          </Toolbar>
        ) : (
          <Toolbar variant="dense" style={{ width: "100%", maxWidth: 1000 }}>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        )}
      </div>

    </AppBar>)
}

export default AppBarNav