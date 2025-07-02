import uc from "../clients/userClient.js";

export const registerUser = (req, res) => {
  uc.Register(req.body, (err, response) => {
    if (err) {
      return res
        .status(500)
        .json({error: `internal server error ${err.message}`});
    }

    res.json(response);
  });
};

export const loginUser = (req, res) => {
  uc.Login(req.body, (err, response) => {
    if (err) {
      return res
        .status(500)
        .json({error: `internal server error ${err.message}`});
    }

    res.json(response);
  });
};
