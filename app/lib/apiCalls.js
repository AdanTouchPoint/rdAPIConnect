
const emailMarketing = async (startDateSelected,endDateSelected,setDataRender) => {

const url = `http://localhost:3000/api/proxy?start_date=${startDateSelected}&end_date=${endDateSelected}`;
const options = { 
    method: "GET", 
    redirect: "follow",
    headers: {
        accept: 'application/json',
    }
};
  const data = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.error("error:" + err));
return data 
};
export default emailMarketing