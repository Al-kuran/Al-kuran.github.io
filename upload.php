<?php
// Check if the form is submitted
if(isset($_POST['submit'])) {

    // Check if a file is selected
    if(isset($_FILES['video'])) {
        $file = $_FILES['video'];

        // Set file name and target directory
        $fileName = basename($file['name']);
        $targetDir = "uploads/";

        // Move file to target directory
        if(move_uploaded_file($file['tmp_name'], $targetDir . $fileName)) {
            echo "File uploaded successfully.";
        } else {
            echo "Error uploading file.";
        }
    } else {
        echo "No file selected.";
    }

}
?>