/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
export async function SetAuthTokenRequest(request) {
  request.headers.common.Accept = 'application/json';
  request.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return request;
}

export const CheckTokenExpired = (error) => {
  const { response: { status, data: { error: err } } } = error;
  
  if (status === 403) {
    localStorage.clear();
    window.location = '/';
  } else if (status === 500) alert(err)
  else return error;
};
