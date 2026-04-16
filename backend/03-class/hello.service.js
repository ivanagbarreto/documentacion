const hello = () => {
  return "Hello world";
};

const ping = () => {
  return "pong";
};

const serviciosA = {
  hello: () => {
    return "Hello world";
  },
  ping: () => {
    return "pong";
  },
};
const serviciosA2 = {
  hello: () => {
    return "Hello world";
  },
  ping: () => {
    return "pong";
  },
};

class ServiciosB {
  hello = () => {
    return "Hello world";
  };
  ping = () => {
    return "pong";
  };
}

const serviciosB = new ServiciosB();
const serviciosB2 = new ServiciosB();
//module.exports = servicios1;

module.exports = servicios2;

//module.exports = {hello,ping};
