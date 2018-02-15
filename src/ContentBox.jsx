import React from 'react';
import cn from 'classnames';
import styles from './ContentBox.css';

export function ContentBox({className, children, style}) {
    return (
      <div className="ContentBox" style={style}>
        {children}
      </div>
    );
  }