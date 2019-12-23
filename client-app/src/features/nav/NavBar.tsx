import React, { useContext } from 'react';
import {
  Menu,
  Container,
  Button,
  Dropdown,
  Image
} from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { NavLink, Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';

const NavBar: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;
  return (
    <Container>
          <Menu fixed='top' inverted>
            <Menu.Item header as={NavLink} to='/' exact>
              <img
                src='/assets/logo.png'
                alt='logo'
              ></img>
            </Menu.Item>
            <Menu.Item name='Activities' as={NavLink} to='/activities' />
            <Menu.Item>
              <Button size='mini'as={NavLink} to='/createActivity' positive>
                Add
              </Button>
            </Menu.Item>
            {user && (
              <Menu.Item position='right'>
                <Image
                  avatar
                  spaced='right'
                  src={user.image || '/assets/user.png'}
                />
                <Dropdown pointing='top right' text={user.displayName} >
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={Link}
                      to={`/profile/${user.username}`}
                      text='My profile'
                      icon='user'
                    />
                    <Dropdown.Item
                      onClick={logout}
                      text='Logout'
                      icon='power'
                    />
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            )}
          </Menu>
    </Container>
  );
};

export default observer(NavBar);
