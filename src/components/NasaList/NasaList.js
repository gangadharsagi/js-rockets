import React from 'react';
import { DATA } from '../../constants/DATA';
import { getInverseChronologicalOrderHelper } from '../../helpers/getInverseChronologicalOrderHelper';
import './nasa-list.css';

export class NasaList extends React.Component {

  state= {
    nasaList: '',
  };

  componentDidMount() {
    this.setState({
      nasaList: JSON.stringify(
        getInverseChronologicalOrderHelper(DATA), undefined, 2),
    })
  }

  render() {
    return (
      <pre className='jsonViewer'>
        {this.state.nasaList}
      </pre>
    );
  }
};
