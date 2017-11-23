import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Pagehead extends React.Component {
    render() {
        switch (this.props.results)
        {
            case null:
              return  ( <div className="pageheadBlock">
                            <h1>status</h1>
                            <div className="text-content">
                            Destinations description
                            </div>  
                        </div>);
            case false:
                return  (<div className="pageheadBlock">
                            <h1>status</h1>
                            <div className="text-content">
                            Destinations description
                            </div>  
                        </div>);
            default:
                return (
                    <div className="pageheadBlock">
                            <h1>{this.props.results.offpoints[0].title}</h1>
                            <div className="text-content">
                            {this.props.results.offpoints[0].description}
                            </div>  
                        </div>);
        }

            
           
       
    };
};

function mapStateToProps({results}) {
    return {results};
}

export default connect(mapStateToProps, actions) (Pagehead);
