import React from "react";
import Select from "../Select";
import InputField from "../InputField";
import exchangeratesapi from "../../api/exchangeRates";

class Converter extends React.Component {
  state = {
    result: 0,
    rate: 0,
    inputDevise: "EUR",
    outputDevise: "GBP",
  };
  options = ["EUR", "CHF", "GBP", "USD"];

  convertCurrencies = async () => {
    const response = await exchangeratesapi.get("/latest", {
      params: {
        base: this.state.inputDevise,
        symbols: this.state.outputDevise,
      },
    });

    this.setState({ rate: response.data.rates[this.state.outputDevise] });
  };

  componentDidMount() {
    this.convertCurrencies();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>Convertisseur</h3>
          <div className="col s8">
            <div className="row">
              <Select
                selectName="inputDevises"
                selectDefault={this.state.inputDevise}
                options={this.options}
              />
              <Select
                selectName="outputDevises"
                selectDefault={this.state.outputDevise}
                options={this.options}
              />
            </div>
            <div className="row">
              <InputField inputName="amount" inputLabel="Montant" />
              <div className="input-field col s12">
                <h5>Résultat : {this.state.rate ? this.state.rate : 0}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Converter;
