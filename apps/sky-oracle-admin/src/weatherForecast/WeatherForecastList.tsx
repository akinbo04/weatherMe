import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const WeatherForecastList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WeatherForecasts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="condition" source="condition" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="forecastTime" source="forecastTime" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="location"
          source="location.id"
          reference="Location"
        >
          <TextField source={LOCATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="temperature" source="temperature" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
