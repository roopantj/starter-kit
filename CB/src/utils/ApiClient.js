// TODO Q2
// TODO Q3
const fetchSidebarData = () => {
  //const api = new ApiClient();
  ApiClient.setHeader("Authorization", "Authorization");
  return ApiClient.get("/sidebar");
};

class ApiClient {
  static headers = new Headers();

  static get(url) {
    return fetch(url, { headers: ApiClient.headers })
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          console.log("Whoops! Something went wrong:", error.message);
        }
      );
  }

  static setHeader(headerKey, headerValue) {
    ApiClient.headers.append(headerKey, headerValue);
  }
}

export { fetchSidebarData };
