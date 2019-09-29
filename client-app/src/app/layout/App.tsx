import React, { useEffect, Fragment, useContext } from "react";
import { Container } from "semantic-ui-react";
import Navbar from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashBoard/ActivityDashboard";
import ActivityStore from "../stores/activityStore";
import LoadingComponent from "../layout/LoadingComponent";
import { observer } from "mobx-react-lite";

const App = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="loading activities..." />;

  return (
    <Fragment>
      <Navbar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
};

export default observer(App);
