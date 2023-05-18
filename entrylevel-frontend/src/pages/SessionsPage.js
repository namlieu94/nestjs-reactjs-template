import { React, useEffect, Fragment, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Notification from '../components/UI/Notification';

import Program from "../components/Program/Program";
import { fetchSessionsData } from "../stores/actions/session";
import SelectValue from "../components/UI/Select";

export function SessionsPage() {
  const dispatch = useDispatch();
  // const showSessions = useSelector((state) => state.ui.sessionsIsVisible);
  const sessions = useSelector((state) => state.sessions.items);
  const notification = useSelector((state) => state.ui.notification);
  const statusValue = [
    { value: "", title: "None" },
    { value: "OFFERING", title: "Offering" },
    { value: "RUNNING", title: "Running" },
    { value: "OFFBOARDING", title: "Off Boarding" },
  ];
  const titleValue = [
    { value: "", title: "None" },
    { value: "vc", title: "vc" },
    { value: "product", title: "product" },
    { value: "data", title: "data" },
    { value: "data2", title: "data2" },
    { value: "data3", title: "data3" },
    { value: "scrum", title: "scrum" },
    { value: "product2", title: "product2" },
    { value: "product", title: "product" },
    { value: "growth", title: "growth" },
  ];
  const programs = useMemo(() => {
    let p = [];
    sessions.forEach((e) => {
      if (e && Array.isArray(e.program)) {
        e.program.forEach((v) =>
          p.push({ ...v, start_date: e.start_date, end_date: e.end_date })
        );
      }
    });
    return p.slice(0, 50);
  }, [sessions]);

  useEffect(() => {
    dispatch(fetchSessionsData());
  }, [dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
              <SelectValue key='status' data={statusValue} name="status" />
              <SelectValue key='short_title' data={titleValue} name="short_title" />
            {/* </Box> */}
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {programs && programs.map((p) => <Program data={p} />)}
          </Grid>
        </Container>
      </main>
    </Fragment>
  );
}

export default SessionsPage;
