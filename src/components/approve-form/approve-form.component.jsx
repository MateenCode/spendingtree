import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "../../components/form-input/form-input.component";

import { ApproveContainer, Row } from "./approve-form.styles";

export class ApproveForm extends Component {
  state = {
    autoPurchasePrice: 0,
    autoMake: "",
    autoModel: "",
    userEstimatedYearlyIncome: 0,
    userEstimatedCreditScore: 0,
    error: {}
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <ApproveContainer>
        <Row>
          <FormInput
            label='Auto Purchase Price'
            placeholder='Price...'
            name='price'
            onBlur
            required
            onChange={this.handleChange}
          />
          <FormInput
            label='Auto Make'
            placeholder='Make...'
            name='make'
            onBlur
            required
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <FormInput
            label='Auto Model'
            placeholder='Model...'
            name='model'
            onBlur
            required
            onChange={this.handleChange}
          />
          <FormInput
            label='User Estimated Yearly Income'
            placeholder='Income...'
            name='income'
            onBlur
            required
            onChange={this.handleChange}
          />
        </Row>
        <Row>
          <FormInput
            label='  User Estimated Credit Score'
            placeholder='Score...'
            name='score'
            onBlur
            required
            onChange={this.handleChange}
          />
        </Row>
      </ApproveContainer>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ApproveForm);
