import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { LocationTitle } from "../location/LocationTitle";

export const WeatherForecastCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
