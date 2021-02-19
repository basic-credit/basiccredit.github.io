import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavDropdown } from 'react-bootstrap';

const WorkWithUsDialog = ({ isMobile }) => {
  const [state, setState] = useState({
    email: '',
    message: '',
    isDialogOpen: false,
  });

  const onChangeEmail = (event) => {
    setState({ ...state, email: event.target.value });
  };

  const onChangeMessage = (event) => {
    setState({ ...state, message: event.target.value });
  };

  const onClickSend = () => {
    console.log('requester email', state);
  };

  const onClickOpen = () => {
    setState({ ...state, isDialogOpen: true });
  };

  const onClickClose = () => {
    setState({ ...state, isDialogOpen: false });
  };

  const item = isMobile ? (
    <ListItem style={{ color: '#007bff' }}>
      <ListItemText primary="Work with Us" onClick={onClickOpen} />
    </ListItem>
  ) : (
    <NavDropdown.Item onClick={onClickOpen}>Work with Us</NavDropdown.Item>
  );

  return (
    <div>
      {item}
      <Dialog
        open={state.isDialogOpen}
        onClose={onClickClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Work with Us</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide your email address and we will reach out to you
            shortly
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="work-with-us-email-input"
            label="Email Address"
            type="email"
            onChange={onChangeEmail}
            fullWidth
          />
          <TextField
            margin="dense"
            id="work-with-us-message-input"
            label="Message"
            type="text"
            multiline
            rowsMax={4}
            onChange={onChangeMessage}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClickSend} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

WorkWithUsDialog.propTypes = {
  isMobile: PropTypes.bool,
};

export default WorkWithUsDialog;
