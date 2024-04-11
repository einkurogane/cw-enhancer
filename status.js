app.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field is used to retrieve the uploaded file
    let uploadedVideo = req.files.videoUpload;

    // Use the mv() method to place the file somewhere on your server
    uploadedVideo.mv('/path/to/destination', function(err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});