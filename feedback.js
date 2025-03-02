async function getAIFeedback() {
    let assignmentText = document.getElementById("assignment-input").value;

    if (!assignmentText.trim()) {
        alert("Please enter some text!");
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:8000/get-feedback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: assignmentText }),
        });

        const data = await response.json();
        document.getElementById("feedback-output").innerText = data.feedback || "No feedback received.";
    } catch (error) {
        console.error("Error fetching AI feedback:", error);
        document.getElementById("feedback-output").innerText = "Error fetching feedback. Please try again.";
    }
}
