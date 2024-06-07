const emailMarketing = async (
  startDateSelected,
  endDateSelected,
  setDataRender
) => {
  const url = `http://localhost:3000/api/proxy/email-marketing?start_date=${startDateSelected}&end_date=${endDateSelected}`;
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
  return data.emails;
};

const automationFlow = async (
  startDateSelected,
  endDateSelected,
  setDataRender
) => {
  const url = `http://localhost:3000/api/proxy/automation-flow?start_date=${startDateSelected}&end_date=${endDateSelected}`;
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
  return data.workflow_email_statistics;
};

const conversionAsset = async (
  startDateSelected,
  endDateSelected,
  setDataRender
) => {
  const url = `http://localhost:3000/api/proxy/conversion-asset?start_date=${startDateSelected}&end_date=${endDateSelected}`;
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
  return data.conversions;
};

export { emailMarketing, automationFlow, conversionAsset };
