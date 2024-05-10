import React from 'react';
import styles from "../../styles/NotificationButton.module.css"

const NotificationButton = ({ count, onClick }) => {
  return (
    <button className={styles.notificationButton} onClick={onClick}>
      Notifications
      {count > 0 && <span className={styles.notificationCount}>{count}</span>}
    </button>
  );
};

export default NotificationButton;