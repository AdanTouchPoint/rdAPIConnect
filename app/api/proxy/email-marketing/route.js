import renewToken from '@/app/lib/renewToken';
import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const start_date = searchParams.get('start_date');
  const end_date = searchParams.get('end_date');  
try {
  const response = await fetch(`https://api.rd.services/platform/analytics/emails?start_date=${start_date}&end_date=${end_date}`, {
    method: 'GET',
    headers: {
      'Authorization': process.env.NEXT_PUBLIC_RD_TOKEN,
      'Content-Type': 'application/json',
    },
  });
  console.log(response.status )

  if (response.status === 401) {
    // se hace llamada para generar nuevo token
   return renewToken(start_date,end_date)
    //retorna token nuevo 
    //se reintena la peticion con token nuevo
  }
  const data = await response?.json();
  return NextResponse.json(data);
} catch (error) {
  return NextResponse.json(error);
}
}