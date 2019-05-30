import get from 'lodash/get';
import { getNasaCustomersHelper } from '../getNasaCustomersHelper/getNasaCustomersHelper';

/**
 * This helper is used to format the data and also filter the nasa customers
 * with 2018 launch year and provide the new array with required fields.
 *
 * @param {Array} data - data from the response
 * @returns {Array} - updated data
 */
export const getFormattedDataHelper = (data) => {
  const formattedData = data.map(item => ({
    flight_number: get(item, 'flight_number', ''),
    mission_name: get(item, 'mission_name', ''),
    payloads_count: get(item, 'rocket.second_stage.payloads', []).length,
    date: get(item, 'launch_date_utc', ''),
    launch_year: get(item, 'launch_year', ''),
    nasaCustomers:
      getNasaCustomersHelper(
        get(item, 'rocket.second_stage.payloads', []),
        get(item, 'launch_year', '')),
  }));

  return formattedData.filter(item => item.nasaCustomers);
};
