import { getInitialData } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { receivePolls } from '../actions/polls';
import { setAuthedUser } from '../actions/authedUser';

const AUTHED_ID = 'tylermcginnis';

//thunk
export function handleInitialData() {
  return dispatch => {
    // make async requests here
    return getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
