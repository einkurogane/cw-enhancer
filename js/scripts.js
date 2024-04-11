document.getElementById('uploadBtn').addEventListener('click', function() {
    var videoFile = document.getElementById('videoUpload').files[0];
    // Validate file input and handle the video file upload process
});

document.addEventListener('DOMContentLoaded', (event) => {
    const el = document.getElementById('yourElementId');
    if (el) {
        el.addEventListener('click', yourEventHandler);
    }
});

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

// Inside the load event listener
xhr.addEventListener('load', function() {
  if (xhr.status == 200) {
    swal('Success!', 'File uploaded successfully!', 'success');
  } else {
    swal('Failed!', 'File upload failed.', 'error');
  }
});

function uploadFile(file) {
  const xhr = new XMLHttpRequest();
  const formData = new FormData();
  formData.append('file', file);

  // Event listener for upload progress
  xhr.upload.addEventListener('progress', function(e) {
    if (e.lengthComputable) {
      const percentComplete = (e.loaded / e.total) * 100;
      console.log(percentComplete + '% uploaded');
      // Update the progress bar with the percentage
    }
  });

  // Event listener for completion of upload
  xhr.addEventListener('load', function() {
    if (xhr.status == 200) {
      console.log('Upload complete!');
      // Handle success
    } else {
      console.log('Upload failed.');
      // Handle failure
    }
  });

  xhr.open('POST', '/upload', true);
  xhr.send(formData);
}
