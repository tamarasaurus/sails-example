sails-example
=============

This is super basic example of how to use sails.js to make a simple model and a form that creates a record for that model.


The model 'Submission' has the following attributes:
```javascript
  id, name, email, latitude, longitude, postcode
```

In ```api/models/Submission.js``` the attributes and validation requirements are defined


The controller for the model is at ```api/controllers/SubmissionController.js``` and has one example function to delete all records for the Submission model. 

There's a simple form at ``` views/form.ejs ``` that posts to submission/create defined in ```config/routes.js```: 

```javascript
  '/form': {
    view: 'form'
  }
```

Mongodb is used as the database ([sails-mongo](https://github.com/balderdashy/sails-mongo)) and is configured in ```config/adapters.js```
