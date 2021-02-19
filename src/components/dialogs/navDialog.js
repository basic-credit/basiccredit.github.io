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

const FormDialog = ({
  buttonName,
  dialogTitle,
  contentText,
  inputId,
  inputLabel,
  inputType,
  positiveButtonText,
  onClickPositiveButton,
  onChangeText,
  isMobile,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    console.log('closing dialog');
    onClickPositiveButton(event);
    setOpen(false);
  };

  const item = isMobile ? (
    <ListItem style={{ color: '#007bff' }}>
      <ListItemText primary={buttonName} onClick={handleClickOpen} />
    </ListItem>
  ) : (
    <NavDropdown.Item onClick={handleClickOpen}>{buttonName}</NavDropdown.Item>
  );

  return (
    <div>
      {item}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{contentText}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id={inputId}
            label={inputLabel}
            type={inputType}
            onChange={onChangeText}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            {positiveButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

FormDialog.propTypes = {
  buttonName: PropTypes.string,
  dialogTitle: PropTypes.string,
  contentText: PropTypes.string,
  inputId: PropTypes.string,
  inputLabel: PropTypes.string,
  inputType: PropTypes.string,
  positiveButtonText: PropTypes.string,
  onClickPositiveButton: PropTypes.func,
  onChangeText: PropTypes.func,
  isMobile: PropTypes.bool,
};

export default FormDialog;
