import { google } from 'googleapis';
import path from 'path';

async function authenticate() {
    const auth = new google.auth.GoogleAuth({
        credentials: {
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
          redirect_uris: [process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI],
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
      });

      const authClient = await auth.getClient();
      return authClient
}

async function createGoogleSheet(data) {
  const authClient = await authenticate();
  const sheets = google.sheets({ version: 'v4', auth: authClient });
  const spreadsheet = await sheets.spreadsheets.create({
    resource: {
      properties: {
        title: 'Nuevo Documento',
      },
    },
  });

  const spreadsheetId = spreadsheet.data.spreadsheetId;

  const header = Object.keys(data[0]);
  const values = data.map(obj => Object.values(obj));

  const resource = {
    values: [header, ...values],
  };

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Sheet1!A1',
    valueInputOption: 'RAW',
    resource,
  });

  return spreadsheetId;
}

export async function POST(req, res) {
  if (req.method === 'POST') {
    const data = req.body; // Asegúrate de recibir el array de objetos desde la solicitud
    try {
        console.log(data)
      const spreadsheetId = await createGoogleSheet(data);
      res.status(200).json({ message: 'Documento creado exitosamente', spreadsheetId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el documento' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}