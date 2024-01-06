import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views/'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Quis id mollit qui aliquip. Id eiusmod ex tempor voluptate irure eu dolore pariatur laborum. Veniam dolore nulla pariatur anim culpa nisi veniam. Consectetur exercitation consequat et adipisicing Lorem qui reprehenderit laborum. Ipsum dolor laborum dolore voluptate esse. Labore duis non nisi esse in proident.</Typography> */}

      {/* <NothingSelectedView /> */}
      <NoteView />

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ':hover': { backgroundColor: "error.main", opacity: 0.9},
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined  sx={{ fontSize: 30 }}/>

      </IconButton>

    </JournalLayout>
  )
}
