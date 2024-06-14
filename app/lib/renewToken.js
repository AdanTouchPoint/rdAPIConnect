import fetch from 'node-fetch';
import { NextResponse } from 'next/server';
    // se hace llamada para generar nuevo token
const renewToken = async () => {
try {
const url = 'https://api.rd.services/auth/token';
const options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  body: JSON.stringify({
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    refresh_token: process.env.NEXT_PUBLIC_REFRESH_TOKEN
  })
}
const response = await fetch(url, options)
      //retorna token nuevo
const data = await response.json() 
return data;
} catch (error) {
return NextResponse.json(error) 
}
}
export default renewToken