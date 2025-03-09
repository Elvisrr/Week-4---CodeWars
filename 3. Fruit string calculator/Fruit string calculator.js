const calculate = (str) => {
    const [n1, n2] = str.match(/\d+/g).map(Number);
    return str.includes("gains") ? n1 + n2 : n1 - n2;
  };
