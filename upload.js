document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("upload-form");
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const fileInput = document.getElementById("file");

    const previewTitle = document.getElementById("preview-title");
    const previewDescription = document.getElementById("preview-description");
    const previewFile = document.getElementById("preview-file");

    fileInput.addEventListener("change", function () {
        const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : "No file chosen";
        document.getElementById("file-name").textContent = fileName;
        previewFile.textContent = fileName;
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Show Preview Data
        previewTitle.textContent = titleInput.value;
        previewDescription.textContent = descriptionInput.value;

        // Fake Submit (Later: Send to Backend)
        alert("Assignment Submitted Successfully!");
    });
});
