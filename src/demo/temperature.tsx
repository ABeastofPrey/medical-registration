import * as React from "react";

enum Scales {
  C = "Celsius",
  F = "Fahrenheit"
}

const toCelsius = celsius => (celsius * 9) / 5 + 32;

const toFahrenheit = fahrenheit => ((fahrenheit - 32) * 5) / 9;

const convert = converter => temperature => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = converter(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

const BoilingVerdict = props => {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water wiould not boil.</p>;
};

class TemperatureInput extends React.Component {
  public readonly props: {
    scale: Scales;
    temperature: string;
    onTemperatureChange: Function;
  };

  private changeHandler(event): void {
    this.props.onTemperatureChange(event.target.value);
  }

  public render(): any {
    const temp = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scale}</legend>
        <input value={temp} onChange={this.changeHandler.bind(this)} />
      </fieldset>
    );
  }
}

export class Calculator extends React.Component {
  public readonly state: {
    scale: Scales;
    temperature: string;
  };

  constructor(props) {
    super(props);
    this.state = {
      scale: Scales.C,
      temperature: ""
    };
  }

  private celsiusChangeHandler(tempe): void {
    this.setState({ scale: Scales.C, temperature: tempe });
  }

  private fahrenheitChangeHandler(tempe): void {
    this.setState({ scale: Scales.F, temperature: tempe });
  }

  public render(): any {
    const scale = this.state.scale;
    const tempe = this.state.temperature;
    const celsius = scale === Scales.C ? convert(toCelsius)(tempe) : tempe;
    const fahrenh = scale === Scales.F ? convert(toFahrenheit)(tempe) : tempe;
    return (
      <div>
        <TemperatureInput
          scale={Scales.C}
          temperature={celsius}
          onTemperatureChange={this.celsiusChangeHandler.bind(this)}
        />
        <TemperatureInput
          scale={Scales.F}
          temperature={fahrenh}
          onTemperatureChange={this.fahrenheitChangeHandler.bind(this)}
        />
        <BoilingVerdict celsius={this.state.temperature} />
      </div>
    );
  }
}
