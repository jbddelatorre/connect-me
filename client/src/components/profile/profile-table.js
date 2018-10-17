import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const styles = {
	root: {
		marginBottom: 30
	}
}

export default(props) => {
	const {title, header, data} = props
	return (
		<Grid style={styles.root} item xs={12}>
			<Typography align="left" color="primary" variant="h5">
   				{title}
  			</Typography>
  			<Table>
  				<TableHead>
  					<TableRow >
  						{header.map(h => (
							<TableCell key={h}>{h}</TableCell>
  							))}
  					</TableRow>
  				</TableHead>
  				<TableBody>
  					<TableRow>
  						<TableCell>Tech guy</TableCell>
  						<TableCell>Senior developer</TableCell>
  						<TableCell>2010-2018</TableCell>
  						<TableCell>
  							<Button
				        		size="medium"
				        		variant="contained" 
				        		color="secondary">
		        				Delete
		      				</Button>
  						</TableCell>
  					</TableRow>
  				</TableBody>
  			</Table>
		</Grid>	
	);
}
