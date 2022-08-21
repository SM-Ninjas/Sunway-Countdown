import React from 'react';

function Notification({ message, type, dispatch, id }) {
  const [exit, setExit] = React.useState(false);
  const [width, setWidth] = React.useState(0);
  const [intervalID, setIntervalID] = React.useState(null);
  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth(prev => {
        if (prev < 100) {
          return prev + 0.5;
        }
        clearInterval(id);
        return prev;
      });
    }, 20);
    setIntervalID(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };
  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      dispatch({
        type: 'REMOVE_NOTIFICATION',
        id: id,
      });
    }, 400);
  };
  React.useEffect(() => {
    if (width === 100) {
      //close notification
      handleCloseNotification();
    }
  }, [width]);
  React.useEffect(() => {
    handleStartTimer();
  }, []);
  return (
    <div onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} className={`notification-item ${type === 'Success' ? 'success' : 'error'} ${exit ? 'exit' : ''}`}>
      <p>{message}</p>
      <div className='bar' style={{ width: `${width}%` }} />
    </div>
  );
}

export default Notification;
