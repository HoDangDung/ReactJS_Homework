import fetcher from "./fetcher";

const movieAPI = {
  getBanners: async () => {
    const { data } = await fetcher.get("QuanLyPhim/LayDanhSachBanner");
    return data.content;
  },

  getMovies: async () => {
    const { data } = await fetcher.get("QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP01",
      },
    });

    return data.content;
  },

  getMovieDetails: (movieId) => {
    return fetcher.get("QuanLyPhim/LayThongTinPhim", {
      params: {
        maPhim: movieId,
      },
    });
  },
};

export default movieAPI;
