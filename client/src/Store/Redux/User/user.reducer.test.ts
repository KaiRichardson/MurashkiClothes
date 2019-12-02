import { User } from 'Store/types';
import reducer, { UserState } from './user.reducer';
import * as types from './user.types';

describe('userReducer tests', () => {
  it(`should handle ${types.REQUEST_READ_USER_INFO}`, () => {
    //* Arrange
    const initialState: UserState = {
      id: '',
      username: '',
      loading: {
        login: false
      }
    };
    const expectedState: UserState = { ...initialState, id: '', username: '', loading: { login: true } };

    //* Act
    const result = reducer(initialState, { type: types.REQUEST_READ_USER_INFO });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.SUCCESS_READ_USER_INFO}`, () => {
    //* Arrange
    const testData: User = {
      id: 'testId',
      username: 'nichsecord'
    };
    const initialState: UserState = {
      id: '',
      username: '',
      loading: {
        login: true
      }
    };
    const expectedState: UserState = { ...initialState, ...testData, loading: { login: false } };

    //* Act
    const result = reducer(initialState, { type: types.SUCCESS_READ_USER_INFO, payload: testData });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.FAIL_READ_USER_INFO}`, () => {
    //* Arrange
    const initialState: UserState = {
      id: '',
      username: '',
      loading: {
        login: true
      }
    };
    const expectedState: UserState = { ...initialState, id: '', username: '', loading: { login: false } };

    //* Act
    const result = reducer(initialState, { type: types.FAIL_READ_USER_INFO, payload: 'Oops, something went wrong' });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.LOG_USER_OUT}`, () => {
    //* Arrange
    const initialState: UserState = {
      id: 'testId',
      username: 'nichsecord',
      loading: {
        login: false
      }
    };
    const expectedState: UserState = { ...initialState, id: '', username: '' };

    //* Act
    const result = reducer(initialState, { type: types.LOG_USER_OUT });

    //* Assert
    expect(result).toEqual(expectedState);
  });
});
