import { uiActions } from "../slices/ui";
import { sessionsActions } from "../slices/session";
import { Config } from "../../config";

export const fetchSessionsData = (query) => {
  return async (dispatch) => {
    let params = new URLSearchParams();
    console.log('query', query)
    if (query && query.status && query.status !== "") params.append("status", query.status);
    if (query && query.short_title && query.short_title !== "") params.append("short_title", query.short_title);

    const fetchData = async () => {
      const response = await fetch(
        Config.server_host + "/sessions?" + params
      );

      if (!response.ok) {
        throw new Error("Could not fetch sessions data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      let sessionsData = await fetchData();
      if (sessionsData && Array.isArray(sessionsData)) {
        sessionsData.sort((a, b) => b.start_date.localeCompare(a.start_date));
      }
      dispatch(
        sessionsActions.replaceSessions({
          items: sessionsData || [],
          totalQuantity: sessionsData.length,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching sessions data failed!",
        })
      );
    }
  };
};
