import get from 'lodash/get';

/**
 * This helper is used to filter the nasa customers with 2018 launch year
 *
 * @param {Array} customers - payload data from the data
 * @param {string} launchYear - launch year for rockets
 * @returns {boolean} - true or false
 */
export const getNasaCustomersHelper = (customers, launchYear) =>
  customers.map(customer =>
      get(customer, 'customers'), [])
    .join()
    .indexOf('NASA') > -1
  && launchYear === '2018';
