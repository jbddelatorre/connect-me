import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';

const styles = {
	modal: {
		display:'flex',
		alignItems:'center',
		justifyContent:'center'
	},
	progress: {
		margin:20
	}
}

export default (props) => {
	return (
		<Modal
		style={styles.modal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={props.loading}
          disableEscapeKeyDown
          disableEnforceFocus
          disableBackdropClick
        >
        	<CircularProgress size={100} />
        </Modal>
	)
};
