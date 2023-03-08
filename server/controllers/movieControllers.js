const getAllMovies = async (req, res) => {
    try {
        res.json("this is working");
    } catch (error) {
        console.log(error.message);
    }
};

export { getAllMovies };
