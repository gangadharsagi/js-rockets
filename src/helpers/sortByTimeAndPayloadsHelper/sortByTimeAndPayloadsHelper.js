import groupBy from 'lodash/groupBy';
import { sortByDateHelper } from '../sortByDateHelper/sortByDateHelper';

/**
 * This helper is used to group the nasa customers using payloads_count and then
 * sort by using date time
 *
 * @param {Array} filteredNasaCustomers - nasaCustomer from the data
 * @returns {Array} - updated data
 */
export const sortByTimeAndPayloadsHelper = (filteredNasaCustomers) => {
  const nasaCustomers = groupBy(filteredNasaCustomers, 'payloads_count');

  return Object.values(nasaCustomers).reduce(
    (prev, nasaCustomer) =>
    [...prev, ...sortByDateHelper(nasaCustomer)], [])
    .reverse();
};
