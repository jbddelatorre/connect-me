import React from 'react';

import Build from '@material-ui/icons/Build';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const style = {
	listitem: {
		padding:7,
		borderWidth:1,
		borderStyle:'solid',
		borderColor:'rgba(0,0,0,0.08)'
	},
}
const ListItemSkills = (props) => {
	const {skill} = props;
	// const liststyle = nb ? 'none': 'solid'

	return (
		<ListItem style={style.listitem}>
          <Avatar>
            <Build />
          </Avatar>
          <ListItemText 
          	primary={skill} />
        </ListItem>
	)
};

export default ListItemSkills;
