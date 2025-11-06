/**
 * This middleware helps us validate incoming request data using Joi schemas.
 * 
 * The idea is simple:
 * - Before reaching the controller (like createBook or createAuthor),
 *   this middleware checks if the data sent by the user is valid.
 * - If the data is valid, the request continues to the next step.
 * - If not, it sends an error response right away — keeping our database safe
 *   from bad or incomplete data.
 */

export const validate = (schema) => {
  // We return a middleware function that Express will run before the controller
  return (req, res, next) => {
    // Validate the incoming request body using the provided Joi schema
    const { error } = schema.validate(req.body);

    // If Joi finds something wrong with the data (like missing fields or wrong types)
    if (error) {
      // We stop the request here and send a clear, human-friendly error response
      return res.status(400).json({
        status: "error",
        message: error.details[0].message // Joi gives detailed info about what went wrong
      });
    }

    // If everything looks good, we call `next()` to move on to the next step (the controller)
    next();
  };
};
