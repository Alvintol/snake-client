let connection;

const setupInput = conn => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
};

const handleUserInput = key => {
  switch (key) {
  case 'w': connection.write('Move: up');
    break;
  case 'a': connection.write('Move: left');
    break;
  case 's': connection.write('Move: down');
    break;
  case 'd': connection.write('Move: right');
    break;
  case 'l': connection.write('Say: meow');
    break;
  case '\u0003': process.exit();
  }
};

module.exports = { setupInput };