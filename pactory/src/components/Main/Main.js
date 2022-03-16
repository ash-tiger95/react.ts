import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Main() {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={4}>
            <Item>1</Item>
        </Grid>
        <Grid item xs={4}>
            <Item>2</Item>
        </Grid>
        <Grid item xs={4}>
            <Item>3</Item>
        </Grid>
        <Grid item xs={4}>
            <Item>4</Item>
        </Grid>
        <Grid item xs={4}>
            <Item>5</Item>
        </Grid>
        <Grid item xs={4}>
            <Item>6</Item>
        </Grid>
    </Grid>
    </>
  );
}

export default Main;