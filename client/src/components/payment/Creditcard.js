import React from 'react';
import { Collapse, Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button, FormGroup, Form, Label, Input  } from 'reactstrap';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Creditcard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          cardnumber: '',
          cvv: '',
          formErrors: {cardnumberError: '', cvvError: ''},
          cardnumberValid: false,
          cvvValid: false,
          formValid: false
        }
      }
      validateUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
                      () => { this.validateField(name, value) });
      }
      validateField(fieldName, value) {
            let fieldValidationErrors = this.state.formErrors;    
            let cardnumberValid = this.state.cardnumberValid;
            let cvvValid = this.state.cvvValid;

            switch(fieldName) {
            case 'cardnumber':
                cardnumberValid = value.trim().length > 0;
                if(!cardnumberValid) {
                    fieldValidationErrors.cardnumberError = cardnumberValid ? '' : 'Required field!';
                    return;
                }
                cardnumberValid = !isNaN(value);
                if(!cardnumberValid) {
                    fieldValidationErrors.cardnumberError = cardnumberValid ? '' : 'Invalid field!';
                    return;
                }
                cardnumberValid = true;
                fieldValidationErrors.cardnumberError = '';
                break;
            case 'cvv':
                cvvValid = value.length > 0;
                if(!cvvValid) {
                    fieldValidationErrors.cvvError = cvvValid ? '' : 'Required field!';
                    return;
                }
                cvvValid = !isNaN(value);
                if(!cvvValid) {
                    fieldValidationErrors.cvvError = cvvValid ? '' : 'Invalid field!';
                    return;
                }
                cvvValid = true;
                fieldValidationErrors.cvvError = '';
                break;
            default:
                break;
        }
        this.setState({ formErrors: fieldValidationErrors,
            cardnumberValid: cardnumberValid,
            cvvValid: cvvValid
            }, this.validateForm);
      }
      
      validateForm() {
        let isFormValid =  this.state.cardnumberValid && this.state.cvvValid;
        this.setState({ formValid: isFormValid});
        this.props.pageValid(isFormValid);
      }
    errorClass(error) {
        return(error.length === 0 ? '' : 'error');
     }
      
     lookupUser(event) {
        if(this.state.formValid) {
        var data = {cardnumber: this.state.cardnumber, cvv: this.state.cvv};
         this.props.loginUser(data);
        }
     }
    
    render() {
        var pageValid  =   this.props.pageValid;
        return (
            <Row>
                <Col lg="8" md="10">
                    <Card>
                    <CardBody>
                    <Form>
                        <div id="cardDetails">
                            <div>
                                <b>Card details:</b>
                            </div>
                            <FormGroup className={this.errorClass(this.state.formErrors.cardnumberError)}>
                                <Row>
                                    <Col sm="6" className="ml-auto error-message">
                                        <div  className="float-right">{this.state.formErrors.cardnumberError}</div>
                                    </Col>
                                </Row>
                                <Input 
                                type="text"  name="cardnumber" id="cardnumber" className="form-control-lg" placeholder="Card number" maxlength="19"
                                onChange={(event) => this.validateUserInput(event)} onBlur={(event) => this.validateUserInput(event)} value={this.state.username}  />
                                <Label for="cardnumber" className="font-italic helper-label">Card number*</Label>
                            </FormGroup>
                        
                            <div>
                                <b>Expiry date</b>
                            </div>
                            <Row>
                                <Col lg="7" md="7">
                                    <FormGroup>
                                        <Input type="select" name="monthSelect" id="monthSelect" className="input-lg">
                                            <option defaultValue disabled hidden>Month</option>
                                            <option value="1">January</option>
                                            <option value="2">February</option>
                                            <option value="3">March</option>
                                            <option value="4">April</option>
                                            <option value="5">May</option>
                                            <option value="6">June</option>
                                            <option value="7">July</option>
                                            <option value="8">August</option>
                                            <option value="9">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </Input>
                                        <Label for="monthSelect" className="font-italic helper-label">Month*</Label>
                                    </FormGroup>
                                </Col>
                                <Col lg="5" md="5">
                                    <FormGroup>
                                        <Input type="select" name="yearSelect" id="yearSelect" className="input-lg">
                                            <option defaultValue disabled hidden>Year</option>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                            <option>2021</option>
                                            <option>2022</option>
                                            <option>2023</option>
                                            <option>2024</option>
                                            <option>2025</option>
                                            <option>2026</option>
                                            <option>2027</option>
                                            <option>2028</option>
                                            <option>2029</option>
                                        </Input>
                                        <Label for="yearSelect" className="font-italic helper-label">Year*</Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup className={'col-sm-10 col-md-10 col-lg-10 col-xs-12 pw0 ' + this.errorClass(this.state.formErrors.cvvError)}>
                                <Row>
                                    <Col sm="6" className="ml-auto error-message">
                                        <div  className="float-right">{this.state.formErrors.cvvError}</div>
                                    </Col>
                                </Row>
                                <Input type="password" name="cvv" id="cvv" className="form-control-lg" placeholder="cvv" maxlength="4"
                                onChange={(event) => this.validateUserInput(event)} onBlur={(event) => this.validateUserInput(event)} value={this.state.cvv}  />
                                <Label for="cvv" className="font-italic helper-label">cvv*</Label>
                            </FormGroup>
                            <FormGroup >
                                <Row>
                                    <Col sm="6" className="ml-auto error-message">
                                        <div  className="float-right"></div>
                                    </Col>
                                </Row>
                                <Input 
                                type="text"  name="firstname" id="firstname" className="form-control-lg" placeholder="Cardholder`s first name"/>
                                <Label for="firstname" className="font-italic helper-label">Cardholder`s first name*</Label>
                            </FormGroup>
                            <FormGroup >
                                <Row>
                                    <Col sm="6" className="ml-auto error-message">
                                        <div  className="float-right"></div>
                                    </Col>
                                </Row>
                                <Input 
                                type="text"  name="lastname" id="lastname" className="form-control-lg" placeholder="Cardholder`s last name"/>
                                <Label for="lastname" className="font-italic helper-label">Cardholder`s last name*</Label>
                            </FormGroup>
                        </div>
                        <div id="AddressDetails">
                            <div>
                                <b>Billing address:</b>
                            </div>
                            <FormGroup>
                                <Input type="select" name="countrySelect" id="countrySelect" className="input-lg">
                                    <option defaultValue disabled hidden>Select a country</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </Input>
                                <Label for="countrySelect" className="font-italic helper-label">Select a country*</Label>
                            </FormGroup>
                            <FormGroup >
                                <Row>
                                    <Col sm="6" className="ml-auto error-message">
                                        <div  className="float-right"></div>
                                    </Col>
                                </Row>
                                <Input 
                                type="text"  name="Address1" id="Address1" className="form-control-lg" placeholder="Address 1"/>
                                <Label for="Address1" className="font-italic helper-label">Address 1*</Label>
                            </FormGroup>
                            <FormGroup >
                                <Row>
                                    <Col sm="6" className="ml-auto error-message">
                                        <div  className="float-right"></div>
                                    </Col>
                                </Row>
                                <Input 
                                type="text"  name="Address2" id="Address2" className="form-control-lg" placeholder="Address 2"/>
                                <Label for="Address2" className="font-italic helper-label">Address 2</Label>
                            </FormGroup>
                            <FormGroup >
                                <Row>
                                    <Col sm="6" className="ml-auto error-message">
                                        <div  className="float-right"></div>
                                    </Col>
                                </Row>
                                <Input 
                                type="text"  name="Address2" id="Address2" className="form-control-lg" placeholder="Address 3"/>
                                <Label for="Address2" className="font-italic helper-label">Address 3</Label>
                            </FormGroup>
                            <FormGroup >
                                <Row>
                                    <Col sm="6" className="ml-auto error-message">
                                        <div  className="float-right"></div>
                                    </Col>
                                </Row>
                                <Input 
                                type="text"  name="city" id="Address2" className="form-control-lg" placeholder="city"/>
                                <Label for="city" className="font-italic helper-label">City/Town</Label>
                            </FormGroup>
                        </div>
                    </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        );
    }
};

export default connect(null, actions) (Creditcard);