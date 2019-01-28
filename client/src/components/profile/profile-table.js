import React, { Component, Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { deleteExperience, deleteEducation } from '../../actions/profileActions'

import isEmpty from '../../validation/is-empty';
import ProfileExpansion from './profile-expansion'
import MediaQuery from 'react-responsive'

import Moment from 'react-moment'

const styles = (theme) => ({
	root: {
		marginBottom: '12px',
    marginTop:'24px'
	},
  tablecell: {
    textAlign:'center',
    paddingRight: '8px',
    paddingLeft: '8px',
  }
})

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
    const {classes, title, header, data, type} = this.props
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
      <Fragment>
        <MediaQuery query="(min-device-width: 511px)"> 
          <Grid item xs={12}>
          <Typography align="left" color="primary" variant="h5" style={{marginTop:'24px'}}>
              {title}
            </Typography>
            <Table>
              <TableHead>
                <TableRow >
                  {header.map(h => (
                  <TableCell className={classes.tablecell} key={h}>{h}</TableCell>
                    ))}
                </TableRow>
              </TableHead>
              <TableBody>
                  {!isEmpty(data) ? 
                    data.map(d => (
                      <TableRow key={d._id}>
                        <TableCell className={classes.tablecell}>{d[info[0]]}</TableCell>
                        <TableCell className={classes.tablecell}>{d[info[1]]}</TableCell>
                        <TableCell className={classes.tablecell}><Moment format="YYYY/MM/DD">{d.from}</Moment> - {d.current ? 'Current':<Moment format="YYYY/MM/DD">{d.to}</Moment>}</TableCell>
                        <TableCell className={classes.tablecell}>
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
        </MediaQuery>
        <MediaQuery query="(max-device-width: 510px)">
            <Typography align="left" color="primary" variant="h5" style={{marginTop:'24px'}}>
              {title}
            </Typography>
            {!isEmpty(data) ? 
                    data.map(d => (
                      <ProfileExpansion title={d[info[0]]}>
                        <Typography color="primary" variant="body1">
                        {d[info[1]]}               
                        </Typography>
                        <Typography color="primary" variant="body1">
                        <Moment format="YYYY/MM/DD">{d.from}</Moment> - {d.current ? 'Current':<Moment format="YYYY/MM/DD">{d.to}</Moment>}              
                        </Typography>
                        <Button
                              size="medium"
                              variant="contained" 
                              color="secondary"
                              onClick={() => this.handleDelete(type, d._id)}>
                              Delete
                            </Button>
                      </ProfileExpansion>))
                    :
                      <Grid container justify="center" style={{paddingTop:'12px', paddingBottom:'12px'}}>
                        <Typography color="primary" variant="body1">
                        No information provided!               
                        </Typography>
                      </Grid>
                  }
        </MediaQuery>
      </Fragment>
    );
  }
}

export default connect(null, { deleteExperience, deleteEducation })(withStyles(styles)(ProfileTable));
