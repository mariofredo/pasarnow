import axios from "axios";
const baseUrl = "http://localhost:5050";
export function fetchSearchSuccess(payload) {
  return { type: "getSearch", payload };
}
export function loadingSearch(payload) {
  return { type: "loading", payload };
}
export const getSearch = (input) => {
  return (dispatch, getState) => {
    dispatch(loadingSearch(true));
    axios({
      method: "GET",
      url: `${baseUrl}/search?s=${input}`,
      headers: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6Ind3d0BtYWlsLmNvbSIsImlhdCI6MTY1NzYzNjgyM30.FibfV_MJvD7QpgjHW_QaFnRdbLVh1dM20wC34ZmUqMI",
      },
    })
      .then((response) => {
        dispatch(fetchSearchSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((_) => {
        setTimeout(() => {
          dispatch(loadingSearch(false));
        }, 2000);
      });
  };
};
export const getImage = (input) => {
  return (dispatch, getState) => {
    dispatch(loadingSearch(true));
    axios({
      method: "GET",
      url: `${baseUrl}/search/images?s=${input}`,
      headers: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6Ind3d0BtYWlsLmNvbSIsImlhdCI6MTY1NzYzNjgyM30.FibfV_MJvD7QpgjHW_QaFnRdbLVh1dM20wC34ZmUqMI",
      },
    })
      .then((response) => {
        dispatch(fetchSearchSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((_) => {
        setTimeout(() => {
          dispatch(loadingSearch(false));
        }, 2000);
      });
  };
};
export const getNews = (input) => {
  return (dispatch, getState) => {
    dispatch(loadingSearch(true));
    axios({
      method: "GET",
      url: `${baseUrl}/search/news?s=${input}`,
      headers: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6Ind3d0BtYWlsLmNvbSIsImlhdCI6MTY1NzYzNjgyM30.FibfV_MJvD7QpgjHW_QaFnRdbLVh1dM20wC34ZmUqMI",
      },
    })
      .then((response) => {
        dispatch(fetchSearchSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((_) => {
        setTimeout(() => {
          dispatch(loadingSearch(false));
        }, 2000);
      });
  };
};
