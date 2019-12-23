import React, { Fragment, useContext } from 'react';
import { Grid, Dropdown } from 'semantic-ui-react';
import { Calendar } from 'react-widgets';
import { RootStoreContext } from '../../../app/stores/rootStore';
import { observer } from 'mobx-react-lite';

const ActivityFilters = () => {
  const rootStore = useContext(RootStoreContext);
  const { predicate, setPredicate } = rootStore.activityStore;
  return (
    <Fragment>
      <Grid centered>
        <Grid.Column width={6}>
          <Dropdown
            text='Filters'
            icon='filter'
            floating
            color={'teal'}
            labeled
            button
            className='icon'
          >
            <Dropdown.Menu>
              <Dropdown.Item
                active={predicate.size === 0}
                onClick={() => setPredicate('all', 'true')}
                color={'blue'}
                name={'all'}
                content={'All'}
              />
              <Dropdown.Item
                active={predicate.has('isGoing')}
                onClick={() => setPredicate('isGoing', 'true')}
                color={'blue'}
                name={'username'}
                content={"I'm Going"}
              />
              <Dropdown.Item
                active={predicate.has('isHost')}
                onClick={() => setPredicate('isHost', 'true')}
                color={'blue'}
                name={'host'}
                content={"I'm Hosting"}
              />
            </Dropdown.Menu>
          </Dropdown>
        </Grid.Column>
        <Grid.Column width={10} textAlign='right'>
          <Dropdown
            text='Select Date'
            icon='calendar'
            fluid
            color={'teal'}
            labeled
            button
            className='icon'
          >
            <Dropdown.Menu style={{ marginLeft: -50}}>
              <Dropdown.Item >
                <Calendar
                  onChange={date => setPredicate('startDate', date!)}
                  value={predicate.get('startDate') || new Date()}
                />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default observer(ActivityFilters);
