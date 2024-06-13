import fetch from 'node-fetch';
import { NextResponse } from 'next/server';
    // se hace llamada para generar nuevo token
const renewToken = async (start_date,end_date) => {
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
console.log(response.status, 'renew')
if(response.status !== 200) {
    const err = await response?.json();
    return NextResponse.json({ error: response.statusText }, { status: response.status });}
      //retorna token nuevo
const data = await response.json() 
      //se reintena la peticion con token nuevo
const request = await fetch(`https://api.rd.services/platform/analytics/emails?start_date=${start_date}&end_date=${end_date}`, {
    method: 'GET',
    headers: {
        'Authorization': data?.access_token,
        'Content-Type': 'application/json',
    },
});
const payload = await request.json()
return NextResponse.json(payload);
} catch (error) {
return NextResponse.json(error) 
}
}
export default renewToken