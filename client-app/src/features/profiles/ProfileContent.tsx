import React from "react";
import { Tab } from "semantic-ui-react";
import ProfilePhotos from "./ProfilePhotos";
import ProfileFollowings from "./ProfileFollowings";
import ProfileActivities from "./ProfileActivities";

interface IProps {
  setActiveTab: (activeIndex: any) => void;
}

const panes = [
  { menuItem: "Info", render: () => <Tab.Pane>About content</Tab.Pane> },
  { menuItem: "Photo", render: () => <ProfilePhotos /> },
  {
    menuItem: "Events",
    render: () => <ProfileActivities />
  },
  {
    menuItem: "Likers",
    render: () => <ProfileFollowings />
  },
  {
    menuItem: "Likes",
    render: () => <ProfileFollowings />
  }
];

const ProfileContent: React.FC<IProps> = ({ setActiveTab }) => {
  return (
    <Tab
      menu={{ color: 'blue', inverted: true, attached: false, tabular: false }}
          panes={panes}
      onTabChange={(e, data) => setActiveTab(data.activeIndex)}
    />
  );
};

export default ProfileContent;
