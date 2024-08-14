import http from "k6/http";
import Utils from "../utils/utils.js";
import { check } from "k6";

export default class Coupons {
  #listResponse;
  #specificCouponResponse;

  getList() {
    const headers = Utils.getHeaders();
    let response = http.get(`${Utils.getBaseUrl()}/coupons`, {
      headers,
    });

    this.#listResponse = response.json();

    check(response, {
      "status deve ser 200": (r) => r.status == 200,
    });
  }

  getCoupon() {
    const headers = Utils.getHeaders();
    const couponId = 5058;

    let response = http.get(`${Utils.getBaseUrl()}/coupons/${couponId}`, {
      headers,
    });

    this.#specificCouponResponse = response.json();

    check(response, {
      "status deve ser 200": (r) => r.status == 200,
    });
  }

  getListResponse() {
    return this.#listResponse;
  }

  getCouponResponse() {
    return this.#specificCouponResponse;
  }
}
