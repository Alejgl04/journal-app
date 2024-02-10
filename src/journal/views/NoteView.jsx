import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo } from 'react'
import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components'
import { useForm } from '../../hooks/useForm'
import { setActiveNote, startSaveNote } from '../../store/journal'

export const NoteView = () => {

  const dispatch = useDispatch();

  const { active: note } = useSelector( state => state.journal );
  const { body, title, date, onInputChange, formState } = useForm( note );

  const dateString = useMemo(() =>  {

    const newDate = new Date( date );
    return newDate.toUTCString();

  },[date]);

  useEffect(() => {
    dispatch( setActiveNote(formState) );
  }, [formState])
  

  const onSaveNote = () => {
    dispatch( startSaveNote() );
  }
  
  return (
    <Grid 
      className='animate__animated animate__fadeIn animate__faster'
      container direction="row" justifyContent="space-between" sx={{ mb: 1}}>
      <Grid item>
        <Typography fontSize={ 39 } fontWeight="light"> {dateString} </Typography>
      </Grid>

      <Grid item>
        <Button
          onClick={onSaveNote}
          color='primary' 
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1}}/>
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          placeholder='Enter a title'
          label='Title'
          name='title'
          value={title}
          onChange={onInputChange}
          sx={{ border: 'none', mb: 1 }}
        />

        <TextField 
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='What happen today?'
          name='body'
          value={body}
          onChange={onInputChange}
          minRows={ 5 }
        />
      </Grid>

      <ImageGallery />
    </Grid>
  )
}
