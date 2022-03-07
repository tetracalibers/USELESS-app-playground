import React from 'react'
import { Modal, Button } from 'react-materialize'
import { Navigate } from 'react-router-dom'

const ErrorScreen = ({ redirectTo, errorMessage }) => {
  return (
    <Modal
      actions={[
        <Button
          flat
          waves="light-blue"
          onClick={() => <Navigate to={redirectTo} replace />}
        >
          Close
        </Button>,
      ]}
      bottomSheet={false}
      fixedFooter={false}
      header="Sorry..."
      open={true}
      options={{
        dismissible: true,
        endingTop: '10%',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: '4%',
      }}
    >
      {errorMessage}
    </Modal>
  )
}

export default ErrorScreen
