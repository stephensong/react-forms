import Grid from '@material-ui/core/Grid'

import ListOfContents from '../../src/helpers/list-of-contents';

<Grid container item>
<Grid item xs={12} md={10}>

import RawComponent from '@docs/raw-component';

# React form renderer

React form renderer is a component designed for ManageIQ and
Insights projects that takes JSON form definitions
and renders them into react components.
It uses [React Final Form](https://github.com/final-form/react-final-form) for the form state management.
It is highly recommended to check their documentations first to fully understand how
the [Data Driven Dorms](https://github.com/data-driven-forms/react-forms) libraries work.

<RawComponent source="get-started/get-started" />

</Grid>
<Grid item xs={false} md={2}>
  <ListOfContents file="renderer/get-started" />
</Grid>
</Grid>
