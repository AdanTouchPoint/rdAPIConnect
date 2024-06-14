const emailMarketing = async (
  startDateSelected,
  endDateSelected,
  id
) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/"
  const url = `${baseUrl}api/proxy/email-marketing?start_date=${startDateSelected}&end_date=${endDateSelected}`;
  const options = {
    method: "GET",
    redirect: "follow",
    headers: {
      accept: "application/json",
    },
  };
  const data = await fetch(url, options)
  .then((res) => res.json())
  .catch((err) => console.error("error:" + err));
  return data?.emails;
};

const automationFlow = async (
  startDateSelected,
  endDateSelected,
  id
) => {
  const url = `${baseUrl}api/proxy/automation-flow?start_date=${startDateSelected}&end_date=${endDateSelected}`;
  const options = {
    method: "GET",
    redirect: "follow",
    headers: {
      accept: "application/json",
    },
  };
  const data = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.error("error:" + err));
  return data?.workflow_email_statistics;
};

const conversionAsset = async (
  startDateSelected,
  endDateSelected,
  id
) => {
  const url = `${baseUrl}api/proxy/conversion-asset?start_date=${startDateSelected}&end_date=${endDateSelected}`;
  const options = {
    method: "GET",
    redirect: "follow",
    headers: {
      accept: "application/json",
    },
  };
  const data = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.error("error:" + err));
  return data?.conversions;
};

export { emailMarketing, automationFlow, conversionAsset };
