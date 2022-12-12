const generateId = (len?: number): string => {
  const list = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ123456789';
  let res = '';
  for (let i = 0; i < (len || 20); i++) {
    const rnd = Math.floor(Math.random() * list.length);
    res += list.charAt(rnd);
  }

  return res;
};

export default generateId;
