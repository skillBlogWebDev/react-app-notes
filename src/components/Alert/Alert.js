import { useContext } from 'react';
import { AlertContext } from '../../context/alert/alertContext';
import { CSSTransition } from 'react-transition-group';
import './alert.css';

export const Alert = () => {
  const {alert, hide} = useContext(AlertContext);

  return (
    <CSSTransition 
      in={alert.visible}
      timeout={{
        enter: 500,
        exit: 350
      }}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit
    >
      <div className={`alert alert-${alert.type || 'warning'} d-flex justify-content-between align-items-center`}>
      <div>
        <strong>Внимание!</strong>
          {alert.text}
        </div>
        <button onClick={hide} type="button" className="btn close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    </CSSTransition>
  );
}
