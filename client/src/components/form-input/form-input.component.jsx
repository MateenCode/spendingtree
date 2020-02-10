import React, { PureComponent } from "react";

import {
  FieldWrap,
  Label,
  FormInputContainer,
  Error
} from "./form-input.styles";

export class FormInput extends PureComponent {
  state = {
    isRequired: false,
    isEmailValid: true
  };

  onBlur = () => {
    this.setState({ isRequired: this.props.required });
  };

  emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  onChange = e => {
    this.props.onChange(e);
    if (this.props.email) {
      if (this.emailIsValid(e.target.value) || e.target.value.length < 1) {
        this.setState({ isEmailValid: true });
      } else {
        this.setState({ isEmailValid: false });
      }
    }
  };

  render() {
    const {
      type,
      email,
      name,
      label,
      disabled,
      value,
      additionalInputProps,
      placeholder,
      autoComplete
    } = this.props;

    return (
      <FieldWrap>
        {label && <Label>{label}</Label>}
        <FormInputContainer
          type={type}
          value={value}
          disabled={disabled}
          name={name}
          onBlur={() => this.onBlur()}
          autoComplete={autoComplete}
          onChange={e => this.onChange(e)}
          placeholder={placeholder}
          {...additionalInputProps}
        />
        {this.state.isRequired === true && !value && (
          <Error>This is a required field</Error>
        )}
        {!this.state.isEmailValid && email && <Error>Email Invalid</Error>}
      </FieldWrap>
    );
  }
}

export default FormInput;
