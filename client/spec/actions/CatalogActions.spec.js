import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'

import * as actions from '../../src/actions';
import * as types from '../../src/constants/ActionTypes';

describe('Catalog actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const fakeCatalog = [{ name: 'my name' }];

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should create action startFetchCatalog', () => {
    const fakeAction = {
      type: types.FETCH_CATALOG
    };
    expect(actions.startFetchCatalog).toEqual(fakeAction);
  });

  it('should create action FetchCatalogSuccess', () => {
    const fakeAction = {
      type: types.FETCH_CATALOG_SUCCESS,
      catalog: fakeCatalog
    };
    expect(actions.FetchCatalogSuccess(fakeCatalog)).toEqual(fakeAction);
  });

  it('should create action fetchCatalogFailure', () => {
    const fakeAction = {
      type: types.FETCH_CATALOG_FAILURE
    };
    expect(actions.fetchCatalogFailure).toEqual(fakeAction);
  });

  it('should create action fetchCatalog', () => {
    const fakeAction = [
      { type: types.FETCH_CATALOG },
      { type: types.FETCH_CATALOG_SUCCESS,
        catalog: fakeCatalog }
    ];
    const store = mockStore({ 
      loading: true,
      catalog: [] 
    });

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: fakeCatalog,
      });
    });

    store.dispatch(actions.fetchCatalog())
      .then((() => {
        expect(store.getActions()).toEqual(fakeAction);
      }));
  });
});
