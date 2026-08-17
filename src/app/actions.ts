"use server";

// We use the simpler Google Apps Script Web App method.
const GOOGLE_WEB_APP_URL = process.env.GOOGLE_WEB_APP_URL;

export async function submitToGoogleSheet(data: { name: string; email: string; excitement: string }) {
  if (!GOOGLE_WEB_APP_URL) {
    console.error("Missing GOOGLE_WEB_APP_URL in .env.local");
    return { success: false, error: "Server configuration error" };
  }

  try {
    const response = await fetch(GOOGLE_WEB_APP_URL, {
      method: "POST",
      body: JSON.stringify(data),
      // Important: Google Apps Script Web Apps often ignore Content-Type or fail CORS preflight if set to application/json on clients, 
      // but since we are doing this server-side, it works flawlessly.
    });
    
    // Google Apps Script usually returns a 200 or 302 redirect. fetch follows redirects automatically.
    if (response.ok) {
       return { success: true };
    } else {
       return { success: false, error: "Failed to submit to spreadsheet." };
    }
  } catch (error) {
    console.error("Error writing to Google Sheets:", error);
    return { success: false, error: "Failed to submit data" };
  }
}
