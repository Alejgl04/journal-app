import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { setActiveNote } from '../../store/journal';

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {


  const newTitle = useMemo( () => {
    return title.length > 17
      ? title.substring(0,17) + '...'
      : title;
  }, [title])
  const newDescription = useMemo( () => {
    return body.length > 50
      ? body.substring(0,50) + '...'
      : body;
  }, [body])

  const dispatch = useDispatch();

  const onClickActiveNote = () => {
    dispatch(setActiveNote({title, body, id, date, imageUrls}))
  }

  return (
    <ListItem disablePadding>
    <ListItemButton onClick={onClickActiveNote}>
      <ListItemIcon>
        <TurnedInNot/>
      </ListItemIcon>
      <Grid container>
        <ListItemText primary={newTitle}/>
        <ListItemText secondary={newDescription}/>
      </Grid>
    </ListItemButton>
  </ListItem>  )
}

SideBarItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.any,
  imageUrls: PropTypes.any,
}