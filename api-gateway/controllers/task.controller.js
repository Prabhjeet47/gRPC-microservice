import tc from "../clients/taskClient.js";

export const createTask = (req, res) => {
  tc.AddTask(req.body, (err, response) => {
    if (err) {
      return res
        .status(500)
        .json({error: `internal server error ${err.message}`});
    }

    res.json(response);
  });
};

export const getAllTasks = (req, res) => {
  tc.GetTasks(req.body, (err, response) => {
    if (err) {
      return res
        .status(500)
        .json({error: `internal server error ${err.message}`});
    }

    res.json(response);
  });
};
