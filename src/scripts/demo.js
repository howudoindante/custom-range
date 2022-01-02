const { SingleRange, MultiRange } = require("./range");

const range = new SingleRange(document.querySelector(".js-range"));
const range1 = new MultiRange(
    document.querySelector(".js-multi-range-left"),
    document.querySelector(".js-multi-range-right")
);