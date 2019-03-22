export const regPhone = phone => /^1[3-9]\d{9}$/.test(phone);
export const regEmail = email =>
  /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email);
export const regPass = password => /^[a-zA-Z_0-9]{6,20}$/.test(password);
