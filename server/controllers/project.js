
var Project = require('../models/project');

// Create endpoint /api/projects for POSTS
exports.postProjects = function(req, res) {
  // Create a new instance of the Project model
  var project = new Project();

  // Set the project properties that came from the POST data
  project.name = req.body.name;
  project.description = req.body.description;
  project.imageUrl = req.body.imageUrl;

  // Save the project and check for errors
  project.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'Project added to the db!', data: project });
  });
};

// Create endpoint /api/projects for GET
exports.getProjects = function(req, res) {
  // Use the Project model to find all project
  Project.find(function(err, projects) {
    if (err)
      return res.send(err);

    res.json(projects);
  });
};

// Create endpoint /api/projects/:project_id for GET
exports.getProject = function(req, res) {
  // Use the Project model to find a specific project
  Project.findById(req.params.project_id, function(err, project) {
    if (err)
      return res.send(err);

    res.json(project);
  });
};

// Create endpoint /api/projects/:project_id for PUT
exports.putProject = function(req, res) {
  // Use the Project model to find a specific project
  Project.findById(req.params.project_id, function(err, project) {
    if (err)
      return res.send(err);

    // Update the existing project 
    project.name = req.body.name;
    project.description = req.body.description;
    project.imageUrl = req.body.imageUrl;


    // Save the project and check for errors
    project.save(function(err) {
      if (err)
        return res.send(err);

      res.json(project);
    });
  });
};

// Create endpoint /api/projects/:project_id for DELETE
exports.deleteProject = function(req, res) {
  // Use the project model to find a specific project and remove it
  Project.findByIdAndRemove(req.params.project_id, function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'Project removed from the locker!' });
  });
};