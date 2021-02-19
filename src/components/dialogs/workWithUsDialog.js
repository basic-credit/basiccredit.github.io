import React, { useState } from 'react';
import PropTypes from 'prop-types';

import NavDialog from './navDialog';

const WorkWithUsDialog = ({ isMobile }) => {
  const [workWithUsText, setWorkWithUsText] = useState('');

  const onChangeWorkWithUsText = (event) => {
    setWorkWithUsText(event.target.value);
  };

  const onClickSendContactUsEmail = () => {
    console.log('requester email', workWithUsText);
  };

  return (
    <NavDialog
      buttonName="Work with Us"
      dialogTitle="Work with Us"
      contentText="Please provide your email address and we will reach out to you shortly"
      inputId="work-with-us-dialog"
      inputLabel="Email Address"
      inputType="email"
      positiveButtonText="Send"
      onClickPositiveButton={onClickSendContactUsEmail}
      onChangeText={onChangeWorkWithUsText}
      isMobile={isMobile}
    />
  );
};

WorkWithUsDialog.propTypes = {
  isMobile: PropTypes.bool,
};

export default WorkWithUsDialog;
