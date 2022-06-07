export const formatDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const getFullYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
};

export const getCurrentHour = () => {
  const date = new Date();
  const hour = date.getHours();
  return hour;
};

export const getDateWithHour = () => {
  const dateDiv = document.getElementById("date");

  setInterval(
    () => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
    
      dateDiv ? dateDiv.innerHTML = `${("0" + day).slice(-2)}/${("0" + month).slice(-2)}/${year} - ${(
        "0" + hour
      ).slice(-2)}:${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}` : "";
    }
  , 1000)
};
