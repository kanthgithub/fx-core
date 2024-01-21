import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { Root } from './genesis-types';
import axios from 'axios';

async function fetchValidatorAddresses(): Promise<string[]> {

  const response = await axios.get('https://fx-json.functionx.io:26657/genesis');
  const data = response.data as Root;

    const validatorAddresses: string[] = [];
    data.result.genesis.app_state.genutil.gen_txs.forEach(genTx => {
        genTx.body.messages.forEach(message => {
            if (message.validator_address) {
                validatorAddresses.push(message.validator_address);
            }
        });
    });

    return validatorAddresses.slice(0, 20);
}

async function writeValidatorAddressesToCsv(validatorAddresses: string[]): Promise<void> {
    const csvWriter = createCsvWriter({
        path: 'genesis_validators.csv',
        header: [{ id: 'validator_address', title: 'VALIDATOR_ADDRESS' }],
    });

    const records = validatorAddresses.map(validator_address => ({ validator_address }));

    await csvWriter.writeRecords(records);
}

fetchValidatorAddresses()
    .then(validatorAddresses => {
        console.log(validatorAddresses);
        return writeValidatorAddressesToCsv(validatorAddresses);
    })
    .catch(error => console.error(error));