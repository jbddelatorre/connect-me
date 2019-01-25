import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { deleteExperience, deleteEducation } from '../../actions/profileActions'

import isEmpty from '../../validation/is-empty';

import Moment from 'react-moment'

const styles = {
	root: {
		marginBottom: 30
	},
  tablecell: {
    textAlign:'center'
  }
}

class ProfileTable extends Component {
  handleDelete = (type, id) => {
    switch (type) {
      case 'EXPERIENCE':
        return this.props.deleteExperience(id)
      case 'EDUCATION':
        return this.props.deleteEducation(id)
        default:
          return
    }
  }

	render() {
    const {title, header, data, type} = this.props
    let info = [];
    switch (type) {
      case 'EXPERIENCE':
        info = ['company', 'title']
        break;
      case 'EDUCATION':
        info = ['school', 'degree']
        break;
      default:
          return
    }
    
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
                  data.map(d => (
                    <TableRow key={d._id}>
                      <TableCell style={styles.tablecell}>{d[info[0]]}</TableCell>
                      <TableCell style={styles.tablecell}>{d[info[1]]}</TableCell>
                      <TableCell style={styles.tablecell}><Moment format="YYYY/MM/DD">{d.from}</Moment> - {d.current ? 'Current':<Moment format="YYYY/MM/DD">{d.to}</Moment>}</TableCell>
                      <TableCell style={styles.tablecell}>
                        <Button
                            size="medium"
                            variant="contained" 
                            color="secondary"
                            onClick={() => this.handleDelete(type, d._id)}>
                            Delete
                          </Button>
                      </TableCell>
                    </TableRow>))
                  :
                  <TableRow>
                    <TableCell colSpan={4}>
                    <Typography align="center" color="primary" variant="body1">
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
}

export default connect(null, { deleteExperience, deleteEducation })(ProfileTable);
