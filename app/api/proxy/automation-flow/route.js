import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const start_date = searchParams.get('start_date');
  const end_date = searchParams.get('end_date');  
try {
  const response = await fetch(`https://api.rd.services/platform/analytics/workflow_emails?start_date=${start_date}&end_date=${end_date}`, {
    method: 'GET',
    headers: {
      'Authorization': process.env.NEXT_PUBLIC_RD_TOKEN,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  const data = await response.json();
  return NextResponse.json(data);
} catch (error) {
  response.status(500).send(error.message);
}
}