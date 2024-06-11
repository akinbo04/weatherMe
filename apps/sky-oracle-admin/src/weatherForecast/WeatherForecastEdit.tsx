import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { LocationTitle } from "../location/LocationTitle";

export const WeatherForecastEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="condition" source="condition" />
        <DateTimeInput label="forecastTime" source="forecastTime" />
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <NumberInput label="temperature" source="temperature" />
      </SimpleForm>
    </Edit>
  );
};
