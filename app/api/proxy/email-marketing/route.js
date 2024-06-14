import renewToken from "@/app/lib/renewToken";
import { NextResponse } from "next/server";
import fetch from "node-fetch";
import {URLs} from  "@/app/lib/confs"

export async function GET(request) {
    const { searchParams } =  new URL(request.url);
    const start_date = await searchParams.get("start_date");
    const end_date = await  searchParams.get("end_date");
    const campaign_id = await searchParams.get("id");
    let url
    if (!campaign_id) {
    url = `${URLs.emailMarketingBaseUrl}start_date=${start_date}&end_date=${end_date}`
    }
    if (campaign_id) {
    url = `${URLs.emailMarketingBaseUrl}start_date=${start_date}&end_date=${end_date}&campaign_id=${campaign_id}`
    }
  try {
    const token =  await renewToken();
    const response = await fetch(
      url,
      {
        method: "GET",
        headers: {
          Authorization: token.access_token,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response?.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
