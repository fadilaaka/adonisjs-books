"use strict";

class TestingController {
  index({ request, response }) {
    const data = request.get();
    console.log(data);
    return true;
  }
  create({ request, response }) {
    // const data = request.post();
    // const data = request.only(["nama", "jurusan"]);
    // const data = request.except(["nama", "jurusan"]);
    const nama = request.input("nama", "test nama default");
    console.log(nama);
    return true;
  }
  update({ request, response }) {
    return "Ini method update";
  }
  delete({ request, response }) {
    return "Ini method delete";
  }
}

module.exports = TestingController;
