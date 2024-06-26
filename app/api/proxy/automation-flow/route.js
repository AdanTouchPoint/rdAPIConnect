import { NextResponse } from 'next/server';
import fetch from 'node-fetch';
import renewToken from "@/app/lib/renewToken";
import {URLs} from  "@/app/lib/confs"

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const start_date = searchParams.get('start_date');
  const end_date = searchParams.get('end_date');
  const url = `${URLs.workFlowBaseUrl}start_date=${start_date}&end_date=${end_date}` 
try {
  const token =  await renewToken();
  const response = await fetch(
    url, 
    {
    method: 'GET',
    headers: {
      'Authorization': token.access_token,
      'Content-Type': 'application/json',
    },
  });
  const data = await response?.json();
  return NextResponse.json(data);
} catch (error) {
  return NextResponse.json(error);
}
}