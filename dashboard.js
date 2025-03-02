document.addEventListener("DOMContentLoaded", function () {
    // Simulated user name (can be retrieved from backend later)
    let userName = "John Doe";
    document.getElementById("user-name").textContent = userName;

    // Simulated data (later, this will come from a database)
    let assignments = [
        { name: "Math Homework", submittedBy: "Alice", status: "Pending", feedback: "N/A" },
        { name: "Science Project", submittedBy: "Bob", status: "Graded", feedback: "Excellent work!" },
        { name: "History Essay", submittedBy: "Charlie", status: "Pending", feedback: "N/A" },
        { name: "Physics Lab", submittedBy: "David", status: "Graded", feedback: "Needs improvement." }
    ];

    // Populate assignment table
    let tableBody = document.getElementById("assignment-table");
    assignments.forEach(assignment => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${assignment.name}</td>
            <td>${assignment.submittedBy}</td>
            <td>${assignment.status}</td>
            <td>${assignment.feedback}</td>
        `;
        tableBody.appendChild(row);
    });

    // Update dashboard numbers dynamically
    let pendingCount = assignments.filter(a => a.status === "Pending").length;
    let gradedCount = assignments.filter(a => a.status === "Graded").length;
    let feedbackCount = assignments.filter(a => a.feedback !== "N/A").length;

    document.getElementById("pending-count").textContent = pendingCount;
    document.getElementById("graded-count").textContent = gradedCount;
    document.getElementById("feedback-count").textContent = feedbackCount;
});
