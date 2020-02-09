import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "../../components/form-input/form-input.component";

import { ApproveContainer } from "./approve-form.styles";

export class ApproveForm extends Component {
  state = {
    autoPurchasePrice: 0,
    autoMake: "",
    autoModel: "",
    userEstimatedYearlyIncome: 0,
    userEstimatedCreditScore: 0,
    error: {}
  };

  render() {
    return (
      <ApproveContainer>
        <FormInput label='Auto Purchase Price' placeholder='Price...' />
        <FormInput label='Auto Purchase Price' placeholder='Price...' />
      </ApproveContainer>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ApproveForm);
