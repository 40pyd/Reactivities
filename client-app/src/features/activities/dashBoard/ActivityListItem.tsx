import React from 'react';
import { Item, Button, Segment, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { IActivity } from '../../../app/models/activity';
import { format } from 'date-fns';
import ActivityListItemAttendee from './ActivityListItemAttendee';

const ActivityListItem: React.FC<{ activity: IActivity }> = ({ activity }) => {
  const host = activity.attendees.filter(x => x.isHost)[0];
  return (
    <Segment.Group>
      <Segment textAlign="center">
        <Item.Group>
          <Item>
            <Item.Image
              size='tiny'
              circular
              src={host.image || '/assets/user.png'}
              style={{ marginBottom: 3 }}
            />
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </Item.Header>
              <Item.Description>
                Hosted by
                <Link to={`/profile/${host.username}`}>
                  {' '}
                  {host.displayName}
                </Link>
              </Item.Description>
              {activity.isHost && (
                <Item.Description>
                  <Label
                    basic
                    color='orange'
                    content='you are hosting this activity'
                  />
                </Item.Description>
              )}
              {activity.isGoing && !activity.isHost && (
                <Item.Description>
                  <Label
                    basic
                    color='green'
                    content='you are going to this activity'
                  />
                </Item.Description>
              )}
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment textAlign="center">
        <Icon style={{ marginRight: 5}} name='clock' /> {format(activity.date, 'h:mm a')}
        <Icon style={{ marginRight: 5, marginLeft: 20}}name='marker' /> {activity.venue}, {activity.city}
      </Segment>
      <Segment secondary>
        <ActivityListItemAttendee attendees={activity.attendees} />
      </Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          style={{ marginTop: 10 }}
          as={Link}
          to={`/activities/${activity.id}`}
          floated='right'
          content='Details'
          color='blue'
        ></Button>
      </Segment>
    </Segment.Group>
  );
};

export default ActivityListItem;
