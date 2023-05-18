import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { fetchSessionsData } from "../../stores/actions/session";
import { sessionsActions } from "../../stores/slices/session";

export default function SelectValue(props) {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.sessions.query);

  const [value, setValue] = React.useState("");
  const { name, data } = props;
  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch(fetchSessionsData({ ...query,[name]: event.target.value }));
    dispatch(sessionsActions.replaceQuery({ ...query,[name]: event.target.value }))
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">
        {name.toUpperCase()}
      </InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={handleChange}
        label={name}
      >
        {data &&
          data.map((e) => (
            <MenuItem key={e.title} value={e.value}>
              {e.title}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
