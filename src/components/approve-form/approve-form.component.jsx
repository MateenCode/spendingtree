import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "../../components/form-input/form-input.component";
import CoustomButton from "../../components/custom-button/custom-button.component";

import { ApproveContainer, Row } from "./approve-form.styles";

export class ApproveForm extends Component {
  state = {
    autoPurchasePrice: 0,
    autoMake: "",
    autoModel: "",
    userEstimatedYearlyIncome: 0,
    userEstimatedCreditScore: 0
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      autoPurchasePrice: 0,
      autoMake: "",
      autoModel: "",
      userEstimatedYearlyIncome: 0,
      userEstimatedCreditScore: 0
    });

    console.log(this.state);
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <ApproveContainer onSubmit={this.handleSubmit}>
        <Row>
          <FormInput
            label='Auto Purchase Price'
            placeholder='Price...'
            name='autoPurchasePrice'
            onBlur
            required
            onChange={this.handleChange}
            type='number'
          />
          <FormInput
            label='Auto Make'
            placeholder='Make...'
            name='autoMake'
            onBlur
            required
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <FormInput
            label='Auto Model'
            placeholder='Model...'
            name='autoModel'
            onBlur
            required
            onChange={this.handleChange}
          />
          <FormInput
            label='User Estimated Yearly Income'
            placeholder='Income...'
            name='userEstimatedYearlyIncome'
            onBlur
            required
            onChange={this.handleChange}
            type='number'
          />
        </Row>
        <Row>
          <FormInput
            label='  User Estimated Credit Score'
            placeholder='Number from 300-850...'
            name='userEstimatedCreditScore'
            onBlur
            required
            onChange={this.handleChange}
            type='number'
          />
        </Row>
        <CoustomButton type='submit'>Get Approved!</CoustomButton>
      </ApproveContainer>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ApproveForm);
