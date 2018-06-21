import axios from 'axios';

import * as types from '../constants/ActionTypes';

export const startFetchCatalog = {
  type: types.FETCH_CATALOG
};

export const FetchCatalogSuccess = catalog => {
  return {
    type: types.FETCH_CATALOG_SUCCESS,
    catalog
  }
};

export const fetchCatalogFailure = {
  type: types.FETCH_CATALOG_FAILURE
};

export const fetchCatalog = () => {
  const request = axios.get('/api/phones');
  return function (dispatch) {
    dispatch(startFetchCatalog);
    return request
      .then(res => dispatch(FetchCatalogSuccess(res.data)))
      .catch(e => dispatch(fetchCatalogFailure));
      
  };
};

export const getInfoDetail = id => {
  return {
    type: types.GET_INFO_DETAIL,
    currentId: id
  }
};
