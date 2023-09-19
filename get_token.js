require("dotenv").config();
module.exports = async function get_access_token() {
  const response = await fetch(
    "https://atrofimova516.amocrm.ru/oauth2/access_token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.INTEGRATION_ID,
        client_secret: process.env.SECRET_KEY,
        grant_type: "authorization_code",
        code: process.env.AUTH_CODE,
        redirect_uri: "https://e72c-79-104-7-29.ngrok-free.app/",
      }),
    }
  );
  return response.json();
};
