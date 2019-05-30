import { sortByTimeAndPayloadsHelper } from '../sortByTimeAndPayloadsHelper';
import { getFormattedDataHelper } from '../getFormattedDataHelper';

/**
 * This helper is used to format the data and also filter the nasa customers
 * with 2018 launch year and then sort the values by inverse chronological order
 * with the exception that those that carried more payloads that should appear
 * first
 *
 * @param {Array} data - data from the response
 * @returns {Array} - updated data
 */
export const getInverseChronologicalOrderHelper = (data) =>
  sortByTimeAndPayloadsHelper(getFormattedDataHelper(data));
