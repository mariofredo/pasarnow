import axios from "axios";
const baseUrl = "http://localhost:5050";
export function fetchSearchSuccess(payload) {
  return { type: "getSearch", payload };
}
export function fetchImagesSuccess(payload) {
  return { type: "getImages", payload };
}
export function fetchNewsSuccess(payload) {
  return { type: "getNews", payload };
}
export function fetchRLSuccess(payload) {
  return { type: "getReadingLists", payload };
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
        access_token: localStorage.getItem("access_token"),
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
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        dispatch(fetchImagesSuccess(response.data));
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
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        // console.log(response);
        dispatch(fetchNewsSuccess(response.data));
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

export const getReadingLists = () => {
  return (dispatch, getState) => {
    dispatch(loadingSearch(true));
    axios({
      method: "GET",
      url: `${baseUrl}/readinglist`,
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        dispatch(fetchRLSuccess(response.data));
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

export const postReadingList = (link, title) => {
  return (dispatch, getState) => {
    return axios({
      method: "POST",
      url: `${baseUrl}/readinglist`,
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
      data: {
        link,
        title,
      },
    });
  };
};
export const deleteReadingList = (id) => {
  return (dispatch, getState) => {
    console.log(id);
    axios({
      method: "DELETE",
      url: `${baseUrl}/readinglist/${id}`,
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((_) => {
        dispatch(getReadingLists());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const postLogin = (email, password) => {
  return (dispatch, getState) => {
    return axios({
      method: "POST",
      url: `${baseUrl}/users/login`,
      data: {
        email,
        password,
      },
    });
  };
};
