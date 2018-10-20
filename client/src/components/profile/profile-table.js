import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import isEmpty from '../../validation/is-empty';

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
  console.log(typeof(data))
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
              {!isEmpty(data) ? 
                <TableRow>
                  <TableCell style={styles.tablecell}></TableCell>
                  <TableCell style={styles.tablecell}></TableCell>
                  <TableCell style={styles.tablecell}></TableCell>
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
                :
                <TableRow>
                  <TableCell colSpan={4}>
                  <Typography align="center" color="secondary" variant="body1">
                    No information provided                  
                  </Typography>
                  </TableCell>
                </TableRow>
              }
  				</TableBody>
  			</Table>
		</Grid>	
	);
}
