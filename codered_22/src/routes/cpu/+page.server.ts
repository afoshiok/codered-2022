import { redirect } from "@sveltejs/kit";
/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
     const formData = await request.formData()
     const emission_factor = formData.get('emission_factor')
     const num_cpu = parseFloat(formData.get('num_cpu'))
     const per_load = parseFloat(formData.get('per_load'))
     const time_active = parseFloat(formData.get('time_active'))

     const api_url = 'https://beta3.api.climatiq.io/compute/aws/cpu'

     let co2_total = 0

     const api_data = {
        "cpu_count": num_cpu,
        "region": emission_factor,
        "cpu_load": per_load,
        "duration": time_active,
     }

    fetch(api_url, {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify(api_data),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": 'Bearer 8SQ0F65FPC47PVNGRDFWV7X4X8Z6'
    }
    })

    .then(response => response.json())
    .then(json => {
        const res = json
        co2_total = res.co2e
        console.log(co2_total.toFixed(2))

        return co2_total

    })

    return {
        success: true
    }
    }
  };