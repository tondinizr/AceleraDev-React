"use strict";

let sequenciaFibo = [0, 1];

const fibonacci = () => {
  const limite = 350;
  while (sequenciaFibo[sequenciaFibo.length - 1] < limite) {
    sequenciaFibo.push(
      sequenciaFibo[sequenciaFibo.length - 1] +
        sequenciaFibo[sequenciaFibo.length - 2]
    );
  }
  return sequenciaFibo;
};

const isFibonnaci = (num) => {
  return sequenciaFibo.includes(num);
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
