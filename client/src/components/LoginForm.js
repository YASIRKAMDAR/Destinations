import React from 'react';
import { Collapse, Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button, FormGroup, Form, Label, Input  } from 'reactstrap';

import Creditcard from './payment/Creditcard';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LoginForm extends React.Component {
    constructor (props) {
        super(props);
        this.togglecCard = this.togglecCard.bind(this);
        this.togglewUnion = this.togglewUnion.bind(this);
        var pageValid  = this.pageValid.bind(this);
        this.state = {
          collapsecCard: false,
          collapsewUnion: false,
          pageValid: false
        }
      }
      pageValid(val){
        this.setState({ pageValid: val});
      }
      togglecCard() {
        this.setState({ collapsecCard: !this.state.collapsecCard,
                        collapsewUnion: false});
      }
      togglewUnion() {
        this.setState({ collapsewUnion: !this.state.collapsewUnion,
                        collapsecCard: false});
      }
    render() {
        var pageValid = this.pageValid;
        return (
            <div className="paymentPage">
                <Row id="LoginBlock" className="comp-block">
                    <Col md="9" lg="9" sm="12" xs="12" className="order-lg-4 order-md-4 paymentBlock">
                        <b>Payment Methods</b>
                        <hr />
                        <div className="paymentMethodBlock" onClick={this.togglecCard}>
                            <a href="#Creditcard">Credit/Debit card</a>
                        </div>
                        <Collapse isOpen={this.state.collapsecCard}>
                            <Creditcard pageValid = {pageValid.bind(this)} />
                        </Collapse>
                        <hr />
                        <div className="paymentMethodBlock" onClick={this.togglewUnion}>
                            <a>Western Union</a>
                        </div>
                        <Collapse isOpen={this.state.collapsewUnion}>
                            <Card>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" />{' '}
                                                Pay at Western Union 
                                            </Label>
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                                <Row>
                                    <Col>
                                        <p>
                                        You can pay for your ticket at your nearest Western Union outlet that accepts QuickPay payments. You may only choose this option if you are paying in the country of departure. We`ll provide you with a prefilled Western Union QuickPay form that has a unique reference number for your booking. Please note that your payment must be made within 24 hours or your booking will be cancelled. You can also select this option if you`re not travelling but you wish to pay for the booking. Payment has to be made in AED currency at Western Union and they`ll charge you a transfer fee.
                                        </p>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        </Collapse>
                        <hr />                        
                    </Col>
                    <Col md="3" lg="3" sm="12" xs="12" className="paymentBlock order-lg-1 order-md-1">
                        <b>Service</b>
                        <hr />
                    </Col>     
                </Row>
                <Button className="input-block-level btn-block btn-lg" disabled={!this.state.pageValid} >Proceed to complete Payment</Button>
            </div>
        );
    }
};

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps, actions) (LoginForm);