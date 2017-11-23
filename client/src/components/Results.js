import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardImg  } from 'reactstrap';
//import resultimg from '../images/result-image.png';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Results extends React.Component {
    componentDidMount()
    {
        const search = this.props.location.search; 
        const params = new URLSearchParams(search);
        const destination = params.get('destination'); 
        const category = params.get('category');
        var data = {"destination": destination, "category": category};
        console.log("datareq" + data['destination']);
        this.props.getResults(data);
    }
    render() {
        switch (this.props.results)
        {
            case null:
              return  <p>No results yet</p>
            case false:
                return <p>No results to display</p>
            default:
                return (
                    <Row className="comp-block" id="resultsBlock">
                        {this.props.results.offpoints[0].offer.map((result, index) => (
                            <Col sm="6" key={index}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col sm="12"  xs="12" md="6" lg="6">
                                            <p className="price text-left">{result.title}</p>
                                            <p className="name text-left">{result.calloutsummary}</p>
                                            </Col>
                                            <Col sm="12"  xs="12" md="6" lg="6">
                                                <img src={"https://www.emirates.com/"+ result.thumbnail} className="img-fluid"/>
                                            </Col>  
                                        </Row>                                          
                                    </CardBody>
                                </Card>
                            </Col>
                         ))}
                    </Row>
                );
        }
        
    }
};


function mapStateToProps({results}) {
    return {results};
}

export default connect(mapStateToProps, actions) (Results);
