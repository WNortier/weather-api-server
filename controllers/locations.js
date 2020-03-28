exports.getLocations = (req, res, next) => {
    res.status(200).json({
        locations: [{title: 'First Location', content: 'South Africa'}]
    });
};

exports.addLocation = (req, res, next) => {
    // Add location to database
    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        message: 'Location added successfully',
        location: {id: new Date().toISOString(), title: title, content: content }
    });
};