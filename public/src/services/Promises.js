export default class PromiseService {
  getDataAsPromise(data, errMessage) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (data.length > 0) {
          res(data);
        } else {
          rej(errMessage);
        }
      }, 1000);
    });
  }
}
