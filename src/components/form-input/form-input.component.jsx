import React, { PureComponent } from "react";

import { FieldWrap, Label, FormInputContainer } from "./form-input.styles";

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
      style,
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
          style={style}
          placeholder={placeholder}
          {...additionalInputProps}
        />
        {this.state.isRequired === true && !value && (
          <span>This is a required field</span>
        )}
        {!this.state.isEmailValid && email && <span>Email Invalid</span>}
      </FieldWrap>
    );
  }
}

export default FormInput;
