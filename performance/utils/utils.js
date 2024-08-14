export default class Utils {
  static getBaseUrl() {
    return "http://lojaebac.ebaconline.art.br/wp-json/wc/v3";
  }

  static getHeaders() {
    const headers = {
      Authorization: `Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy`,
      "Content-Type": "application/json",
      Accept: "*/*",
    };

    return headers;
  }
}
