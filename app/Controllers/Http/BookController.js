"use strict";

const Book = use("App/Models/Book");

class BookController {
  index({ view }) {
    return view.render("welcome");
  }

  async listBook({ view }) {
    try {
      const book = await Book.all();
      console.log(book);

      return view.render("listBook", { books: book.toJSON() });
    } catch (err) {
      console.log(err);
      return view.render("listBook", { books: [] });
    }
  }

  async deleteBook({ params, response }) {
    try {
      const book = await Book.find(params.id);
      if (book === null) {
        return response.status(404).json({
          status: "error",
          message: "Buku tidak ditemukan",
        });
      }

      await book.delete();
      return response.status(200).json({
        status: "success",
        message: "Buku berhasil dihapus",
      });
    } catch (err) {
      console.log(err);
      return response.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat menghapus buku",
      });
    }
  }

  inputBook({ view }) {
    return view.render("inputBook");
  }

  async submitBook({ request, response }) {
    const data = request.only(["judul", "tahun_terbit", "deskripsi"]);
    await Book.create(data);

    return response.redirect("/list-book");
  }

  async editBook({ params, view }) {
    const book = await Book.find(params.id);
    if (!book) {
      return "Buku tidak ditemukan";
    }
    return view.render("editBook", { book });
  }

  async updateBook({ params, request, response }) {
    const book = await Book.find(params.id);
    if (!book) {
      return response.status(404).send("Buku tidak ditemukan");
    }
    const data = request.only(["judul", "tahun_terbit", "deskripsi"]);

    book.merge(data);
    await book.save();

    return response.redirect(`/edit-book/${params.id}`);
  }
}

module.exports = BookController;
