1 - routes/auth.js is missing await keyword before user.authenticate

2 - Routes/user.js patch route, deleted require admin from pathing a user route so that users can send patch request to update their own user information

3 - Routes/user.js delete route(line 109), missing await keyword before user.authenticate

4 - Routes/user.js patch route(line 109), added json schema to validate the req.body and ensure that admin field cannot be updated.

5 - middleware/auth.js replaced decode with verify.
