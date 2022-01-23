function NguoiDungServices() {
  this.mang = [];
  this.them = function (nd) {
    this.mang.push(nd);
  };

  this.layDS = function () {
    return axios({
      method: "get",
      url: "https://61e5711fc14c7a0017124c5d.mockapi.io/QLND",
    });
  };

  this.themND = function (nd) {
    return axios({
      method: "post",
      url: "https://61e5711fc14c7a0017124c5d.mockapi.io/QLND",
      data: nd,
    });
  };
  this.xoaND = function (id) {
    return axios({
      method: "delete",
      url: `https://61e5711fc14c7a0017124c5d.mockapi.io/QLND/${id}`,
    });
  };
  this.layChiTiet = function (id) {
    return axios({
      method: "get",
      url: `https://61e5711fc14c7a0017124c5d.mockapi.io/QLND/${id}`,
    });
  };
  this.capNhat = function (id, nd) {
    return axios({
      method: "put",
      url: `https://61e5711fc14c7a0017124c5d.mockapi.io/QLND/${id}`,
      data: nd,
    });
  };
}
