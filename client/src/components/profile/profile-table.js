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
	},
  tablecell: {
    textAlign:'center'
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
							<TableCell style={styles.tablecell} key={h}>{h}</TableCell>
  							))}
  					</TableRow>
  				</TableHead>
  				<TableBody>
  					<TableRow>
  						<TableCell style={styles.tablecell}>Tech guy</TableCell>
  						<TableCell style={styles.tablecell}>Senior developer</TableCell>
  						<TableCell style={styles.tablecell}>2010-2018</TableCell>
  						<TableCell style={styles.tablecell}>
  							<Button
				        		size="medium"
				        		variant="contained" 
				        		color="secondary"
                    fullWidth>
		        				Delete
		      				</Button>
  						</TableCell>
  					</TableRow>
  				</TableBody>
  			</Table>
		</Grid>	
	);
}
