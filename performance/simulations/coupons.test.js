import { group } from "k6";
import Coupons from "../request/coupons.request.js";

export default function () {
  let coupons = new Coupons();
  group("List coupons", () => {
    coupons.getList();
  });

  group("Get specific coupon", () => {
    coupons.getCoupon();
  });
}
